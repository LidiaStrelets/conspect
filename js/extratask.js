const result = [];

for (let i = 0; i < 5; i += 1) {
  result[i] = function () {
    console.log(i);
  };
}

result[0]();
result[1]();
result[2]();
result[3]();
result[4]();
