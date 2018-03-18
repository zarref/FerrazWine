import { Component, OnInit } from '@angular/core';
import { Datahelper } from '../../helpers/datahelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  isFiltered = false;
  wineList = 'Wine list';
  yourSelectedWines = 'Your selected wines';
  winedata = [];
  myCurrentWineList = [];
  asc = true;

  ngOnInit() {
    this.winedata = Datahelper.getAllWineData;
    this.myCurrentWineList = Datahelper.myCurrentWineList;
  }

  openDetailView(wineId){
    this.router.navigate(['detail/'+wineId]);
  }

  addWineToPersonalList(wine){
    Datahelper.addOneItemToList(wine);  
  }

  removeWineFromPersonalList(wineId){
    return Datahelper.removeOneItemFromList(wineId);    
  }

  filterMainList(filterProperty,value){
    this.isFiltered = true;
    this.winedata = Datahelper.filterList(filterProperty,value,this.winedata);
  }

  removeFilter(){
    this.isFiltered = false;    
    this.winedata = Datahelper.getAllWineData;    
  }

  sortMainList(sortProperty){
    this.asc = !this.asc;
    this.winedata = Datahelper.sortList(sortProperty,this.asc,this.winedata);
  }
}
