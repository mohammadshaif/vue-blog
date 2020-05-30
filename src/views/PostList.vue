<template>
    <div class="post-list">
         <div class="card  my-3" v-for='post of posts' :key='post.id'>
            <div class="card-body">
                 <h3> Que: {{post.que}} ?</h3>
                 <h5> Ans: {{post.ans}} </h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {    
    name: 'PostList',
    props:['posts']
};
</script>

<style scoped>
    .card{
        background-color: #F8B35C;
    }
    h3{
        color: brown;
    }
</style>