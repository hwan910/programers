function solution(n) {
    let x = 2;

    while ((n - 1) % x !== 0) {
        x++;
    }
    return x;
}
