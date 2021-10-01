import math

def stacks(m,n):
    while True:
        if (m == 1 or n == 1):
            return 1
        if m == 0:
            return n
        if n == 0:
            return m
        if m > n:
            m -= math.floor(m/n)*n
        else:
            n -= math.floor(n/m)*m

count = int(input())
for i in range(count):
    f1, f2 = input().split(" ")
    print(stacks(int(f1), int(f2)))