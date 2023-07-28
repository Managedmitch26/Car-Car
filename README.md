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

Customers who are flagged as VIP will be given special treatment when scheduling an appointment.
