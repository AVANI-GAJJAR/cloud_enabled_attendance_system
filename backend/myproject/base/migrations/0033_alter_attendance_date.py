# Generated by Django 5.0.1 on 2024-02-15 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0032_attendance_onleave'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='date',
            field=models.DateField(),
        ),
    ]
