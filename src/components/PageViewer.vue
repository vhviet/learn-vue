<template>
  <div v-if="page" id="content" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  // props: {
  //   page: {
  //     type: Object,
  //     default() {
  //       return {
  //         pageTitle: '',
  //         content: ''
  //       }
  //     }
  //   }
  // }
  created() {
    const index = this.$route.params.index;
    console.log("Route index:", index);
    const pageData = this.$pages.getSinglePage(index);
    console.log("Page data:", pageData);
    this.page = pageData || { pageTitle: "", content: "" };
  },
  data() {
    return {
      page: null,
    };
  },
};
</script>

<style scoped>
.emphasize {
  color: rgb(8, 158, 228);
}
</style>
