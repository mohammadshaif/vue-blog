<template>
  <div class="home">
    <AddPost/>
    <PostList v-bind:posts='posts'/>
  </div>
</template>

<script>
//import axios from 'axios';
// @ is an alias to /src
import AddPost from './AddPost';
import PostList from './PostList';
import ProjectData from '../FakeData/ProjectData';

export default {
  name: 'Home',
  components: {
      AddPost,
      PostList
  },
  data(){
      return{
        posts:ProjectData,
        errors: []
      };
  },
  // created(){
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts`)
  //     .then(res =>{
  //       this.posts = res.data;
  //     })
  //     .catch(e =>{
  //       this.errors.push(e)
  //     });
  // }
}
</script>
