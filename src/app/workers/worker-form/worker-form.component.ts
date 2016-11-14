import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Worker } from '../shared/worker-class/worker';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss'],
})
export class WorkerFormComponent implements OnInit {
  user: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [''],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        cp: ['', Validators.pattern('[0-9]{5}')]
      }),
      salary: this.fb.group({
        full: ['60', Validators.required],
        half: ['30', Validators.required]
      })
    });
  }

  onSubmit({ value, valid }: { value: Worker, valid: boolean }) {
    console.log(value, valid);
  }

}
