import { Component } from '@angular/core';
import  data  from "../../assets/data.json";

@Component({
  selector: 'app-sidepannel',
  templateUrl: './sidepannel.component.html',
  styleUrls: ['./sidepannel.component.css']
})


export class SidepannelComponent {
  data1 = data  
}