# Generated by Django 5.0.1 on 2024-02-15 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0030_delete_leave'),
    ]

    operations = [
        migrations.CreateModel(
            name='Leave',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=50)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('leave_type', models.CharField(max_length=100)),
                ('reason', models.CharField(max_length=100)),
                ('status', models.CharField(default='Pending', max_length=100)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]