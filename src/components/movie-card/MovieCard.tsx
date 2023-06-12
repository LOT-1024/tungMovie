import { Button } from '..'
import { apiConfig, category } from '../../api'
import './movie-card.scss'

import { Link } from 'react-router-dom'

const MovieCard = (props: any) => {
    const item = props.item
    const link = '/' + category[props.category as keyof typeof category] + '/' + item.id
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

    return (
        <Link to={link}>
            <div className='movie-card' style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className='bx bx-play'></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    )
}

export default MovieCard