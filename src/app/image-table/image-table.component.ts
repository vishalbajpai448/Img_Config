import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.css']
})
export class ImageTableComponent {

  @Input() dataSource: any[] = [];
  @Output() imageClicked = new EventEmitter<string>();

  displayedColumns: string[] = ['Sn','imageName','desc'];

  rowClicked(event: any) {
    const imageName = event.target.textContent.trim();
    if (imageName) {
      this.imageClicked.emit(imageName);
    }
  }
}
