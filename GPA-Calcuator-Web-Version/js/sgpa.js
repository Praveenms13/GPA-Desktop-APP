function myFunction() {
  // some code
  debugger; // this will pause the code here
  // more code
}
myFunction();
function add() {
  let credit = [
    parseInt(document.getElementById("one").value),
    parseInt(document.getElementById("two").value),
    parseInt(document.getElementById("three").value),
    parseInt(document.getElementById("four").value),
    parseInt(document.getElementById("five").value),
    parseInt(document.getElementById("six").value),
    parseInt(document.getElementById("seven").value),
    parseInt(document.getElementById("eight").value),
    parseInt(document.getElementById("nine").value),
    parseInt(document.getElementById("ten").value),
  ];
  for (let i = 0; i < credit.length; i++) {
    if (isNaN(credit[i])) {
      credit[i] = 0;
    }
  }
  let credit_total = 0;
  for (let i = 0; i < credit.length; i++) {
    credit_total += credit[i];
  }
  let grade_credit = [
    document.getElementById("opt1").value,
    document.getElementById("opt2").value,
    document.getElementById("opt3").value,
    document.getElementById("opt4").value,
    document.getElementById("opt5").value,
    document.getElementById("opt6").value,
    document.getElementById("opt7").value,
    document.getElementById("opt8").value,
    document.getElementById("opt9").value,
    document.getElementById("opt10").value,
  ];
  let creditAnswers = [10];
  for (i = 0; i < grade_credit.length; i++) {
    if (grade_credit[i] == "O") {
      creditAnswers[i] = 10 * credit[i];
    } else if (grade_credit[i] == "A+") {
      creditAnswers[i] = 9 * credit[i];
    } else if (grade_credit[i] == "A") {
      creditAnswers[i] = 8 * credit[i];
    } else if (grade_credit[i] == "B+") {
      creditAnswers[i] = 7 * credit[i];
    } else if (grade_credit[i] == "B") {
      creditAnswers[i] = 6 * credit[i];
    } else if (grade_credit[i] == "C") {
      creditAnswers[i] = 5 * credit[i];
    } else if (grade_credit[i] == "P") {
      creditAnswers[i] = 0 * credit[i];
    } else {
      creditAnswers[i] = 0;
    }
  }
  for (i = 0; i < grade_credit.length; i++) {
    if (isNaN(creditAnswers[i])) {
      creditAnswers[i] == 0;
    }
  }
  let result_before = 0;
  for (i = 0; i < grade_credit.length; i++) {
    result_before += creditAnswers[i];
  }
  console.log("Final answers :");
  console.log(result_before);
  console.log(credit_total);
  result_ans = result_before / credit_total;
  final_result = result_ans.toFixed(2);
  document.getElementById("eleven").value = final_result;
  progress_bar = (final_result * 9.5).toFixed(1);
  document.getElementById("barstyle").style.width = progress_bar + "%";
  document.getElementById("barstyle").innerHTML = progress_bar + "%";
}
