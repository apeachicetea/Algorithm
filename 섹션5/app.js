function solution(k, arr){ 
  let n = arr.length;
  let answer = sum = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < n; i++) {
      for(let j = i + 1; i < n; i++) {
          for(let k = j + 1; i < n; i++) {
              sum = arr[i] + arr[j] + arr[k];
              if(maxNum < sum) maxNum = sum;
              sum = 0;
          }
      }
  }
  console.log(maxNum);
  answer = maxNum;
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));