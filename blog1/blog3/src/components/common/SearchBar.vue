<template>
  <div class="title-bar shadow">
    <div class="btn-l"
      @click="g.router.pages.length > 1 ? g.popPage() : ''"
      :data-action="g.router.pages.length > 1 ? '' : 'toggleProfile'"
    >
      <i :class="['glyphicon', 'glyphicon-' + (g.router.pages.length > 1 ? 'chevron-left' : 'menu-hamburger')]"></i>
    </div>
    <div class="mid ellipsis">{{g.router.title}}</div>
    <div class="btn-r"
      @click="g.router.isInSearch=!g.router.isInSearch"
    >
      <i class="glyphicon glyphicon-search"
        @click.stop="g.router.isInSearch=!g.router.isInSearch"
      ></i>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'

export default {
  name: 'search-bar',
  props: ['g'],
  components: {
    TitleBar,
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>
  
</style>
