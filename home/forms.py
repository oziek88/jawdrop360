from django import forms

TOPICS = (  
    ('SCHEDULE', "I'd like to schedule." ),
    ('QUESTION', "I have a question."),
    ('HELLO', "Just saying hello."),
)

class contactForm(forms.Form):
	name = forms.CharField(required=True, max_length=100, widget=forms.TextInput(attrs={'class' : 'form-control input-sm'}))
	email = forms.EmailField(required=True, widget=forms.TextInput(attrs={'class' : 'form-control input-sm'}))
	topic = forms.ChoiceField(choices=TOPICS, required=True, widget=forms.Select(attrs={'class' : 'form-control input-sm'}))
	comment = forms.CharField(required=True, widget=forms.Textarea(attrs={'class' : 'form-control input-sm'}))
