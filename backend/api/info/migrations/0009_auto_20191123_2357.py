# Generated by Django 2.2.7 on 2019-11-23 23:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0008_auto_20191123_2321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compensation',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='compensation', to='info.Category'),
        ),
    ]
