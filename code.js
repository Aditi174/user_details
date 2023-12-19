// https://randomuser.me/api/

let DetailsContainer = document.getElementById("details")

let toggel = true
function ImageEnlarg(image, getdata) {
    
    if (toggel) {
        image.src = getdata.picture.medium
        image.style.width = "200px"; 
        image.style.height = "200px";
    } else {
        image.src = getdata.picture.large
        image.style.width = "400px"; 
        image.style.height = "400px"
        
    }
    
    toggel = !toggel
}

async function RandonmUserData() {
    const result = await fetch("https://randomuser.me/api/")
    const data = await result.json()

    const getdata = data.results[0]

    const alldata = document.createElement("div")
    alldata.classList.add("container")

    const image = document.createElement("img")
    image.classList.add("image")
    image.src = getdata.picture.medium
    image.onclick = ()=> ImageEnlarg(image, getdata)



    const Gender = document.createElement("div")
    Gender.textContent = getdata.gender + " "

    const name = document.createElement("div")
    name.textContent = getdata.name.title + " " + getdata.name.first + " " + getdata.name.last

    const street = document.createElement("div")
    street.textContent = getdata.location.street.name

    const city = document.createElement("div")
    city.textContent = getdata.location.city

    const state = document.createElement("div")
    state.textContent = getdata.location.state

    const country = document.createElement("div")
    country.textContent = getdata.location.country

    const postcode = document.createElement("div")
    postcode.textContent = getdata.location.postcode

    const timezone = document.createElement("div")
    timezone.textContent = getdata.location.timezone.description

    const user_email = document.createElement("div")
    user_email.textContent = getdata.email

    alldata.appendChild(image)
    alldata.append(Gender)
    alldata.appendChild(name)
    alldata.appendChild(street)
    alldata.append(city)
    alldata.appendChild(state)
    alldata.appendChild(country)
    alldata.appendChild(postcode)
    alldata.appendChild(timezone)
    alldata.appendChild(user_email)

    DetailsContainer.appendChild(alldata)
}


RandonmUserData()
