import type { Team } from "../teams/Team";
import { teams } from "../teams/TeamsList";

export class User {
  id: string;
  rank: string;
  name: string;
  team: Team;

  constructor(id: string, rank: string, name: string, team: Team = teams[0]) {
    this.id = id;
    this.rank = rank;
    this.name = name;
    this.team = team;
  }
}
