Vue.component('page-demo', {
  template: `
    <div>
      <my-carousel></my-carousel>
      <div class="container" style="padding-top: 15px;">
        <div class="col-md-9">
          <cd-list key="index-article" :g="g" :cdList="list"></cd-list>
        </div>
        <div class="col-md-3">
          <panel-hot></panel-hot>
          <leave-msg></leave-msg>
          <panel-adv></panel-adv>
        </div>
      </div>
    </div>
  `,
  props: ['g', 'list'],
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    var vm = this
    setTimeout(function() {
      console.log(vm.cdList)
    }, 1000)
  }
})

Vue.component('page-demo', {
  template: `
    <div>
      <div class="container" style="padding-top: 15px;">
        <div class="col-md-9">
          <cd-list key="demos-me" :g="g" :cdList="list"></cd-list>
        </div>
        <div class="col-md-3">
          <panel-hot></panel-hot>
          <leave-msg></leave-msg>
          <panel-adv></panel-adv>
        </div>
      </div>
    </div>
  `,
  props: ['g', 'list'],
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    console.log(this.list)
  }
})

Vue.component('page-cctv', {
  template: `
    <div>
      <div class="container" style="padding-top: 20px;">
        <div class="row channel-list">
          <section class="col-md-3 col-sm-4 col-xs-6" v-for="(item, idx) in cctvList">
            <div class="in"
              :style="{backgroundImage: 'url('+item.list[0].column_logo+')'}"
              @click="setIframeURL(idx)"
            >
              <div class="channel-name">{{item.name}}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  props: ['g', 'list'],
  data() {
    return {
      cctvList: []
    }
  },
  methods: {
    setIframeURL(idx) {
      var vm = this
      localStorage.albumList = JSON.stringify(vm.cctvList[idx].list)
      vm.$set(vm.g.router, 'iframeURL', 'cctv.html')
    }
  },
  mounted() {
    var vm = this
    $.get('db-admin/php/cctv.json', (data) => {
      vm.cctvList = data
    })
  }
})

Vue.component('page-friend', {
  template: `
    <div>
      <div class="container" style="padding-top: 15px;">
        <div class="col-md-9" id="friend">
          <cd-list2 :g="g" :cdList="list"></cd-list2>
        </div>
        <div class="col-md-3">
          <panel-hot></panel-hot>
          <leave-msg></leave-msg>
          <panel-adv></panel-adv>
        </div>
      </div>
    </div>
  `,
  props: ['g', 'list'],
  data() {
    return {
      
    }
  },
  methods: {

  },
  mounted() {
    var vm = this

  }
})

Vue.component('page-about', {
  template: `
    <div style="padding: 20px;">
      <div class="container" id="resume" style="padding: 0;">
        <div class="l col-lg-3 col-md-4">
          <div style="padding: 50px 0 20px 0;">
            <div class="face-img"></div>
          </div>
          <div class="c">
            <div class="user-name">摘星fy</div>
            <div class="job-name">web前端工程师</div>
          </div>
        </div>
        <div class="con col-lg-9 col-md-8">
          <div class="space">
            <section>
              <h4 class="page-header">
                <span>基本资料</span>
              </h4>
              <div>
                <div class="row">
                  <div class="col-sm-6">
                    <table class="align">
                      <tbody>
                        <tr>
                          <td>姓名：</td>
                          <td>田士贞</td>
                        </tr>
                        <tr>
                          <td>性别：</td>
                          <td>男</td>
                        </tr>
                        <tr>
                          <td>民族：</td>
                          <td>汉</td>
                        </tr>
                        <tr>
                          <td>学历：</td>
                          <td>统招本科</td>
                        </tr>
                        <tr>
                          <td>籍贯：</td>
                          <td>山东省 临清市 唐元镇</td>
                        </tr>
                        <tr>
                          <td>微信：</td>
                          <td>y273259755</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-sm-6">
                    <table class="align">
                      <tbody>
                        <tr>
                          <td>出生日期：</td>
                          <td>1990-10-15</td>
                        </tr>
                        <tr>
                          <td>联系电话：</td>
                          <td>188-1857-1170</td>
                        </tr>
                        <tr>
                          <td>电子邮件：</td>
                          <td>273259755@qq.com</td>
                        </tr>
                        <tr>
                          <td>毕业院校：</td>
                          <td>山东工艺美术学院</td>
                        </tr>
                        <tr>
                          <td>工作经验：</td>
                          <td>4年</td>
                        </tr>
                        <tr>
                          <td>QQ：</td>
                          <td>
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=273259755&amp;site=qq&amp;menu=yes">273259755</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h4 class="page-header">
                <span>求职意向</span>
              </h4>
              <div class="space">
                <div style="white-space: normal;">
                  <div style="margin-bottom: 15px;">
                    <strong style="font-weight: bold;">由上至下，优先级依次降低</strong>
                  </div>
                  <ul class="list-unstyled">
                    <li>1. 非常希望从事移动端开发工作，本人擅长多终端页面适配，并且有大量工作经验与技巧，遇到问题，提出解决方案，快速应用到工作中</li>
                    <li>2. 从事PC端开发工作，希望公司能够更多的拥抱html5，拥抱未来</li>
                    <li>3. 熟悉nodejs，可从事nodejs开发</li>
                    <li>4. 擅长php mysql，可做后端业务开发工作</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h4 class="page-header">
                <span>教育背景</span>
              </h4>
              <div class="space">
                <div class="row">
                  <div class="time-line">
                    <ul class="list-unstyled">
                      <li>
                        <div class="date">2009.09 - 2013.06</div>
                        <p>就读于山东工艺美术学院，主修服装设计与工程专业 <br> 闲暇之余，学习网站开发 <br> 获得学士学位</p>
                      </li>
                      <li>
                        <div class="date">2006.08 - 2009.06</div>
                        <p>就读于临清实验高中</p>
                      </li>
                      <li>
                        <div class="date">2003.09 - 2006.06</div>
                        <p>就读于临清自忠中学</p>
                      </li>
                      <li>
                        <div class="date">1998.09 - 2003.06</div>
                        <p>就读于枣林小学</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h4 class="page-header">
                <span>职业技能</span>
              </h4>
              <div class="space">
                <div class="row">
                  <ul class="list-unstyled">
                    <li>1. 熟练操作原生js，可以不基于任何框架，快速开发web应用</li>
                    <li>2. 多年的html、css开发经验，深谙浏览器之间的差异，快速定位问题</li>
                    <li>3. 能够使用Angular、React、jQuery、bootStrap等前端框架进行开发</li>
                    <li>4. fis、gulp、webpack... 独立搭配前端自动化环境</li>
                    <li>5. 能够使用es6语法编写nodejs，or使用babel，编译es6前端代码</li>
                    <li>6. 使用js操作svg、canvas绘制图形，制作酷炫的前端页面</li>
                    <li>7. 美术科班出身，能够熟练使用Photoshop做切图工作，无需设计帮助</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h4 class="page-header">
                <span>工作经历</span>
              </h4>
              <div class="space">
                <div id="work-box">
                  <div>
                    <table class="align">
                      <tbody>
                        <tr>
                          <td colspan="2">2015.11 - 2016.09</td>
                        </tr>
                        <tr>
                          <td>就 职 于 ：</td>
                          <td>深圳市爱普优科技有限公司</td>
                        </tr>
                        <tr>
                          <td>职　　位：</td>
                          <td>前端工程师</td>
                        </tr>
                        <tr>
                          <td>工作内容：</td>
                          <td>
                            <ul class="list-unstyled">
                              <li>
                                1. 负责公司官网开发，独立完成切图，高度还原设计图，并且做了响应式设计，兼容多平台，不基于任何css框架。独立完成翻译工作，支持中英文，访问
                                <a href="http://appholly.com/product.html" target="_blank">http://appholly.com/product.html</a>
                              </li>
                              <li>
                                2. 与c++配合，完成i-Funbox开发工作，独立完成前端开发工作，提供多种交互方式，供用户管理自己的苹果手机
                                <a href="http://dl.i-funbox.com/ifunbox_setup.exe?7/8/2015.exe">点击下载</a>
                              </li>
                              <li>
                                3. 与ios开发人员配合，开发了FileExpress web版管理工具，在浏览器中操作苹果手机文件，请在AppStore中搜索 iFileExpress
                              </li>
                              <li>4. 参与Game Today开发工作，负责web页面分享开发，请在AppStore中搜索GameToday</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table class="align">
                      <tbody>
                        <tr>
                          <td colspan="2">2015.07 - 2015.11</td>
                        </tr>
                        <tr>
                          <td>就 职 于 ：</td>
                          <td>深圳市云聚辉煌文化科技有限公司</td>
                        </tr>
                        <tr>
                          <td>职　　位：</td>
                          <td>前端工程师</td>
                        </tr>
                        <tr>
                          <td>工作内容：</td>
                          <td>
                            <ul class="list-unstyled">
                              <li>1. 负责云图大数据开发工作，与java后台对接，使用highcharts库，做图表展示</li>
                              <li>2. 负责公司官网开发工作，大量使用html5技术进行开发</li>
                              <li>3. 负责公司产品宣传页制作，独立完成切图，html，css，js开发工作</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table class="align">
                      <tbody>
                        <tr>
                          <td colspan="2">2014.07 - 2015.07</td>
                        </tr>
                        <tr>
                          <td>就 职 于 ：</td>
                          <td>北京咏蝉科技有限公司</td>
                        </tr>
                        <tr>
                          <td>职　　位：</td>
                          <td>前端工程师</td>
                        </tr>
                        <tr>
                          <td>工作内容：</td>
                          <td>
                            <ul class="list-unstyled">
                              <li>1. 负责公司内部OA管理系统开发工作</li>
                              <li>2. 参与外包工作，帮助公司盈利</li>
                              <li>3. 采用html5技术，开发公司音乐管理后台工作，</li>
                              <li>4. 独立完成设计以及前后端开发公司bug反馈系统</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table class="align">
                      <tbody>
                        <tr>
                          <td colspan="2">2013.09 - 2014.07</td>
                        </tr>
                        <tr>
                          <td>就 职 于 ：</td>
                          <td>杏树林信息技术(北京)有限公司</td>
                        </tr>
                        <tr>
                          <td>职　　位：</td>
                          <td>前端工程师</td>
                        </tr>
                        <tr>
                          <td>工作内容：</td>
                          <td>
                            <ul class="list-unstyled">
                              <li>
                                1. 参与病历夹网页版研发工作，与其他开发人员配合，主要负责日历、图片浏览等组件开发工作，请访问
                                <a href="https://www.xingshulin.com/casefolder_professional/index.html">病历夹网站版</a>
                              </li>
                              <li>2. 独立完成公司翻译管理平台开发工作，让翻译人员能够对照英文文档进行逐行翻译，以及翻译统计工作，帮助结算</li>
                              <li>3. 独立完成公司内部OCR识别系统前端开发工作，并获得项目奖金</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table class="align">
                      <tbody>
                        <tr>
                          <td colspan="2">2012.09 - 2013.09</td>
                        </tr>
                        <tr>
                          <td>就 职 于 ：</td>
                          <td>艾凡尔营销策划有限公司</td>
                        </tr>
                        <tr>
                          <td>职　　位：</td>
                          <td>设计师</td>
                        </tr>
                        <tr>
                          <td>工作内容：</td>
                          <td>
                            <ul class="list-unstyled">
                              <li>1. 负责设计工作，熟练使用photoshop AI等平面设计软件进行设计工作</li>
                              <li>2. 使用html,css,js将设计好的图片转化为浏览器可以识别的网页</li>
                              <li>3. 负责公司产品页面开发工作，基于百度推广，做营销</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h4 class="page-header">
                <span>自我评价</span>
              </h4>
              <div class="space">
                <ul class="list-unstyled">
                  <li>1. 良好的自学能力，能够快速学习新的框架，新的技术</li>
                  <li>2. 热情开朗，帮助同事解决开发中遇到的各种bug，问题</li>
                  <li>3. 持续学习者，以编程为乐，热爱一切与计算机有关的领域</li>
                  <li>4. 思维与手指一样灵活，有快于常人的编码能力</li>
                  <li>5. 热爱前端，热爱酷炫的画面，设计属于我的page</li>
                  <li>6. 独立思考，动手实践，计算机编程是一门实践的艺术</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['g'],
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
})
