FROM python:3.11
WORKDIR /var/app
RUN pip3 install django
COPY . .

CMD ["python", "django_ssr/manage.py", "runserver", "0.0.0.0:8000"]
