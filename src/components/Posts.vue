<template>
  <v-container>
    <ul>
      <li v-for="post in $store.state.posts" :key="post.id">
        <h3>{{ post.title }}</h3>
       
      </li>
    </ul>
    <button @click="getPosts">Load more</button>
  </v-container>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    getPosts() {
      this.page++;
      this.$store.dispatch('getAllPosts', this.page);
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
li {

  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;

  box-shadow: inset 0 -3px 0 rgba(84, 94, 111, .2);
}
</style>
