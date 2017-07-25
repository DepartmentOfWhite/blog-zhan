Vue.component('cd-list', { // 卡片列表
  template: `
    <div class="row cd-list">
      <section class="col-md-4 col-sm-6"
        v-for="(item, idx) in cdList"
      >
        <div class="in">
          <div class="img-box"
            :style="{backgroundImage: 'url('+item.imgURL+')'}"
            @click="clickCD(idx)"
          >
          </div>
          <div class="down">
            <div class="title">
              <div class="avatar fl"></div>
              <div class="text">{{item.title}}</div>
            </div>
            <div class="sub-title">{{item.subTitle}}</div>
          </div>
        </div>
      </section>
    </div>
  `,
  props: ['g', 'cdList'],
  data() {
    return {

    }
  },
  methods: {
    clickCD(idx) {
      var vm = this
      var item = this.cdList[idx]
      vm.$set(vm.g.router, 'iframeURL', item.url)
    }
  },
  mouted() {
    
  }
})

Vue.component('cd-list2', { // 卡片列表
  template: `
    <div class="row cd-list">
      <section class="col-sm-3 col-xs-6"
        v-for="(item, idx) in cdList"
      >
        <div class="in">
          <div class="img-box" :style="{backgroundImage: 'url('+faceImg[idx%100]+')'}"></div>
          <div class="down">
            <div class="title" style="height: auto; line-height: 1.5em; margin: 0;">
              <div class="fr">
                <a :href="item.url" class="btn btn-success btn-xs" target="_blank">个人网站</a>
              </div>
              <div class="text">
                <span>{{item.username}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  props: ['g', 'cdList'],
  data() {
    return {
      faceImg: ["http://tse2.mm.bing.net/th?id=OIP.q53c9FWOXGvw00Xr-a162wD6D6&w=210&h=210&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.7tHmoR_mte6veEPpG4dpRgEFDv&w=230&h=210&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.1JP7IvfB4KGsfpeK4Hb0QAEsEs&w=210&h=210&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.iu234XTRwZQzcrqRaGa3EAD6D6&w=210&h=210&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.y91Dn5xlrCnzgMGWsXCypAEsEs&w=209&h=210&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.rjsrE2NDwD3h35w0TtpTxgEsEs&w=224&h=215&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.scCB3oW9MAoZj84PRRrAAgEsEs&w=212&h=212&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.9j7o71IyzF7R6d7aTa4iIgD6D6&w=220&h=213&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.t5f2w--y8m-bE8VeKuH7zAEKEs&w=199&h=213&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.FCDEU5V_KFUWfc0jcp0n5gDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.5jhob_ircT97A9IppzrztAEsEs&w=223&h=213&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.liBxVIKqWplwfGdfKJGzKAEPDm&w=244&h=207&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.YE0FXBmUR_LvrwOYaAs26wD6D6&w=223&h=213&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.I7deUqp0xZ2OiX1SxDrgTgD6D6&w=218&h=218&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.iAe59tq3XsgNZQ5xmqIoUgD6D6&w=212&h=212&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.bptoeqVU1WFCmIe1UZM8qwDoEN&w=191&h=218&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.zFHMM1nmacDSqmOp8Y564QEsEs&w=221&h=218&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.Dh7EmSPEIYDdd5u1J-CYHQEsEs&w=221&h=218&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.g5rwDGuirlcdFLg8l0STnQEsEs&w=212&h=212&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.CrLMi4XFy04W697DEJr7SQD6D6&w=160&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.PIpSzxpMYJ7MXiuBRJaOSgDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.oVRPiTOxk15EASM6jXu44gDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.o_8dlWVGAzdiGyKl1gbRRAEsEs&w=160&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.Y8dwXbIvuh0ILEzsRjn3kwEEEs&w=139&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.Pszt1UcTkFQC97J24miIygDYEg&w=115&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.7i6T7KI8ODeymBIwfG3z_gEsEs&w=118&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.Q0PLI2X4RSiwYdSn7DX9nwD1DI&w=128&h=141&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.gh_wjg_rqcFSfRFaAcOvJgEsES&w=129&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.WI2hOu_bVyslQujwhEjRuwDIEs&w=129&h=193&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.g__qcb7WiSa2TBk4kBZgywD6D6&w=197&h=193&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.8MTv2poQmPn9kaow5QpPUwDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.WvQ6lqR_hbR3rQmFhip-HgEsEs&w=198&h=193&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.50SszoCz8W7Max70UOMoRAElEs&w=194&h=193&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.fMhHEsKAPvbtDzgfxm3kfwEsEs&w=198&h=193&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.ymAHhDtAMyRy9giqMWTsjwEsEs&w=198&h=193&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.5pEEik87AzCsklH44fY8bwDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.hlr6uhTKFA1h8-J-kWr1NQD_D0&w=186&h=172&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.-XlsGGei4pRfWWNpqvCkwQD6D6&w=178&h=172&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.a615VQZMvj5HSfRRCJfJaAEsEq&w=179&h=172&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.QwNBMTRlJ37dEcnBG-B4hADIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.hcAI29VjUq3sQN2Rfh8powEyDM&w=264&h=172&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.DAD1v8yy5PbGrAakT4HoDgDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.mxfGYUAWH2Ypo66mJcm-TwEsEs&w=212&h=212&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.P_8mPeR5r9Ne66rI6icNvQD6D6&w=220&h=219&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.axTjV9fbqVv5nXYbtDI7twDlEP&w=188&h=219&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.6n7KeeDcB864hlskzuGeowD6D6&w=222&h=219&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.d8e7w8Da8UfNEPmAdVEqTQD6D6&w=212&h=212&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP._tW18zKlEWLv04gpAri_-AD6D6&w=222&h=219&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.vi3RASSqyWACdBsQBm1YEAEsEs&w=177&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.l23-Fw2PFUDclsLM-Pv2cQDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.TJs5iQMyLGOyutKMdG7IgAD7D4&w=185&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.KeX87Q3xH6nYYoi4U7WjLAEcDb&w=233&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.GTJZndMxlDZKAaVWQQ5ioADIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.51w9hvK9KfwNYqyShnq4rwD6D6&w=182&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.u-kixWKsjJkKEIqdviP6SQEsEs&w=182&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.kwrzMA37JwCYw9jlfN1QEgEsEa&w=170&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.0WCqVZSVRir0LSJKVKWClADIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.TMPlL8XCqOZKGxNcODemXgEsEs&w=160&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.B3pSMqrhjfWVjwMa6u8t-AEsEs&w=160&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.hTeyqXzKSGIzV1N7F-ULzgDjET&w=132&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.QCElsHj54SZEPuf65dvOYQD6D6&w=161&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.l5BLUDs_tIAMNH3bHmCVSQD7D4&w=164&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.AUIdy8w4hktQ_drYTSah6AEsEs&w=162&h=160&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.ViUFRDvoOyEfaivNe_d5EAEsEs&w=198&h=191&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.FgaySvVkEGfnMLXqe7LBrQDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.NIF5mcc3YLFi1pEzk_D_WgDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.qzW_55I5miFAp4JlUXzpOgEsEs&w=204&h=191&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.PehoO65JCwZtMDkeSlhPawD5D6&w=203&h=191&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.LlNEy2cCZw6RCPNONAwbKgDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.siDvV0Gq4CmTbgRuIBc3UQDlEP&w=175&h=191&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.xlKxl3r-8dcXCz-r3X6Z6wD6D5&w=190&h=187&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.7S1s8CcDwY0_S3NjXwF8GADlEQ&w=161&h=187&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.94mae55Q1P1hjo1V6NEyQgD6D6&w=191&h=187&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.QWOJhwiaA2O0pNfYaqhg-ADIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.i4WUeWw4lamGj7DPIRBQ4AD6D6&w=191&h=187&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.li9b28AWG-YDPJUNTuC23gEsEs&w=191&h=187&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.vCVmkLusS__1OFBvcChETAEqEq&w=191&h=187&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.IGpmWgy5wD2YbvdPCC4qrAEsEh&w=187&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.I2gVYFKr4aPRGCYrOoNIYQDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.F6zEGD6GAsBqQtngSftwrwDIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.fJ4awQgHpdo3MD7RPzIl1wEsDw&w=226&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.RgaMaPrlOJ7_3Y6aCKMS2wD6D6&w=182&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.l94N_BVpsULY5XO3rRvo4AEsEs&w=182&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.KDfrHIOIO7yAl1ygZqP4mgEsEs&w=182&h=177&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.ck3EiXilyQfxVWhJAYKePADIDI&w=150&h=150&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.XcU5HYw6ou0zKXWRJx1LwQD-D1&w=193&h=183&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.bE7FwXk6qp9qTAzQ3w8h-wC7FN&w=118&h=183&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.8pLp1dK1eFOv4av67WAmfAEsEs&w=186&h=183&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.NP7IK_yObWvVmJpLKHmpsQDgEs&w=140&h=183&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.K5_Hw4zSp7HmJ8wj1aOs3QEsEs&w=186&h=183&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.SBhwCFMjRCUg0iLAbL5FQAEsC9&w=293&h=183&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.bNqV6lg6-2xj-sd-k9CZnQD6D6&w=182&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.vc4bBFzvuHSZvLCpVdDR2gEsEs&w=182&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.W5QsQ78Dvwy_cvhJ4L-HLwD6D6&w=182&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse3.mm.bing.net/th?id=OIP.3VoovnAv-q_-oJSY9I1wFgEsEs&w=181&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.ytBtodT5Q5NG2O80sGQM-wEsEs&w=181&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse2.mm.bing.net/th?id=OIP.40BGZ_Awiy2VNz1by7TYTwD6D6&w=181&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse4.mm.bing.net/th?id=OIP.81Ut8TGAheciSly22qk0IAEsEs&w=180&h=182&c=7&qlt=90&o=4&pid=1.7","http://tse1.mm.bing.net/th?id=OIP.2moOrIXsoGPzqFl5QD3kywEUEi&w=179&h=188&c=7&qlt=90&o=4&pid=1.7"]
    }
  },
  methods: {
    
  },
  mounted() {
    // console.log(this.faceImg.length)
  }
})

Vue.component('leave-msg', { // 卡片列表
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">
          <i class="glyphicon glyphicon-road"></i>
          <span>留下您的足迹</span>
        </h3>
      </div>
      <div class="panel-body">
        <table class="align">
          <tr>
            <td>
              <input placeholder="尊姓大名" type="text" class="form-control">
            </td>
          </tr>
          <tr>
            <td>
              <input placeholder="您的网址" type="url" class="form-control">
            </td>
          </tr>
          <tr>
            <td>
              <textarea placeholder="网站介绍" rows="5" class="form-control"></textarea>
            </td>
          </tr>
          <tr>
            <td style="text-align: left;">
              <input type="submit" value="提交" class="btn btn-success" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  mouted() {
    
  }
})

Vue.component('panel-hot', { // 热门文章
  template: `
    <div class="panel panel-primary ellipsis-list">
      <div class="panel-heading">
        <h3 class="panel-title">
          <i class="glyphicon glyphicon-fire"></i>
          <span>热门文章</span>
        </h3>
      </div>
      <div class="panel-body">
        <ul class="list-unstyled" style="margin-bottom: 0;">
          <li v-for="n in 10">
            <a class="in" href="javascript:">
              <time class="fr">2017-5-21</time>
              <span class="over-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magnam, commodi voluptatem debitis nemo non iste. Velit reiciendis a, perferendis aut ad! Amet deleniti delectus dolor iusto, labore repellendus eos.</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  mouted() {
    
  }
})

Vue.component('panel-music', {  // 音乐
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">
          <i class="glyphicon glyphicon-music"></i>
          <span>写给空气的情话</span>
        </h3>
      </div>
      <div class="panel-body" id="side-bar-music">
        <ul class="list-unstyled" style="margin-bottom: 0;">
          <li v-for="n in 4">
            <div class="in">
              <div style="background-image: url(static/img/music.jpg)">
                <a href="javascript:">
                  <span class="icon-music"></span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  mouted() {

  }
})

Vue.component('panel-adv', {  // 音乐
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">
          <i class="glyphicon glyphicon-qrcode"></i>
          <span>扫码上车</span>
        </h3>
      </div>
      <div class="panel-body">
        <div>
          <a href="javascript:">
            <img src="static/img/guanzhu.png" style="width: 100%;">
          </a>
        </div>
      </div>
    </div>
  `,
  data() {
    return {

    }
  },
  methods: {

  },
  mouted() {

  }
})

Vue.component('my-carousel', {
  template: `
    <div class="my-carousel">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAYAAACQPx/OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHFJREFUeNrs0QENAAAIwzDuX/SxAUknYU3b0Z0CBIiAABEQIAICRECAuABEQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAICBABASIgQAREQIAIyMdWAAEGABr2s4kCs6hQAAAAAElFTkSuQmCC" class="ruler-img">
      <ul class="list-unstyled"><!-- 
      --><li style="background-image: url(static/img/f1.jpg);" href="http://codding.cn"></li><!-- 
      --><li style="background-image: url(static/img/f2.jpg);" href="http://codding.cn"></li><!-- 
      --><li style="background-image: url(static/img/f3.jpg);" href="http://codding.cn"></li><!-- 
      --><li style="background-image: url(static/img/f4.jpg);" href="http://codding.cn"></li><!-- 
      --><li style="background-image: url(static/img/f5.jpg);" href="http://codding.cn"></li><!-- 
      --></ul>
      <div class="btn-box">
        <a href="javascript:" class="on"></a>
        <a href="javascript:"></a>
        <a href="javascript:"></a>
        <a href="javascript:"></a>
        <a href="javascript:"></a>
      </div>
      <img class="direction prev hidden-xs" src="static/img/direction-prev.png">
      <img class="direction next hidden-xs" src="static/img/direction-next.png">
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
    $('.my-carousel').each(function() {
      var carousel = $(this)
      var ul = carousel.find('ul')
      var lis = ul.children()
      var btnBox = carousel.find('.btn-box')
      var btns = btnBox.children()
      var btnPrev = carousel.find('.prev')
      var btnNext = carousel.find('.next')

      var iLeft = 0
      var curIndex = 0
      var timerRun = 0
      var timerAutoplay = 0

      $(window).off('resize.carousel').on('resize.carousel', function(e) {
        iLeft = -curIndex * carousel.width()
      })

      carousel.on('mouseenter', function(e) {
        clearInterval(timerAutoplay)
      }).on('mouseleave', function() {
        autoPlay()
      })

      // ul.append(lis.eq(0).clone(true))
      lis.eq(0).clone(true).appendTo(ul)

      btnPrev.on('click', function(e) {
        curIndex--
        setState()
      }).on('mousedown', function(e) {
        e.stopPropagation()
      })

      btnNext.on('click', function(e) {
        curIndex++
        setState()
      }).on('mousedown', function(e) {
        e.stopPropagation()
      })

      btns.on('click', function(e) {
        var index = $(this).index()
        var _curIndex = (curIndex % btns.length + btns.length) % btns.length
        curIndex -= _curIndex
        curIndex += index
        setState()
      })

      carousel.on('mousedown touchstart', function(e) {
        e.preventDefault()
        clearInterval(timerRun)
        var _e = e.originalEvent
        var isPC = 'clientX' in _e
        var x1 = isPC ? e.clientX : _e.targetTouches[0].clientX
        var originX = iLeft

        var ulWidth = btns.length * carousel.width()
        var elActive = $(isPC ? document : this)
        elActive.on(isPC ? 'mousemove.carousel' : 'touchmove.carousel', function(e) {
          var _e = e.originalEvent
          var x2 = isPC ? e.clientX : _e.targetTouches[0].clientX
          iLeft = x2 - x1 + originX
          ul.css({
            left: (iLeft % ulWidth - ulWidth) % ulWidth + 'px'
          })
        })
        elActive.on('mouseup.carousel touchend.carousel', function(e) {
          elActive.off('mousemove.carousel touchmove.carousel mouseup.carousel touchend.carousel')
          var _e = e.originalEvent
          var x3 = isPC ? e.clientX : _e.changedTouches[0].clientX
          var dis = x3 - x1
          var href = e.target.getAttribute('href')
          if (dis == 0 && href) {
            location.href = href
          }
          if (Math.abs(dis) > 10) {
            dis > 0 ? curIndex-- : curIndex++
          }
          setState()
        })
      })

      function setState() {
        var _curIndex = (curIndex % btns.length + btns.length) % btns.length
        btns.removeClass('on').eq(_curIndex).addClass('on')

        var 目标值 = -curIndex * carousel.width()
        clearInterval(timerRun)
        timerRun = setInterval(function() {
          var speed = (目标值 - iLeft) / 10
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
          iLeft += speed
          var ulWidth = btns.length * carousel.width()
          ul.css({
            left: (iLeft % ulWidth - ulWidth) % ulWidth + 'px'
          })
          if (speed == 0) {
            clearInterval(timerRun)
            ul.css({
              left: -_curIndex * 100 + '%'
            })
          }
        }, 1000 / 60)
      }

      autoPlay()
      function autoPlay() {
        clearInterval(timerAutoplay)
        timerAutoplay = setInterval(function() {
          curIndex++
          setState()
        }, 2000)
      }
    })
  }
})