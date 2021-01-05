import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  checklist: []
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.service.getChecklist().subscribe(
      res => {console.log(res.data)
      ,       this.checklist = res.data}
    )
  }

  getDelete(id) {
    this.service.deleteChecklist(id).subscribe(
      res => console.log(res)
    )
    alert("checklist dengan id " + id + " berhasil dihapus")
  }


}
