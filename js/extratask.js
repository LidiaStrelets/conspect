const result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function myFoo(x) {
    // additional enclosing context
    return function () {
      console.log(x);
    };
  })(i);
}

result[0]();
result[1]();
result[2]();
result[3]();
result[4]();
