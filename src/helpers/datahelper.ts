import { debug } from "util";

export class Datahelper{
    
    public static myCurrentWineList = [];
    public static allWineData = [
        {"id":126,"name":"Maria Pia","country":"Spain","type":1,"year":1986}
        ,{"id":15,"name":"Casal Mendes Rose","country":"France","type":2,"year":2015}
        ,{"id":523,"name":"Porto","country":"Portugal","type":1,"year":2005}
        ,{"id":100,"name":"Moscatel","country":"Portugal","type":2,"year":2017}
        ,{"id":96,"name":"Tinto do Alentejo","country":"Portugal","type":4,"year":2000}
        ,{"id":13,"name":"Caves do Douro","country":"Portugal","type":3,"year":2005}
        ,{"id":10,"name":"Duckhorn","country":"England","type":2,"year":2014}
        ,{"id":12,"name":"Château Coutet","country":"France","type":2,"year":2012}
        ,{"id":22,"name":"Casanova di Neri","country":"Italy","type":1,"year":2012}
      ];

    public static get getAllWineData(): any { return this.allWineData };

    public static wineDataById(id): any {      
        return this.getAllWineData.find(
            (item,i) => {
                if(item.id == id){
                    return i;
                } else{
                    return false;
                }
        });       
    }

    public static removeOneItemFromList(id): any {
        Datahelper.myCurrentWineList.every((item,index) => {
            if(item.id == id){
              Datahelper.myCurrentWineList.splice(index,1);        
            } else{
              return true;
            }
        });
    }

    public static addOneItemToList(item): void {
        Datahelper.myCurrentWineList.push(item);
    }

    public static filterList(filterProperty,value,originalList): any {
        return originalList.filter(wine => wine[filterProperty] == value);
    }

    public static sortList(sortProperty,asc,originalList): any {
        return originalList.sort((obj1,obj2) => {
            if(asc){
                if(obj1[sortProperty] < obj2[sortProperty]){
                    return -1;
                } else if(obj1[sortProperty] > obj2[sortProperty])
                {
                    return 1;
                } else{
                    return 0;
                }
            } else{
                if(obj1[sortProperty] < obj2[sortProperty]){
                    return 1;
                } else if(obj1[sortProperty] > obj2[sortProperty])
                {
                    return -1;
                } else{
                    return 0;
                }
            }
        });
    }
}