import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public toChildMessage:string="Sin mensaje";
  public fromChildsMessage:string="Sin mensaje";
  @ViewChild('parentInput') input:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  setMessage(newMessage:string){
    this.toChildMessage=newMessage;
    this.input.nativeElement.value="";
  }

  getMessage(newMessage:string){
    this.fromChildsMessage=newMessage;
  }

}
