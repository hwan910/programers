function solution(n) {
    let answer = 0;
    let string = n + '';
    for (let i = 0; i < string.length; i++) {
        const value = string[i];
        answer = Number(value) + answer;
    }

    return answer;
}
