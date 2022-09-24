import { addNewQuote, getQuotes, getAuthors } from "./quotes.js"

console.log("Im here today")

// move to json-server
// const authors = [
//     {
//         id:1,
//         firstName:"Alexa"
//     },
//     {
//         id:2,
//         firstName:"Trevor"
//     },
//     {
//         id:3,
//         firstName:"Sydney"
//     },
//     {
//         id:4,
//         firstName:"Lynn"
//     }
// ]


const htmlString = '<h1>Im from JavaScript</h1>'
document.getElementById('quotesHeader').innerHTML = htmlString
// const authorList = () => {
//     const authors = getAuthors()
// let htmlAuthors = '<ul>'
// for(let author of authors){
//     console.log(author)
//     htmlAuthors += `<li>${author.firstName}</li>`
// }
// htmlAuthors += '</ul>'
// document.getElementById('authorsList').innerHTML = htmlAuthors
// }
// authorList()


export const displayQuotes = () => {
    const quotes = getQuotes()
    const authors = getAuthors()
let htmlQuotes = ""
for (let quote of quotes){
    const author = authors.find(author => author.id === quote.authorId)
    htmlQuotes += 
    `<div class="singleQuote">
    <p>${quote.quote}</p>
    <p>${author.firstName}</p>
    </div>`
}
return htmlQuotes
// document.getElementById('quotes').innerHTML = htmlQuotes
}
// displayQuotes()

document.addEventListener("click", (e) => {
    if(e.target.id == "submitNewQuote"){
        const authors = getAuthors()
        const quote = document.getElementById("quoteText").value
        const authorText = document.getElementById("authorText").value

        const authorObj = authors.find(author => author.firstName === authorText)

        const alive = document.querySelector("input[name=alive]:checked")?.value;
        const isAlive = alive === "true" ? true : false

        const newQuote = {
            date: "8/30/2022",
            authorId: authorObj.id,
            quote: quote,
            hashtags: [],
            isAuthorAlive: isAlive
        }
        addNewQuote(newQuote)
    }
})


//Make a sdon file
//Move data to json file
//Serve file

