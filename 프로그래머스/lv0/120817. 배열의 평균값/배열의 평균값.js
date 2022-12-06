numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,93]


function solution(numbers) {
    var answer = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]

    }
        answer = sum/numbers.length
    return answer.toFixed(1);
}

