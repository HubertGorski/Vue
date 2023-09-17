import { User } from "@/components/tasks/User";
import { teams } from "@/components/teams/TeamsList";

export const users = [
  new User("1", "Tutor", "Hubert Górski", teams[0]),
  new User("2", "Tutor", "Kacper Lassota", teams[1]),
  new User("3", "Trener", "Adam Kośny", teams[2]),
];
