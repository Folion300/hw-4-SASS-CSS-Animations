//1
function convert(amount) { 
	let usd = 8
	return amount * usd;
}


//2
function reverse(str) {
    return str.split('').reverse().join('');
}
reverse('abc');


//3
function showStars(n) {
    for (let row = 1; row <= n; row++) {
        let pattern = '';
        for (let i =0; i < row; i++)
            pattern += '#';
        console.log(pattern);
    }
}
showStars(5);


//4
let rangeSum = function(start,end) {
    const arr = [];
    for (let i = start; i <= end; i++) 
        arr.push(i);
    return arr.reduce(function(a,b){
        return a + b;   
    });
};
console.log(rangeSum(2,4))
console.log(rangeSum(-1,3))


//5
function min(a, b, c) { 
    return Math.min(a,b,c);
    }
min(10, 5, 11) 
min(3, 8, 4)


//6
function printPyramid(n) {
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 1; j < n-i; j++) {
        str = str + ' ';
      }
      for (let k = 1; k <= (2*i+1); k++) {
        str += '#';
      }
      console.log(str);
    }
  }
printPyramid(3);


//7
function firstAndLastToUpper(str) { 
    return str.charAt(0).toUpperCase() + str.slice(1, str.length -1) + str.charAt(str.length - 1).toUpperCase();; 
}
console.log(firstAndLastToUpper('abc'));


//8
function cursorCheck(str) { 
    for (let index = 0; index < str.length; index++) {
        if (str.toLowerCase().includes('ostap') || str.toLowerCase().includes('roman')) {
            return true
        } else {
            return false
        }     
    }
  }
console.log(cursorCheck('Hello I am OstaP')); 
console.log(cursorCheck('Superman is here'))


//9
function toUppercase(str) {
    let res = str.toUpperCase();
    return res;
}


//10
function removeDuplicateCharacters(str) {
    return str
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('Hello I am Iron Man'));


  //11
  function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  console.log(fibonacci(3));
  console.log(fibonacci(5));
  console.log(fibonacci(7));
