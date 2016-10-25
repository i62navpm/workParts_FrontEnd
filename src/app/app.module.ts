import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WorkersMock }          from './workers/shared/workers-mock/workers-mock';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WorkersComponent } from './workers/workers.component';

import { WorkerComponent } from './workers/worker/worker.component';
import { WorkerFormComponent } from './workers/worker-form/worker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    WorkersComponent,
    WorkerComponent,
    WorkerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(WorkersMock),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/workers',
        pathMatch: 'full'
      },
      {
        path: 'workers',
        component: WorkersComponent
      },
      {
        path: 'worker-form',
        component: WorkerFormComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
