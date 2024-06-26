import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import './movie-grid.scss'
import { Button, Input, MovieCard, OutlineButton } from "..";
import { category, movieType, tmdbApi, tvType } from "../../api";

const MovieGrid = (props: any) => {

    const [items, setItems] = useState<any>([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const { keyword }: { keyword: string } = useParams()

    useEffect(() => {
        const getList = async () => {
            let response: any = null
            if (keyword === undefined) {
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params })
                        break;
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, { params })
            }
            setItems(response.results)
            setTotalPage(response.total_pages)
        }
        getList()
    }, [props.category, keyword])

    const loadMore = async () => {
        let response: any = null
        if (keyword === undefined) {
            const params = {
                page: page + 1
            }
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params })
                    break;
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, { params })
        }
        setItems([...items, ...response.results])
        setPage(page + 1)
    }

    return (
        <div>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {
                    items.map((item: any, i: any) => <MovieCard category={props.category} item={item} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className='small' onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </div>
    )
}

const MovieSearch = (props: any) => {

    const history = useHistory()
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category[props.category as keyof typeof category]}/search/${keyword}`)
            }
        }, [keyword, props.category, history]
    )
    useEffect(() => {
        const enterEvent = (e: any) => {
            e.preventDefault()
            if (e.keyCode === 13) {
                goToSearch()
            }
        }
        document.addEventListener('keyup', enterEvent)
        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    }, [keyword, goToSearch])

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e: any) => setKeyword(e.target.value)}
            />
            <Button className='small' onClick={goToSearch}>Search</Button>
        </div>
    )
}

export default MovieGrid