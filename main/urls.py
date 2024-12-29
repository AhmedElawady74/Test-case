from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('products/', csrf_exempt(views.ProductCreateAPIView.as_view()), name='product-create'),
    path('products/<int:pk>/', csrf_exempt(views.ProductDetailAPIView.as_view()), name='product-detail'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
]
