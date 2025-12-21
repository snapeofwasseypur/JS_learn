//primitive:
// 7 types :string ,number,Boolean,null,undefined,symbol,BigInt

//Reference or (non Primitive):
//Array,objects,Functions

//JS is dyanmically typed and lossesly typed .. 
// dynamic because any variable can hold any dataype and losse 
// because it allows many things which cause error like "5"+1 ;

const heros=["shaktiman","ironman","wonderwomen"];//array

let my_obj={
    name:"amber",
    age:22,
}//objects

const myfunction=function(){
    console.log("hello world");
}//function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory:
//stack is for primitive datatypes and its they reused only get copy of that not a address, here parent is not touched.
//  , Heap is for non primitive datatypes but always share the address and if you change something it will change parent also .

//stack example
let myytname="arstech";
let anothername=myytname;
anothername="heyshwaty";
console.log(myytname);
console.log(anothername);

//heap example

let userone={
    email:"am@google.com",
    id:1265
}
let usertwo=userone;

usertwo.id=5565;
console.log(usertwo.id);
console.log(userone.id);//here you will see parent is also updated with new value .


