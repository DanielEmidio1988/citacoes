const quotes = [
    {quote: 'Este é meu jeito ninja!',
    author: 'Uzumaki Naruto'},
    {quote: 'O One Piece, existe!!!',
    author: 'Edward New Gate'},
    {quote: 'Você pode morrer a qualquer momento, mas viver requer coragem.',
    author: 'Kenshin Himura'},
    {quote: 'A paz jamais será conquistada com violencia',
    author: 'L.'},
    {quote: 'Acredite no coração das cartas',
    author: 'Yugi Mutou'},
    {quote: 'Amigos podem seguir caminhos diferentes, mas não deixam de ser amigos',
    author: 'Gon Freecs'}
]

const textElement = document.querySelector('.text')
const authorElement = document.querySelector('.author')
const ButtonElement = document.querySelector('#button_quote')

function getQuote(){
    const i = Math.floor(Math.random()*quotes.length)

    textElement.textContent = quotes[i].quote
    authorElement.textContent = quotes[i].author
}

ButtonElement.addEventListener('click',getQuote)