import { useParams } from "react-router";
import { MovieGrid, PageHeader } from "../components";
import { category as cate } from "../api";
import { useEffect } from "react";

const Catalog = () => {
    const { category } : { category: string} = useParams()
    
    useEffect(() => {
        document.title = 'TungMovie | Catalog';
    }, [])
    

    return (
        <div>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </div>
    )
}

export default Catalog