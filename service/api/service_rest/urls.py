from django.urls import path
from .views import (
    api_canceled_appointment,
    api_finished_appointment,
    api_list_appointments,
    api_list_technicians,
    api_appointment_history,
    api_delete_technician,
    api_delete_appointment,
    )

urlpatterns = [
    path("technicians/", api_list_technicians, name="list_technicians"),
    path("technicians/create/", api_list_technicians, name="create_technician"),
    path("appointments/history/", api_appointment_history, name="api_appointment_history"),
    path("appointments/", api_list_appointments, name="list_appointments"),
    path("appointments/create/", api_list_appointments, name="create_appointments"),
    path("appointments/<int:id>", api_delete_appointment, name="delete_appointment"),
    path("appointments/<int:id>/cancel/", api_canceled_appointment, name="api_canceled_appointment"),
    path("appointments/<int:id>/finish/", api_finished_appointment, name="api_finished_appointment"),
    path("technicians/<int:employee_id>/", api_delete_technician, name="api_delete_technician"),
]
