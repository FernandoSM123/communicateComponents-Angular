import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  @Input() parentMessage:string="";
  @Output() childMessage= new EventEmitter<string>();
  @ViewChild('parentMessageInput') parentInput:ElementRef;
  @ViewChild('silbingMessageInput') silbingInput:ElementRef;

  ngOnInit(): void {
  }

  setParentMessage(newMessage:string){
    this.childMessage.emit(newMessage);
    this.parentInput.nativeElement.value="";
  }


  setSilbingMessage(newMessage:string){
    this.messageService.message=newMessage;
    this.silbingInput.nativeElement.value="";
  }



}
