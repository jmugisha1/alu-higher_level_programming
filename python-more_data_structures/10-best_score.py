#!/usr/bin/python3
def best_score(a_dictionary):
    max_score_list = []

    for values in a_dictionary.values():
        max_score_list.append(values)

    max_score_num = max_score_list[0]

    for item in max_score_list:
        if item > max_score_num:
            max_score_num = item
    
    if max_score_list.count(max_score_num) > 1:
        return None
    else:
        for key, value in a_dictionary.items():
            if value == max_score_num:
                return key
            else:
                pass
