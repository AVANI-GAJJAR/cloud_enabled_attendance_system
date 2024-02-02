# Generated by Django 5.0.1 on 2024-01-31 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_user_otp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='isAuthorized',
            field=models.CharField(default=False, max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='otp',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]