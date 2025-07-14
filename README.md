# ✅ Vue 3 Task Manager

<p align="center">
  A simple and elegant task manager application built with Vue 3 to demonstrate its core concepts in a practical, hands-on project.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js" alt="Vue 3">
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT">
</p>

## ✨ Visual Preview

Here is a quick look at the application in action. You can add new tasks, toggle their completion status, and delete them. The task summary updates in real-time!

<p align="center">
  <img src="./demo.gif" alt="Vue Task Manager Demo" width="600px" />
</p>
*(To create this `demo.gif`, use a tool like [LiceCap](https://www.cockos.com/licecap/) or [ScreenToGif](https://www.screentogif.com/) to record the app running in your browser).*

---

## 🚀 Features

-   **Add Tasks**: A clean input form to add new tasks to your list.
-   **Delete Tasks**: Remove tasks you no longer need.
-   **Toggle Completion**: Click on a task's text to mark it as complete or incomplete.
-   **Dynamic Styling**: Completed tasks are visually distinguished with a line-through.
-   **Reactive Summary**: A computed summary shows the total and completed task counts, updating instantly with every change.

---

## 📚 Vue Concepts Demonstrated

This project was specifically designed to be a practical showcase of fundamental Vue.js concepts.

| Concept               | Implementation Details                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vue Instance**      | The application is initialized in `src/main.js` using `createApp(App).mount('#app')`.                                                               |
| **Data Binding**      | `v-model` is used for two-way binding on the new task input field. One-way binding (`:propName`) is used to pass data to child components.             |
| **Directives**        | `v-for` renders the task list, `v-if`/`v-else` shows a message for an empty list, and `:class` conditionally styles completed tasks.                  |
| **Methods**           | Functions like `addTask`, `deleteTask`, and `toggleTaskStatus` in `App.vue` handle the core application logic.                                        |
| **Events**            | `@submit.prevent` handles form submission without a page reload. `@click` is used on buttons and task items to trigger actions.                       |
| **Computed Properties** | `tasksSummary` in `App.vue` automatically calculates and caches a descriptive string based on the `tasks` array, re-evaluating only when needed. |
| **Components**        | The app is broken down into `App.vue` (parent), `AddTaskForm.vue` (child), and `TaskList.vue` (child).                                                 |
| **Props**             | The `TaskList` component receives the `tasks` array from `App.vue` via props, enabling parent-to-child data flow.                                    |
| **Emits**             | Child components `AddTaskForm` and `TaskList` use `defineEmits` and `emit()` to send custom events (`@add-task`, `@delete-task`) to the parent.       |
| **Lifecycle Hooks**   | `onMounted` is used in `App.vue` to log a message when the component is first rendered, simulating where an initial API call might go.                |

---

## 🛠️ Technology Stack

<p align="left">
  <a href="https://vuejs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="40" height="40"/></a>
  <a href="https://vitejs.dev/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" width="40" height="40"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="40" height="40"/></a>
</p>

-   **Vue 3:** The core progressive JavaScript framework.
-   **Vite:** A lightning-fast build tool and development server.
-   **JavaScript (ES6+):** The programming language.
-   **CSS:** For custom styling.

---

## 📦 Project Setup

Follow these steps to get the project running on your local machine.

**1. Clone the repository:**

```bash
git clone https://github.com/YourUsername/my-vue-task-manager.git

---

📁 File Structure
Here is an overview of the key files in this project:

/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── main.css       # Global styles
│   ├── components/
│   │   ├── AddTaskForm.vue  # Component for the new task form (emits events)
│   │   └── TaskList.vue     # Component to display tasks (receives props, emits events)
│   ├── App.vue            # Main application component (state, logic, container)
│   └── main.js            # Vue application entry point
├── .gitignore             # Files to be ignored by Git
├── index.html             # The single HTML page shell
├── package.json           # Project dependencies and scripts
└── README.md              # You are here!

