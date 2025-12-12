const accountId=14425;
let accountEmail="snape1256@gmail.com";
var accountPassword="12345"
accountCity="Jaipur";
let accountState;

// accountId=12;// not allowed
accountEmail="hc.@google.com";
accountPassword="1111555";
accountCity="pune";
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* var: can be assigned again but has problem with scope . very rarley used
 (suppose a is assigned at top and  a is assigned in loop so it change all the a of code . )

 let:same a var just don;t have scope problem like var .. common now .

 const:cannot reassign the value written.
 */