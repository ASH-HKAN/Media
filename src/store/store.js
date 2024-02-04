import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tracks: [
      {
        Lesson: "1",
        title: "Eminem",
        duration: 365,
        fileName: "E",
        trackCode: 100,
      },
      {
        Lesson: "2",
        title: "Dua Lipa",
        duration: 137,
        fileName: "B",
        trackCode: 101,
      },
      {
        Lesson: "3",
        title: "Anchor",
        duration: 257,
        fileName: "A",
        trackCode: 102,
      },

      {
        Lesson: "3",
        title: "English",
        duration: 393,
        fileName: "T",
        trackCode: 103,
      },

      {
        Lesson: "4",
        title: "ENGLISH-A1",
        duration: 393,
        fileName: "ENGLISH-A1",
      },
      {
        Lesson: "5",
        title: "ENGLISH-A2",
        duration: 288,
        fileName: "ENGLISH-A2",
      },
      {
        Lesson: "6",
        title: "ENGLISH-B1",
        duration: 231,
        fileName: "ENGLISH-B1",
      },
      {
        Lesson: "7",
        title: "ENGLISH-B2",
        duration: 182,
        fileName: "ENGLISH-B2",
      },
      {
        Lesson: "8",
        title: "ENGLISH-C1",
        duration: 165,
        fileName: "ENGLISH-C1",
      },
      {
        Lesson: "9",
        title: "ENGLISH-C2",
        duration: 106,
        fileName: "ENGLISH-C2",
      },

      {
        Lesson: "10",
        title: "Deutsch-A1",
        duration: 203,
        fileName: "Deutsch-A1",
      },

      {
        Lesson: "11",
        title: "Deutsch-A2",
        duration: 71,
        fileName: "Deutsch-A2",
      },
      {
        Lesson: "12",
        title: "Deutsch-B1",
        duration: 123,
        fileName: "Deutsch-B1",
      },

      {
        Lesson: "13",
        title: "Deutsch-B2",
        duration: 156,
        fileName: "Deutsch-B2",
      },

      {
        Lesson: "14",
        title: "Deutsch-C1",
        duration: 67,
        fileName: "Deutsch-C1",
      },

      {
        Lesson: "15",
        title: "Deutsch-C2",
        duration: 120,
        fileName: "Deutsch-C2",
        trackCode: 666,
      },
    ],
    audioElement: new Audio(),
  },

  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
