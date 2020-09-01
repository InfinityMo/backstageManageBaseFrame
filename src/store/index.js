import Vue from 'vue'
import Vuex from 'vuex'
// import menu from './menu'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spinning: false, // 加载loading的状态
    slideMenu: [
      {
        pId: '1',
        pTitle: '菜单1',
        icon: '',
        item: [{
          path: '/children',
          title: '菜单1-1'
        },
        {
          path: '/children2',
          title: '菜单1-2'
        }, {
          path: '/children3',
          title: '菜单1-3'
        }
        ]
      }, {
        pId: '2',
        pTitle: '菜单2',
        icon: '',
        item: [{
          path: '/test/children',
          title: '菜单2-1'
        },
        {
          path: '/test/children2',
          title: '菜单2-2'
        }, {
          path: '/test/children3',
          title: '菜单2-3'
        }
        ]
      }
    ],
    breadCurmb: []
  },
  getters: {
    menus: state => state.slideMenu,
    getBreadCurmb: state => state.breadCurmb
  },
  mutations: {
    // 突变配置加载loading的状态
    setSpinning (state, payload) {
      state.spinning = payload
    },
    // 设置面包屑
    setBreadCurmb (state, payload) {
      state.breadCurmb = payload
    }
  },
  // 配置异步提交状态
  actions: {
  },
  // 配置store模块
  modules: {
    // menu
  }
})
