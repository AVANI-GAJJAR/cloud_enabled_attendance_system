# Generated by Django 5.0.1 on 2024-02-06 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0016_attendance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='date',
            field=models.TimeField(auto_now_add=True),
        ),
    ]
