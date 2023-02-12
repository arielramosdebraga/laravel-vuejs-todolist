export default {
    namespaced: true,

    state: () => ({
        user: {},
    }),

    mutations: {
        STORE_USER(state, user) {
            state.use = user;
        }
    },

    actions: {},
}