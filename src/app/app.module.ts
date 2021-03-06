import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { FooService } from './foo.service';

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    console.log('error handler caught:');
    console.log(err);
    if (err instanceof Response) {
      console.log('xhr error');
    }
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FooService,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
