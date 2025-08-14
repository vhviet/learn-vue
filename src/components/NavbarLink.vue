<template>
    <li>
        <router-link
            :to="`${index}`"
              class="nav-link"
              :class="activeClass"
              :href="page.link.url"
              :title="`This link goes to the \${page.link.text} page`"
        >
              {{ page.link.text }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: ['page', 'isActive', 'index'],
    computed: {
        activeClass() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            }
        }
    }
}
</script>

<style scoped>
    .emphasize{
        text-decoration: underline !important;
    }
</style>