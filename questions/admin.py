from django.contrib import admin

from questions.models import Answer, Question

admin.site.register(Question)
admin.site.register(Answer)