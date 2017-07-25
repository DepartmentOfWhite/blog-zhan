<template>
  <div class="rate">
    <form @submit.prevent="sendRate">
      <div>
        <input type="text" class="form-control" required v-model="dataRate.nickName" placeholder="尊姓大名">
      </div>
      <div>
        <textarea class="form-control" required v-model="dataRate.content" rows="5" placeholder="请输入您宝贵的遗言"></textarea>
      </div>
      <div>
        <input type="submit" value="提交" class="btn btn-success btn-block">
      </div>
    </form>
    <div class="rate-list">
      <section v-for="(item, idx) in rateList">
        <div class="avatar-box">
          <div :style="{backgroundImage: 'url('+g.BASE_PATH+'upload/biaoqing/'+item.avatar+'.gif)'}"></div>
        </div>
        <div class="text-box">
          <div class="user-box">
            <div class="nick-name">{{item.nickName}}</div>
            <div class="time-box">
              <time>{{item.createTime | date}}</time>
            </div>
          </div>
          <div class="content">{{item.content}}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: ['g'],
  components: {

  },
  data () {
    return {
      dataRate: {
        nickName: '',
        content: '',
      },
      rateList: []
    }
  },
  methods: {
    sendRate() {
      const vm = this
      $.post(vm.g.BASE_PATH + 'db-admin/interface/blog.php', {
        a: 'addRate',
        tableName: vm.g.router.opt.tableName,
        tableId: vm.g.router.opt.tableId,
        nickName: vm.dataRate.nickName,
        content: vm.dataRate.content,
      }, function(data) {
        if (data.code) {
          alert(data.msg)
          return
        }
        vm.rateList.unshift(data)
        vm.dataRate = {
          nickName: '',
          content: '',
        }
      }, 'json')
    }
  },
  mounted() {
    const vm = this
    $.get(BASE_PATH + 'db-admin/interface/blog.php', {
      a: 'getRateList',
      tableName: vm.g.router.opt.tableName,
      tableId: vm.g.router.opt.tableId,
    }, function(data) {
      vm.rateList = data
    }, 'json')
  }
}
</script>

<style scoped>
.rate {}
.rate form {}
.rate form > div {margin-bottom: .4em;}
.rate .rate-list {}
.rate .rate-list section {display: flex; padding: .5em 0; border-bottom: 1px solid #ddd;}
.rate .rate-list section:last-child {border-bottom: none;}
.rate .rate-list section .avatar-box {width: 3.5em; margin-right: .5em;}
.rate .rate-list section .avatar-box > div {padding-top: 100%; background: #ddd no-repeat center / cover; border-radius: 4px;}
.rate .rate-list section .text-box {flex: 1;}
.rate .rate-list section .text-box .user-box {display: flex; margin-bottom: .5em;}
.rate .rate-list section .text-box .user-box .nick-name {flex: 1;}
.rate .rate-list section .text-box .content {color: #666;}
</style>