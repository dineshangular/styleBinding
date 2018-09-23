import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public titleStyles = {
    fontStyle:"italic",
    color:"blue",
    marginTop:"15px",
    fontSize:"22px",
    padding:"5px",
    backgroundColor:"red"
  }

  constructor() { }

  ngOnInit() {
  }

}
