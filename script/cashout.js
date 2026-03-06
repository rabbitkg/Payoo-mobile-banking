
document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1. get the agent number & validate
    const cashoutNumber = getvalueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    // 2. get the amount
    const cashoutAmount = getvalueFromInput("cashout-amount");
    // 3. get the Current Balance
    
    const currentBalance = getBalance();

    // 4. Calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance <0){
        alert("Invalid Amount");
        return;
    }
    const pin = getvalueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout Successfully");
        setBalance(newBalance);

         // 1- history-container ke dhore niya ashbo

        const history = document.getElementById("history-container");
        // 2- new div create korbo
        const newHistory = document.createElement("div");
        // 3- nw div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber} , at ${new Date()}
        </div>
        `;
        // 4- history container e newDiv append korbo
        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }

})


// document.getElementById("cashout-btn").addEventListener("click", function(){
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid Agent Number");
//         return;
//     }

//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }

//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
    
//     if (pin === "1234"){
//         alert("cashout successfull");
//         // console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Invalid Pin");
//         return;
//     }
    
// })




















// document.getElementById("cashout-btn").addEventListener("click", function(){
//     // 1. get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number")
//         return;
//     }
//     // 2. get the amount
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3. get the Current Balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);
//     // 4. Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
    
//     // 5. get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//     // 5.1 true:: show an alert > set Balance
//         alert("cashout successfull");
//         console.log("New Balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }else{
//     // 5.2 false:: show an error alert > return
//         alert("invalid pin");
//         return;
//     }

    
    
// })