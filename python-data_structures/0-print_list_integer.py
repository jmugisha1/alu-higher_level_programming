#!/usr/bin/python3

my_list = [1, 2, 3]
def print_list_integer(my_list=[]):
    for item in my_list:
        print("{:d}".format(item))

print_list_integer(my_list)
