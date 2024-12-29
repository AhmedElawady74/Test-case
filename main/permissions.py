from rest_framework.permissions import BasePermission

class IsAuthenticatedOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ('GET',):
            return True
        return request.user and request.user.is_authenticated