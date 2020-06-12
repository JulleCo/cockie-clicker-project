import {activateBuilding} from '/js/dom/dom-store.mjs';

let h2Bakery = document.querySelector('h2')
let spanCookieStock = document.getElementById('cookiesStock').getElementsByTagName('span')
let divBigCookie = document.querySelector('#bigCookie')


export const infosDom = (newBakery) => { 
   
    h2Bakery.innerHTML = newBakery.name

    spanCookieStock[0].innerHTML = newBakery.cookies
    
    let spanCookiesPerSecond = document.querySelector('#cookiesPerSecond span')
    spanCookiesPerSecond.innerHTML = newBakery.cookiesPerSecond
    // spanCookiesPerSecond.innerHTML =  Math.round(newBakery.cookiesPerSecond * 10) / 10
}


export const ajoutCookies = (newBakery) => {  

divBigCookie.addEventListener('click', (event)=>{
    newBakery.bakeCookies(newBakery.cookiesPerClick)
    activateBuilding(newBakery)

    let divPlusOne = document.createElement('div')
    divPlusOne.className = 'up'
    divPlusOne.innerHTML = `+${newBakery.cookiesPerClick}`
    divPlusOne.style.top = event.clientY + "px";
    divPlusOne.style.left = event.clientX + "px";
    divBigCookie.appendChild(divPlusOne)

    divPlusOne.addEventListener('animationend', ()=>{
        divBigCookie.removeChild(divPlusOne)
    })

    audioCookie()
    let clickSon = document.getElementsByClassName('clickCookie')
    clickSon[Math.floor(Math.random() * (7-1)+1)].play()
    
    spanCookieStock[0].innerHTML = newBakery.cookies
    // spanCookieStock[0].innerHTML = Math.floor(newBakery.cookies);  
})

}

const audioCookie = () => {  
    for (let i = 1; i < 8; i++) {
        
        let divSon = document.createElement('audio')
        divSon.src=`/assets/sounds/click${i}.mp3`
        divSon.className='clickCookie'
        divBigCookie.appendChild(divSon)
    
    }
    }
    

   