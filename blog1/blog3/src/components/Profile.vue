<template>
  <div id="profile">
    <div class="back"></div>
    <div class="forward">
      <div class="user-box">
        <div>
          <div class="avatar" :style="{backgroundImage: 'url(/static/img/avatar.jpg)'}"></div>
          <div class="username">摘星fy</div>
        </div>
      </div>
      <div class="nav">
        <nav>
          <section
            v-for="(item, idx) in navList"
            @click="setPage(idx)"
          >
            <div class="text-box">
              <i :class="[item.icon]"></i>
              <span>{{item.name}}</span>
            </div>
            <div>
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </section>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  props: ['g'],
  data () {
    return {
      navList: [{
        name: '博文',
        icon: 'glyphicon glyphicon-home',
        componentName: 'page-article'
      }, {
        name: '练习',
        icon: 'glyphicon glyphicon-leaf',
        componentName: 'page-demo'
      }, {
        name: '央视',
        icon: 'glyphicon glyphicon-film',
        componentName: 'page-cctv'
      }/*, {
        name: '反馈',
        icon: 'glyphicon glyphicon-comment',
        componentName: 'page-feedback'
      }, {
        name: '收藏',
        icon: 'glyphicon glyphicon-heart',
        componentName: 'page-collection'
      }*/]
    }
  },
  methods: {
    setPage(idx) {
      const vm = this
      const item = vm.navList[idx]
      vm.g.router.pages = [item.componentName]
      vm.g.router.isShowProfile = false
      vm.g.router.title = item.name
      vm.g.router.curIndex = 0
      vm.g.router.columnId = ''
      vm.$nextTick(function() {
        vm.g.lazyLoad()
      })
    }
  }
}
</script>

<style scoped>
#profile {width: 500px; height: 100%; position: absolute; left: 0; top: 0; background: rgba(0,0,0,.4); overflow: hidden; transition: .3s all; transform: translateX(-250px);}
#profile > div {width: 100%; height: 100%; position: absolute; left: 0; top: 0;}
#profile .back {background: url(/static/img/bg-profile.jpg) no-repeat center / cover; filter: blur(10px);}
#profile .forward {overflow: auto; color: #fff;}
#profile .forward > div {margin-bottom: .6em; background: rgba(0,0,0,.3); min-height: 100px;}
#profile .user-box {display: flex; align-items: center; justify-content: center; padding: 1.4em 0; text-align: center;}
#profile .user-box .avatar {width: 100px; height: 100px; border-radius: 50%; background: #eee no-repeat center / cover; border: 1px solid #ccc; margin-bottom: .5em;}
#profile .user-box .username {}
#profile .nav {}
#profile .nav nav {}
#profile .nav nav * {vertical-align: middle;}
#profile .nav nav section {display: flex; padding: .8em .8em .8em 1em; border-bottom: 1px solid rgba(255,255,255,.15); cursor: pointer;}
#profile .nav nav section .text-box {flex: 1;}
</style>
