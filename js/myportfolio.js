/*


window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}*/


// Get the modal
let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let modal5 = document.getElementById('myModal5');
let modal6 = document.getElementById('myModal6');
let modal7 = document.getElementById('myModal7');
let modal8 = document.getElementById('myModal8');


// Get the button that opens the modal
let btn1 = document.getElementById("img1");
let btn2 = document.getElementById("img2");
let btn3 = document.getElementById("img3");
let btn4 = document.getElementById("img4");
let btn5 = document.getElementById("img5");
let btn6 = document.getElementById("img6");
let btn7 = document.getElementById("img7");
let btn8 = document.getElementById("img8");


// Get the <span> element that closes the modal
let span1 = document.getElementById("close1");
let span2 = document.getElementById("close2");
let span3 = document.getElementById("close3");
let span4 = document.getElementById("close4");
let span5 = document.getElementById("close5");
let span6 = document.getElementById("close6");
let span7 = document.getElementById("close7");
let span8 = document.getElementById("close8");


// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
};

btn2.onclick = function() {
    modal2.style.display = "block";
};

btn3.onclick = function() {
    modal3.style.display = "block";
};

btn4.onclick = function() {
    modal4.style.display = "block";
};

btn5.onclick = function() {
    modal5.style.display = "block";
};

btn6.onclick = function() {
    modal6.style.display = "block";
};

btn7.onclick = function() {
    modal7.style.display = "block";
};

btn8.onclick = function() {
    modal8.style.display = "block";
};




// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
};

span2.onclick = function() {
    modal2.style.display = "none";
};

span3.onclick = function() {
    modal3.style.display = "none";
};

span4.onclick = function() {
    modal4.style.display = "none";
};

span5.onclick = function() {
    modal5.style.display = "none";
};

span6.onclick = function() {
    modal6.style.display = "none";
};

span7.onclick = function() {
    modal7.style.display = "none";
};

span8.onclick = function() {
    modal8.style.display = "none";
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }

         if (event.target == modal2) {
        modal2.style.display = "none";
        }

        if (event.target == modal3) {
        modal3.style.display = "none";
        }

        if (event.target == modal4) {
        modal4.style.display = "none";
        }

         if (event.target == modal5) {
        modal5.style.display = "none";
         }

        if (event.target == modal6) {
            modal6.style.display = "none";
        }

        if (event.target == modal7) {
            modal7.style.display = "none";
        }

        if (event.target == modal8) {
            modal8.style.display = "none";
        }

    };
