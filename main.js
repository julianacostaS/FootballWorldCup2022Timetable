function createGame(player1, hour, player2) {
    return ` <li>
    <img src="./images/icon=${player1}.svg" alt="${player1}
            flag" />
    <strong>${hour}</strong>
    <img src="./images/icon=${player2}.svg" alt="${player2}
            flag" />
</li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;

    return `
    <div class="card style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
       ${games}
    </ul>
</div>
    `
}
document.querySelector("#cards").innerHTML =
    createCard(
        "25/11",
        "thursday",
        createGame("uruguay", "12:00am", "south korea") +
        createGame("portugal", "03:00am", "ghana") +
        createGame("brazil", "06:00am", "serbia") +
        createGame("wales", "09:00pm", "iran")
    ) +
    createCard(
        "29/11",
        "tuesday",
        createGame("south korea", "12:00am", "ghana") +
        createGame("brazil", "03:00am", "switzerland") +
        createGame("portugal", "06:00am", "uruguay")

    ) +
    createCard("03/12", "saturday", createGame("brazil", "06:00am", "cameroon") + createGame("brazil", "06:00am", "cameroon") + createGame("brazil", "06:00am", "cameroon"))