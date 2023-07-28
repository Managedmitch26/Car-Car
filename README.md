# CarCar

Team:

* Joey Li - Sales
* Mitchell Wong - Service


## How to Run this App

1. Fork this repository

2. Copy the HTTPS Clone link

3. Go to your terminal, go to the folder you want the repository in and clone it into your computer:
    - type this to clone it:
    ```
    git clone https://gitlab.com/li.joey.h/project-beta.git
    ```

4. Go into the newly cloned repository:
```
cd project-beta
```
5. Make sure Docker is up and running on your computer. If not open Docker

5. Build and run the project using Docker
    -type this into terminal one line at a time, make sure to wait till each command is finished running before inputing the next one
    ```
    docker volume create beta-data
    docker-compose build
    docker-compose up
    ```
6. Check Docker if all the containers are running
## Diagram

![Excalidraw Diagram](Screen%20Shot%202023-07-27%20at%2010.58.40%20PM.png)

 ## Value Objects
CarCar is made up of 3 different microservices interacracting with one another through react and polling.

- Inventory
- Service
- Sales

## Intergration

Our sales and service microservice pulls information from the inventory domain through a poller and displays everything on the front end through react. This is done through the inventory domain. Here is a record of all of the cars, salespeople, customers, and sales. The Sales and Service mciroservice polls the inventory domain for information about the automobiles. They get utilized in different ways such as monitoring the "sold" status and the VIN for sales, or just the VIN for Services. All of the information pulled and generated in the backend is then outputted to the website through React. From there, you get a visual list of everything in the databases along with forms to create more data to be used.

## Sales Microservice
The Sales microservices contains 4 models: AutomobileVO, Salesperson, Customer, Sale. The view functions have the ability to handle GET, POST and DELETE request for the Salesperson, Customer and Sales model.

The AutomobileVO model contains data on the vin and sold status of an automobile. It is a value object that references the data in the Automobile model inside inventory by using a poller. The poller polls for updated data every 1 second.

The Salesperson model conatins data on the salesperson's first name, last name and employee id number

The Customer model conatins data on the customer's first name, last name, address and phone number.

The Sale model contains data on which automobile was sold, which salesperson sold it, which customer bought it and the price the automobile was sold for. salesperson is a foreign key that links to the Salesperson Model, customer is a foreign key that links to the Customer model and automobile is a foreign key that links to the AutomobileVO model.

## Using Insomnoa to send and view data in the Sales microservice

### Salesperson

-NOTE:  The "id" used in the DELETE link is the employee_id.
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List salespeople | GET | http://localhost:8090/api/salespeople/ |
| Create a salesperson | POST | http://localhost:8090/api/salespeople/ |
| Delete a specific salesperson | DELETE | http://localhost:8090/api/salespeople/id/ |

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
| List customers | GET | http://localhost:8090/api/customers/ |
| Create a customer | POST | http://localhost:8090/api/customers/ |
| Delete a specific customer | DELETE | http://localhost:8090/api/customers/id/ |

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
-NOTE:id will return null because its not in the table anymore
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
| List sales | GET | http://localhost:8090/api/sales/ |
| Create a sale  | POST | http://localhost:8090/api/sales/ |
| Delete a sale | DELETE | http://localhost:8090/api/sales/id/ |

-Create a sale (SEND THIS JSON BODY):
-NOTE:
    -the automobile key should be an a vin number that exists in inventory
    -the salesperson key should be a employee id of an existing employee
    -the customer key should be an id number of an existing customer
    -price should have no commas (can input decimals up to second decimal place)
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

# Service Microservice

The Service Microservice contains the Appointments, Technician and AutomobileVO models. A foreign key was used within the Appointments model to access the information from the Technician Model. It also contains a poller to obtain information from the Automobile Model from the Inventory API, allowing me to not only access the information, but to utilize it into my microservice.

The Technician and Appointments models have HTTP request methods built into the views to list, add, or delete the data from the data base. The Appointment Model has a couple extra features that allow it to access a list of the "created" service appointments and select the option to label them as "canceled" or "finished. It then takes the "canceled" or "finished" appointment and puts it into a new list labeled "Appointment History". From here, you can see a list of all appointments that have been "created", "canceled", or "finished". This was all done by creating view functions to handle the requests and url paths to create the path to handle the view functions.

## Using Insomnoa to send and view data in the Service microservice

## Technicians

| Action | Method | URL
| ----------- | ----------- | ----------- |
| List technicians| GET |http://localhost:8080/api/technicians/
| Create a technician| POST |http://localhost:8080/api/technicians/create/
| Delete a technician| DELETE |http://localhost:8080/api/technicians/<int:employee_id>/

List Technicians: This is the endpoint that will bring up a list of all technicians in the inventory database. It can be accessed by the link listed above and as this is a GET function, you do not need to input Json to access the list.

Create a technician: This will allow you to create a new technician and place it into your technicians list. Since this is a POST request, you need Json to input for insomnia. The Json code you will need to input is as follows:

{
	"first_name": "Mitchell",
	"last_name": "Wong",
	"employee_id": 3
}

You input their first and last name and assign them an id and hit submit. After that, your new technician is now created and located inside your database.

Delete a technician: If you made a mistake when creating or a technician leaves the establishment, it is important to have a function to delete them from your database. The Delete endpoint can be accessed at the link listed above. While it is very similar to the listing endpoint, the difference is specifying the employee id at the end to target the specific technician you wish to delete.


# Service Appointments

| Action | Method | URL
| ----------- | ----------- | ----------- |
|List service appointments| GET | http://localhost:8080/api/appointments/
|Service appointment history| GET| http://localhost:8080/api/appointments/history
|Create service appointment | POST | http://localhost:8080/api/appointments/create/
|Delete service appointment | DELETE | http://localhost:8080/api/appointments/history/<int:id>/
|Cancel an appointment| PUT | http://localhost:8080/api/appointments/<int:id>/cancel/
|Finish an appointment| PUT | http://localhost:8080/api/appointments/<int:id>/finish/

List service appointment: This returns a list of all created appointments. From this list you can either select the options to cancel or finish the appointment.

List service history: Once you select either finish or cancel, the appointment will be fufilled and disappear from the list. The service history list is where you can list out all of the appointments that have been created, canceled, or finished. It even comes with a search bar that allows you to search for appointments by VIN.

Create a service appointment: Creating appointments is integral to CarCar. We want our customers, both new and returning, to be able to come to us for whatever issue their car might be causing. From the create page, we can input some general information about the vehicle as well as a date and time and schedule an appointment for them. To do so, you need to input the following Json:
{
	"date_name": "2023-08-09 9:00",
	"reason": "Engine",
	"vin": "1HGCP2F61CA266756",
	"customer": "Luke",
	"technician": 1
}

It is important to make sure you input the correct VIN so we can properly identify whether or not the customer should be treated as VIP or not. Not that all customers aren't treated with the best service possible...just some better than others.

Delete an appointment: It's always good practice to have a function that allows you to delete an appointment from the database. This allows you to do just that by the url listed above.

Cancel/finish an appointment: Once an appointment has been created, its important to resolve it as soon as you can. Even when the customer decides to cancel. This can be done by identifying the appointment ID and inputing either "cancel" or "finish" after the url path to put a status on the appointment and get it out of the list.
