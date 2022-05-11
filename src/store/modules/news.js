import getDate from '@/utils/getDate'

export default {
  namespaced: true,

  state: () => ({
    sortType: 'DESC',
    searchQuery: '',

    articles: [
      {
        id: 1,
        title: 'Article 1',
        imageUrl: require('@/assets/images/news-article.jpg'),
        imageAlt: 'hello',
        date: '11.12.2021',
        newsSource: 'CNN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Article 2',
        imageUrl: require('@/assets/images/news-article.jpg'),
        imageAlt: 'hello',
        date: '10.05.2021',
        newsSource: 'CNN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        title: 'Article 3',
        imageUrl: require('@/assets/images/news-article.jpg'),
        imageAlt: 'hello',
        date: '17.09.2021',
        newsSource: 'CNN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 4,
        title: 'Article 4',
        imageUrl: require('@/assets/images/news-article.jpg'),
        imageAlt: 'hello',
        date: '06.03.2021',
        newsSource: 'CNN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 5,
        title: 'Article 5',
        imageUrl: require('@/assets/images/news-article.jpg'),
        imageAlt: 'hello',
        date: '25.12.2021',
        newsSource: 'CNN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 6,
        title: 'Article 6',
        imageUrl: require('@/assets/images/news-article.jpg'),
        imageAlt: 'hello',
        date: '10.01.2022',
        newsSource: 'CNN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  }),

  mutations: {
    SET_SORTING (state, type) {
      state.sortType = type
    },
    SET_SEARCH_QUERY (state, query) {
      state.searchQuery = query
    },
  },

  actions: {
    toggleSorting ({ state, commit }) {
      const { sortType } = state
      const updatedType = sortType === 'DESC' ? 'ASC' : 'DESC'

      commit('SET_SORTING', updatedType)
    },
    searchArticle ({ commit }, query) {
      commit('SET_SEARCH_QUERY', query)
    },
  },

  getters: {
    getSortedArticles: state => {
      const { sortType } = state

      return [...state.articles].sort((a, b) => {
        if (sortType === 'DESC') {
          return getDate(b.date) - getDate(a.date)
        }
        if (sortType === 'ASC') {
          return getDate(a.date) - getDate(b.date)
        }
      })
    },
    getFilteredArticles: (state, getters) => {
      const articles = getters.getSortedArticles
      const { searchQuery } = state

      return articles.filter(item =>
        item.title?.toLowerCase()?.includes(searchQuery),
      )
    },
  },
}
