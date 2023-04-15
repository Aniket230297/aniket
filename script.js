/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];





function PrintDeveloperbyMap() {
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (employee) {
    if (employee.profession === "developer") {
        console.log(employee);
    }
});

}


function addData() {
  //Write your code here, just console.log
  const emp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(emp);
  console.log(arr);
}


function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((acc, index, array) => {
    if (acc.profession === "admin") array.splice(index, 1);
  });
  console.log(arr);
}

let arr2 = [
  { id: 5, name: "aniket", age: "23", profession: "admin" },
  { id: 6, name: "omya", age: "28", profession: "developer" },
  { id: 7, name: "samyak", age: "25", profession: "intern" },
]

function concatenateArray() {
  //Write your code here, just console.log
  console.log(arr.concat(arr2));
}

