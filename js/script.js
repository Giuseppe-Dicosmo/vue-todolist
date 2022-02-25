const app = new Vue({

  el: '#container',
  data: {
    newTodo: '',
    through: 'text-through',
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
      if (this.newTodo.le)
      this.todoList.push(this.newTodo)

    }
  }

})
