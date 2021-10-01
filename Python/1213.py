from sys import stdin

def minOnes(n):
    count = 1
    ones = 11
    if n == 1:
        return count
    while ones % n != 1:
        ones = (ones % n) * 10 + 1
        count += 1
    return count

for line in stdin:
    print(minOnes(int(line)))