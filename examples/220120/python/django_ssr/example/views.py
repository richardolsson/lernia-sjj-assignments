from django.shortcuts import render

menu = [
  {
    'label': 'Home',
    'link': '/',
  },
  {
    'label': 'About us',
    'link': '/about',
  },
  {
    'label': 'Contact',
    'link': '/contact',
  },
]

def render_with_menu(request, template):
  return render(request, template, {
    'menu': menu,
    'cur_page': request.path,
  })

def home(request):
  return render_with_menu(request, 'index.html')

def about(request):
  return render_with_menu(request, 'about.html')

def contact(request):
  return render_with_menu(request, 'contact.html')
