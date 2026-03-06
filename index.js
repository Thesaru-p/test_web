console.log('Hello World');
let name='John';
console.log(name);
let firstName='Jane';
console.log(firstName);
const pi=3.14;

console.log(pi);
let age=30;
let person={
    name:'Alice',age:25};
console.log(person);
person.name='Thesaru';
console.log(person);
person['age']=23;

console.log(person);
let selectedColors=['red',2];
selectedColors[2]='blue';
console.log(selectedColors);
console.log(selectedColors.length);


function isgreet(name){
    console.log('helllo World'+name);
}

isgreet('thesaru');

function isPrime(number){
    
    let p=true;
    let num=number
    while(number>2){
        if(num%(number-1)==0){
            console.log('number is not prime number');
            p=false;
            break;
            
        
        }
        number=number-1;
    }
    if(p){
        console.log('number is  prime number');
    }
    
}
isPrime(1000009);



