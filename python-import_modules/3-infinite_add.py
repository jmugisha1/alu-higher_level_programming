#!/usr/bin/python3
from sys import argv
if __name__ == "__main__":
    args = [int(i) for i in argv[1:]]
    print(sum(args))
