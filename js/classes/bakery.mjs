import {Building} from '/js/classes/building.mjs';
import {data} from '/js/data.mjs';

export class Bakery{
    constructor(name, cookies, cookiesPerClick , cookiesPerSecond ){
        this._name = name || 'Shirini Foroushi';
        this._cookies = cookies || 0 ;
        this._buildings = data.map(building => { return new Building(building)});
        this._cookiesPerClick = cookiesPerClick || 1;
        this._cookiesPerSecond = cookiesPerSecond || 0 ;  
    }
    get name(){
        return this._name;
    }
    get cookies(){
        return this._cookies;
    }
    get buildings(){
        return this._buildings;
    }
    get cookiesPerClick(){
        return this._cookiesPerClick;
    }
    get cookiesPerSecond(){
        return this._cookiesPerSecond;
    }
    set cookiesPerSecond(newCookiesPerSecond){
        this._cookiesPerSecond = newCookiesPerSecond
    }
    set buildings(newBuilding){
        this._buildings =newBuilding
    }
set cookies(newStock) {
        this._cookies = newStock;
    }


    bakeCookies(howMany){
        return this._cookies += howMany
    }

    buyBuilding(which) { 
        const buildingObject = this._buildings.find(element => {
            return element.name === which}); 
        buildingObject.buy()         
        this._cookiesPerSecond += buildingObject.cookiesPerSecond; 
        this._cookiesPerSecond = this._cookiesPerSecond + buildingObject.cookiesPerSecond;         
    }
 
}
