#!/usr/bin/python3
def multiple_returns(sentence):
    if sentence == '':
        return None
    else:
        length = len(sentence)
        first = sentence[:1]
        print("Length: {:d} - First character: {}".format(length, first))
