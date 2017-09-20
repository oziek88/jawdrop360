from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

from .forms import contactForm


def home(request):
    title = 'Contact'
    form = contactForm(request.POST or None)
    confirm_message = None

    if form.is_valid():
    	name = form.cleaned_data['name']
    	comment = form.cleaned_data['comment']
    	topic = form.cleaned_data['topic']
    	emailFrom = form.cleaned_data['email']
    	subject = 'JAWDROP360 BOX MESSAGE'
    	message = 'From: %s \n %s \n Hey my name is %s,  %s' %(emailFrom, topic, name, comment)
    	emailTo = [settings.EMAIL_HOST_USER]
    	send_mail(subject, message, emailFrom, emailTo, fail_silently=False)
    	title = "Thanks!"
    	confirm_message = "Thanks for the message. I'll be sure to get right back to you."
    	form = None

    context = {'title': title, 'form': form, 'confirm_message': confirm_message, }
    template = 'home.html'
    return render(request,template,context)
