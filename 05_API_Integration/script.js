const button = document.getElementById("loadBtn");
const container = document.getElementById("userContainer");

button.addEventListener("click", async function () {

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    container.innerHTML = "";

    data.forEach(user => {
      const div = document.createElement("div");
      div.classList.add("user-card");

      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.log("Error:", error);
  }

});