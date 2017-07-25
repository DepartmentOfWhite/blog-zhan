<template>
  <div id="app"
    @click="doAction"
    :class="{on: g.router.isShowProfile}"
  >
    <profile :g="g"></profile>
    <blog :g="g"></blog>
  </div>
</template>

<script>
import Profile from './components/Profile'
import Blog from './components/Blog'
import Vue from 'vue'

Vue.filter('date', function(time) {
  var oDate = new Date(time * 1000)
  return oDate.getFullYear() + '-' + g.fillLen(oDate.getMonth() + 1) + '-' + g.fillLen(oDate.getDate())
})

export default {
  name: 'app',
  components: {
    Profile,
    Blog,
  },
  data() {
    const vm = this
    return {
      g: {
        router: {
          pages: [],
          isShowProfile: false,
          isShowPlusMenu: false
        },
        BASE_PATH: BASE_PATH,
        lazyLoad: g.lazyLoad,
        pushPage(name, opt) {
          vm.g.router.pages.push(name)
          console.log(opt)
          vm.$set(vm.g.router, 'opt', opt || {})
        },
        popPage() {
          vm.g.router.pages.pop()
        }
      }
    }
  },
  watch: {
    'g.router': {
      deep: true,
      handler(newVal) {
        location.hash = JSON.stringify(newVal)
      }
    },
    'g.router.searchText': function() {
      const vm = this;
      vm.$nextTick(function() {
        vm.g.lazyLoad()
      })
    }
  },
  methods: {
    doAction(e) {
      const vm = this
      var target = $(e.target).closest('[data-action]')
      target.each(function(idx, el) {
        e.stopPropagation()
        const sAction = $(this).attr('data-action')        
        switch (sAction) {
          case 'toggleProfile':
            vm.g.router.isShowProfile = !vm.g.router.isShowProfile
            vm.g.router.isShowPlusMenu = false
            break
          case 'togglePlusMenu':
            vm.g.router.isShowPlusMenu = !vm.g.router.isShowPlusMenu
            break
        }
      })
      if (!target[0]) {
        vm.g.router.isShowPlusMenu = false
      }
    },
    routerInit() {
      const vm = this
      let hash = location.hash.substring(1)
      let router = {}
      try {
        hash = decodeURI(hash)
      } catch (e) {
        console.log('hash decodeURI err')
      }
      try {
        router = JSON.parse(hash)
      } catch (e) {
        console.log('router parse err')
      }
      router.pages = router.pages || ['page-article']
      router.isShowProfile = router.isShowProfile || false
      router.isShowPlusMenu = router.isShowPlusMenu || false
      router.isInSearch = router.isInSearch || false
      router.searchText = router.searchText || ''
      router.isLoading = router.isLoading || false
      router.curIndex = router.curIndex || 0
      vm.g.router = router
    }
  },
  mounted() {
    const vm = this
    vm.routerInit()
    window.addEventListener('hashchange', function() {
      vm.routerInit()
    }, false)
  }
}
</script>

<style>
#app {width: 750px; height: 100%; position: fixed; left: 50%; top: 0; margin-left: -375px; background: #fff; overflow: hidden;}
#app.on #profile {transform: translateX(0px);}
#app.on #blog {transform: translateX(500px);}
</style>
