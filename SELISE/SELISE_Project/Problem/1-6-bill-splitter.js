function splitBill(total, people, tipPercent) {
    if (people >= 4) {
        const tipAmount = total * (tipPercent / 100);
        const totalWithTip = total + tipAmount;
        const amountPerPerson = totalWithTip / people;
        console.log(amountPerPerson);
    }
}
splitBill(1000, 4, 10); // 275 (1000 + 10% = 1100, ÷4)
splitBill(500, 2, 10); // 275
splitBill(1200, 3, 15); // 460
splitBill(600, 5, 0); // 120 (no tip)
