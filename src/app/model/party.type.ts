import {Person} from "./person.type";
export class Party{
  members: Array<Person> = [];

  public hasMember(person: Person): boolean {
    return this.members.some((member) => member.equals(person));
  }

  public addMember(person: Person){
    if(!this.hasMember(person)){
      this.members.push(person);
    }
  }

  public removeMember(person:Person){
    this.members = this.members.filter((member => !member.equals(person)));
  }

}




