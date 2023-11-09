#!/usr/bin/python3
def only_diff_elements(set_1, set_2):
    el_to_remove = (set_1 & set_2)
    set_el = set(list(set_1) + list(set_2)) - el_to_remove
    return set_el
