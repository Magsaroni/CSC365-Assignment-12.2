function validateForm(){
    var charaCter = document.commForm.txtCharDrawn.value;

    
    var commType = document.commForm.txtCommType.value;

    var howMany = document.commForm.txtHowMany.value;
    

    var divMessage = document.getElementById("divMessage");

    console.log("WhichChar=" + charaCter);

    console.log("CommmisionType=" + commType);

    console.log("HowMany + howMany")

    // empty color
    var lblCharDrawn = document.getElementById("lblCharDrawn")
    var lblCommType =  document.getElementById("lblCommType")
    var lblHowMany =  document.getElementById("lblHowMany")

    lblCharDrawn.style.backgroundColor = "";
   lblCommType.style.backgroundColor = "";
   lblHowMany.style.backgroundColor = "";

   


    if (charaCter == ""){
        divMessage.textContent = "No Character was typed!";
        lblCharDrawn.style.backgroundColor = "red";
        return false;
    }

    else if (commType == "" ){
        divMessage.textContent = "No Commission Type was typed!";
        lblCommType.style.backgroundColor = "red";
        return false;
    }

    else if (howMany == "" ){
        divMessage.textContent = "No Amount of Characters were typed!";
        lblHowMany.style.backgroundColor = "red";
        return false;
    }


    return true;
}