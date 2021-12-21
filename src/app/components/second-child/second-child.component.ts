import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

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

  constructor(public messageService:MessageService) { }

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
