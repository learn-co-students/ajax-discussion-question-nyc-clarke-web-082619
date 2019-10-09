const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch ('https://randomuser.me/api') // returns promise
    .then (resp => {
      // console.log(resp.json())
      return resp.json()
    })
    .then (json => {
      let results = json.results
      // let resultTag = document.getElementById(
      let profilePicture = document.getElementById('profile_picture')
      profilePicture.src = results[0]["picture"]["medium"]
    })
    


});


