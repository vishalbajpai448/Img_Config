import { Component } from '@angular/core';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.css']
})
export class ImgDisplayComponent {

  imageUrl: string | null = null;

  setImage(imageName: string)
  {
    const imagemap:{[key:string]:string} = 
    {
      'compressed':'../../assets/compressed.jpg',
      'files&folder8':'../../assets/files&folder8.png',
      'files&folder9':'../../assets/files&folder9.png',
      'ImageCompressApp':'../../assets/ImageCompressApp.png',
      'npm':'../../assets/npm.jpg',
    };

    this.imageUrl = imagemap[imageName] || null;
  }

}
