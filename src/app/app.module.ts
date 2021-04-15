import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpParamsInterceptor } from './interceptors/http-params.interceptor';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/home/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpParamsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
