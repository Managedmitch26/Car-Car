from django.shortcuts import render
from django.http import JsonResponse
from common.json import ModelEncoder
import json
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Salesperson, Sale, Customer
# Create your views here.

class AutomobileVOdetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties =["vin","sold"]
class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id"
        ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number"
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price"
    ]
    encoders = {
        "automobile":AutomobileVOdetailEncoder(),
        "salesperson":SalespersonListEncoder(),
        "customer":CustomerListEncoder()
    }
class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price"
    ]
    encoders = {
        "automobile":AutomobileVOdetailEncoder(),
        "salesperson":SalespersonListEncoder(),
        "customer":CustomerListEncoder()
    }

@require_http_methods(["GET","POST","DELETE"])
def api_list_salespersons(request,id = None):
    if request.method =="GET":
        if id is not None:
            salesperson =Salesperson.objects.filter(employee_id=id)
        else:
            salesperson =Salesperson.objects.all()
            print(salesperson)
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonListEncoder
        )
    elif request.method =="DELETE":
        try:
            salesperson = Salesperson.objects.get(employee_id=id)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespersonListEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message":"Doesn't exist"})
            response.status_code = 404
            return response

    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonListEncoder,
        )

@require_http_methods(["GET","POST","DELETE"])
def api_list_customers(request,id = None):
    if request.method =="GET":
        if id is not None:
            customer =Customer.objects.filter(id=id)
        else:
            customer =Customer.objects.all()
        return JsonResponse(
            {"customer":customer},
            encoder=CustomerListEncoder
        )
    elif request.method =="DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerListEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message":"Doesn't exist"})
            response.status_code = 404
            return response

    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe = False,
        )


@require_http_methods(["GET","POST","DELETE"])
def api_list_sales(request,id = None):
    if request.method =="GET":
        if id is not None:
            sales =Sale.objects.filter(id=id)
        else:
            sales =Sale.objects.all()
        return JsonResponse(
            {"sales":sales},
            encoder=SaleListEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            vin = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"]=vin
        except AutomobileVO.DoesNotExist:
             return JsonResponse(
                 {"message":"Invalid vin id"},
                 status = 400
           )
        try:
            salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
            content["salesperson"]=salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message":"Invalid emplotee id"},
                status = 400
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"]=customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message":"Invalid customer id"},
                status = 400
            )
        # try:
        #     vin = AutomobileVO.objects.get(vin=content["automobile"])
        #     content["vin"]=vin
        # except AutomobileVO.DoesNotExist:
        #     return JsonResponse(
        #         {"message":"Invalid vin id"},
        #         status = 400
        #     )
        # try:
        #     salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
        #     content["salesperson"]=salesperson
        # except Salesperson.DoesNotExist:
        #     return JsonResponse(
        #         {"message":"Invalid emplotee id"},
        #         status = 400
        #     )
        # try:
        #     customer = Customer.objects.get(id=content["customer"])
        #     content["customer"]=customer
        # except Customer.DoesNotExist:
        #     return JsonResponse(
        #         {"message":"Invalid customer id"},
        #         status = 400
        #     )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe = False,
        )
