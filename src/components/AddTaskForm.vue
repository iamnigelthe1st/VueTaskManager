<!-- src/components/AddTaskForm.vue -->
<template>
  <!-- @submit.prevent handles form submission -->
  <form @submit.prevent="handleSubmit">
    <!-- v-model provides two-way data binding -->
    <input
      type="text"
      v-model="newTaskText"
      placeholder="Add a new task..."
    />
    <button type="submit">Add Task</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

// Local state for the input field
const newTaskText = ref('')

// Define the custom event this component can emit
const emit = defineEmits(['add-task'])

const handleSubmit = () => {
  // Emit the custom event to the parent, passing the input value
  emit('add-task', newTaskText.value)
  // Clear the input field after submitting
  newTaskText.value = ''
}
</script>