import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickContact1()
  {
    if(document.getElementById("contact1"))
    {
      document.getElementById("contact1").innerHTML="+91 9065478951";
    }
  }
  clickContact2()
  {
    if(document.getElementById("contact2"))
    {
      document.getElementById("contact2").innerHTML="+91 9195486321";
    }
  }
  clickContact3()
  {
    if(document.getElementById("contact3"))
    {
      document.getElementById("contact3").innerHTML="+91 7847958423";
    }
  }

    
    
  

}
