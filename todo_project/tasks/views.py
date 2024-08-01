from rest_framework.views import APIView


class UserRegister(APIView):
    def post(self, request):
        email = request.data['email']
        name = request.data['nome']
        last_name = request.data['sobrenome']
        password = request['password']

