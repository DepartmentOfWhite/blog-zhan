/*$.get('php/user.php', {
  a: '登录检测'
}, function(data) {
  if (data.code){
    return
  }
  succ(data)
}, 'json')*/

$('#formLogin').on('submit', function(e) {
  e.preventDefault()
  var data = {
    a: 'login',
    username: $('#username').val(),
    password: CryptoJS.SHA256($('#password').val()).toString(),
  }
  $.get('php/user.php', data, function(data) {
    g.err(data, succ)
  })
})

function succ(user) {
  localStorage.user = JSON.stringify(user)
  // location = localStorage.urlFrom || '/'
  location = ROOT_PATH
}