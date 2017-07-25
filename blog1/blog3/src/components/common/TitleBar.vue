<template>
  <div class="title-bar shadow">
    <div class="btn-l" data-action="toggleProfile">
      <i class="glyphicon glyphicon-menu-hamburger"></i>
    </div>
    <div class="mid ellipsis">
      <img src="/static/img/logo.png" style="position: absolute; left: 50%; top: 50%; margin: -24px -150px;" alt="codding.cn/logo.png">
    </div>
    <div class="btn-r">
      <i class="glyphicon glyphicon-plus"></i>
      <div class="abs" data-action="togglePlusMenu"></div>
      <div class="plus-menu shadow"
        v-show="g.router.isShowPlusMenu"
      >
        <ul class="list-unstyled def-a">
          <li>
            <a class="in" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=273259755&amp;site=qq&amp;menu=yes"> <i class="glyphicon glyphicon-user"></i>
              <span>联系作者</span>
            </a>
          </li>
          <li>
            <a class="in" target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=1f0d1aa42579d88896e5856a4d0fbffc36c7e79348bad15369fb3ea98d6330a7"> <i class="glyphicon glyphicon-globe"></i>
              <span>加qq群</span>
            </a>
          </li>
          <li>
            <a class="in" :href="g.BASE_PATH+'db-admin'" target="_blank">
              <i class="glyphicon glyphicon-cog"></i>
              <span>后台管理</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-article',
  props: ['g'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>
