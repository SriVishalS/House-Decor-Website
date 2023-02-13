var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.querySelector(".loaderWrapper").style.display = "none";
}
//! ---------- MAIL CONFIG--------------
sendEmail = () => {
  const usrObj2 = {
    from_name: document.getElementById("cName").value,
    from_email: document.getElementById("cMail").value,
    from_number: document.getElementById("cNumber").value,
    from_number: document.getElementById("cMessage").value,
  };
  emailjs.send("service_t1v18zn", "template_hc934en", usrObj2).then((res) => {
    alert("Mail Reached, We Will Reach You Shortly");
  });
};
subscribe = () => {
  const usrObj2 = {
    from_name: document.getElementById("sMail").value,
  };
  emailjs.send("service_yfz6djm", "template_sk8z21j", usrObj2).then((res) => {
    alert("Thanks For Reaching Us! And Subscribed");
  });
};
