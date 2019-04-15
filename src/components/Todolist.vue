<template>
  <div>
    <div>
      <input @keyup.enter="handleClick" type="text" v-model="myTodo">
      <button @click="handleClick">添加</button>
      <button @click="clean">清空</button>
    </div>
    <ul>
      <li :class="{'done': todo.done}" @click="toogle(index)" v-for="(todo, index) in todos" :key="index">
        {{index}}: {{todo.text}}
      </li>
    </ul>
    <p>{{remains}} / {{todos.length}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      myTodo: '',
      todos: [
        {
          text: 'a',
          done: false
        },
        {
          text: 'b',
          done: false
        },
        {
          text: 'c',
          done: false
        }
      ]
    }
  },
  computed: {
    remains () {
      return this.todos.filter(v => !v.done).length
    }
  },
  methods: {
    handleClick () {
      // this.title = 'hello mini programe.'
      this.todos.push({
        text: this.myTodo,
        done: false
      })
      this.myTodo = ''
    },
    toogle (i) {
      this.todos[i].done = !this.todos[i].done
    },
    clean () {
      this.todos = this.todos.filter(v => !v.done)
    }
  }
}
</script>
 <style>
  .done {
    text-decoration: line-through;
    color: red;
  }
</style>
