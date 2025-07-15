import { Component, ElementRef, ViewChild } from '@angular/core';
import { DndDirective } from '../../directives/dnd.directive';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-dropzone',
  imports: [DndDirective, ProgressComponent],
  templateUrl: './dropzone.component.html',
  styleUrl: './dropzone.component.scss',
})
export class DropzoneComponent {
  @ViewChild('fileDropRef', { static: false }) fileDropEl:
    | ElementRef
    | undefined;
  files: any[] = [];

  fileBrowseHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const filesArray = Array.from(input.files);
      this.prepareFilesList(filesArray);
    }
  }

  onFileDropped($event: any[]) {
    this.prepareFilesList($event);
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log('Upload in progress.');
      return;
    }
    this.files.splice(index, 1);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    if (this.fileDropEl) {
      this.fileDropEl.nativeElement.value = '';
    }
    this.uploadFilesSimulator(0);
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
