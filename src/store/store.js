import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tracks: [
      {
        Lesson: "Persian",
        title: "Eminem",
        duration: 365,
        fileName: "E",
        trackCode: 100,
      },
      {
        Lesson: "Persian",
        title: "Dua Lipa",
        duration: 137,
        fileName: "B",
        trackCode: 101,
      },
      {
        Lesson: "Persian",
        title: "Anchor",
        duration: 257,
        fileName: "A",
        trackCode: 102,
      },

      {
        Lesson: "English",
        title: "English",
        duration: 393,
        fileName: "T",
        trackCode: 103,
      },

      {
        Lesson: "English",
        title: "ENGLISH-A1",
        duration: 393,
        fileName: "ENGLISH-A1",
        trackCode: 104,

      },
      {
        Lesson: "English",
        title: "ENGLISH-A2",
        duration: 288,
        fileName: "ENGLISH-A2",
        trackCode: 105,

      },
      {
        Lesson: "English",
        title: "ENGLISH-B1",
        duration: 231,
        fileName: "ENGLISH-B1",
        trackCode: 106,

      },
      {
        Lesson: "English",
        title: "ENGLISH-B2",
        duration: 182,
        fileName: "ENGLISH-B2",
        trackCode: 107,

      },
      {
        Lesson: "English",
        title: "ENGLISH-C1",
        duration: 165,
        fileName: "ENGLISH-C1",
        trackCode: 108,

      },
      {
        Lesson: "English",
        title: "ENGLISH-C2",
        duration: 106,
        fileName: "ENGLISH-C2",
        trackCode: 109,

      },

      {
        Lesson: "Deutsch",
        title: "Deutsch-A1",
        duration: 203,
        fileName: "Deutsch-A1",
        trackCode: 110,

      },

      {
        Lesson: "Deutsch",
        title: "Deutsch-A2",
        duration: 71,
        fileName: "Deutsch-A2",
        trackCode: 111,

      },
      {
        Lesson: "Deutsch",
        title: "Deutsch-B1",
        duration: 123,
        fileName: "Deutsch-B1",
        trackCode: 112,

      },

      {
        Lesson: "Deutsch",
        title: "Deutsch-B2",
        duration: 156,
        fileName: "Deutsch-B2",
        trackCode: 113,

      },

      {
        Lesson: "Deutsch",
        title: "Deutsch-C1",
        duration: 67,
        fileName: "Deutsch-C1",
        trackCode: 600,

      },

      {
        Lesson: "Deutsch",
        title: "Deutsch-C2",
        duration: 120,
        fileName: "Deutsch-C2",
        trackCode: 666,
      },
      {
        Lesson: "France",
        title: "france-A1",
        duration: 37,
        fileName: "france-A1",
        trackCode: 1000,
      },
      {
        Lesson: "France",
        title: "france-A2",
        duration: 1094,
        fileName: "france-A2",
        trackCode: 1001,
      },
      {
        Lesson: "France",
        title: "france-B1",
        duration: 934,
        fileName: "france-B1",
        trackCode: 1003,
      },
      {
        Lesson: "France",
        title: "france-B2",
        duration: 1163,
        fileName: "france-B2",
        trackCode: 1004,
      },
      {
        Lesson: "France",
        title: "france-C1",
        duration: 1171,
        fileName: "france-C1",
        trackCode: 1004,
      },
      {
        Lesson: "France",
        title: "france-C2",
        duration: 1094,
        fileName: "france-C2",
        trackCode: 1005,
      },

      {
        Lesson: "Italy",
        title: "italy-A1",
        duration: 72,
        fileName: "italy-A1",
        trackCode: 1006,
      },
      {
        Lesson: "Italy",
        title: "italy-A2",
        duration: 140,
        fileName: "italy-A2",
        trackCode: 1007,
      },
      {
        Lesson: "Italy",
        title: "italy-B1",
        duration: 111,
        fileName: "italy-B1",
        trackCode: 1008,
      },
      {
        Lesson: "Italy",
        title: "italy-B2",
        duration: 150,
        fileName: "italy-B2",
        trackCode: 1009,
      },
      {
        Lesson: "Italy",
        title: "italy-C1",
        duration: 178,
        fileName: "italy-C1",
        trackCode: 1010,
      },
      {
        Lesson: "Italy",
        title: "italy-C2",
        duration: 210,
        fileName: "italy-C2",
        trackCode: 1011,
      },
      {
        Lesson: "Spanish",
        title: "Spanish-A1",
        duration: 508,
        fileName: "Spanish-A1",
        trackCode: 1012,
      },
      {
        Lesson: "Spanish",
        title: "Spanish-A2",
        duration: 87,
        fileName: "Spanish-A2",
        trackCode: 1013,
      },
      {
        Lesson: "Spanish",
        title: "Spanish-B1",
        duration: 588,
        fileName: "Spanish-B1",
        trackCode: 1014,
      },
      {
        Lesson: "Spanish",
        title: "Spanish-B2",
        duration: 528,
        fileName: "Spanish-B2",
        trackCode: 1015,
      },
      {
        Lesson: "Spanish",
        title: "Spanish-C1",
        duration: 582,
        fileName: "Spanish-C1",
        trackCode: 1016,
      },
      {
        Lesson: "Spanish",
        title: "Spanish-C2",
        duration: 587,
        fileName: "Spanish-C2",
        trackCode: 1017,
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
