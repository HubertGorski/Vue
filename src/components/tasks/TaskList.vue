<script setup lang="ts">
import TaskElement from "@/components/tasks/TaskElement.vue";
import NewTaskElement from "@/components/tasks/NewTaskElement.vue";
import { reactive, toRefs } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { Team } from "../teams/Team";
import { Task } from "./Task";

const props = defineProps<{
  team: Team;
  detailsTask: boolean;
}>();
const { team } = toRefs(props);

const currentDate = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
  return date;
};

const allTasks: Array<Task> = reactive([]);
const tasks = team.value.tasks;
tasks.forEach((task) => {
  allTasks.push(task);
});

const addNewTask = (newTask: Task) => {
  allTasks.push(
    new Task(
      uuidv4(),
      newTask.title,
      newTask.description,
      false,
      false,
      false,
      false,
      "Hubi",
      currentDate(),
      "",
      "",
      newTask.points
    )
  );
  tasks.push(allTasks[allTasks.length - 1]);
};
</script>

<template>
  <div>
    <NewTaskElement v-if="false" @create-task="addNewTask" />
    <TaskElement
      :detailsTask="detailsTask"
      :task="task"
      :team="team"
      v-for="task in allTasks"
      :key="task.id"
    />
  </div>
</template>
