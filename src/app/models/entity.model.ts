export class Entity {
  constructor(private id: number) {}

  public name = 'Entity ' + this.id;

  toString(){
    return this.name;
  }
}
