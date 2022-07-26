console.log(document);

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  const allBtns = document.querySelectorAll(".expand_button");
  
  //for each button when clicked...
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const articleBtn = event.target;
      const article = document.querySelector(".article_body");
      //If the text on the button that was clicked is a V, then set the display property of the article's body to none. Also set the text on the button to >.
      if(articleBtn.innerHTML === "V"){
        article.style.display = "none";
        articleBtn.innerHTML = "&gt;";
      } else {
        //If the text on the button that was clicked is not a V, then set the display property of the article's body to block. Also set the text on the button to V.
        articleBtn.innerHTML = "V";
        article.style.display = "block";
      }
    });
  });
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
const allHBtns = document.querySelectorAll(".highlightBtn");
//If the text on the button is +, then add the .highlight class to the article and set the text on the button to -.
allHBtns.forEach((Hbtn) => {
  Hbtn.addEventListener("click", (event) => {
    const highlightedBtn = event.target;
    const article = document.querySelector(".article");
    if(highlightedBtn.innerText === "+"){
      article.classList.add("highlight");
      highlightedBtn.innerText = "-";
    } else {
      article.classList.remove("highlight");
      highlightedBtn.innerText = "+";
    }
  });
});
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
