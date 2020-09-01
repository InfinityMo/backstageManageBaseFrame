import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    slideMenu: [
      {
        pid: '1',
        title: '菜单1',
        icon: '',
        item: [{
          cId: '1',
          path: '/children',
          title: '菜单1-1'
        },
        {
          cId: '2',
          path: '/children2',
          title: '菜单1-2'
        }
        ]
      }, {
        index: '2',
        title: '菜单2',
        icon: '',
        item: [{
          cId: '5',
          path: '/test/children',
          title: '菜单2-1'
        },
        {
          cId: '6',
          path: '/test/children2',
          title: '菜单2-2'
        }
        ]
      }
    ]
  },
  getters: {
    menuArray: state => state.slideMenu
  },
  mutations: {

  },
  // 配置异步提交状态
  actions: {
  }
})
