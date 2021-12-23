import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public toChildMessage:string="";
  public fromChildsMessage:string="";
  @ViewChild('parentInput') input:ElementRef;
  myForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      parent: ['',[Validators.required]]
    });
  }

  setMessage(newMessage:string){
    this.toChildMessage=newMessage;
    this.input.nativeElement.value=""; //No necesario reset reinicia los campos
    this.myForm.reset();
  }

  getMessage(newMessage:string){
    this.fromChildsMessage=newMessage;
  }

  get parent() { return this.myForm.get('parent'); }

}
