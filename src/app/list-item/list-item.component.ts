import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() checklistId : any
  id_checklist : any

  constructor() { }

  ngOnInit(): void {
    this.id_checklist = this.checklistId
    console.log(this.checklistId)
  }


}
