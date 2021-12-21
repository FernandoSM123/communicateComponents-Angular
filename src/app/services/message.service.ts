import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:string="Sin mensaje";

  constructor() { }
}
