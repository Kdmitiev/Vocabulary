let eng = document.querySelector('.eng_b');
let chin = document.querySelector('.chin_b');
//console.log(eng)

function open_english(){
    //window.location.replace('C:\Users\user\Desktop\Vocabulary\english_dictionary_by_nikita')
    window.location.href = '../english_dictionary_by_nikita/index.html'
    
    //console.log("nothing happened")
}

function open_chinese(){
    //window.location.replace('C:\Users\user\Desktop\Vocabulary\english_dictionary_by_nikita')
    window.location.href = '../chinese/index.html'
    
    //console.log("nothing happened")
}

eng.addEventListener("click", open_english);
chin.addEventListener("click", open_chinese);