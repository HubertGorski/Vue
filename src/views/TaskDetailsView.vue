<script setup lang="ts">
import { tasks as tasksBlue } from "@/components/tasks/tasksLists/TasksListBlue";
import { tasks as tasksRed } from "@/components/tasks/tasksLists/TasksListRed";
import { tasks as tasksGreen } from "@/components/tasks/tasksLists/TasksListGreen";
import { tasks as tasksYellow } from "@/components/tasks/tasksLists/TasksListYellow";
import { users } from "@/components/tasks/tasksLists/Users";
import { useRoute } from "vue-router";
import { Task } from "@/components/tasks/Task";
import { User } from "@/components/tasks/User";
import { teams } from "@/components/teams/TeamsList";
import { Team } from "@/components/teams/Team";

const tasks: Task[] = [];
const route = useRoute();
const taskId = route.params.id;
const teamColor = route.params.team;
console.log(route.params);

tasksBlue.forEach((task) => tasks.push(task));
tasksRed.forEach((task) => tasks.push(task));
tasksYellow.forEach((task) => tasks.push(task));
tasksGreen.forEach((task) => tasks.push(task));
const task: Task =
  tasks.find((task) => task.id === taskId) ||
  new Task("", "", "", false, false, false, false, "", "", "", "", 0);
const accepter: User =
  users.find((user) => user.id === "3") || new User("", "", "");
const creater: User =
  users.find((user) => user.id === "2") || new User("", "", "");
const activeTeam: Team =
  teams.find((team) => team.color === teamColor) || new Team(1, "", "");
</script>

<template>
  <div class="task-list-view">
    <div></div>
    <div class="task">
      <div class="task__title" :class="teamColor">{{ task.title }}</div>
      <div class="task__description">{{ task.description }}</div>
      <div class="task__date">
        <p>Utworzono przez:</p>
        <span>{{ task.createDate }}</span>
      </div>
      <div class="task__user">
        <div
          :class="creater.team.color"
          class="creater__avatar avatar--slot"
        ></div>
        <div class="user-card">
          <span class="user-card__name">{{ creater.name }}</span>
          <span class="user-card__rank">{{ creater.rank }}</span>
        </div>
      </div>
      <div class="task__date">
        <p>Zatwierdzono przez:</p>
        <span>{{ task.acceptDate }}</span>
      </div>
      <div class="task__user">
        <div
          :class="accepter.team.color"
          class="accepter__avatar avatar--slot"
        ></div>
        <div class="user-card">
          <span class="user-card__name">{{ accepter.name }}</span>
          <span class="user-card__rank">{{ accepter.rank }}</span>
        </div>
      </div>
      <span class="task__points">{{ task.points }}</span>
      <div class="task__isDone">
        <div class="isDone__team">{{ task.isDoneRed }}</div>
        <div class="isDone__team">{{ task.isDoneBlue }}</div>
        <div class="isDone__team">{{ task.isDoneYellow }}</div>
        <div class="isDone__team">{{ task.isDoneGreen }}</div>
      </div>
    </div>
    <div class="panel">
      <div class="panel__btns">
        <div class="btns__btn btn--back">X</div>
        <div class="btns__btn btn--back">V</div>
        <div class="btns__btn btn--back">O</div>
        <div class="btns__btn btn--back">P</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-list-view {
  padding: 1.2rem;
  margin: 2.4rem 0.6rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .task {
    padding: 2.4rem 1.2rem;
    margin-bottom: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0.6rem;
    position: relative;

    &__title {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      &.yellow {
        color: var(--yellow-light);
      }
    }
    &__description {
      font-size: 1.6rem;
      padding: 2.4rem 1.2rem;
    }
    &__date {
      padding-top: 1.2rem;
      display: flex;
      align-items: center;
    }
    &__points {
      position: absolute;
      top: -1.2rem;
      right: -1.2rem;
      height: 3.8rem;
      width: 3.8rem;
      padding: 0.6rem;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.6rem;
      font-size: 2.2rem;
    }
    &__isDone {
      display: flex;
      justify-content: center;
      gap: 0.6rem;
      padding-top: 2.4rem;
      .isDone__team {
        border-bottom: 0.2rem solid red;
        padding: 0 1.2rem;
      }
    }
    &__user {
      display: flex;
      gap: 1.2rem;
      padding: 0.6rem;
      padding-left: 1.2rem;
      .avatar--slot {
        height: 5.8rem;
        width: 5.8rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 50%;
        &.red {
          box-shadow: rgba(249, 0, 0, 2) 0px 1px 3px 0px,
            rgba(255, 0, 0, 0.3) 0px 0px 0px 1px;
        }
        &.blue {
          box-shadow: rgba(0, 0, 249, 2) 0px 1px 3px 0px,
            rgba(38, 0, 255, 0.3) 0px 0px 0px 1px;
        }
        &.green {
          box-shadow: rgba(0, 249, 0, 2) 0px 1px 3px 0px,
            rgba(30, 254, 0, 0.3) 0px 0px 0px 1px;
        }
        &.yellow {
          box-shadow: rgba(155, 155, 0, 2) 0px 1px 3px 0px,
            rgba(160, 163, 0, 0.3) 0px 0px 0px 1px;
        }
      }
      .user-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__name {
          font-weight: 600;
        }
        &__rank {
          font-size: 1.6rem;
        }
      }
    }
    .task__date {
      font-style: italic;
      font-size: 1.6rem;
      display: flex;
      justify-content: space-between;
    }
  }
  .panel {
    &__btns {
      display: flex;
      gap: 1.2rem;
      padding: 0.6rem;
      .btns__btn {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        border-radius: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4.8rem;
        width: 4.8rem;
      }
    }
  }
}
</style>
