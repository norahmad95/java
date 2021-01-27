var whattoolsyouwant=prompt("what tools you want?");
var nooftool=prompt("how many do you want to order?");

var orderdetils;

if (nooftool > 1 && nooftool <5){
    orderdetils="congrats you gained a vankokh brush for free";
  }
  else if (nooftool => 5 && nooftool >= 10 ){
    orderDetails="congrats you got a free  watercolor box";
}
  else if (nooftool => 0 && nooftool> 2 ){
        orderDetails="congrats you got a free %5 discount";
}
 else {
    orderdetils="no discounts"; }

        document.write( orderdetils);
document.getElementById("order").innerText= orderdetils;
document.getElementById("nooftool").innerText=nooftools;
confirm("are you happy with your gift?");
alert("Thank you and have a nice drawing");
