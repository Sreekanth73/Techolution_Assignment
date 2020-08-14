var studentData = [
  {
    name: "rajiv",
    marks: {
      Maths: 18,
      English: 21,
      Science: 45,
    },
    rollNumber: "KV2017-5A2",
  },
  {
    name: "abhishek",
    marks: {
      Maths: 43,
      English: 30,
      Science: 37,
    },
    rollNumber: "KV2017-5A1",
  },
  {
    name: "zoya",
    marks: {
      Maths: 42,
      English: 31,
      Science: 50,
    },
    rollNumber: "KV2017-5A3",
  },
];

var container = document.querySelector("#container");
var table = document.createElement("table");
var th = document.createElement("th");
var thead = (th.innerText = "Student Board");
// sorting array

console.log(studentData);

for (var i = 0; i < studentData.length; i++) {
  studentData.sort();
  var studentNames =
    studentData[i].name.charAt(0).toUpperCase() + studentData[i].name.slice(1);
  // console.log(studentNames);
  // table.appendChild(th);
  // container.appendChild(table);

  console.log(studentNames);
}

// if (
//   studentData[0].marks.Science <= 20 ||
//   studentData[0].marks.Maths <= 20 ||
//   studentData[0].marks.English <= 20
// ) {
//   console.log("he is failed");
// } else {
//   console.log("he is passed");
// }
