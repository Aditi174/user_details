// https://randomuser.me/api/

const fetch_data = document.getElementById("details")

 async function apidata(){
    const result = await fetch("https://randomuser.me/api/")
    const data = await result.json()

    const getdata = data.results[0]

    const alldata = document.createElement("div")
    alldata.classList.add("container")

    const image = document.createElement("img")
    image.classList.add("image")
    image.src = getdata.picture.medium
    
    let toggel = false
    function imgsize(){
        
        if(toggel){
            image.src = getdata.picture.medium
            image.style.width = "100px"; 
            image.style.height = "100px";
        }else{
            image.src = getdata.picture.large
            image.style.width = "367px"; 
            image.style.height = "200px";

            fetch_data.style.width = "400px"
            fetch_data.style.height = "60vh"

            
            alldata.style.height = "55vh"
            alldata.style.width = "370px"

        }
    }
    image.onclick = imgsize

    const Gender = document.createElement("div")
    Gender.textContent = getdata.gender + " "

    const name = document.createElement("div")
    name.textContent = getdata.name.title +" "+ getdata.name.first +" "+ getdata.name.last

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

    fetch_data.appendChild(alldata)

 }

 apidata()
