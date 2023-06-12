import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './movie-list.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { category, tmdbApi } from '../../api'
import { MovieCard } from '..'

const MovieList = (props: any) => {

    const [items, setItems] = useState<any>([])
    
    useEffect(() => {
        const getList =async () => {
            let response:any = null
            const params = {}

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params})
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params})
                        break;
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results)
        }
        getList()
    }, [])

    return (
        <div className='movie-list'>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item:any,i:any) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number
}

export default MovieList