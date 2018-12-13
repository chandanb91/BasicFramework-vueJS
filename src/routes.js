import Home from './components/Home.vue';
import Header from './components/Header.vue';

// const User = resolve => {
//     require.ensure(['./components/user/User.vue'], () => {
//         resolve(require('./components/user/User.vue'));
//     }, 'user');
// };

export const routes = [
    { path: '', name: 'home', 
        components: {
            default: Home,
            'header-top': Header
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
]