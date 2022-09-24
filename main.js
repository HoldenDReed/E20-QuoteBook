import { fetchQuotes, fetchAuthors } from "./quotes.js"
import {displayQuotes} from "./quotesDOM.js"

const mainContainer = document.getElementById("quotes")

const render = async () => {
    await fetchQuotes()
    await fetchAuthors()
    mainContainer.innerHTML = displayQuotes()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
})
