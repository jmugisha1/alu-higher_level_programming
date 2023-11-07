#!/usr/bin/python3
def no_c(my_string):
    list_str = list(my_string)
    for char in list_str:
        while char == "c" or "C" in list_str:
            list_str.remove(char)
            return ''.join(list_str)
