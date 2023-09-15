<script setup lang="ts">
import { computed, reactive } from "vue";
import BtnAcceptTask from "../buttons/acceptTask/BtnAcceptTask.vue";

const descriptionRows = computed<number>(() =>
  newTask.description.length > 50 ? 4 : 2
);
const titleRows = computed<number>(() => (newTask.title.length > 16 ? 2 : 1));
const emit = defineEmits(["create-task"]);
const newTask = reactive({
  title: "",
  points: 0,
  description: "",
});

const createTask = () => {
  if (newTask.title === "" || newTask.description === "" || !newTask.points) {
    return;
  }
  emit("create-task", newTask);
  newTask.title = "";
  newTask.description = "";
  newTask.points = 0;
};
</script>

<template>
  <div class="new-task-element">
    <div class="new-task-element__content">
      <textarea
        v-model="newTask.title"
        :rows="titleRows"
        maxlength="30"
        class="content content__title"
        placeholder="Title"
      ></textarea>
      <textarea
        v-model="newTask.description"
        :rows="descriptionRows"
        maxlength="90"
        class="content content__description"
        placeholder="Description"
      ></textarea>
    </div>
    <div class="new-task-element__right-panel">
      <input v-model="newTask.points" class="pkt" type="number" />
      <BtnAcceptTask @click="createTask()" class="task-element__btn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-task-element {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  &__content {
    border: 0.1rem solid black;
    border-radius: 0.6rem;
    width: 100%;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  &__right-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .content {
    width: 100%;
    border: 0;
    border-radius: 0.6rem;
    resize: none;
    &__title {
      font-size: 2.4rem;
    }
    &__description {
      font-size: 1.6rem;
      overflow: hidden;
    }
    &:focus {
      outline: none;
    }
  }
  .pkt {
    height: 4.8rem;
    width: 4.8rem;
    overflow: hidden;
    border-radius: 0.6rem;
    padding: 0.6rem;
    border: 0.1rem solid black;
    margin-bottom: 0.6rem;
    text-align: center;
    font-size: 2rem;
    &:focus {
      outline: none;
    }
  }
}
</style>
