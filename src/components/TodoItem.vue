
<template>
  <div class="forum-item">
    <div class="forum-contents">
      <div class="forum-title">
        <p>{{todo.title}}</p>
      </div>
      <div class="forum-content-details">
        <div class="forum-date-created">Created at: {{todo.createdAt}}</div>
        <div class="forum-date-modified">Edited On: {{todo.updatedAt}}</div>
      </div>
    </div>
    <div class="forum-details">
      <div class="forum-views">18 Views</div>
      <div class="forum-comments">77 Comments</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {}
};
</script>
<style scoped>
body,
html {
  margin: 0;
  padding: 5px;
  font-family: Open Sans, Segoe UI, Helvetica Neue, Helvetica, Raleway, Arial,
    sans-serif;
}

.nav-bar {
  background-color: #333;
  border-bottom: 1px solid #d6d7d9;
  box-shadow: none;
  color: #ffffff;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-details {
  display: flex;
  flex-direction: row;
}

.nav-details > div {
  padding: 10px;
}

.nav-logo {
  font-weight: 600;
  font-size: 18px;
  margin-left: 10px;
}

.header {
  height: 25vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d6d7d9;
  font-weight: 800;
  font-size: 22px;
}

.forum-item {
  background: #fff;
  border-top: 1px solid #d6d7d9;
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.forum-details {
  display: flex;
}

.forum-content-details {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
}

.forum-item > div {
  padding: 10px;
}

.forum-details > div {
  padding: 10px;
}

.forum-content-details > div {
  padding: 10px;
}

.forum-title {
  color: #0291db;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  margin-bottom: 6px;
}

.forum-views,
.forum-comments {
  background: rgba(2, 145, 219, 0.9);
  border-radius: 6px;
  bottom: 6px;
  color: #fff;
  font-size: 14px;
  margin: 0;
  max-height: 70px;
  display: flex;
  align-items: center;
}

.forum-comments {
  margin-left: 10px;
}

.new-forum {
  background: #f52c6e;
  border: 1px solid #f52c6e;
  border-radius: 6px;
  color: #fff;
  font-family: Open Sans, Segoe UI, Helvetica Neue, Helvetica, Raleway, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  min-height: 36px;
  padding: 0 12px;
  text-decoration: none;
  transition: background 0.1s ease, border 0.1s ease;
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>


