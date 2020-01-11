from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)
    url = models.CharField(max_length=64, default='')
    description = models.TextField(max_length=1024)
    image = models.FileField(upload_to='categories_img/')

    def __str__(self):
        return self.name


class Compensation(models.Model):
    name = models.CharField(max_length=64)
    url = models.CharField(max_length=64, default='')
    money = models.TextField(max_length=1024)
    requirements = models.TextField(max_length=2048, blank=True)
    additional_info = models.TextField(max_length=2048, blank=True)
    once_a_term = models.BooleanField(default=False)
    category = models.ForeignKey('Category', related_name='compensations', on_delete=models.CASCADE)
    category_url = models.CharField(max_length=64, default='')

    def __str__(self):
        return self.name


class ValidatedStudent(models.Model):
    email = models.EmailField(primary_key=True)
    name = models.CharField(max_length=64)
    surname = models.CharField(max_length=64)
    middlename = models.CharField(max_length=64)
    group = models.CharField(max_length=10)

    def __str__(self):
        return self.email


class Payment(models.Model):
    student = models.ForeignKey('ValidatedStudent', related_name='compensation', on_delete=models.CASCADE)
    money = models.IntegerField()
    compensation_id = models.ForeignKey('Compensation', related_name='compensations', on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self):
        return str(self.student)
