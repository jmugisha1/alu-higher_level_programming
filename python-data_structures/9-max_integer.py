#!/usr/bin/python3
def max_integer(my_list=[]):
    if len(my_list) != 0:
        max_value = my_list[0]
        for item in my_list:
            while item > max_value:
                max_value = item
        return max_value
    elif len(my_list) == 0:
        max_value = None
