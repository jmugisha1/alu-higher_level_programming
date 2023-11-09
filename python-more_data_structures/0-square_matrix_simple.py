#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    doubled_mat = []
    for mat in matrix:
        doubled_mat.append([items**2 for items in mat])
    return doubled_mat
