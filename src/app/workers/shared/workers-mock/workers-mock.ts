import { InMemoryDbService } from 'angular-in-memory-web-api';

export class WorkersMock implements InMemoryDbService {
  createDb() {
    let workers = [
      {id: 11, name: 'Mr. Nice', image: '/assets/images/default-avatar-1.png'},
      {id: 12, name: 'Narco', image: '/assets/images/default-avatar-2.png'},
      {id: 13, name: 'Bombasto', image: '/assets/images/default-avatar-3.png'},
      {id: 14, name: 'Celeritas', image: '/assets/images/default-avatar-4.png'},
      {id: 15, name: 'Magneta', image: '/assets/images/default-avatar-5.png'},
      {id: 16, name: 'RubberMan', image: '/assets/images/default-avatar-6.png'},
      {id: 17, name: 'Dynama', image: '/assets/images/default-avatar-7.png'},
      {id: 18, name: 'Dr IQ', image: '/assets/images/default-avatar-8.png'},
      {id: 19, name: 'Magma', image: '/assets/images/default-avatar-9.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-10.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-11.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-12.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-13.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-14.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-15.png'},
      {id: 20, name: 'Tornado', image: '/assets/images/default-avatar-16.png'}
    ];
    return {workers};
  }
}
