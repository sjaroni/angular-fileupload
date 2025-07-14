import { Component } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  imports: [],
  templateUrl: './dropzone.component.html',
  styleUrl: './dropzone.component.scss',
})
export class DropzoneComponent {
  fileBrowseHandler(arg0: any) {
    console.log('Files selected:', arg0);
    
  }
}
