let searchInput = document.querySelector(".searchInput");   

const url = "https://api.github.com/users/";

const fetchProfile = async() => {

    try {
        const response = await fetch(`${url}SaleenaAhuja20`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}