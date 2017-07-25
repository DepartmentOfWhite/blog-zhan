<template>
  <div class="view">
    <div class="title-bar shadow">
      <div class="btn-l" @click="g.popPage()">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div class="mid ellipsis">{{g.router.opt.title}}</div>
      <div class="btn-r hid">
        <i class="glyphicon glyphicon-eye-open"></i>
      </div>
    </div>
    <div class="scroll-view">
      <div class="space" style="padding-left: 1em;">
        <div class="markdown-body" v-html="dataArticle._content"></div>
      </div>
      <div class="space">
        <rate :g="g"></rate>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'
import Rate from '../common/Rate'

export default {
  name: 'page-article-content',
  props: ['g'],
  components: {
    TitleBar,
    Rate,
  },
  data () {
    return {
      dataArticle: []
    }
  },
  methods() {

  },
  mounted() {
    const vm = this

    $.get(BASE_PATH + 'db-admin/interface/blog.php', {
      a: 'getOneArticle',
      articleId: vm.g.router.opt.tableId,
    }, function(data) {
      data._content = marked(data.content)
      vm.dataArticle = data
    }, 'json')
  }
}
</script>

<style scoped>

</style>
