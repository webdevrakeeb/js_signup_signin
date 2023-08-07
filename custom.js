function showHide() {
 var shPass = document.getElementById('password');
  if( shPass.type == 'password' ) {
      shPass.type = 'text'
  } else {
    shPass.type = 'password'
  }
  if(pasVal == ''){
    jQuery('.password').html('<mark>Please Create a Strong Password</mark>')
  }
} 

jQuery('form').submit(function(){
  var firstName = jQuery('#firstName').val();
  if(firstName == '') {
    jQuery('.firstName').html('Please Enter Your Firstname').addClass('warning')
  }else {}
  
  var lastName = jQuery('#lastName').val();
  if(lastName == '') {
    jQuery('.lastName').html('Please Enter Your Lastname').addClass('warning')
  }else {}
  
  var email = jQuery('#email').val();
  if(email == '') {
    jQuery('.email').html('Please Enter Your E-mail').addClass('warning')
  }else {}
  
  var phoneNum = jQuery('#mobile').val();
   if(phoneNum == '') {
    jQuery('.phone').html('Please Enter Your Phone Number').addClass('warning')
  }else {}
  
  if(firstName && lastName && email && phoneNum !== '') {
    jQuery('.successful').text('Submit Successful').addClass('success')
  }
  
/*login page velidation*/
 var userName = jQuery('#userName').val();
 if (userName == '') {
   jQuery('.username').text('Invalid User Name').addClass('warning')
 }else {
   jQuery('.username').text('Login Successful').addClass('success')
 }
 

  
  
  
  
  
  
  
  
  
  
});

