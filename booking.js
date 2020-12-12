var tableNo=10;

window.onload = function () {
  clearForm();
    var date=$("#date").val();
    var time=$("#time").val();
    var name=$("#name").val();
    var email=$("#email").val();
    var tel=$("#tel").val();
    var no_Companions=document.getElementById("no_Companions").value;
   
  
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      function validationPhonenumber(tel) {
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return re.test(tel);
      }
      function validate() {
        const $result = $("#emailResult");
        const $result1 = $("#telResult");
        const email = $("#email").val();
        const tel=$("#tel").val();
        $result.text("");
        if(validationPhonenumber(tel)){
        }else{
            $result1.text("Telephone number is not valid");
            $result1.css("color", "red");   
        }
        if (validateEmail(email)) {
          return;
          //$result.text(email + " is valid :)");
         // $result.css("color", "green");
        } else {
          $result.text("email is not valid");
          $result.css("color", "red");
        }
        return false;
      }
      
   
    $("#date").flatpickr({
      enableTime: true,
      dateFormat: "m-d-Y",
      "disable": [
             function(date) {
             return (date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4);  // disable weekends
          }
      ],
      "locale": {
          "firstDayOfWeek": 1 // set start day of week to Monday
      }
  });
  function JSalert(reservation){

    Swal.fire({
        title: 'Your are About to make a Reservation',
        text:reservation._date +" "+ reservation._time +" For you and "+reservation._no_Companions +" Persons", 
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText:'Book',
        denyButtonText: `Cancel`,
      }).then((result) => {
        
        Swal.fire('Booked!', 'The information has been sent to your email', 'success')
        sendMail(reservation);
        tableNo--;
        clearForm();
       }
        
      )

  }
      
    
    $(".submit-btn").click(function(){
        var date=$("#date").val();
        var time=$("#time").val();
        var name=$("#name").val();
        var email=$("#email").val();
        var tel=$("#tel").val();
        var no_Companions=document.getElementById("no_Companions").value;
        var reservation={_date:date,_time:time,_name:name,_email:email,_tel:tel,_no_Companions:no_Companions};
        
        
        var errrormessage="";
       if(name =="" ) {
        errrormessage+="Name , ";
        
         }else {validate();}    
           if(email =="" ) {
            errrormessage+="Email ,   ";
                   
             }else{validate();}
             if(date =="" ) {
                errrormessage+="Date , ";
                        
                 }else{validate();}
                 if(time =="" ) {
                    errrormessage+="Time , ";                         
                     }
                     
                     if(tel =="" ) {
                      debugger;
                      errrormessage+="Tel , ";                           
                       }else{validate();}
          
             if(errrormessage!=""){
              errrormessage+="is mandatory";
                Swal.fire('Try a gain!', errrormessage, '');
                 return false;
             }else{
                
                JSalert(reservation); 
             }
            
            
                  
        
    });
    
    function clearForm() {
        document. getElementById('date'). value = ""; 
        document. getElementById('time'). value = "";
        document. getElementById('name'). value = "";
        document. getElementById('email'). value = "";
        document. getElementById('tel'). value = "";
        document. getElementById('no_Companions'). value = "";
      
       
    }
    function sendMail(reservation) {
        Email.send({
            Host : "send.one.com",
            Username : "sobhi@cloudulu.com",
            Password : "Nour070715",
            To : reservation._email,
            From : "sobhi@cloudulu.com",
            Subject : "Circus Grill Reservation for " + reservation._date,
           Body: "<html><h1> Congratulations!!  "
           +reservation._name 
           +"</h2>And thank you for making a reservation At The Circus Grill.<h2>"
           +" <br/> We are expecting you on The"
            + reservation._date 
            +" / "
            +reservation._time 
            +" O'Clock.</h2><br/> We look forward to your visit and hope we will be enjoying your meal and the Circus experience at Circus Grill as much as we will be enjoying your company."
            + "<br/>See you very soon / [or day of reservation],"
            // + reservation._no_Companions 
            +" <br/>sincerely Tony Montana, Restaurant manager"
            
        });
    }

    

}



