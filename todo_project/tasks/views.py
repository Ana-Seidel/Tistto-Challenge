from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from tasks.models import Users


class UserRegister(APIView):
    def post(self, request):
        email = request.data['email']
        nome = request.data['nome']
        sobrenome = request.data['sobrenome']
        password = request.data['password']

        if Users.objects.filter(email=email).exists():
            return Response({
                'error': 'E-mail já está em uso'}, 
                status=status.HTTP_400_BAD_REQUEST,
                )
        
        # Criar e salvar o novo usuário
        user = Users(
            email=email,  # Usando o e-mail como nome de usuário
            nome=nome,
            sobrenome=sobrenome,
            password=password,
        )
        user.save()
        
        return Response({
            'message': 'Usuário registrado com sucesso'}, 
            status=status.HTTP_201_CREATED,
            )
    
class UserAuth(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        if Users.objects.filter(email=email).exists() and Users.objects.filter(password=password).exists():
            return Response({
                'message': 'login realizado com sucesso'},
                status=status.HTTP_201_CREATED,
                )
        else:
            return Response({
                'error': 'login ou senha incorreto'},
                status=status.HTTP_400_BAD_REQUEST,
                )

