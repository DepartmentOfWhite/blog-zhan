var app = new Vue({
  el: '#app',
  data() {
    return {
      dataUser: {
        username: '123',
        email: '123@163.com',
        password: 'a123123',
        repassword: 'a123123',
      }
    }
  },
  computed: {
    isForbidUser() {
      var vm = this
      var sName = vm.dataUser.username
      if (sName.length < 2) {
        return '用户名不得小于2位'
      }
      if (sName.length >10) {
        return '用户名不得大于10位'
      }
      if (/\s/.test(sName)) {
        return '用户名不得包含空格'
      }
    },
    isForbidEmail() {
      var vm = this
      var email = vm.dataUser.email
      return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) ? '' : '邮箱不合法'
    },
    isForbidPass() {
      var vm = this
      var pass = vm.dataUser.password
      if (pass.length < 6) {
        return '密码长度不得小于6位'
      }
      if (pass.length > 20) {
        return '密码长度不得大于20位'
      }
      if (/^[a-z]+$/.test(pass)) {
        return '密码不得为纯小写字母'
      }
      if (/^[A-Z]+$/.test(pass)) {
        return '密码不得为纯大写字母'
      }
      if (/^\d+$/.test(pass)) {
        return '密码不得为纯数字'
      }
    },
    isForbidRePass() {
      var vm = this
      if (vm.dataUser.password != vm.dataUser.repassword) {
        return '密码不一致'
      }
    }
  },
  methods: {
    regUser(e) {
      var vm = this
      var data = JSON.parse(JSON.stringify(vm.dataUser))
      data.password = CryptoJS.SHA256(data.password).toString()
      data.a = '注册'
      $.post('php/reg.php', data, function(user) {
        g.err(user, function(user) {
          localStorage.user = JSON.stringify(user)
          // location = localStorage.urlFrom || ROOT_PATH
          // location = ROOT_PATH
        })
      })
    }
  },
  mounted() {

  }
})