import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropzoneComponent } from "./dropzone/dropzone.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropzoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-fileupload';
}
