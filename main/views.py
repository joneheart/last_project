from django.shortcuts import render, redirect

# Create your views here.
from main.models import SearchData


def home(request):
    return render(request, 'main/index.html')


def search(request):
    if request.method == 'POST':
        search_all = SearchData.objects.all()
        title = request.POST.get('search', '')
        search_title = ""
        search_url = ""

    for i in range(len(search_all)):
        if search_all[i].search_title == title:
            search_title = search_all[i].search_title
            search_url = search_all[i].search_url

        if search_title == "":
            search_title = "검색어를 확인해주세요"
            search_url = "검색어를 확인해주세요"



    # print(title, len(search_all))

    return render(request, 'main/result.html', {'search_title': search_title, 'search_url':search_url})


