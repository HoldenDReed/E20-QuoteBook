// const quotes = [
//     {
//         id: 1,
//         date: "08/02/2022",
//         authorId: 1,
//         quote: "You can totally do this.",
//         hashTags: ["AI", "Skynet", "Amazon"],
//         alive: false,
//     },
//     {
//         id: 2,
//         date: "08/01/2022",
//         authorId: 2,
//         quote: "Watching code is a great way to learn.",
//         hashTags: ["Javascript", "Bananas", "Zen"],
//         alive: true,
//     },
//     {
//         id: 3,
//         date: "07/27/2022",
//         authorId: 3,
//         quote: "Not holding your hand.",
//         hashTags: ["Blanched Almonds", "Important things", "Remember", "Diamond"],
//         alive: true,
//     },
//     {
//         id: 4,
//         date: "07/26/2022",
//         authorId: 4,
//         quote: "Ask for help, even if you break companies website.",
//         hashTags: ["Chemestry", "Lead", "Gas"],
//         alive: true,
//     }
// ]
const API = "http://localhost:8080"
const applicationState = {
    quotes: [],
    authors: []
}

export const fetchQuotes = async () => {
    const quotes = await fetch(`${API}/quotes`)
    const quotesReponse = await quotes.json() //changes to Javascript
    applicationState.quotes = quotesReponse
}

export const fetchAuthors = async () => {
    const authors = await fetch(`${API}/authors`)
    const authorsReponse = await authors.json() //changes to Javascript
    applicationState.authors = authorsReponse
}

export const getQuotes = () => {
    const copyOfQuotes = applicationState.quotes.map(quote => ({ ...quote }))
    return copyOfQuotes
}

export const getAuthors = () => {
    const copyOfAuthors = applicationState.authors.map(author => ({ ...author }))
    return copyOfAuthors
}

export const getAuthorIds = () => {
    const authorIds = applicationState.quotes.map(quote => {
        return quote.authorId
    })
    return authorIds
}

// export const getNewQuoteId = () => {
//     let highestQuoteId = 0
//     if (quotes.length > 0) {
//         highestQuoteId = quotes.sort((a, b) => b.id - a.id)[0].id
//     }
//     return highestQuoteId + 1
// }

export const addNewQuote = async (newQuote) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuote)
    }
    const response = await fetch(`${API}/quotes`, fetchOptions)
    const responseJson = await response.json(response)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
