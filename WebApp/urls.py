from django.conf.urls import url
from django.urls import path
from django.urls.conf import re_path
from .views import *

urlpatterns = [
    path('', iniciar_sesion, name="iniciar_sesion"),
    path('home/',home,name='home'),
    path('MAT021/', matematica, name="MAT021"),
    path('crearPregunta/', crearPregunta, name="crearPregunta"),
    path('logout/', logout_view, name="logout"),
    path('registrarse/', registrarse, name="registrarse"),
    path('foro/', foro, name="foro1"),
    path('mi_perfil/', mi_perfil, name="mi_perfil"),
    path('historial/',registro_certamenes, name="historial"),
    path('certamen/', certamen, name="certamen"),
    path('post_id/<pk>/', Comentarios_pk, name='foro2'),
    path('comentario_id/<pk>/', comentario_id, name='foro3'),
    path('eliminar/<id>/', eliminarComentario, name='eliminar'),
    path('guardarPregunta/', guardarPregunta),
    path('certame/',certamen, name="certamen"),
    path('resultados/',resultado, name="resultados"),
    path('banco-preguntas/',banco_preguntas, name="banco-preguntas"),
    path('proximamente/',proximamente, name="proximamente"),
    path('contenidoMAT021/',contenidoMAT021, name="contenidoMAT021"),
    
]
