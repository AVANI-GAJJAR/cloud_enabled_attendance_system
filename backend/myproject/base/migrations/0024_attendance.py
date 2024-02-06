# Generated by Django 5.0.1 on 2024-02-06 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0023_delete_attendance'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=50)),
                ('user', models.CharField(max_length=50)),
                ('date', models.DateField(auto_now_add=True)),
                ('time', models.TimeField(auto_now_add=True)),
                ('attendance', models.BooleanField(default=False)),
            ],
        ),
    ]
