# Generated by Django 5.0.1 on 2024-01-29 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_user_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profilePhoto',
            field=models.ImageField(blank=True, null=True, upload_to='user_images/'),
        ),
    ]