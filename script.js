/*
index.html
Function that highlights the text box making it easier to read and understand. 
*/
const highlighter = (selected, ignored1, ignored2) => {
    if (!document.getElementById(selected)) {
        return;
    }
    document.getElementById(selected).onmouseover = () => {
        let highlighted = document.getElementById(selected).style.backgroundColor = "#ECECEC";
        let ignored = [ignored1, ignored2];
        for (let i = 0; i < ignored.length; i++) {
            document.getElementById(ignored[i]).style.backgroundColor = "#FFFFFF"
        }
    }
}
highlighter("basic-dog-info", "basic-cat-info", "basic-delivery-info");
highlighter("basic-cat-info", "basic-dog-info", "basic-delivery-info");
highlighter("basic-delivery-info", "basic-dog-info", "basic-cat-info");


/*
info.html
Function to handle switching between the four divs, dog care, cat care, youtube video, and a table
*/

if (document.getElementById("show-next-data")) {
    const infoData = document.querySelectorAll("#info-content>div");
    let index = 0;
    infoData.forEach(switchData);
    document.getElementById("show-next-data").onclick = switchData;

    function switchData() {
        infoData[index].style.display = "none";
        infoData[index = (index + 1) % infoData.length].style.display = "block";
    }
}




/*
contact.html
Function to handle pop up of form data and to open email client to send information
*/

const sendEmail = (event) => {
    if (!document.getElementById("contact-area")) {
        return;
    }

    let email = document.getElementById("contact-email").value;
    let tel = document.getElementById("contact-tel").value;
    let name = document.getElementById("contact-first-name").value;
    let lastName = document.getElementById("contact-last-name").value;
    let inquiry = document.getElementById("contact-inquiry").value;


    let data = email + " || " + tel + " || " + name + " " + lastName + " \n " + inquiry;
    alert(data);

    window.location.href = "mailto:" + email + "?subject=" + name + " " + lastName + "&body=" + inquiry;

}