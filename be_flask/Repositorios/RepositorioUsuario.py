"""
Importación de las clases InterfaceRepositorio Y Modelo Usuarios
"""

from Repositorios.InterfaceRepositorio import InterfaceRepositorio
from Modelos.Usuario import Usuario

"""
Clase repositorio que hereda de la interfaz que lleva a cabo la asignación de la colección y resultados de los JSON
"""

class RepositorioUsuario(InterfaceRepositorio[Usuario]):
    pass