export class Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  creater: string;
  createDate: string;
  accepter: string;
  acceptDate: string;
  points: number;

  constructor(
    id: string,
    title: string,
    description: string,
    isDone: boolean,
    creater: string,
    createDate: string,
    accepter: string,
    acceptDate: string,
    points: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isDone = isDone;
    this.creater = creater;
    this.createDate = createDate;
    this.accepter = accepter;
    this.acceptDate = acceptDate;
    this.points = points;
  }
}
