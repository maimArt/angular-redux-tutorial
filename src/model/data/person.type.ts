export class Person {
  prename: string;
  surname: string;

  constructor(prename: string, surname: string) {
    this.prename = prename;
    this.surname = surname
  }

  public equals(anotherPerson: Person) {
    return anotherPerson != null && this.surname === anotherPerson.surname && this.prename === anotherPerson.prename
  }
}

export function personsAreEqual(person: Person, anotherPerson: Person) {
  return person.surname === anotherPerson.surname && person.prename === anotherPerson.prename;
}

export function personIsInList(persons: Person[], person: Person): boolean {
  return persons.some((member) => personsAreEqual(member, person))
}

