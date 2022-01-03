let h = document.querySelector('h1')
let outer=document.querySelector('#outer')
let player1 = document.querySelector('#p1')
let player2 = document.querySelector('#p2')
let rst = document.querySelector('#reset')
let s=document.querySelector('select')
let win=document.createElement('h3')
win.innerText='I Love Myself'
win.style.width='300px'
win.style.height='200px'
outer.prepend(win)
win.style.marginRight='20%'
win.style.color='white'
win.style.fontSize='50px'
win.style.backgroundColor='rgba(173, 173, 173, 0.5)'
win.style.textAlign='center'
win.style.wordSpacing='20px'
win.style.visibility='hidden'
let p1_score = 0
let p2_score = 0
let max=3
function update(p){
    p+=1
    return p
}
function winner(){
    if (p1_score==max){
        win.innerText='Player 1 Wins'
        win.style.visibility='visible'
    }
    else if(p2_score==max){
        win.innerText='Player 2 Wins'
        win.style.visibility='visible'
    }
    else if(p1_score==0 && p2_score==0){
        win.style.visibility='hidden'
    }
}
function set(){
    h.innerText=p1_score
    h.append(` to ${p2_score}`)
}
s.addEventListener('change',()=>{
    max=parseInt(s.value)
})
player1.addEventListener('click', () => {
    if (p1_score<max && p2_score<max){
        p1_score =update(p1_score)
        winner()
        set() 
    }
})
player2.addEventListener('click', () => {
    if (p1_score<max && p2_score<max){
        p2_score =update(p2_score)
        winner()
        set()}  
})
rst.addEventListener('click',()=>{
    p1_score=0
    p2_score=0
    set()
    winner()
})