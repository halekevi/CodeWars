alert("hello world");

let x = 5;
  let y = 6;
  let z = x+y;

var ahh = [0,1,2,-1,-2];
    console.log (ahh)

function countPositivesSumNegatives(input) {
    const answer = []
    let positiveSum = 0
    let negativeSum = 0

    if(input && input.length) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            positiveSum += 1
        } else {
            negativeSum += input[i]
        }
      }
      answer.push(positiveSum)
      answer.push(negativeSum)
    }
    return answer
}

  
var ahh = [0,1,2,-1,-2],
  negative = ahh.filter(function (a) {
    return a <= 0;}),
    sum = negative.reduce(function(a,b) {return a + b;});


