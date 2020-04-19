import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav:{
      sidebar:[
        { title: 'Delete Tweets', icon: 'delete-variant', has_icon: true, link: "about" },
        { title: 'View Tweets', icon: 'view-split-vertical', has_icon: true, link: "del" },
      ],
      header:[
        { title: 'About', icon: 'delete-variant', has_icon: true, link: "about" },
        { title: 'Connect Twitter', icon: 'view-split-vertical', has_icon: true, link: "del" },
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
