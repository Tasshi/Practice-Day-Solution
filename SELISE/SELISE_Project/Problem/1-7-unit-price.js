function cheaperPerUnit(priceA, qtyA, priceB, qtyB){
    const unitPriceA = priceA / qtyA;
    const unitPriceB = priceB / qtyB;

    if (unitPriceA < unitPriceB) {
        return "Product A is cheaper per unit.";
    } else if (unitPriceB < unitPriceA) {
        return "Product B is cheaper per unit.";
    } else {
        return "Both products have the same price per unit.";
    }
}
console.log(cheaperPerUnit(100, 2, 120, 3));

console.log(cheaperPerUnit(60, 3, 100, 4));
console.log(cheaperPerUnit(50, 1, 100, 2));