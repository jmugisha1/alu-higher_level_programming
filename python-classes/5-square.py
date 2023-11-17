#!/usr/bin/python3
"""Module to define a square class"""


class Square:
    """Class to define a square"""

    def __init__(self, size=0):
        """this is a comment"""
        self.size = size

    @property
    def size(self):
        return self.__size

    @size.setter
    def size(self, value):
        if type(value) == int and value >= 0:
            self.__size = value
        elif type(value) is not int:
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")

    def area(self):
        return self.__size * self.__size

    def my_print(self):
        if self.__size > 0:
            for i in range(0, self.__size):
                for j in range(0, self.__size):
                    print("#", end="")
                print()
        else:
            print("")
