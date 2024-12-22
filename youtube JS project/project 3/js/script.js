const quotes=[
    "love is the most interesting thing.",
    "The only way to do great work is to love what you do.",
    "Love is more than knowledge.",
    "wisdome gives life.",
    "get busy living or get busy dying.",
    "the purpose of our life is sola de gloria.",
    "sola fide gives life for me .",
    "sola scriptura is the assurance of other solas.",
    "sola chirstus is denaing ourseleve.",
]

const usedIndex= new Set()
const qouteElement= document.getElementById("Qoute")

function generateQoute(){

      if(usedIndex.size >= quotes.length){
         usedIndex.clear()
     }

while(true){
    let randomIdex=Math.floor(Math.random() * quotes.length)

    if(usedIndex.has(randomIdex))continue
    const qoute=quotes[randomIdex]
    qouteElement.innerHTML=qoute;
    usedIndex.add(randomIdex)
    break
}
}