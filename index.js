AOS.init();

var quote = document.getElementById("quote");
var author = document.getElementById("author");
var changeQuote = document.getElementById("changeQuote");
var adfb = document.getElementById("adfb")

let realData = " ";
let quoteData = " ";

const postfacebook = () => {
   let post = `https://twitter.com/intent/tweet?text=${quoteData.text} By ${quoteData.author}`
   window.open(post)
}


const getNewQuotes = () =>{
    let random_num = Math.floor(Math.random()*1642);
    
    quoteData = realData[random_num]
    quote.innerText = `${quoteData.text}`

    if(quoteData.author == null){
        author.innerText = "UnKnown"
    }
    else{
        author.innerText = ` By  ${quoteData.author}`
    }

};




const getQuotes = async () =>{
    const api = "https://type.fit/api/quotes"
    try{
        let data = await fetch(api)
        realData = await data.json()
        // console.log(realData[0])
        getNewQuotes();
    }
    catch (error) {
       
    }


}
adfb.addEventListener("click",postfacebook)
changeQuote.addEventListener("click",getNewQuotes)
getQuotes()