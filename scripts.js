const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")


let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = 
            user.firstName.toLowerCase().includes(value) || 
            user.salary.toLowerCase().includes(value)
         user.element.classList.toggle("hide", !isVisible)
    })
})

let mList = [
    {
      firstName: "Kiran1",
      lastName: "Kumar",
      salary: 25000,
    },
    {
      firstName: "Mohan1",
      lastName: "Srivastav",
      salary: 20000,
    },
    {
      firstName: "Mary1",
      lastName: "Kom",
      salary: 23000,
    },
    {
      firstName: "Kiran2",
      lastName: "Kumar",
      salary: 28000,
    },
    {
      firstName: "Mohan2",
      lastName: "Srivastav",
      salary: 30000,
    },
    {
      firstName: "Mary2",
      lastName: "Kom",
      salary: 43000,
    },
  ];

users = mList.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = user.firstName
    body.textContent = user.salary
    userCardContainer.append(card)

    return { name: user.firstName, salary: user.salary, element: card }

});


