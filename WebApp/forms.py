from django import forms
from django.forms.widgets import Select
from .models import PostForo
from django.forms import Textarea

class FormComentarios(forms.Form):
    content_type = forms.CharField(widget=forms.HiddenInput)
    object_id = forms.IntegerField(widget=forms.HiddenInput)
    texto = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control'}),label = "")

class FormForo(forms.ModelForm):
    
    class Meta:
        model = PostForo
        fields = ('sigla', 'texto',)
        widgets = {
            'texto': Textarea(attrs={'class':'form-control'}),
            'sigla': Select(attrs={'class':'form-select'}),
        }
  