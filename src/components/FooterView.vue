<template>
  <footer class="d-flex justify-content-around align-items-center" style="height:5rem">
    <h3 class="">非商業用途。
      <i class="bi bi-github" @click="redirect">
      </i>
    </h3>
    <button type="button" class="btn btn-outline-second mx-5 d-flex align-items-center" style="font-size:1rem;height:3rem">
      <router-link class="nav-link" to="/admin/products" style="color:#fff">注文と商品管理</router-link>
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    redirect () {
      window.location.href = 'https://github.com/Chen9818'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base/all.scss";
footer{
  height: 10vh;
  width: 100%;
  background-color: $base-color;
  color: #fff;
  .bi-github{
    cursor: pointer
  }
}

@media (max-width: 500px) {
  footer h3,.nav-link{
    font-size: .5rem;
  }
  footer h3{
    margin-left: 2rem;
  }
}
</style>
