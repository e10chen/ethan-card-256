module.exports = {
  stories: ['../**/stories/*.stories.{js,md,mdx}'],
};

const copyButton = document.querySelector('.copy');

const toggleButton = document.querySelector(".toggleBackGroundColor");

const changeTitle = document.querySelector(".changeTitle");

const deleteButton = document.querySelector(".deleteButton");

const orginalCard = document.querySelector('.all');

const wordsInCard = document.querySelector('.text');

const detailButton = document.querySelector('.detailButton');

var cardTitle = document.querySelector(".title");

var cardAmount = 1;


copyButton.addEventListener("click", function(e){   
 const cloneCard = orginalCard.cloneNode(true);
  document.body.appendChild(cloneCard); 
  cardAmount++;
});

deleteButton.addEventListener("click", function(e){ 
  if (cardAmount > 1) {
  document.querySelector('.all:last-child').remove();
   cardAmount--;
  }
});

// This handler will be executed only once when the cursor
// moves over the unordered list
detailButton.addEventListener("mouseenter", function (e) {
  // highlight the mouseenter target
  e.target.style.background= "green";
  detailButton.focus();
});

detailButton.addEventListener("mouseleave", function (e) {
  // highlight the mouseenter target
  e.target.style.background = "";
  detailButton.blur()
});

detailButton.addEventListener("click", function(e){
   var paragraphs = wordsInCard;
  if (paragraphs.style.display === "none"){
    paragraphs.style.display = "block"
  } else {
    paragraphs.style.display = "none";
  }
  
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

toggleButton.addEventListener("click", function(e){   
     orginalCard.style.backgroundColor = getRandomColor(); 
});

changeTitle.addEventListener("click", function(e){   
  if (cardTitle.innerHTML === "Ethan Chen") {
    cardTitle.innerHTML = "Something Else";
  } else {
    cardTitle.innerHTML = "Ethan Chen";
  }
});



//classList.contains();
