export class Building {
    constructor(building){
        
        this._name = building.name ;
        this._description = building.description  ;
        this._number =  0;
        this._cookiesPerSecond = building.cookiesPerSecond ;
        this._cost = building.cost ;
    }

    get name(){
        return this._name;
    }
    get description(){
        return this._description;
    }
    get number(){
        return this._number;
    }
    get cost(){
        return this._cost;
    }
    get cookiesPerSecond(){
        return this._cookiesPerSecond;
    }

    set number(newNumber){
        this._number = newNumber
    }
    set cost(newCost){
        this._cost = newCost
    }
    
    buy(){
        this._number++
        return this._cost = Math.ceil(this._cost * 1.15);
        
     }
    

}