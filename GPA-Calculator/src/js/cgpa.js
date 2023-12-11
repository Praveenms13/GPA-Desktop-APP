function myFunction() {
  // some code
  debugger; // this will pause the code here
  // more code
}
myFunction();
setTimeout(function () {
  $("#alert").alert("close");
}, 7000);
function overall_cgpa() {
  let sem_totalcgpa = 0;
  let sem_eachcgpa = [
    parseFloat(document.getElementById("semnum_cgpa1").value),
    parseFloat(document.getElementById("semnum_cgpa2").value),
    parseFloat(document.getElementById("semnum_cgpa3").value),
    parseFloat(document.getElementById("semnum_cgpa4").value),
    parseFloat(document.getElementById("semnum_cgpa5").value),
    parseFloat(document.getElementById("semnum_cgpa6").value),
    parseFloat(document.getElementById("semnum_cgpa7").value),
    parseFloat(document.getElementById("semnum_cgpa8").value),
    parseFloat(document.getElementById("semnum_cgpa9").value),
    parseFloat(document.getElementById("semnum_cgpa10").value),
  ];
  for (let i = 0; i < sem_eachcgpa.length; i++) {
    if (isNaN(sem_eachcgpa[i])) sem_eachcgpa[i] = 0;
    sem_totalcgpa += sem_eachcgpa[i];
  }
  //console.log(sem_totalcgpa);
  //console.log("Radio Part");

  returnRequired = [
    $("#semnum_1").is(":checked") ? 1 : 0,
    $("#semnum_2").is(":checked") ? 1 : 0,
    $("#semnum_3").is(":checked") ? 1 : 0,
    $("#semnum_4").is(":checked") ? 1 : 0,
    $("#semnum_5").is(":checked") ? 1 : 0,
    $("#semnum_6").is(":checked") ? 1 : 0,
    $("#semnum_7").is(":checked") ? 1 : 0,
    $("#semnum_8").is(":checked") ? 1 : 0,
    $("#semnum_9").is(":checked") ? 1 : 0,
    $("#semnum_10").is(":checked") ? 1 : 0,
  ];
  let returnTrue = 0;
  for (let i = 0; i < returnRequired.length; i++) {
    console.log(returnRequired[i]);
    if (returnRequired[i] == 1) {
      returnTrue += returnRequired[i];
    }
  }
  //console.log(returnTrue);
  let arrayResult = sem_totalcgpa / returnTrue;
  arrayCgpaResult = arrayResult.toFixed(2);
  //console.log(arrayCgpaResult);
  document.getElementById("eleven").value = arrayCgpaResult;
  progress_bar = (arrayCgpaResult * 9.5).toFixed(1);
  document.getElementById("barstyle").style.width = progress_bar + "%";
  document.getElementById("barstyle").innerHTML = progress_bar + "%";
}
