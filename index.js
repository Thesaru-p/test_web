/*console.log('Hello World');
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
    console.log('helllo World '+ name);
}

isgreet('thesaru');

function isPrime(number){
    
    let p=true;
    let num=number
    while(number>2){
        if(num%(number-1)==0){
            console.log('number is not prime number');
                document.getElementById("head").innerHTML="The number is not prime.";
            p=false;
            break;
            
        
        }
        number=number-1;
    }
    if(p){
        console.log('number is  prime number');
        document.getElementById("head").innerHTML="The number is prime.";
    }
    
}
isPrime(5);
console.error('This is an error message');
console.warn('this is an warning message');
console.error("This is an"+pi);*/


/*function nextDate(date){
    date=Number(date);
    let newdate;
    if(date>=24){
        newdate=date-23;
    }
    else{
        newdate=date+7;
    }
    console.log(newdate+'th');
    document.getElementById("res").innerHTML=newdate;

}

nextDate(23);

let username;
username=window.prompt("What is your user name?");
if(username==null || username==""){
    window.alert("ehma hknna denna ba itn");

}
else{
    window.alert("Welcome"+username);
    document.getElementById("wel").innerHTML="Welcome "+username;
    document.write("Welcome "+username);
    window.open("contact.html");
    window.close("index.html");
}*/

function delee(){
    document.getElementById("para").innerHTML="";
}



