# Generated by Django 3.2.8 on 2021-12-15 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WebApp', '0028_historialcertamen_hora_termino'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='elo',
            field=models.CharField(default='', max_length=30),
        ),
    ]