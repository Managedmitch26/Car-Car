# Generated by Django 4.0.3 on 2023-07-25 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='price',
            field=models.FloatField(),
        ),
    ]
