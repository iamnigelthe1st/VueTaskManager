<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Vue Task Manager</h1>
    <p>{{ tasksSummary }}</p>

    <!-- Component for adding tasks -->
    <!-- It EMITS an 'add-task' event, which we listen for here -->
    <AddTaskForm @add-task="addTask" />

    <!-- Component for listing tasks -->
    <!-- It receives 'tasks' as a PROP -->
    <!-- It EMITS 'toggle-task' and 'delete-task' events -->
    <TaskList
      :tasks="tasks"
      @toggle-task="toggleTaskStatus"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AddTaskForm from './components/AddTaskForm.vue'
import TaskList from './components/TaskList.vue'

// --- DATA ---
// Using ref() to make our tasks array reactive.
const tasks = ref([
  { id: 1, text: 'Learn Vue Basics', completed: true },
  { id: 2, text: 'Build a simple app', completed: false },
  { id: 3, text: 'Deploy the app', completed: false }
])

// --- METHODS ---
// These functions modify our state.
const addTask = (taskText) => {
  if (taskText.trim() === '') return
  const newTask = {
    id: Date.now(), // Simple unique ID
    text: taskText,
    completed: false
  }
  tasks.value.push(newTask)
}

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}

const toggleTaskStatus = (taskId) => {
  const task = tasks.value.find((task) => task.id === taskId)
  if (task) {
    task.completed = !task.completed
  }
}

// --- COMPUTED PROPERTY ---
// This value is automatically re-calculated whenever 'tasks' changes.
const tasksSummary = computed(() => {
  const totalTasks = tasks.value.length
  const completedTasks = tasks.value.filter(task => task.completed).length
  return `Total Tasks: ${totalTasks}, Completed: ${completedTasks}`
})

// --- LIFECYCLE HOOK ---
// This code runs after the component has been mounted to the DOM.
onMounted(() => {
  console.log('App component has been mounted!')
  // In a real app, you might fetch initial tasks from an API here.
})
</script>