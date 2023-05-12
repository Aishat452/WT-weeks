// I get the form element and submit button
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

// I added an event listener to the submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form from submitting normally
  submitForm(); // Call the function to handle the form submission
});

// I wrote the function that should handle the form submission
function submitForm() {
  // Getting all the form inputs values
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

  // An object with the form data, though I thought of using array
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

  // Log the form data to the console (for assignment submission purposes)
  console.log(formData);
}
