<template>
  <div class="home"> 
        <D3nodenetwork />
  </div>
</template>

<script>
// @ is an alias to /src
import D3nodenetwork from "@/components/nodegraph.vue";

export default {
  name: "Home",
  components: {
    D3nodenetwork
  }
};
</script>
