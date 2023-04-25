var a = 1
var b = 2
var c = 3
var d = 4

function sum (a, b){
    return a + b;
}
result = sum (a,b);
console.log(result); 


function sum (a, b, c){
    return a + b + c;
}
result = sum (a,b,c);
console.log(result);

function sum (a,b,c,d){
    return a+b+c+d;
}
result = sum(a,b,c,d);
console.log(result);

Objects:

var daughter = {
    "name": "Ashey",
    "eyes": "hazel",
    "age": 38,
    "children": ["Ashdon, Miles"]
};

var son ={
    "name": "Skylar",
    "eyes": "brown",
    "age": 30,
    "children": ["Ryleigh"]
};

var dog = {
    "name": "Abby",
    "breed": "German Shepherd",
    "age": 10,
    "enjoys": ["walks"]
        
};

console.log(daughter.eyes);
console.log(son.age);
console.log(dog.name);

console.log(daughter[age]);
console.log(son[eyes]);
console.log(dog[breed]);

daughter.name = "Ashley Rickard";
son.name = "Skylar Lewis";
dog.enjoys = "walks and toys";