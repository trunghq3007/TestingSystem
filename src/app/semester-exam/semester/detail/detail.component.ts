import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-detail',
   templateUrl: './detail.component.html',
   styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   constructor(private activateRoute: ActivatedRoute) { }

   semesterID: string;
   ngOnInit() {
      this.semesterID = this.activateRoute.snapshot.paramMap.get('id');
   }

}
