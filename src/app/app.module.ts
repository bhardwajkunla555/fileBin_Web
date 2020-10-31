import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UploadFileServiceService } from './upload-file-service.service';
import { HttpClientModule } from '@angular/common/http';
import { InvokeApiService } from './invoke-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UploadFileServiceService,InvokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
