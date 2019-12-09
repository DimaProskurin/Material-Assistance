# Generated by Django 2.2.7 on 2019-12-09 20:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0012_whitelistemail'),
    ]

    operations = [
        migrations.CreateModel(
            name='ValidatedStudent',
            fields=[
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
                ('surname', models.CharField(max_length=64)),
                ('middlename', models.CharField(max_length=64)),
                ('group', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('payment_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('money', models.IntegerField()),
                ('date', models.DateField()),
                ('compensation_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='info.Compensation')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='info.ValidatedStudent')),
            ],
        ),
    ]
