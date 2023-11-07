# !/usr/bin/python3
def no_c(my_string):
    list_no_c = []
    list_str = list(my_string)
    for char in list_str:
        if char != "c" and char != "C" in list_str:
            list_no_c.append(char)
    return ''.join(list_no_c)
