import { Team } from "@/components/teams/Team";
import { tasks as tasksBlue } from "@/components/tasks/tasksLists/TasksListBlue";
import { tasks as tasksRed } from "@/components/tasks/tasksLists/TasksListRed";
import { tasks as tasksYellow } from "@/components/tasks/tasksLists/TasksListYellow";
import { tasks as tasksGreen } from "@/components/tasks/tasksLists/TasksListGreen";
import { TEAM_COLOR } from "./EnumTeamColor";

export const teams = {
  yellowTeam: new Team(1, "Kiryny", TEAM_COLOR.YELLOW, tasksYellow),
  redTeam: new Team(2, "Kitsune", TEAM_COLOR.RED, tasksRed),
  greenTeam: new Team(3, "Wukongi", TEAM_COLOR.GREEN, tasksGreen),
  blueTeam: new Team(4, "Oolongi", TEAM_COLOR.BLUE, tasksBlue),
};
