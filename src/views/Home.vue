<template>
  <div class="home">
    <Forums/>
  </div>
</template>

<script>
// @ is an alias to /src
import Forums from "@/components/Forums.vue";

export default {
  name: "home",
  components: {
    Forums
  }
};
</script>
