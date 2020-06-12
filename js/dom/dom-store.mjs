import {data} from '/js/data.mjs';



export const creationBuilding = (newBakery) => {  
    for ( let i = 0 ; i < data.length ; i++){
    
        let divBuilding = document.getElementById('buildings')
    
        let divTuile = document.createElement('div') 
        divTuile.id=`building-${newBakery.buildings[i].name.toLowerCase()}`
        divTuile.className='locked disabled'
        divBuilding.appendChild(divTuile)
    
        let divIcon = document.createElement('div')
        divIcon.className='icon'
        divTuile.appendChild(divIcon)
            
        let divName = document.createElement('div')
        divName.className='name'
        divName.innerHTML= newBakery.buildings[i].name
        divTuile.appendChild(divName)
    
        let divCost = document.createElement('div')
        divCost.className='cost'
        divCost.innerHTML= newBakery.buildings[i].cost
        divTuile.appendChild(divCost)
    
        let divNumber = document.createElement('div')
        divNumber.className='number'
        divTuile.appendChild(divNumber)
    
        if (i < data.length - 3){
            divTuile.style.display = "flex"
        } else {
            divTuile.style.display = "none"
        }
    
        divTuile.addEventListener('click', (handleCheck));

        function handleCheck() {
         if ( divTuile.className == 'unlocked enabled'){
            let divNumber = this.querySelector('.number')
            let divCost = this.querySelector('.cost')
            let divName = this.querySelector('.name')
           
            for( let i = 0; i< data.length; i++){
            newBakery.buildings[i].number = divNumber.innerHTML
            newBakery.buildings[i].cost= divCost.innerHTML 
            newBakery.buyBuilding(divName.innerHTML)
            divNumber.innerHTML = newBakery.buildings[i].number
            divCost.innerHTML = newBakery.buildings[i].cost
            
            }
            
        audioTuiles()
            let clickSon = document.getElementsByClassName('clickTuile')
            clickSon[Math.floor(Math.random() * (4-1)+1)].play()
        }

    }

        }
    }
    
export const activateBuilding = (newBakery) => {  
    for ( let i = 0 ; i < data.length-2; i++){

        let tuilePremiereEtDeux = document.getElementById(`building-${newBakery.buildings[i].name.toLowerCase()}`)
        let tuileSuivante = document.getElementById(`building-${newBakery.buildings[i + 1].name.toLowerCase()}`)
        let tuileTroisieme = document.getElementById(`building-${newBakery.buildings[i + 2].name.toLowerCase()}`);
        
        if( newBakery.cookies >= newBakery.buildings[i].cost){ // si 16 >= 15

            tuilePremiereEtDeux.classList.remove('locked')
            tuilePremiereEtDeux.classList.remove('disabled')
            tuilePremiereEtDeux.classList.add('unlocked')
            tuilePremiereEtDeux.classList.add('enabled')

            tuileSuivante.classList.remove('locked')
            tuileSuivante.classList.add('unlocked')

            tuileTroisieme.style.display = "flex"
         
        }
    }
}



const audioTuiles = () => {  
    for ( let i = 0 ; i < data.length ; i++){

        let tuile = document.getElementById('buildings').childNodes
        for (let j = 1; j < 5; j++) {
        
            var divSon = document.createElement('audio')
            divSon.src=`/assets/sounds/buy${j}.mp3`
            divSon.className='clickTuile'
            tuile[i].appendChild(divSon)
        }
    }
}