<template>
  <div id="blog">
    <div class="view-list">
      <transition-group name="bounce">
        <div
          v-for="(name, idx) in g.router.pages"
          :g="g"
          :is="name"
          :key="idx"
        ></div>
      </transition-group>
    </div>
    <transition name="fade">
      <div class="hide-profile"
        v-if="g.router.isShowProfile"
        @click="g.router.isShowProfile=false"
      ></div>
    </transition>
  </div>
</template>

<script>
import PageArticle from './article/PageArticle'
import PageArticleContent from './article/PageArticleContent'
import PageDemo from './demo/PageDemo'
import PageDemoContent from './demo/PageDemoContent'
import PageCctv from './cctv/PageCctv'

export default {
  name: 'blog',
  props: ['g'],
  components: {
    PageArticle,
    PageArticleContent,
    PageDemo,
    PageDemoContent,
    PageCctv,
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
#blog {width: 100%; height: 100%; position: absolute; left: 0; top: 0; background: #fff; transition: .3s all;}
#blog .view-list {width: 100%; height: 100%; position: absolute; left: 0; top: 0;}
#blog .view-list .view {width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 2; display: flex; flex-direction: column; background: #fff;}
#blog .view-list .view .scroll-view {flex: 1; overflow: auto; padding-bottom: 5em;}
#blog .hide-profile {width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 3; background: rgba(0,0,0,0);}
</style>