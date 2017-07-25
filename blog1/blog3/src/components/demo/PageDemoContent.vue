<template>
  <div class="view">
    <div class="title-bar shadow">
      <div class="btn-l" @click="g.popPage()">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div class="mid ellipsis">{{g.router.opt.title}}</div>
      <div class="btn-r" @click="openPage()">
        <i class="glyphicon glyphicon-eye-open"></i>
      </div>
    </div>
    <div class="scroll-view">
      <div style="height: 800px; background: #ddd;">
        <iframe :src="g.router.opt.url + '?' + Math.random()" style="width: 100%; height: 100%; vertical-align: top;" frameborder="0"></iframe>
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
  name: 'page-demo-content',
  props: ['g'],
  components: {
    TitleBar,
    Rate,
  },
  data () {
    return {
      demoList: [],
    }
  },
  methods: {
    openPage() {
      const vm = this
      window.open(vm.g.router.opt.url)
      // console.log(g.router.opt)
    }
  },
  mounted() {
    const vm = this
  }
}
</script>

<style scoped>

</style>
