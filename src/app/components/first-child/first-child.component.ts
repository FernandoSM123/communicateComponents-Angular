import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  @Input() parentMessage:string="";
  @Output() childMessage= new EventEmitter<string>();
  @ViewChild('parentMessageInput') parentInput:ElementRef;
  @ViewChild('silbingMessageInput') silbingInput:ElementRef;
  myForm:FormGroup;

  constructor(public messageService:MessageService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.myForm=this.fb.group({
      parent: ['',[Validators.required]],
      silbings: ['',[Validators.required]],
    });
  }

  setParentMessage(newMessage:string){
    this.childMessage.emit(newMessage);
    this.parentInput.nativeElement.value=""; //No necesario reset reinicia los campos
    this.myForm.get('parent')?.reset();
  }


  setSilbingMessage(newMessage:string){
    this.messageService.message=newMessage;
    this.silbingInput.nativeElement.value=""; //No necesario reset reinicia los campos
    this.myForm.get('silbings')?.reset();
  }

  get parent() { return this.myForm.get('parent'); }
  get silbings() { return this.myForm.get('silbings'); }



}
