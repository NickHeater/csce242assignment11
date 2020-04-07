async function getRappers() {
    let response = await fetch('http://localhost:3000/api/rappers');
    let rappersJSON = await response.json();
    let rappersDiv = document.getElementById("rappers");
    
    //loops through list of rappers in the JSON file
    for(i in rappersJSON) {
        let rapper = rappersJSON[i];
        rappersDiv.append(getRapperItem(rapper));
    }
}

function getRapperItem(rapper) {
    let rapperSection = document.createElement("section");
    rapperSection.classList.add("rapper-section")

    let imgElem = document.createElement("img")
    imgElem.src = "http://localhost:3000/" + rapper.img;
    imgElem.width = "225";
    imgElem.height = "225";
    imgElem.className = "pic";
    rapperSection.append(imgElem);

    let aliasElem = document.createElement("p")
    aliasElem.textContent = `${rapper.alias}`
    rapperSection.append(aliasElem);

    let nameElem = document.createElement("p")
    nameElem.textContent = `Real Name: ${rapper.name}`
    rapperSection.append(nameElem);
    
    let heightElem = document.createElement("p")
    heightElem.textContent = `Height: ${rapper.height}`
    rapperSection.append(heightElem);

    let ageElem = document.createElement("p")
    ageElem.textContent = `Age: ${rapper.age}`
    rapperSection.append(ageElem);

    let albumsElem = document.createElement("p")
    albumsElem.textContent = `Albums to try: ${rapper.albums}`
    rapperSection.append(albumsElem);

    return rapperSection;
}

window.onload = function() {
    this.getRappers();
}