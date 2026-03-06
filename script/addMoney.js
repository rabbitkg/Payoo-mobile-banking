document.getElementById("add-money-btn").addEventListener("click", function(){
    // 1 - bank account get
    const bankAccount = getvalueFromInput("add-money-bank");
    if(bankAccount == "Select A Bank"){
        alert("please select a bank");
        return;
    }
    // 2 - get bank account number
    const accno=getvalueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid Account No");
        return;
    }
    // 3. get amount
    const amount = getvalueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin=getvalueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Success From 
        ${bankAccount} 
        at ${new Date()}`);
        setBalance(newBalance);

        // 1- history-container ke dhore niya ashbo

        const history = document.getElementById("history-container");
        // 2- new div create korbo
        const newHistory = document.createElement("div");
        // 3- nw div innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add Money Success From ${bankAccount} , acc-no ${accno} at ${new Date()}
        </div>
        `;
        // 4- history container e newDiv append korbo
        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }
})