from django.urls import path
from .views import api_list_customers,api_list_sales,api_list_salespersons

urlpatterns = [
     path("salespeople/", api_list_salespersons, name="api_list_salespersons"),
     path("salespeople/<str:id>/", api_list_salespersons, name="api_list_salespersons"),
     path("customers/", api_list_customers, name= "api_list_customers"),
     path("customers/<int:id>/", api_list_customers, name= "api_list_customers"),
     path("sales/", api_list_sales, name="api_list_sales"),
     path("sales/<int:id>/", api_list_sales, name="api_list_sales")]
