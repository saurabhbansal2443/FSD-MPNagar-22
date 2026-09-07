// 1--  Flipkart
// 2-- JUS PAY
// 3 -- AXIS BANK
// set timeout -- Settimeout is a higher order function which takes 2 things one is callback 
// and second is time in ms, it executes the callback function after the the time is elapsed 
let paymentConfirmation = true;

function makePaymentFlipkart(data) {
  console.log("Start");
  setTimeout(function () {
    console.log("Flipkart check complete");
  }, 2000);
  console.log("End");
}

makePaymentFlipkart(); 
