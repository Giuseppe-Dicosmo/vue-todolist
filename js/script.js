const app = new Vue({

  el: '#container',
  data: {
    through: 'text-through',
    newTodo: '',
    done: false,
    todoList: [
      {
        text: 'Fare la spesa',
        done: false
      },
      {
        text: 'Andare in palestra',
        done: false
      },
      {
        text: 'Regalo Giulia',
        done: true
      },
    ]
  },

  methods: {
    pushTodo: function () {
      if (this.newTodo.length > 0) {
        this.todoList.push( {text: this.newTodo, done: this.done} );
        this.newTodo = '';
      }
    }
  }

})
