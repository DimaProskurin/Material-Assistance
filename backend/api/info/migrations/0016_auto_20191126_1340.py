# Generated by Django 2.2.7 on 2019-11-26 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0015_auto_20191126_1310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='url',
            field=models.CharField(default=' ', max_length=64),
        ),
    ]
