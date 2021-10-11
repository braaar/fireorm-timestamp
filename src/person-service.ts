import { Timestamp } from "@google-cloud/firestore";
import { BaseFirestoreRepository } from "fireorm";
import { Person } from "./person.model";

export class PersonService {
  constructor(
    private readonly personRepository: BaseFirestoreRepository<Person>
  ) {}
  async getPerson(id: string): Promise<Person> {
    return this.personRepository.findById(id);
  }
  async createPerson(name: string): Promise<Person> {
    const personToCreate: Omit<Person, "id"> = {
      name,
      createdAt: Timestamp.now(),
    };
    return await this.personRepository.create(personToCreate);
  }
}
