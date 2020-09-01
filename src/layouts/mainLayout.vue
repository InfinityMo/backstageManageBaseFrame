<template>
  <div class="main-wrap">
    <breadcrumb />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <copyright />
  </div>
</template>

<script>
import breadcrumb from './breadcrumb'
import copyright from './copyrightLayout'
export default {
  components: {
    breadcrumb,
    copyright
  }
}
</script>

<style lang="less" scoped>
.main-wrap {
  position: relative;
  width: 100%;
  margin-left: 250px;
  // height: calc(100vh - 70px);
  padding: 55px 15px 15px 15px;
  .main-content {
    height: 800px;
    padding: 0 5px;
    background: #fff;
  }
}
</style>>
