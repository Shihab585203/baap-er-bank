// Step 1: addEventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step 2: get the deposit amount to the deposit field
    // for input field .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //Step 3: get the current deposit total
    // for non input (element other then input, textarea) use inner text to get the text.
    const depositTotalElement = document.getElementById('deposit-total');
    const previousTotalDeposit = depositTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalDeposit);
    
    //step 4: add numbers to set the total deposit

    const currentDespositTotal = previousTotalAmount + newDepositAmount;

    depositTotalElement.innerText = currentDespositTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate to set the total balance
    const currentBalance = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalance;

    // step 7: clear the deposit field
    depositField.value = '';



});