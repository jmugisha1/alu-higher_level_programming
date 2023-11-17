#!/usr/bin/python3
"""Module to define a square class"""


class Square:
    """Class to define a square"""

    def __init__(self, size=0):
        """this is a comment"""
        
        @property
        def size(self):
            return self._size
        
        @size.setter
        def size(self, value):
            if type(value) == int and size >= 0:
                self.__size = size
            elif type(value) is not int:
                raise TypeError("size must be an integer")
            elif size < 0:
                raise ValueError("size must be >= 0")
                    
    def area(self):
        return self.__size * self.__size
