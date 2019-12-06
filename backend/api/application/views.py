from rest_framework.response import Response
from rest_framework.views import APIView
from .myCreator import create
import os
from django.http import HttpResponse, Http404


class ApplicationView(APIView):
    def get(self, request):
        params = dict(request.query_params)
        userId = request.user
        if type(userId) != 'str':
            userId = "AnonymousUser"

        create(userId,
               params['fullName'][0],
               params['group'][0],
               params['compensationName'][0],
               True if params['dormitoryBox'][0] == "true" else False,
               True if params['scholarBox'][0] == "true" else False,
               True if params['workBox'][0] == "true" else False,
               True if params['docsBox'][0] == "true" else False)

        module_dir = os.path.dirname(__file__)  # get current directory
        returnFileName = "your_application_" + userId + ".pdf"
        file_path = os.path.join(module_dir, returnFileName)

        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/pdf")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            os.remove(file_path)
            return response
