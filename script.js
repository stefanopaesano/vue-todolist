const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      newTodo: '',
      todos: [
       
      ]
    };
  },
  methods: {
    addTodo() {
        if (this.newTodo.trim().length > 0 ) {
            
            this.todos.push(this.newTodo.trim());
            this.newTodo = ''; // Aggiunto per svuotare l'input dopo l'aggiunta
            
        }
    }
  }
});

app.mount('#app');
