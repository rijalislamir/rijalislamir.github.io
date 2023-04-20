<template>
  <div class="text-white mt-36 overflow-hidden mx-8 mb-8">
    <div class="pb-8">
      <table class="w-full">
        <tbody>
          <tr>
            <td class="font-bold py-2">DEMO</td>
            <td class="py-2 flex">
              <a
                href="https://portfolio-todo-list.netlify.app/"
                target="_blank"
              >
                <p class="group transition cursor-pointer">
                  &nearr; Open
                  <span
                    class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                  ></span>
                </p>
              </a>
            </td>
          </tr>
          <tr>
            <td class="font-bold py-2">YEAR</td>
            <td class="py-2">2022</td>
          </tr>
          <tr>
            <td class="font-bold py-2 align-top">STACKS</td>
            <td class="py-2">
              <div class="flex flex-col">
                <span>React</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="pb-8">
      The Todo List app is like other normal todo app. It can create a todo,
      delete a todo. So basically this project is a test of job interview.
    </p>

    <p class="pb-8">
      I was given the assets and the instructions to do UI slicing from figma.
      And also I was provided a backend API to store/manage the todos that will
      be created/deleted.
    </p>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Home (Empty Todo)</h1>
      <img :src="TodoListHomeEmptyTodo" alt="todo-list-home-empty-todo" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Home</h1>
      <img :src="TodoListHome" alt="todo-list-home" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Todo (Empty Activity)</h1>
      <img
        :src="TodoListTodoEmptyActivity"
        alt="todo-list-todo-empty-activity"
      />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Add Activity</h1>
      <img :src="TodoListAddActivity" alt="todo-list-add-activity" />
    </div>

    <div class="pb-8 text-center">
      <h1 class="font-bold text-xl mb-2">Todo</h1>
      <img :src="TodoListTodo" alt="todo-list-todo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoListHomeEmptyTodo from "../assets/todo-list-home-empty-todo.png";
import TodoListHome from "../assets/todo-list-home.png";
import TodoListTodoEmptyActivity from "../assets/todo-list-todo-empty-activity.png";
import TodoListAddActivity from "../assets/todo-list-add-activity.png";
import TodoListTodo from "../assets/todo-list-todo.png";
</script>
