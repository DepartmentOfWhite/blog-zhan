<template>
  <div class="view">
    <title-bar :g="g"></title-bar>
    <div class="scroll-view"
      @scroll="g.lazyLoad"
    >
      <div class="space">
        <div class="ic-list">
          <section
            v-for="(item, idx) in articleList"
            @click="g.pushPage('page-article-content', {tableName: 'article', tableId: item.id, title: item.title})"
          >
            <div class="img-box">
              <div :lazy-load="g.BASE_PATH +item.imgURL"></div>
            </div>
            <div class="text-box">
              <div class="up">{{item.title}}</div>
              <div class="middle">{{item.subTitle}}</div>
              <div class="bottom">
                <div class="read-count">阅读量：{{item.readCount || 0}}</div>
                <div class="time-box">
                  <time>{{item.createTime | date}}</time>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'

export default {
  name: 'page-article',
  props: ['g'],
  components: {
    TitleBar,
  },
  data () {
    return {
      articleList: []
    }
  },
  methods() {

  },
  mounted() {
    const vm = this
    $.get(BASE_PATH + 'db-admin/interface/blog.php', {
      a: 'getArticleList'
    }, function(data) {
      vm.articleList = data
      vm.$nextTick(function() {
        vm.g.lazyLoad()
      })
    }, 'json')
  }
}
</script>

<style scoped>

</style>
