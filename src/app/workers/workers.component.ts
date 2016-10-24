import { Component, OnInit } from '@angular/core';

import { WorkersService } from './shared/workers-service/workers.service';
import { Worker }         from './shared/worker-class/worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  providers: [WorkersService]
})
export class WorkersComponent implements OnInit {
  workers: Worker[] = [];

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.getWorkers().then(workers => this.workers = workers);
  }

}
