const arr = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ]
var sum = 0;

function foo(array) {

  array.forEach(function(value, index) {
    Array.isArray(value) ? foo(value) : sum += value; 
  });

  return sum;
}

console.log(foo(arr));