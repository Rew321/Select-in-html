const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInput = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");
//array of countries
let countries = [
    "Australia",
    "Autria",
    "Belgium",
    "Bulgaria",
    "Bangladesh",
    "Canada",
    "Denmark",
    "England",
    "France",
    "Germany",
    "India",
    "Japan",
    "Kenya",
    "Malaysia",
    "Netherlands",
    "Philippines",
    "South Africa",
    "USA",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "United Arab Emirates",
    "United States",
    "Venezuela",
    "Zambia",
    "United Kingdom",
    "Vietnam",
    "Other"
]

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        // if selected country and country value
        let isSelected = country == selectedCountry ?  "selected" : "";
        //adding country inside li and inserting all li inside options
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi){
    searchInput.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText
}

searchInput.addEventListener("keyup", () => {
    let arr = []; //creating empty array
    let searchedVal = searchInput.value; //
    // retrieving all countries from the search input which starts with user input search
    arr = countries.filter(data => {
        return data.toLocaleLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr? arr: `<p>Oops! Country not found</p>`;
});;

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});