export class Worker {
  id: number;
  image: string;
  name: string;
  lastName: string;
  email: string;
  address: {
    street: string,
    city: string,
    cp: Number
  };
  salary: {
    full: Number,
    half: Number
  };
}
