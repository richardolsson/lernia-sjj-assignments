from django.shortcuts import render

MENU = [
    {
        'label': 'Home',
        'link': '/',
    },
    {
        'label': 'About',
        'link': '/about',
    },
    {
        'label': 'Contact',
        'link': '/contact',
    }
]

def render_with_menu(request, template):
    menu_with_active = [{
        **item,
        'active': item['link'] == request.path,
    } for item in MENU]

    return render(request, template, {
        'menu': menu_with_active,
    })

# Create your views here.
def home(request):
    return render_with_menu(request, 'index.html')

def about(request):
    return render_with_menu(request, 'about.html')

def contact(request):
    return render_with_menu(request, 'contact.html')