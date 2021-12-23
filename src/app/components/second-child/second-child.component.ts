import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  @Input() parentMessage:string="";
  @Output() childMessage= new EventEmitter<string>();
  @ViewChild('parentMessageInput') parentInput:ElementRef;
  @ViewChild('silbingMessageInput') silbingInput:ElementRef;
  myForm:FormGroup;

  constructor(public messageService:MessageService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      parent: ['',[Validators.required]],
      silbings: ['',[Validators.required]],
    });
  }

  setParentMessage(newMessage:string){
    this.childMessage.emit(newMessage);
    this.parentInput.nativeElement.value="";
    this.myForm.get('parent')?.reset(); //No necesario reset reinicia los campos
  }

  setSilbingMessage(newMessage:string){
    this.messageService.message=newMessage;
    this.silbingInput.nativeElement.value="";
    this.myForm.get('silbings')?.reset(); //No necesario reset reinicia los campos
  }

  get parent() { return this.myForm.get('parent'); }
  get silbings() { return this.myForm.get('silbings'); }

}
