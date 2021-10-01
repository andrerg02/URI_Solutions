#include <iostream>

using namespace std;

int minOnes(int n) {
    int count = 1;
    int ones = 11;
    if (n == 1) {
        return count;
    }
    while (ones % n != 1) {
        ones = (ones % n) * 10 + 1;
        count += 1;
    }
    return count;
}

int main() {
    int n;
    while (cin >> n)
    {
        cout << minOnes(n) << endl;
    }
    return 0;
}
