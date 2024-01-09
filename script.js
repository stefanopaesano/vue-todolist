// const { createApp } = Vue;

// const app = createApp({
//   data() {
//     return {
//       newTodo: '',
//       todos: []
//     };
//   },
//   methods: {
//     addTodo() {
//       if (this.newTodo.trim().length > 0) {
//         this.todos.push(this.newTodo.trim());
//         this.newTodo = ''; // Aggiunto per svuotare l'input dopo l'aggiunta
//       }
//     },
//     removetodo(i) {
//       console.log(i, this.todos[i]);
//       this.todos.splice(i, 1);
//     }
//   }
// });

// app.mount('#app');
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- link -->
    
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="app">
        <h1>title</h1>

        <!-- Associa il valore dell'input a una variabile nel modello Vue -->
        <input type="text" v-model="newTodo" placeholder="cosa vuoi fare brother?">
        <button @click="addTodo()">invia</button>

        <ul v-if="todos.length > 0">
            <li v-for="(todo, i) in todos" :key="i">
                <span :style="{ 'text-decoration': todo.done ? 'line-through' : 'none' }">
                    {{ todo.text }}
                </span>
                <button @click="removetodo(i)">Rimuovi</button>
            </li>
        </ul>
    </div>

    <script src="script.js"></script>
    
</body>
</html>

