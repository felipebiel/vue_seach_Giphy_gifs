/* importa o axios */
window.axios = require('axios');
/* seta o filtro de ajax no axios */
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
