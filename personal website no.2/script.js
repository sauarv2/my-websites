const texts = ['Loream Ipsum' ,'Web Devloper','UI/UX Designer' ];
let count = 0;
let index= 0;
let currentText = " ";
let letter = '';

 console.log(texts.length);

(function type(){
    if(count===texts.length){
        count=0;
    }
    (currentText = texts[count] )
    document.querySelector('.autoText').textContent = letter;
    letter = currentText.slice(0,++index)
    if(letter.length===currentText.length){
        count++;
        index=0;
        // console.log( "letter"+letter.length)
        // console.log("current"+currentText.length)
    }
    setTimeout(type,300);  
})();
