//Prog1 . Take Three inputs and find Max:

var Arr =[];
var a=prompt("Enter 1st Number: ");
a=parseInt(a);
Arr.push(a);

var a=prompt("Enter 2nd Number: ");
a=parseInt(a);
Arr.push(a);

var a=prompt("Enter 3rd Number: ");
a=parseInt(a);
Arr.push(a);

if((Arr[0]>=Arr[1])&& (Arr[0]>=Arr[2])){
alert(Arr[0]);
}else if((Arr[1]>=Arr[0])&&(Arr[1]>=Arr[2])){
alert(Arr[1]);
}else{
alert(+Arr[2]+" Is greater");
}