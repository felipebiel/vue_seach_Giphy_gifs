const URL_GIF = "https://api.giphy.com/v1/";
const API_KEY = "5UtkACWMDStNsWyQW5wECnE8IiVd4TSS";

const URL_BACKEND = 'http://localhost.com'

//cabeçalho para upload
const HEADER = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

const gif = {
    state: {
        gifs: {
            data: []
        },
    },
    mutations: {
        LOAD_GIFS(state, gifs) {
            state.gifs = gifs;
        },
        PUSH_GIFS(state, gifs) {
            for (let index = 0; index < gifs.data.length; index++) {
                state.gifs.data.push(gifs.data[index]);
            }
        }
    },
    actions: {
        loadGifs(context, params) {
            return new Promise((resolve, reject) => {
                axios.get(URL_GIF + `gifs/trending?api_key=${API_KEY}&limit=20&lang=pt&offset=${params.offset}`)
                .then((response) => {
                    if (params.offset == 0) {
                        context.commit('LOAD_GIFS', response.data)
                    } else {
                        //alert();
                        context.commit('PUSH_GIFS', response.data)
                    }

                }).catch((erro) => {
                    reject(erro)
                })
                .finally(() => { });
            });
        },
        getByTag(content, tag){
            return new Promise((resolve, reject) => {
                axios.get(URL_GIF + `gifs/random?api_key=${API_KEY}&lang=pt&tag=${tag}`)
                .then((response) => {
                    resolve(response);
                }).catch((erro) => {
                    reject(erro)
                })
                .finally(() => { });
            });
            
        },
        buscarGifs(context, params) {
            return new Promise((resolve, reject) => {
                axios.get(URL_GIF + `gifs/search?api_key=${API_KEY}&q=${params.termo}&limit=20&lang=pt&offset=${params.offset}`)
                    .then((response) => {

                        if (params.offset == 0) {
                            context.commit('LOAD_GIFS', response.data)
                        } else {
                            //alert();
                            context.commit('PUSH_GIFS', response.data)
                        }

                    }).catch((erro) => {
                        reject(erro)
                    })
                    .finally(() => { });
            });
        },
        gifDetails(context, id_gif) {
            return new Promise((resolve, reject) => {
                axios.get(URL_GIF + `gifs/${id_gif}?api_key=${API_KEY}`)
                    .then((response) => {
                        resolve(response);
                    }).catch((erro) => {
                        reject(erro)
                    })
                    .finally(() => { });
            });
        },
        createNewGif(context, formData) {
            //PARA CADASTRO DE UM NOVO GIF LEVANDO EM CONSIDERAÇÂO O OBJETO DE FORMDATA PARA TER A POSSIBILIDADE DE UPLOADS DE ARQUIVOS
            return new Promise((resolve, reject) => {
                axios.post(URL_BACKEND + `salvar`, formData, HEADER)
                    .then((response) => resolve())
                    .catch((error) => reject(error))
                    .finally();
            });
        },
        carregarGif(context, id_Gif) {
            /* pega a informção para colocar no formulario de edição */
            return new Promise((resolve, reject) => {
                axios.get(URL_BACKEND + `editar/${id_Gif}`)
                    .then((response) => resolve(response.data))
                    .catch((error) => reject(error))
                    .finally(() => {});
            });
        },
        editarGif(context, formData) {
            
            return new Promise((resolve, reject) => {

                //para fazer a edição com arquivos é necessário mudar de PUT para POST e adicionar essa linha
                //isso para Laravel, depende do backend kkk 
                formData.append('_method', 'PUT');

                axios.post(URL_BACKEND + `alterar/${formData.get('id')}`, formData)
                    .then((response) => resolve())
                    .catch((error) => reject(error))
                    .finally();
            });
        },
        destoyGif(context, id_Gif) {
            /* apaga o gif */
            return new Promise((resolve, reject) => {
                axios.delete(URL_BACKEND + `excluir/${id_Gif}`)
                    .then((response) => resolve())
                    .catch((error) => reject(error))
                    .finally();
            });
        }
    },
    getters: {

    }
}

export default gif