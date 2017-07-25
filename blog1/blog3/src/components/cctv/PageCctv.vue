<template>
  <div class="view">
    <search-bar :g="g"></search-bar>
    <div class="scroll-view">
      <div class="channel-list">
        <div class="space" v-if="g.router.isInSearch" style="padding-bottom: 0;">
          <input type="text" class="form-control" v-model="g.router.searchText" id="search-text-input">
        </div>
        <ul @mousewheel="addMouseWheel">
          <li v-for="(item, idx) in fullData" @click="setCurIndex(idx)">
            <span :class="['btn', 'btn-primary', idx == g.router.curIndex ? 'active' : '']">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="column-list"
        @scroll="g.lazyLoad"
      >
        <div class="space">
          <div class="list-unstyled cd-list"
            v-if="g.router.columnId"
          >
            <div>
              <section
                v-for="(item, idx) in videoList"
                @click="openPage(idx)"
                :key="g.router.columnId + idx"
                v-show="item.isShow"
              >
                <div class="in shadow"
                  :lazy-load="item.imgSrc"
                >
                  <div class="text-box">{{item.title}}</div>
                </div>
              </section>
            </div>
            <div class="c" style="padding: 1em 0; clear: both;">
              <div v-if="g.router.isLoading">加载中...</div>
              <div v-else>
                <div v-if="videoList.length == 0">暂无数据</div>
              </div>
            </div>
          </div>
          <div class="list-unstyled cd-list"
            v-else
          >
            <section
              v-for="(item, idx) in (fullData[g.router.curIndex] || {}).children || []"
              @click="loadVideoList(idx)"
              :key="g.router.curIndex + '' + idx"
              v-show="item.isShow"
            >
              <div class="in shadow"
                :lazy-load="item.logo"
              >
                <div class="text-box ellipsis">{{item.columnName}}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../common/SearchBar'

export default {
  name: 'page-cctv',
  props: ['g'],
  components: {
    SearchBar,
  },
  data () {
    return {
      timerSearch: 0,
      curIndex: 0,
      fullData: [],
      videoList: []
    }
  },
  watch: {
    'g.router.isInSearch': function(newVal) {
      const vm = this
      if (newVal) {
        vm.$nextTick(() => {
          $('#search-text-input').focus()
        })
      }
    },
    'g.router.searchText': function() {
      const vm = this
      const sSearch = vm.g.router.searchText
      clearTimeout(vm.timerSearch)
      if (vm.g.router.columnId) {
        vm.timerSearch = setTimeout(() => {
          vm.videoList.forEach((v, idx) => {
            v.isShow = v.title.indexOf(sSearch) > -1 || v.subTitle.indexOf(sSearch) > -1
          })
          vm.$nextTick(() => {
            vm.g.lazyLoad()
          })
        }, 500)
      } else {
        vm.timerSearch = setTimeout(() => {
          vm.fullData.forEach((channel, idx) => {
            channel.children.forEach((item, idx) => {
              item.isShow = item.columnName.indexOf(sSearch) > -1 || item.channelName.indexOf(sSearch) > -1
            })
          })
          vm.$nextTick(() => {
            vm.g.lazyLoad()
          })
        }, 500)
      }
    }
  },
  methods: {
    openPage(idx) {
      const vm = this
      const item = vm.videoList[idx]
      window.open(item.url)
    },
    loadVideoList(idx = 0) {
      const vm = this
      if (vm.g.router.isLoading) {
        return
      }
      vm.g.router.isLoading = true
      vm.g.router.searchText = ''
      const item = vm.fullData[vm.g.router.curIndex].children[idx]
      const columnId = item.columnId
      let count = 0
      vm.$set(vm.g.router, 'columnId', item.columnId)
      vm.videoList = []
      function loop() {
        if (!vm.g.router.columnId) {
          return
        }
        count++
        $.getJSON('http://api.cntv.cn/lanmu/videolistByColumnId?id=' + vm.g.router.columnId + '&n=200&of=fdate&p='+count+'&type=0&serviceId=tvcctv&cb=?', function(data) {
          vm.g.router.isLoading = false
          data = data.response.docs || []
          if (data.length == 0) {
            console.log('数据加载完毕')
            return
          }
          if (count == 1) {
            vm.$nextTick(function() {
              vm.g.lazyLoad()
            })
          }
          const sSearch = vm.g.router.searchText
          vm.videoList = vm.videoList.concat(data.map(function(v, idx) {
            return {
              isShow: v.videoTitle.indexOf(sSearch) > -1 || v.videoBrief.indexOf(sSearch) > -1,
              imgSrc: v.videoKeyFrameUrl || v.videoKeyFrameUrl2 || v.videoKeyFrameUrl3,
              title: v.videoTitle,
              subTitle: v.videoBrief,
              url: v.videoUrl
            }
          }))
          loop()
        })
      }
      loop()
    },
    setCurIndex(idx) {
      const vm = this
      vm.g.router.searchText = ''
      vm.g.router.columnId = ''
      vm.$set(vm.g.router, 'curIndex', idx)
      vm.$nextTick(function() {
        vm.g.lazyLoad()
      })
    },
    addMouseWheel(e) {
      const isUp = e.wheelDelta > 0 || e.detail < 0
      $(e.target).closest('ul').each(function() {
        !isUp ? this.scrollLeft += 200 : this.scrollLeft -= 200
      })
    }
  },
  mounted() {
    const vm = this
    vm.g.router.isLoading = true
    $.get(BASE_PATH + 'db-admin/interface/blog.php', {
      a: 'getCCTVData',
    }, function(data) {
      const sSearch = vm.g.router.searchText
      vm.fullData = data.map(function(channel, idx) {
        channel.children.forEach((item, idx) => {
          item.isShow = item.columnName.indexOf(sSearch) > -1 || item.channelName.indexOf(sSearch) > -1
        })
        return channel
      })
      vm.g.router.isLoading = false
      vm.$nextTick(function() {
        vm.g.lazyLoad()
      })
      if (vm.g.router.columnId) {
        vm.loadVideoList()
      }
    }, 'json')
  }
}
</script>

<style scoped>
#blog .view-list .view .scroll-view {padding-bottom: 0; overflow: hidden; display: flex; flex-direction: column;}
.scroll-view .channel-list {}
.scroll-view .channel-list ul {white-space: nowrap; margin-bottom: 0; overflow: auto; padding: .6em .3em;}
.scroll-view .channel-list ul li {display: inline-block; margin: 0 .3em;}
.scroll-view .column-list {flex: 1; overflow: auto;}
.scroll-view .column-list .space {overflow: hidden;}

.cd-list {margin: 0 -.3em;}
.cd-list section {padding: .3em; width: 50%; float: left;}
.cd-list section .in {border-radius: 4px; padding-top: 60%; position: relative; overflow: hidden;}
.cd-list section .in .text-box {width: 100%; position: absolute; left: 0; bottom: 0; background: rgba(0,0,0,.5); color: #fff; padding: .3em .5em; font-size: 24px;}
</style>
