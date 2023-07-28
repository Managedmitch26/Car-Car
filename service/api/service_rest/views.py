from django.shortcuts import render
from common.json import ModelEncoder
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Appointment, Technician

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "id",
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date",
        # "time",
        "reason",
        "vin",
        "customer",
        "technician",
        "status",
        "id"
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_appointments(request, employee_id=None):
    if request.method == "GET":
        appointments = Appointment.objects.filter(status="created")
        # time = Appointment.objects.get(time)
        # json_time = json.dumps(time, default=str)
        return JsonResponse(
            {"appointments": appointments},
            # {"time": json_time},
            encoder=AppointmentDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Employee ID"},
                status = 400
            )

        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentDetailEncoder,
            safe=False
        )
@require_http_methods(["GET"])
def api_appointment_history(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentDetailEncoder,
        )


@require_http_methods(["PUT"])
def api_finished_appointment(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.finished()
    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False,
    )

@require_http_methods(["PUT"])
def api_canceled_appointment(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.canceled()
    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False,
    )

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create technician"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE"])
def api_delete_technician(request, employee_id):
    if request.method == "DELETE":
        count, _ = Technician.objects.filter(employee_id=employee_id).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )

@require_http_methods(["DELETE"])
def api_delete_appointment(request, id):
    if request.method == "DELETE":
        count, _= Appointment.objects.filter(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
