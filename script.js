const correctAns = ["B", "B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const ShowScore = document.querySelector(".Score");
let result = document.querySelector(".results");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  let userAns = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  //check ANS
  userAns.forEach((ans, index) => {
    if (ans === correctAns[index]) {
      score += 20;
    }
  });
  //result on page
  scrollTo(0, 0);
  // result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    console.log(output);
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// setTimeout(() => {
//   alert("WELCOME!!!");
// }, 3000);
