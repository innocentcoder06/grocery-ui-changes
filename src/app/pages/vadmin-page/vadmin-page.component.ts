import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-vadmin-page',
  templateUrl: './vadmin-page.component.html',
  styleUrls: ['./vadmin-page.component.scss']
})
export class VadminPageComponent implements OnInit {
  @ViewChild('tableContents', { static: false }) tableContents;

  isGird: Boolean;
  isList: Boolean;
  isInventory: Boolean;
  isProfile: Boolean;

  constructor() {
    this.isGird = true;
    this.isInventory = true;
  }

  Inventory() {
    this.isInventory = true;
    this.isProfile = false;
  }

  Profile() {
    this.isProfile = true;
    this.isInventory = false;
  }

  Grid() {
    this.isGird = true;
    this.isList = false;
  }

  List() {
    this.isList = true;
    this.isGird = false;
  }

  /*scrollEvent(event: any) {
    console.log(this.tableContents.nativeElement.scrollTop);
  }*/
1
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngOnInit() {
  }

}
