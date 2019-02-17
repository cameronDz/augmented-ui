/**
 * Initial state values for applicaiton.
 */
export default {
    cardioMachineSessionState: {
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
        }
    }
}
