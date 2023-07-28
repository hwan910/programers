function solution(arr) {
    let answer = 0;
    let sum = 0;

    arr.map((v) => {
        console.log('V==>', v);
        sum = sum + v;
        console.log('sum==?', sum);
    });
    answer = sum / arr.length;
    console.log(answer);
    return answer;
}