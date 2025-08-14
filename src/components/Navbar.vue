<template>
  <nav :class="navbarClasses">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li v-for="(page, index) in publishedPages" class="nav-item" :key="index"> -->
          <navbar-link
            v-for="(page, index) in publishedPages"
            class="nav-item"
            :key="index"
            :page="page"
            :index="index"
            :isActive="index === activePage"
            @activated="$emit('activated')"
          ></navbar-link>
          <!-- </li> -->
          <li>
            <router-link
              to="/create"
              class="nav-link"
              aria-current="page"
            >
              Create Page
            </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="changeTheme()">
            Change NavColor
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  name: "AppNavbar",
  computed: {
    navbarClasses() {
      return [
        `navbar-${this.theme}`,
        `bg-${this.theme}`,
        "navbar",
        "navbar-expand-lg",
      ];
    },

    publishedPages() {
      return this.pages.filter((page) => page.published);
    },
  },
  components: {
    NavbarLink,
  },
  created() {
    this.getThemeSetting();
  },

  props: ["pages", "activePage"],
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
