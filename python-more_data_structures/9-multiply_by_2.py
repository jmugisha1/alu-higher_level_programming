#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    new_a_dictionary = a_dictionary.copy()
    for keys, values in new_a_dictionary.items():
        new_a_dictionary[keys] = values * 2
    return new_a_dictionary
