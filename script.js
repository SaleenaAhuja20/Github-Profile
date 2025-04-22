let searchInput = document.querySelector(".searchInput");  
let searchButton = document.querySelector(".btn");
let profileBox = document.querySelector(".profile-box");

const url = "https://api.github.com/users";

const fetchProfile = async() => {

    const userName = searchInput.value;

    try {
        const response = await fetch(`${url} / ${userName}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log({error});
    }
}

searchButton.addEventListener("click", () =>{
    profileBox.remove(".hide");
    fetchProfile();
});