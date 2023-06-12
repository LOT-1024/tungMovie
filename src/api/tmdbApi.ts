import { axiosClient } from ".";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: (type: string, params:any) => {
        const url = 'movie/' + movieType[ type as keyof typeof movieType]
        return axiosClient.get(url, params)
    },
    getTvList: (type: string, params: any) => {
        const url = 'tv/' + tvType[type as keyof typeof tvType]
        return axiosClient.get(url, params)
    },
    getVideos: (cate: string, id: any) => {
        const url = category[cate as keyof typeof category] + '/' + id + '/videos'
        return axiosClient.get(url, { params: {} })
    },
    search: (cate: string, params: any) => {
        const url = 'search/' + category[cate as keyof typeof category]
        return axiosClient.get(url, params)
    },
    detail: (cate: string, id: any, params: any) => {
        const url = category[cate as keyof typeof category] + '/' + id
        return axiosClient.get(url, params)
    },
    credits: (cate: string, id:any) => {
        const url = category[cate as keyof typeof category] + '/' + id + '/credits'
        return axiosClient.get(url, { params: {} })
    },
    similar: (cate: string, id: any) => {
        const url = category[cate as keyof typeof category] + '/' + id + '/similar'
        return axiosClient.get(url, { params: {} })
    },
}

export default tmdbApi