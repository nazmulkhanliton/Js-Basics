function maxValue(students) {
  console.log(students);
  var temValue = students[0][1];

  for (var i = 1; i < students.length; i++) {
    if (temValue < students[i][1]) {
      temValue = students[i][1];
    }
  }
  return temValue;
}

var students = [
  ["Khan", 95],
  ["liton", 99],
  ["siam", 97],
  ["Akash", 100],
  ["Nazmul Khan", 50],
];
var result = maxValue(students);
console.log("maxvalue is:  " + result);
