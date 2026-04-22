const trainees = [
  { name: "Karma", score: 82 },
  { name: "Dorji", score: 91 },
  { name: "Sonam", score: 74 },
  { name: "Pema", score: 88 }
];
function findTopScorer(trainees) {
  let top = trainees[0];

  for (let i = 1; i < trainees.length; i++) {
    if (trainees[i].score > top.score) {
      top = trainees[i];
    }
  }
  return top;
}

console.log(findTopScorer(trainees));

