export class Person {
  public prename: string;
  public surname: string;

  constructor(prename: string, surname: string){
    this.prename = prename;
    this.surname = surname;
  }

  public equals(anotherPerson: Person): boolean {
      return this.prename === anotherPerson.prename && this.surname === anotherPerson.surname;
  }
}

export class Party {
  public members: Person[];

  constructor(){
    console.log("Party created")
  };

  public isMember(person: Person): boolean {
    return this.members.some((member) => member.equals(person));
  }
}
