// 1. [0 100 200 300 400 500 600 700 800 900 1000]
for (i=0; i<=1000; i+=100){
  console.log(i);
}

// 2. [1 2 4 8 16 32 64 128]
for (i=1; i<=128; i*=2){
console.log(i);
}

// 3. [0 2 4 6 8 10]
for (i=0; i<=10; i+=2){
console.log(i);
}

// 4. [3 6 9 12 15]
for (i=3; i<=15; i+=3){
console.log(i);
}

// 5. [9 8 7 6 5 4 3 2 1 0]
for (i=9; i>=0; i--){
console.log(i);
}

// 6. [1 1 1 2 2 2 3 3 3 4 4 4]
for (i=1; i<=4; i++){
console.log(i);
console.log(i);
console.log(i);
}

// 7. [0 1 2 3 4 0 1 2 3 4 0 1 2 3 4]
for (x=0; x<3; x++){
  for (i=0; i<=4; i++){
  console.log(i);
  }
}


// 1-25 odd or even
for (i=1; i<=25; i++){
  if (i % 2 === 1) {
    console.log(i + ' odd');
  } else {
    console.log(i + ' even');
  }
}

// 1-50 fizz, buzz, fizzbuzz
for (i=1; i<=50; i++){
  if (i % 15 === 0){
    console.log ('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log ('Buzz');
  } else if (i % 3 === 0){
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

// add multiples of 3 or 5
var sum = 0;
for (i=1; i<1000; i++){
  if (i % 3 === 0 || i % 5 === 0){
    sum += i;
  }
};
console.log(sum);

//draw #'s
var pounds = '#######'
for (i=7; i>=0; i--){
  console.log(pounds.substring(i));
}
