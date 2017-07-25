Vue.filter('date', function(time, format) {
  var oDate = new Date(/^\d+$/.test(time.toString()) ? time * 1000 : time)
  if (oDate.toString() == 'Invalid Date') {
    console.log('错误的日期时间')
    return time
  }
  var o = {
    y: oDate.getFullYear(),
    m: oDate.getMonth() + 1,
    d: oDate.getDate(),
    h: oDate.getHours(),
    i: oDate.getMinutes(),
    s: oDate.getSeconds()
  }
  return (format || 'y-m-d').replace(/y|m|d|h|i|s/g, function(str) {
    return o[str]
  })
})

Vue.filter('substr', function(str, maxLen) {
  maxLen = maxLen || 50
  return str.length > maxLen ? str.substring(0, maxLen) + '...' : str
})