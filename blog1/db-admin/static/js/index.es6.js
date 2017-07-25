var vm = new Vue({
  el: '#app',
  data() {
    var user = {}
    try {
      user = JSON.parse(localStorage.user)
    } catch (e) {}

    return {
      nav: {
        list: [{
          name: '首页',
        }, {
          name: '作品',
        }, {
          name: '央视',
        }, {
          name: '朋友',
        }, {
          name: '关于',
        }]
      },
      g: {
        router: {},
        user: user,
      },
      cdList: []
    }
  },
  methods: {
    routerInit() {
      var vm = this
      var hash = location.hash.substring(1)
      var router = {}
      try {
        hash = decodeURI(hash)
      } catch (e) {
        console.log('decodeURI err')
      }
      try {
        router = JSON.parse(hash)
      } catch (e) {
        console.log('router parse err')
      }
      router.pageOut = vm.nav.list.some((item, idx) => {
        return idx === router.pageOut
      }) ? router.pageOut : 0
      vm.g.router = router
    },
    setPageOut(idx, e) { // 设置 pageOut
      var vm = this
      var item = vm.nav.list[idx]
      if (e) { // 点击
        vm.g.router = {
          pageOut: idx
        }
      } else { // 默认加载
        vm.g.router.pageOut = idx
      }

      $.get('php/index.php', {
        a: item.name
      }, (data) => {
        vm.cdList = data
      }, 'json')
    }
  },
  watch: {
    'g.router': {
      deep: true,
      handler(newVal) {
        var s = JSON.stringify(newVal)
        location.hash = location.host === 'localhost' ? s : encodeURI(s)
      }
    }
  },
  mounted() {
    var vm = this
    // 初始化路由
    vm.routerInit()
    vm.setPageOut(vm.g.router.pageOut)
    // 监听浏览器路由发生变化
    window.addEventListener('hashchange', () => {
      vm.routerInit()
    }, false)
    // 执行翻译
    L.translate()

    $.get('php/user.php', {
      a: '登录检测'
    }, function(data) {
      if (data.code){
        delete localStorage.user
        vm.g.user = {}
        return
      }
    }, 'json')
  }
})