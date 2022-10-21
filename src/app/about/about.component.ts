import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cursos:Array<string>=["Angular", "Bootstrap", "HTML, CSS", "Javascript", "Python", "React"]


  constructor() { }

  ngOnInit(): void {
  }

}
