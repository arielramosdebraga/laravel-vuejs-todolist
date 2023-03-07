import Cookie from 'js-cookie';

export default {
    redirectIfNotAuthenticated(to, from, next) {
        const token = Cookie.get('_todolist_token');
        let n;

        if (!token) {
            n = { name: 'login' };
        }

        next(n);
    },

    redirectIfAuthenticated(to, from, next) {
        const token = Cookie.get('_todolist_token');
        let n;

        if (token) {
            n = { name: 'index' };
        }

        next(n);
    }
}