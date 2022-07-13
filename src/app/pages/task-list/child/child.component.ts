import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() taskArray: any[] = [];
  // @Output() forEdit = new EventEmitter<string>()

  public saveInput!:string;
  public editIndex!:number;

  public hiddenInputSave:boolean = true;
  public hiddenButtonSave:boolean = true;


  deleteBtn(index: number): void {
    this.taskArray.splice(index, 1)
  }

  editBtn(index: number): void {
    this.hiddenInputSave = false
    this.hiddenButtonSave = false

    this.saveInput = this.taskArray[index].newTask; 
    this.editIndex = index;

    // this.forEdit.emit(this.taskArray[index].newTask)
    
  }

  saveButton(): void{
    this.hiddenInputSave = true
    this.hiddenButtonSave = true
    let newTask = {
      newTask: this.saveInput, 
      doneCheck: false, 
    }
    this.taskArray[this.editIndex] = newTask;
    this.saveInput = ''
  }

  checkBox(index: number): void{
    this.taskArray[index].doneCheck = true;
  }


  constructor() { }

  ngOnInit(): void {
  }
}


