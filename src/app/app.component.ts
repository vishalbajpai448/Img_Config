import { Component, EventEmitter, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'img_confg_poc';
  
  imageData = [
  {Sn:1,imageName: 'compressed',desc:"This is desc 1"},
  {Sn:2,imageName: 'files&folder8',desc:"This is desc 2"},
  {Sn:3,imageName: 'files&folder9',desc:"This is desc 3"},
  {Sn:4,imageName: 'ImageCompressApp',desc:"This is desc 4"},
  {Sn:5,imageName: 'npm',desc:"This is desc 5"}
  ];
}
