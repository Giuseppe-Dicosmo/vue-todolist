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

    ciao: function () {
      // document.querySelector('input').style.background = 'red';
    },

    pushTodo: function () {
      if (this.newTodo.length > 0) {
        this.todoList.push( {text: this.newTodo, done: this.done} );
        this.newTodo = '';
      }
    },

    cross: function (index) {
      this.todoList.splice(index, 1)
    },

    //* textThrough: function (noteElement) {

    //*   noteElement.done = !noteElement.done

    //*   if (noteElement.done == true) {
    //*     noteElement.done = false
    //*   } else {
    //*     noteElement.done = true
    //*   }
    //* },
  }

})
