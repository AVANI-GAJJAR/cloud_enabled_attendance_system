# Generated by Django 5.0.2 on 2024-02-21 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0034_leave_companycode'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='forgot_otp',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
