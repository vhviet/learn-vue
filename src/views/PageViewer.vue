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
  props: ['index'],
  inject: ['$pages'],
  created() {
    this.page = this.$pages.getSinglePage(this.index);
  },
  data() {
    return {
      page: null,
    };
  },
  watch: {
      // eslint-disable-next-line no-unused-vars
      index(newIndex, oldIndex) {
        this.page = this.$pages.getSinglePage(newIndex)
      }
    }
};
</script>

<style scoped>
.emphasize {
  color: rgb(8, 158, 228);
}
</style>
