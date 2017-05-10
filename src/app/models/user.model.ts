import { Entity } from './entity.model'

export class User extends Entity {
  constructor(
    public first_name: string,
    public last_name: string,
    public email: string,

    id: number) {super(id)}

    toString(){
      return this.first_name + ' ' + this.last_name;
    }
}
