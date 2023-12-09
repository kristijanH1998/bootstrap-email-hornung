const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4 = document.getElementById("msg4");
const msg5 = document.getElementById("msg5");
const msg6 = document.getElementById("msg6");
const msg7 = document.getElementById("msg7");
const msg8 = document.getElementById("msg8");
const msg9 = document.getElementById("msg9");
const msg10 = document.getElementById("msg10");
const msg11 = document.getElementById("msg11");

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