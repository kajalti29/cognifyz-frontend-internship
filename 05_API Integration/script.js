const button = document.getElementById("loadBtn");
const container = document.getElementById("userContainer");

button.addEventListener("click", function () {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      container.innerHTML = ""; // Clear previous data

      data.forEach(function(user) {
        const div = document.createElement("div");
        div.classList.add("user-card");

        div.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>City: ${user.address.city}</p>
        `;

        container.appendChild(div);
      });

    })
    .catch(function(error) {
      console.log("Error:", error);
    });

});