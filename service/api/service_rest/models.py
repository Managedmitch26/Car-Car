from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.PositiveIntegerField(primary_key=True)

class Appointment(models.Model):
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    reason = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )

    status = models.CharField(
        max_length=20,
        choices=[
            ("created", "created"),
            ("canceled", "canceled"),
            ("finished", "finished"),
        ],
        default = "created"
    )

    def canceled(self):
        self.status = "canceled"
        self.save()

    def finished(self):
        self.status = "finished"
        self.save()

    def __str__(self):
        return self.name
