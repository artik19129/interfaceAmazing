import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { documentsModule } from './documents/documents.module';

@NgModule({
  declarations: [AppComponent, DocumentsComponent],
  imports: [BrowserModule, documentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
