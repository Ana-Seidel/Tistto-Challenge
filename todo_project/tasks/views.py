from rest_framework.views import APIView


class UserRegister(APIView):
    def post(self, request):
        email = request['email']
        name = request['name']
        last_name = request['lastName']
        password = request['password']

