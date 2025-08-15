<template>
  <div class="container mb-3">
    <form action="" class="container mb-3">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label">Page Title</label>
            <input type="text" class="form-control" v-model="pageTitle" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Content</label>
            <textarea
              type="text"
              class="form-control"
              rows="5"
              v-model="content"
            ></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">Link Text</label>
            <input type="text" class="form-control" v-model="linkText" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Link URL</label>
            <input type="text" class="form-control" v-model="linkUrl" />
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck1"
                v-model="published"
              />
              <label class="form-check-label" for="gridCheck1">
                Published
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isFormInvalid"
          @click.prevent="submitForm"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

let pageTitle = ref("");
let content = ref("");
let linkText = ref("");
let linkUrl = ref("");
let published = ref(true);

const router = useRouter();
const bus = inject('$bus');
const pages = inject('$page');
  function submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText ) {
        alert("Please fill in the form!");
        return;
      }

      let newPage = {
        pageTitle,
        content,
        link: {
          text: linkText
        },
        published,
    }
    pages.addPage(newPage);
    bus.$emit('page-created', newPage)
    router.push({path: '/pages'})
}

const isFormInvlid = computed(() => !pageTitle || !content || !linkText);
watch(pageTitle, (newTitle, oldTitle) => {
      if (linkText === oldTitle) {
        linkText = newTitle;
      }
    },)
</script>


<style scoped>
.page-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
}
</style>
