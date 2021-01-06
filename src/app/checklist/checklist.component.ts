import { SharedService } from './../shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  checklist: any = []
  idActivatedComp: any
  newData : string


  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
    this.getDataChecklist()
  }

  getDataChecklist() {
    this.service.getChecklist().subscribe(res=>{
      this.checklist = res.data,
      console.log(res.data)
    })
  }

  addChecklist() {
    let val = {
      "name": this.newData
    }
    this.service.createChecklist(val).subscribe(res=>{
      alert("data checklist berhasil ditambahkan")
      this.getDataChecklist();
      this.newData = ""
    })
  }

  getDelete(id) {
    this.service.deleteChecklist(id).subscribe(
      res => {
      console.log(res),
      this.getDataChecklist()
    }
      )
      alert("checklist dengan id " + id + " berhasil dihapus")
  }

  /////////////////////////////////////
  ///////////////bagian proses checklist item///////////////
  deleteChecklistItem(id) {
    this.service.deletelistItem(id).subscribe(
      res => {
      console.log(res),
      this.getDataChecklist()
    }
    )
      alert("checklist item berhasil dihapus")
  }

  createChecklistItem(id) {
    let val = {
      "name": this.newData
    }
    this.service.createlistItem(val).subscribe(res=>{
      alert("data checklist item berhasil ditambahkan")
      this.getDataChecklist();
      this.newData = ""
    })
  }
}
