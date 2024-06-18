let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
let parsedData = JSON.parse(jsonString);
console.log(parsedData.name);  // Вывод: John

let jsObject = {name: "John", age: 30, city: "New York"};
let jsonData = JSON.stringify(jsObject);
console.log(jsonData);  // Вывод: {"name":"John","age":30,"city":"New York"}