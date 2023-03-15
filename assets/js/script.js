// Make a GET request to the /api endpoint
url= "https://ci-jshint.herokuapp.com/api?api_key=atJNtLjZRmDt_sSLTnEzg0134q4"

const API_KEY = "atJNtLjZRmDt_sSLTnEzg0134q4";
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultsModal = new bootstrap.Modal(document.getElementsById("resultsModal"))

document.getElementsById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }
}