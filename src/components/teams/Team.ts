import type { Task } from "../tasks/Task";

export class Team {
  id: number;
  name: string;
  color: string;
  points: number = 0;
  tasks: Task[];

  constructor(id: number, name: string, color: string, tasks: Task[]) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.tasks = tasks;
  }

  addPoints(points: number) {
    this.points += points;
  }
}
