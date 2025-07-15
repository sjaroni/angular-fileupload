import { Component } from '@angular/core';
import { DropzoneComponent } from "./components/dropzone/dropzone.component";

@Component({
  selector: 'app-root',
  imports: [ DropzoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-fileupload';
}
