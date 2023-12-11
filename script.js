const fullMsgTitle = document.getElementById("fullMsgTitle");
const fullMsgBody = document.getElementById("fullMsgBody");
const fullMsgName = document.getElementById("fullMsgName");
const fullMsgDate = document.getElementById("fullMsgDate");


//cards is an array containing all message cards in the message list
let cards = document.querySelectorAll("div.card.w-100");

/* when an element in the html body is clicked, loops over elements (cards) of the 'cards' array, if any of them
is the element that was clicked on (containing event.target attribute), then that element's content is displayed
in the email message text container (on the right) */
document.body.addEventListener('click', function(event){
    event.preventDefault();
	cards.forEach((card) => {
        if(card.contains (event.target)){
            fullMsgTitle.textContent = card.querySelector("div div h5").textContent;
            fullMsgBody.textContent = card.querySelector("div div p").textContent;
            fullMsgName.textContent = card.querySelector("div div h6").textContent;
            fullMsgDate.textContent = card.querySelector("div div h6:nth-child(3)").textContent;
        }  
    });
});
var navbarToggleBtns = document.getElementsByClassName("navbarToggleBtn");
for(var i = 0; i < navbarToggleBtns.length; i++) {
    navbarToggleBtns[i].onclick = function() {
        var navbarColumn = document.getElementById("navbarCol");
        var nonNavbarColumn = document.getElementById("nonNavbarCol");
        if (navbarColumn.classList.contains("d-sm-block")){
            navbarColumn.classList.remove("d-sm-block");
            navbarColumn.classList.add("d-none");
            nonNavbarColumn.classList.remove("col-sm-10");
            nonNavbarColumn.classList.add("col-sm-12");
        } else {
            navbarColumn.classList.add("d-sm-block");
            navbarColumn.classList.remove("d-none");
            nonNavbarColumn.classList.add("col-sm-10");
            nonNavbarColumn.classList.remove("col-sm-12");
        }
    };
}
