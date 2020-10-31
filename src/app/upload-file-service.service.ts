import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from 'rxjs';
import { UploadFeedback } from './home/home.component';
import { InvokeApiService } from './invoke-api.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UploadFileServiceService {
  private fileUploadURL = environment.UPLOAD_URL;

  constructor(private http: HttpClient,private invokeApiService: InvokeApiService<FormData, UploadFeedback>) { }

  uploadFile(input: FormData): Observable<UploadFeedback> {
    return this.invokeApiService.invokeApifile("Post", this.fileUploadURL, input);
  }

}
