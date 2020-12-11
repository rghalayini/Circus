var tableNo=10;

window.onload = function () {
    var date=$("#date").val();
    var time=$("#time").val();
    var name=$("#name").val();
    var email=$("#email").val();
    var tel=$("#tel").val();
    var no_Companions=document.getElementById("no_Companions").value;
   
  
    
   
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
        title: 'You made a reservation',
        text:reservation._date +" "+ reservation._time +" for you and "+reservation._no_Companions +" Persons", 
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText:'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        
        Swal.fire('Saved!', 'The information has been sent to your email', 'success')
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
        errrormessage+="Name is mandatory , ";
        
         }    
           if(email =="" ) {
            errrormessage+="Email is mandatory ,  ";
                   
             }
             if(date =="" ) {
                errrormessage+="Date is mandatory , ";
        
                
                 }
                 if(time =="" ) {
                    errrormessage+="Time is mandatory ";
        
                    
                     }
                     

             if(errrormessage!=""){
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
            Username : "noreply@ahoora.se",
            Password : "AwSeDr@!220",
            To : reservation._email,
            From : "noreply@ahoora.se",
            Subject : "Circus Restaurant Reservation for " + reservation._date,
           Body: "<html><h2> Dear "
           +reservation._name 
           +"</h2><b>You made a reservation on </b><h2>" 
            + reservation._date 
            +" "
            +reservation._time 
            +" O'Clock</h2><br/> <b>for"
            + " You and <b> "
            + reservation._no_Companions 
            +"</b> Companions.<br/> Also you mentiontion <b>"
            
        });
    }

    

}