import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from '../upload-file-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  uploadedFile: File;
  showLink:boolean=false;
  feedback:UploadFeedback

  constructor(
    private uploadFile: UploadFileServiceService
  ) { }

  ngOnInit() {
      
  }

  onFileChanged(event) {
    var size = event.target.files[0].size/1024/1024;
    console.log(size)
    if(size<20){
      this.uploadedFile=event.target.files[0]
    }else{
      this.uploadedFile=null;
      alert("File too Big")
    } 
  }

  onClickUpload() {
    const uploadData = new FormData();
    console.log(this.uploadedFile.name)
    uploadData.append('file', this.uploadedFile, this.uploadedFile.name);
    this.uploadFile.uploadFile(uploadData).subscribe(data => {
      this.feedback=<UploadFeedback>data;
      this.showLink=true;
    })
  }

  copyMessage(){
    var val=this.feedback.link
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}

export class UploadFeedback{
  public  status:string;
  public  link:string;

  constructor(status:string,link:string){
    this.link=link
    this.status=status
  }
}

