<template>
  <h5>Edit page {{ page.pageTitle }}</h5>
   <form action="" class="container mb-3">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label">Page Title</label>
            <input type="text" class="form-control" v-model="page.pageTitle" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Content</label>
            <textarea
              type="text"
              class="form-control"
              rows="5"
              v-model="page.content"
            ></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">Link Text</label>
            <input type="text" class="form-control" v-model="page.link.text" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Link URL</label>
            <input type="text" class="form-control" v-model="page.link.url" />
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck1"
                v-model="page.published"
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
          class="btn btn-primary me-2"
          @click.prevent="submitEdit"
        >
          Edit
        </button>
        <button
          type="submit"
          class="btn btn-secondary"
          @click.prevent="goToPageList"
        >
          Cancel
        </button>
      </div>
    </form>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const pages = inject('$pages');
const bus = inject('$bus');

const index = Number(route.params.index);
let page = pages.getSinglePage(index);

function submitEdit() {
  pages.editPage(index, page);
  bus.$emit('page-update', {
    index, page
  });
  goToPageList();
}

function goToPageList() {
  router.push({ path: '/pages' });
}
</script>



