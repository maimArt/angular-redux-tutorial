export class Person {
  prename: string
  surname: string

  constructor(prename: string, surname: string) {
    this.prename = prename
    this.surname = surname
  }

  public equals(anotherPerson: Person) {
    return anotherPerson != null && this.surname === anotherPerson.surname && this.prename === anotherPerson.prename
  }
}

