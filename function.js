let totalBalance = 0;
function deposit() {
    let amount = parseFloat(deposit_amnt.value);
    let accno = deposit_acc.value;

    if (amount == "" || accno == "") {
        alert("Please fill Missing fileds")
    }
    else {
        if (accno in localStorage) {
            accountDetails = JSON.parse(localStorage.getItem(accno));

            accountDetails.totalBalance += amount;
            localStorage.setItem(accno, JSON.stringify(accountDetails));
            alert(`${amount} deposited successfully`)


            console.log(totalBalance);
            let result = document.getElementById("deposit_balance");

            result.textContent = `Your Current balance is ${accountDetails.totalBalance}`;
            result.style.color = 'black';
            result.style.textAlign = 'center';
        }
        else {
            alert("Account doesn't exist")
        }
    }
}

