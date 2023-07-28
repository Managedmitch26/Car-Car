# CarCar

Team:

* Mitchell Wong - Service
* Joey Li - Sales

## Design

CarCar is made up of 3 different microservices interacracting with one another through react and polling.

- Inventory
- Service
- Sales

![Img](Path to the image)

## Intergration

Our sales and service domains pull information from the inventory domain through a poller and displays everything on the front end through react. This is done through the inventory domain. Here is a record of all of the cars, salespeople, customers, and sales. The Sales domain polls the inventory domain for information about customers,

# Service Microservice

Here in the Service microservice, we are going to take the in date from Inventory, such as the vehicles, and keep track of them through the VIN's. Through the VIN, were able to see if the customer is bringing in a vehicle that was sold through us. This allows us to flag them as a VIP.

Customers who are flagged as VIP will be given special treatment when scheduling an appointment. Being identified as a VIP comes with special perks like pizza and beverages while waiting for your vehicle.

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
|Delete service appointment | DELETE | http://localhost:8080/api/appointments/<int:id>
|Cancel an appointment| PUT | http://localhost:8080/api/appointments/<int:id>/cancel/
|Finish an appointment| PUT | http://localhost:8080/api/appointments/<int:id>/finish/

List service appointment: This returns a list of all created appointments. From this list you can either select the options to cancel or finish the appointment.
