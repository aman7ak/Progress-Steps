// getting prev and next btn
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

// getting circle and line HTML collection
let circle = document.getElementsByClassName("circle");
let line = document.getElementsByClassName("innerLine");

// converting HTML collection in an array
circle = Array.from(circle);
line = Array.from(line);

// initializing i and j : i for line anf j for circle
let i = 0;
let j = 1;

// on page load the prev btn should disabled
prevBtn.setAttribute("disabled", true);


// function for next btn on click
nextBtn.addEventListener("click", () => {
  // changing line width and circle background
  line[i].style.width = "100px";
  circle[j].style.background = "#3cbbed";

  if (i < 3 && j < 4) {
    // console.log("Line " + i, " Circle " + j);
    i++;
    j++;
  }

  if (i >= 0 && j >= 1) {
    // console.log("Line " + i, " Circle " + j);
    prevBtn.removeAttribute("disabled");
    prevBtn.style.background = "#3cbbed";
  }
  if (j == 4) {
    nextBtn.setAttribute("disabled", true);
    nextBtn.style.background = "grey";
  }
});


// function for prev btn on click
prevBtn.addEventListener("click", () => {
  if (i >= 0 && j >= 1) {
    // console.log("Line " + i, " Circle " + j);
    i--;
    j--;
  }
  // changing line width and circle background
  line[i].style.width = "0px";
  circle[j].style.background = "grey";

  // the condition on both btns are not disabled
  if (i >= 0 && j >= 1) {
    // console.log("Line " + i, " Circle " + j);
    nextBtn.removeAttribute("disabled");
    nextBtn.style.background = "#3cbbed";
  }

  if (j == 1) {
    prevBtn.setAttribute("disabled", true);
    prevBtn.style.background = "grey";
  }
});
