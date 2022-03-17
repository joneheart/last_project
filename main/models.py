from django.db import models


# Create your models here.
class SearchData(models.Model):
    class Meta:
        db_table = 'search'

    search_title = models.CharField(max_length=100, null=True)
    search_url = models.CharField(max_length=100, null=True)
