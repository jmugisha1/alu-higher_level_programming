#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    sorted_keys = sorted(a_dictionary.keys())
    for items in sorted_keys:
        print(f"{items}: {a_dictionary[items]}")
