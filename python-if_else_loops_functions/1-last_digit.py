#!/usr/bin/python3
import random

number = random.randint(-10000, 10000)
number_str = str(number)
last_digit_str = number_str[-1]
last_digit_int = int(last_digit_str)

if last_digit_int == 0:
    print(f"Last digit of {number} is 
        {last_digit_int} and is 0")
elif number > 0 and last_digit_int > 5:
    print(f"Last digit of {number} is 
        {last_digit_int} and is greater than 5")
elif number > 0 and last_digit_int < 6:
    print(f"Last digit of {number} is 
        {last_digit_int} and is less than 6 and not 0")
elif number < 0 and last_digit_int > 5:
    print(f"Last digit of {number} is 
        -{last_digit_int} and is less than 6 and not 0")
elif number < 0 and last_digit_int < 6:
    print(f"Last digit of {number} is 
        -{last_digit_int} and is less than 6 and not 0")

