/**
 * Initial state values for applicaiton.
 */
export default {
  cardioMachineSessions: {
    totalRecords: 0,
    totalPages: 0,
    currentPage: 0,
    sessions: [],
    links: {
      self: '',
      first: '',
      last: '',
      prev: '',
      next: ''
    },
    isFetching: false,
    didInvalidate: true,
    lastUpdated: null
  }
}
