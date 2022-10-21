import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  edad=0
  incrementarEdad(){
    this.edad += 1
  }

  reducirEdad(){
    this.edad -= 1
  }
 
 



  constructor() { }

  ngOnInit(): void {
  }

}
