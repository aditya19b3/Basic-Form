document
  .getElementById("customerSurveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // stop the form from submitting

    // validations (more can be added as necessary)
    let genderBoxes = document.querySelectorAll('input[name="gender"]:checked');
    if (genderBoxes.length === 0) {
      alert("Please select a gender.");
      return;
    }

    // Display a popup with form values
    let message = `
    First Name: ${document.getElementById("fname").value}
    Last Name: ${document.getElementById("lname").value}
    Date of Birth: ${document.getElementById("dob").value}
    Country: ${document.getElementById("country").value}
    Gender: ${Array.from(genderBoxes)
      .map((box) => box.value)
      .join(", ")}
    Profession: ${document.getElementById("profession").value}
    Email: ${document.getElementById("email").value}
    Mobile: ${document.getElementById("mobile").value}
    `;

    alert(message);

    // Reset the form after displaying values
    document.getElementById("customerSurveyForm").reset();
  });
