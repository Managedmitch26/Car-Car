from django.db import models

class Status(models.Model):
    id = models.PositiveSmallIntegerField(primary_key=True)
    name = models.CharField(max_length=200)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)

class Appointment(models.Model):
    date_name = models.DateTimeField()
    reason = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )

    status = models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def canceled(self):
        status = Status.objects.get(name="canceled")
        self.status = status
        self.save()

    def finished(self):
        status = Status.objects.get(name="finished")
        self.status = status
        self.save()
