$(document).ready(() => {
    // Getting references to our form and input
    const feedbackForm = $("form.feedback");
    const nameInput = $("input#name-field");
    const commentInput = $("input#comment-text");
  
    // When the signup button is clicked, we validate the email and password are not blank
    feedbackForm.on("submit", event => {
      event.preventDefault();
      const inputData = {
        name: nameInput,
        comment: commentInput,
      };
  
  
      // If we have an email and password, run the signUpUser function
      addComment(inputData.name, inputData.comment);
      nameInput;
      commentInput;
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function addComment(name, comment) {
      $.post("/api/feedback", {
        name: name,
        comment: comment
      })
        .then(() => {
          alert("Thank you for your suggestion!");
        })
        .catch();
    }
  });
  