// Get the form element and submit button
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

// Add event listener to the submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form from submitting normally
  submitForm(); // Call the function to handle the form submission
});

// Function to handle the form submission
function submitForm() {
  // Get the values of all the form inputs
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;
  const role = document.getElementById("role").value;
  const recommend = document.querySelector('input[name="recommend"]:checked')?.value;
  const checkboxes = document.querySelectorAll('input[name="box"]:checked');
  const languages = [...checkboxes].map((checkbox) => checkbox.value);

  const comment = document.getElementById("comment").value;

  // Create an object with the form data
  const formData = {
    name,
    phoneNumber,
    email,
    age,
    country,
    role,
    recommend,
    languages,
    comment,
  };

  // Log the form data to the console (for testing purposes)
  console.log(formData);

  // Here, you can add code to send the form data to a server or perform any other action with it
}
