import { Component } from '@angular/core';
import { FooService } from './foo.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private fooService: FooService) { }

  getMessage() {
    this.fooService.getMessage().subscribe(m => console.log(m));
  }

  get400() {
    this.fooService.get400().subscribe(m => console.log(m));
  }

  getHandled400() {
    this.fooService.getHandled400().subscribe(m => console.log(m));
  }

  get400AndHandle() {
    this.fooService.get400()
      .catch(e => {
        console.log('component caught error');
        console.log(e);
        return Observable.of('im ok :)');
      })
      .subscribe(m => console.log(m));

  }

}
