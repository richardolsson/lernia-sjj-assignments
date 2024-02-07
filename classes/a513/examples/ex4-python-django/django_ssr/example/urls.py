from django.urls import path

from example import views

urlpatterns = [
    path('', views.home),
    path('about', views.about),
    path('contact', views.contact),
]