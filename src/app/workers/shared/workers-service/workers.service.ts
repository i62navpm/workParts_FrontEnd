import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Worker } from '../worker-class/worker';

@Injectable()
export class WorkersService {
  private workersUrl = 'app/workers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getWorkers() {
    return this.http.get(this.workersUrl)
                  .toPromise()
                  .then(response => response.json().data as Worker[])
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
