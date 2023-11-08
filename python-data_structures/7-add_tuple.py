#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    tuple_a_list = list(tuple_a)
    tuple_b_list = list(tuple_b)

    if len(tuple_a_list) < 1 and len(tuple_b_list) < 1:
        tuple_a_list.append(0)
        tuple_b_list.append(0)

    added_tuple_list = [tuple_a_list[0] + tuple_b_list[0]] +\
    [tuple_a_list[1] + tuple_b_list[1]]

    return tuple(added_tuple_list)
