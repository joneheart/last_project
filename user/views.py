from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'main/index.html')


def search(request):
    if request.method == 'GET':
        search_all = request.search.all()

        print(search_all)
