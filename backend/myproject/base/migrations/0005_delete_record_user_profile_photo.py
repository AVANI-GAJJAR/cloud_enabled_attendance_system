# Generated by Django 5.0.1 on 2024-01-27 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_user_name'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Record',
        ),
        migrations.AddField(
            model_name='user',
            name='profile_photo',
            field=models.ImageField(blank=True, null=True, upload_to='profile_photos/'),
        ),
    ]