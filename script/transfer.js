document.getElementById("send-btn").addEventListener("click", function(){
    const accountNumber = getvalueFromInput("transfer-number");
    if(accountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }
    const transferAmount = getvalueFromInput("transfer-amount");

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(transferAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    const pin = getvalueFromInput("transfer-pin");
    if(pin === "1234"){
        alert("Transfer Successfully");
        setBalance(newBalance);
          // 1- history-container ke dhore niya ashbo

        const history = document.getElementById("history-container");
        // 2- new div create korbo
        const newHistory = document.createElement("div");
        // 3- nw div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Transfer Money Success ${transferAmount} TAKA Success to A/C. No. ${accountNumber} , at ${new Date()}
        </div>
        `;
        // 4- history container e newDiv append korbo
        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }
})