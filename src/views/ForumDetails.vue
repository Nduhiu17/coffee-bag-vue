<template>
  <div class="topic">
    <div class="topic-title">
      <h1>{{forum}}</h1>
    </div>
    <div class="topic-posts">
      <p>
        Get it right here: https://open.vanillaforums.com/addon/vanilla-core-2.8.3 Our Hacker One bounty campaign continues to bear fruit helping us to harden our code. In this release: Patching XSS vulnerabilities in the Rich Editor. Better permission checks
        on several endpoints. Stopping stored XSS attacks in the message alerts. Please upgrade to the latest version of Vanilla as soon as possible. No other changes from 2.8.1 are in this version.
      </p>
    </div>
    <textarea rows="8" cols="50" class="post-post" id="froala-editor">Comment here...</textarea>
    <button class="post-button">Post</button>
  </div>
</template>

<script>
export default {
  name: "ForumDetails",
  data() {
    return {
      forum: ""
    };
  },

  mounted() {
    console.log("App mounted!");
    if (localStorage.getItem("title")) {
      this.forum = localStorage.getItem("title");
    }
  },

  methods: {}
};
</script>

<style scoped>
.post-post {
  width: 97vw;
  overflow: visible;
  min-height: 200px;
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  border-radius: 6px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.post-button {
  border: 1px solid #f52c6e;
  border-radius: 6px;
  background-color: #f52c6e;
  color: #fff;
  display: flex;
  font-family: Open Sans, Segoe UI, Helvetica Neue, Helvetica, Raleway, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  min-height: 36px;
  padding: 0 20px;
  text-decoration: none;
  transition: background 0.1s ease, border 0.1s ease;
  margin-left: auto;
}

.topic {
  margin-top: 10vh;
}
</style>