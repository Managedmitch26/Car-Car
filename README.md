# CarCar

Team:

* Joey Li - Sales
* Person 2 - Which microservice?

## How to Run this App
 - Put instructions to build and run this app here

1. Fork this repository

2. Copy the HTTPS Clone link

3. Go to your terminal, go to the folder you want the repository in and clone it into your computer:
    - type this to clone it:
    ```
    git clone https://gitlab.com/li.joey.h/project-beta.git
    ```

4. Go into the newly cloned repository:
    -type this into terminal
    ```
    cd project-beta
    ```
5. Make sure Docker is up and running on your computer. If not open Docker

5. Build and run the project using Docker
    -type this into terminal one line at a time, make sure to wait till each command is finished before inputing the next one
    ```
    docker volume create beta-data
    docker-compose build
    docker-compose up
    ```
6. Check Docker if all the containers are running
## Diagram

![ExcaliDraw Diagam](Screen%20Shot%202023-07-27%20at%206.18.18%20PM.png)

## Sales Microservice
The Sales microservices contains 4 models: AutomobileVO, Salesperson, Customer, Sale. The views function has the ability to handle GET, POST and DELETE request for the Salesperson, Customer and Sales model.

The AutomobileVO model contains data on the vin and sold status of an automobile. It is a value object that references the data in the Automobile model inside inventory by using a poller. The poller polls for updated data every 1 second.

The Salesperson model conatins data on the salesperson's first name, last name and employee id number

The Customer model conatins data on the customer's first name, last name, adress and phone number.

The Sale model contains data on which automobile was sold, which salesperson sold it, which customer bought it and the price the automobile was sold for. salesperson is a foreign key that links to the Salesperson Model. customer is a foreign key that links to the Customer model and automobile is a foreign key that links to the AutomobileVO model.

## Using Insomnoa to send and view data in the Sales microservice

### Salesperson

-NOTE:  The "id" used in the DELETE link is the employee_id.
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List salespeople | GET | http://localhost:8090/api/salespeople/
| Create a salesperson | POST | http://localhost:8090/api/salespeople/
| Delete a specific salesperson | DELETE | http://localhost:8090/api/salespeople/id/

JSON body to send data
-NOTE: the employee_id needs to unique
-Create a Salesperson (SEND THIS JSON BODY):
```
{
	"first_name":"Jenna",
	"last_name":"Ortega",
	"employee_id":"jortega"
}
```
This will return the value of creating that Salesperson:
```
{
	"salesperson": {
		"first_name": "Jenna",
		"last_name": "Ortega",
		"employee_id": "jortega"
	}
}
```

-Getting a list of salespeople return value:
```
{
	"salesperson": [
		{
			"first_name": "Jenna",
			"last_name": "Ortega",
			"employee_id": "jortega"
		}
	]
}
```

-Delete a salesperson will return value that was deleted:
```
{
	"first_name": "Jenna",
	"last_name": "Ortega",
	"employee_id": "jortega"
}
```

### Customer

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List customers | GET | http://localhost:8090/api/customers/
| Create a customer | POST | http://localhost:8090/api/customers/
| Delete a specific customer | DELETE | http://localhost:8090/api/customers/id/

-Create a customer (SEND THIS JSON BODY):
NOTE:  phone number should be in this format xxx-xxx-xxxx
```
{
	"first_name":"Alex",
	"last_name":"B. Jordan",
	"address":"423 Something st",
	"phone_number":"154-232-8654"
}
```
This will return the value of creating that customer:
```
{
	"id": 5,
	"first_name": "Alex",
	"last_name": "B. Jordan",
	"address": "423 Something st",
	"phone_number": "154-232-8654"
}
```

-Getting a list of customer return value:
```
{
	"customer": [
		{
			"id": 5,
			"first_name": "Alex",
			"last_name": "B. Jordan",
			"address": "423 Something st",
			"phone_number": "154-232-8654"
		}
	]
}
```

-Delete a customer will return value that was deleted:
-NOTE:id will return null because it not in the table anymore
```
{
	"id": null,
	"first_name": "Alex",
	"last_name": "B. Jordan",
	"address": "423 Something st",
	"phone_number": "154-232-8654"
}
```

### Sales

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List sales | GET | http://localhost:8090/api/sales/
| Create a sale  | POST | http://localhost:8090/api/sales/
| Delete a sale | DELETE | http://localhost:8090/api/sales/id/

-Create a sale (SEND THIS JSON BODY):
-NOTE:
    -the automobile key should be an a vin number that exists in inventory
    -the salesperson key should be a employee id of an existing employee
    -the customer key should be an id number of an existing customer
    -price should have no commaa (can handle two digit decimals)
```
{
	"automobile":"4F4ZR17V7XTM07477",
	"salesperson":"jortega",
	"customer":"1",
	"price":"1000000"
}
```
This will return the value of creating that sale:
```
{
	"id": 65,
	"automobile": {
		"vin": "4F4ZR17V7XTM07477",
		"sold": true
	},
	"salesperson": {
		"first_name": "Jenna",
		"last_name": "Ortega",
		"employee_id": "jortega"
	},
	"customer": {
		"id": 6,
		"first_name": "Alex",
		"last_name": "B. Jordan",
		"address": "423 Something st",
		"phone_number": "154-232-8654"
	},
	"price": "1000000"
}
```

-Getting a list of sales return value:
```
{
	"sales": [
		{
			"id": 65,
			"automobile": {
				"vin": "4F4ZR17V7XTM07477",
				"sold": true
			},
			"salesperson": {
				"first_name": "Jenna",
				"last_name": "Ortega",
				"employee_id": "jortega"
			},
			"customer": {
				"id": 6,
				"first_name": "Alex",
				"last_name": "B. Jordan",
				"address": "423 Something st",
				"phone_number": "154-232-8654"
			},
			"price": 1000000.0
		}
	]
}
```

-Delete a sale will return value that was deleted:
```
{
	"automobile": {
		"vin": "4F4ZR17V7XTM07477",
		"sold": true
	},
	"salesperson": {
		"first_name": "Jenna",
		"last_name": "Ortega",
		"employee_id": "jortega"
	},
	"customer": {
		"id": 6,
		"first_name": "Alex",
		"last_name": "B. Jordan",
		"address": "423 Something st",
		"phone_number": "154-232-8654"
	},
	"price": 1000000.0
}
```


### URLs and Ports
 - Put URLs and ports for services here

### Inventory API (Optional)
 - Put Inventory API documentation here. This is optional if you have time, otherwise prioritize the other services.

### Service API
 - Put Service API documentation here

### Sales API
 - Put Sales API documentation here

## Value Objects
 - Identification of value objects for each service goes here
