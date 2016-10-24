import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WorkersMock }          from './workers/shared/workers-mock/workers-mock';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WorkersComponent } from './workers/workers.component';

import './rxjs-extensions';
import { WorkerComponent } from './workers/worker/worker.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    WorkersComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
