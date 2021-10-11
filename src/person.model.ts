import { Collection } from "fireorm";
import { Timestamp } from "@google-cloud/firestore";

@Collection("persons")
export class Person {
  name: string;

  id: string;

  createdAt: Timestamp;
}
