<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link v-bind:to="{ name: 'Posts' }" class="link m-b">Go to page of posts</router-link>
    <br>
    <router-link v-bind:to="{ name: 'NewPost' }" class="link">Add your post</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Vue work with post page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  display: inline-block;
  color: #42b983;
}
.m-b {
  margin-bottom: 10px;
}
</style>
