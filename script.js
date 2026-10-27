const form = document.querySelector("form")
const digitar = document.getElementById("digitar")
const guest = document.querySelector("ul")
const button = document.querySelectorAll(".btn-remover")
const back = document.querySelector("#btn-voltar")

digitar.addEventListener ("input", () => {
    
    digitar.value = digitar.value
    
})

form.onsubmit = (event) => {
    event.preventDefault()
    if (digitar.value.trim() === "")return
    const newGuest = document.createElement("li")

    const input = document.createElement("input")
    input.type = "checkbox"

    const guestName = document.createElement("label")
    guestName.textContent = digitar.value

    const button = document.createElement("button")
    button.type = "button"
    button.className = "btn-remover"
    button.textContent = "🗑️"

    button.addEventListener("click", (event)=>{
    event.currentTarget.parentElement.remove()
    console.log(event)
})
    newGuest.append(input, guestName, button)
    guest.append(newGuest) 
    
    digitar.value = ""
}

button.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        event.currentTarget.parentElement.remove()
    })
})

if(back){
back.addEventListener("click", (event)=>{
    event.preventDefault()
    window.history.back()
    console.log(event)
})
}










 