// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch('https://randomuser.me/api/')
  .then(response => {
    return response.json();
  })
  .then(json => {
    let data = json["results"];
    let full_name = document.getElementById("fullname");
    full_name.textContent = data[0]["name"]["first"] + " " + data[0]["name"]["last"];
    let email = document.getElementById("email");
    email.textContent = data[0]["email"];
    let street = document.getElementById("street");
    street.textContent = `${data[0]["location"]["street"]["number"]} ${data[0]["location"]["street"]["name"]}`;
    let city = document.getElementById("city");
    city.textContent = data[0]["location"]["city"];
    let state = document.getElementById("state");
    state.textContent = data[0]["location"]["state"];
    let postcode = document.getElementById('postcode');
    postcode.textContent = data[0]["location"]["postcode"];
    let phone = document.getElementById('phone');
    phone.textContent = data[0]["phone"];
    let cell = document.getElementById("cell");
    cell.textContent = data[0]["cell"];
    let dob = document.getElementById("date_of_birth");
    dob.textContent = data[0]["dob"]["date"];
  })
});
