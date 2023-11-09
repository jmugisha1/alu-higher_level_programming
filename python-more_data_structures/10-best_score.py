#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary is None or len(a_dictionary) == 0:
        return None
    else:
        max_score_list = []
        for values in a_dictionary.values():
            max_score_list.append(values)
        max_score_num = max_score_list[0]
        for item in max_score_list:
            if item > max_score_num:
                max_score_num = item
        for key, value in a_dictionary.items():
            if value == max_score_num:
                return key
            else:
                pass
