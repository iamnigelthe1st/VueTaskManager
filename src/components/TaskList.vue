<!-- src/components/TaskList.vue -->
<template>
  <div>
    <!-- The v-if directive conditionally renders this block -->
    <p v-if="tasks.length === 0">No tasks yet. Add one above!</p>
    
    <!-- The v-else block is rendered if v-if is false -->
    <ul v-else>
      <!-- The v-for directive renders a list of items from an array -->
      <li v-for="task in tasks" :key="task.id">
        <!-- Bind class conditionally with :class -->
        <span
          :class="{ completed: task.completed }"
          @click="emitToggle(task.id)"
        >
          {{ task.text }}
        </span>
        <button @click="emitDelete(task.id)" class="delete-btn">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Define the PROPS this component accepts from its parent
const props = defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

// Define the custom EVENTS this component can emit
const emit = defineEmits(['toggle-task', 'delete-task'])

const emitToggle = (id) => {
  emit('toggle-task', id)
}

const emitDelete = (id) => {
  emit('delete-task', id)
}
</script>