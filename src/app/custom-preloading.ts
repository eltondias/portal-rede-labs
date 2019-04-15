
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of} from 'rxjs';

@Injectable()
export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data.preload) {
      console.log('Preload Path: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
