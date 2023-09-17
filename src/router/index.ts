import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskListView from "../views/TaskListView.vue";
import TaskDetailsView from "../views/TaskDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tasklist",
      name: "tasklist",
      component: TaskListView,
    },
    {
      path: "/tasklist/:id&:team",
      name: "taskdetails",
      component: TaskDetailsView,
    },
  ],
});

export default router;
