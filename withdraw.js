document.getElementById('btn-withdraw').addEventListener('click', function(){
    // withdraw Amount with input value
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    // clear withdraw amount value
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a Valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const currentWithdrawTotalString = withdrawTotalElement.innerText;
    const currentwithdraw = parseFloat(currentWithdrawTotalString);


    // Reduce total amount while withdraw from fund

    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousbalanceTotalString);


    if(previousBalanceTotal < newWithdrawAmount){
        alert('your account has insufficient balance');
        return;
    }

    // if has sufficient balance then can withdraw and add amount
    const currentWithdrawTotal = currentwithdraw + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;


    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    





});