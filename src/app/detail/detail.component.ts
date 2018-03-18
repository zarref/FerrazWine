import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Datahelper } from '../../helpers/datahelper';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedId = 0;
  wineDetails = null;
  constructor(private route: ActivatedRoute, private router: Router) {     
    this.route.params.subscribe(res => this.selectedId = res.id);
    this.wineDetails = Datahelper.wineDataById(this.selectedId);
  }

  ngOnInit() {
  }

  backHome(){
    this.router.navigate(['']);
  }

}
