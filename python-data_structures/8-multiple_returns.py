#!/usr/bin/python3
def multiple_returns(sentence):
    if sentence:
        length = len(sentence)
        first = sentence[0]
        print("Length: {:d} - First character: {}".format(length, first))
    else:
        return None
