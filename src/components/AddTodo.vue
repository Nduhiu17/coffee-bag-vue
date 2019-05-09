<template>
  <div>
    <form class="forum-form" @submit="addTodo">
      <label for="title" class="label-div">Discussion Title</label>
      <input type="text" v-model="title" name="title" class="forum-form-title">
      <div class="post-button-div">
        <input type="submit" value="Submit" class="post-button">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      };
      //send up to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
      this.$router.push("/");
    }
  }
};
</script>
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
  min-width: 30vw;
  padding: 3px 3px;
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
