<template>
  <div class="main-container">
    <div class="form-wrapper">
      <div class="header-form">New Discussion</div>
      <AddTodo v-on:add-todo="addTodo"/>
    </div>
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Create",
  components: {
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://forum-java-api.herokuapp.com/api/v1/forums", {
          title
        })
        .then(res => (this.todos = [...this.todos, res.data.content]))
        .catch(err => console.log(err));
    }
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-form {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
  margin-top: 25px;
}

.forum-form-title {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #333;
  height: 36px;
  line-height: 36px;
  margin: 0;
  padding: 3px 85px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
}

.form-description {
  background: #fff;
  border: 1px solid #ccc;
  width: 100%;
  padding: 3px 0px;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  border-radius: 6px;
}

.forum-form-title,
form-description {
  margin-bottom: 15px;
}

.post-button-div {
  display: flex;
  justify-content: flex-end;
}

.post-button {
  background: #f52c6e;
  border: 1px solid #f52c6e;
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  min-height: 36px;
  padding: 0 12px;
  text-decoration: none;
  transition: background 0.1s ease, border 0.1s ease;
  border-radius: 6px;
  color: #fff;
  margin-top: 20px;
}

.label-div {
  padding: 20px;
}

form.forum-form {
  display: flex;
  flex-direction: column;
}
</style>
