var tableNo=10;

window.onload = function () {
  debugger;
  var date=$("#date").val();
      var time=$("#time").val();
      var email=$("#email").val();
      var tel=$("#tel").val();
      var no_adults=document.getElementById("no_adults").value;
      var no_childrens=document.getElementById("no_children").value;
      var allergies=document.getElementById("Allergies").value;

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
   
            
          
     
    $(".submit-btn").click(function(){
      debugger;
      var date=$("#date").val();
      var time=$("#time").val();
      var email=$("#email").val();
      var tel=$("#tel").val();
      var no_adults=document.getElementById("no_adults").value;
      var no_childrens=document.getElementById("no_children").value;
      var allergies=document.getElementById("Allergies").value;
           
        if (confirm('Do you want to book a reservation for '+date+' date?'+ 'table number is ='+tableNo  )) {
         
            sendMail(date,time,email,tel,no_adults,no_childrens,allergies);
            
            tableNo--;
                   
          } else {
           
          } 
        
    });
    
    function clearForm() {
        document. getElementById('date'). value = ""; 
        document. getElementById('time'). value = "";
        document. getElementById('email'). value = "";
        document. getElementById('tel'). value = "";
        document. getElementById('no_adults'). value = "";
        document. getElementById('no_children'). value = "";
        document. getElementById('Allergies'). value = "";
       
    }
    function sendMail(date,time,email,tel,no_adults,no_childrens,allergies) {
        Email.send({
            Host : "send.one.com",
            Username : "noreply@ahoora.se",
            Password : "AwSeDr@!220",
            To : email,
            From : "noreply@ahoora.se",
            Subject : "Circus Restaurant Reservation for " + date,
           Body: "<html>You made a reservation on <h2>" 
            + date 
            +" "
            +time 
            +" O'Clock</h2>.<br/> for <b>"
            +no_adults
            + "</b> Adults and <b>"
            + no_childrens 
            +"</b> Children.<br/> Also you mentiontion <b>"
            +allergies
            +"</b> as allergies.</html>"
        });
    }

    

}