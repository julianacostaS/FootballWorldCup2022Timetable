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
        "23/11",
        "wednesday",
        createGame("denmark", "12:00am", "tunisia") +
        createGame("mexico", "03:00am", "poland") +
        createGame("france", "06:00am", "australia") +
        createGame("morocco", "09:00pm", "croatia")
    ) +

    createCard(
        "25/11",
        "thursday",
        createGame("uruguay", "12:00am", "south korea") +
        createGame("portugal", "03:00am", "ghana") +
        createGame("brazil", "06:00am", "serbia") +
        createGame("wales", "09:00pm", "iran")
    ) +

    createCard(
        "26/11",
        "friday",
        createGame("qatar", "12:00am", "senegal") +
        createGame("netherlands", "03:00am", "ecuador") +
        createGame("england", "06:00am", "usa") +
        createGame("tunisia", "09:00pm", "australia")
    ) +


    createCard(
        "27/11",
        "saturday",
        createGame("poland", "12:00am", "saudi arabia") +
        createGame("france", "03:00am", "denmark") +
        createGame("argentina", "06:00am", "mexico") +
        createGame("japan", "09:00pm", "costa rica")
    ) +

    createCard(
        "29/11",
        "tuesday",
        createGame("south korea", "12:00am", "ghana") +
        createGame("brazil", "03:00am", "switzerland") +
        createGame("portugal", "06:00am", "uruguay")
    ) +

    createCard(
        "01/12",
        "thursday",
        createGame("tunisia", "02:00am", "france") +
        createGame("australia", "02:00am", "denmark") +
        createGame("poland", "06:00am", "argentina") +
        createGame("saudi arabia", "06:00am", "mexico")
    ) +


    createCard("03/12", "saturday",
        createGame("south korea", "02:00am", "portugal") +
        createGame("ghana", "02:00am", "uruguay") +
        createGame("serbia", "06:00am", "switzerland") +
        createGame("cameroon", "06:00am", "brazil")
    )