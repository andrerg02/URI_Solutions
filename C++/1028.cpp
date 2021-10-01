#include <iostream>
#include <math.h>

using namespace std;

int stacks(int m, int n) {
    if(m == 1 || n == 1) {
        return 1;
    }
    if(m == 0) {
        return n;
    }
    if(n == 0) {
        return m;
    }
    return (m > n) ? stacks(m - floor(m/n)*n, n) : stacks(m, n - floor(n/m)*m);
}

int main() {
    int n, f1, f2;
    cin >> n;
    while(n != 0) {
        cin >> f1 >> f2;
        cout << stacks(f1,f2) << endl;
        n -= 1;
    }
    return 0;
}