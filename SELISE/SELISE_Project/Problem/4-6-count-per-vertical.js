const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Dorji", vertical: "QA" },
  { name: "Sonam", vertical: "BA" },
  { name: "Pema", vertical: "Dev" },
  { name: "Tshering",vertical: "QA" }
];
function countByVertical(trainees) {
    const counts = {};
    for (const trainee of trainees) {
        const vertical = trainee.vertical;
        counts[vertical] = (counts[vertical] || 0) + 1;
    }   
    return counts;
}
console.log(countByVertical(trainees));