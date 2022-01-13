function validateEmail(email) {
  // regex pattern for email
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;

  // check if the email is valid
  let result = re.test(email);
  if (result) {
    console.log("The email is valid.");
  } else {
    console.log("email is not valid");
  }
}

validateEmail("aksha@deq.com");
