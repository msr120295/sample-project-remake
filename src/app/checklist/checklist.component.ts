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
  checklistId : any
  modalTitle: any


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

  clickCreateChecklist() {
    this.idActivatedComp = 0
    this.modalTitle = "Create Checklist"
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

  clickCreateChecklistItems(data) {
    this.idActivatedComp = 1
    this.checklistId = data.id
    this.modalTitle = "Create Checklist Item"

  }

  createChecklistItem(param) {
    let val = {
      "checklistId": param,
      "itemName": this.newData
    }
    this.service.createlistItem(val).subscribe(res=>{
      alert("data checklist item berhasil ditambahkan")
      this.getDataChecklist();
      this.newData = ""
    })
  }

  clickUpdateChecklistItems(param) {
    this.idActivatedComp = 2
    this.checklistId = param.id
    this.modalTitle = "Edit Checklist Item"
    this.newData = param.name
    console.log(this.checklistId)
  }

  updateChecklistItem(param) {
    let val = {
      "checklistId": param,
      "itemName": this.newData
    }
    this.service.updatelistItem(param, val).subscribe(res=>{
      console.log(res)
      this.getDataChecklist()
    })
  }

  onCheckboxChange(e, param) {
    if (e.target.checked) {
      let val = {
        "itemCompletionStatus": true
      }
      this.service.updateStatuslistItem(param.id, val).subscribe(res=>{
        console.log(res)
        console.log("item id adalah" + param.id)
        console.log("task item completed")
        alert("task item completed")
        this.getDataChecklist()
      })
    } else {
      let val = {
        "itemCompletionStatus": false
      }
      this.service.updateStatuslistItem(param.id, val).subscribe(res=>{
        console.log(res)
        console.log("item id adalah" + param.id)
        console.log("task item uncompleted")
        alert("task item uncompleted")
        this.getDataChecklist()
      })

    }
  }
}
