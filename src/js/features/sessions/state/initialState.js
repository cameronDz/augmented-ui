export default {
  currentPage: 0,
  didInvalidate: true,
  isFetching: false,
  links: { first: '', last: '', next: '', prev: '', self: '' },
  sessions: [],
  totalPages: 0,
  totalRecords: 0,
  lastUpdated: null,
  cardioSessionGetError: null,
  cardioSessionGetPayload: null,
  cardioSessionPutError: null,
  cardioSessionPutPayload: null,
  isLoadingCardioSession: false,
  isProcessingCardioSession: false
};
