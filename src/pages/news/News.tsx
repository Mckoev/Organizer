import { useEffect } from 'react';
import './news.css';
import { getLatestNews } from 'api/news/getLatestNews';
import { useAppSelector } from 'reduxToolkit/hooks';
import Spinner from '../spinner/Spinner';
import ListComponent from '../../components/News/ListComponent';

function News() {
    const isLoadingLatestNews: boolean = useAppSelector((state) => state.isLoading.isLoadingLatestNews);

    useEffect(() => getLatestNews(), []);

    return (
        <div className='page page-news'>
            <div className='overlay'>
                <div className='panel panel-newsList'>{isLoadingLatestNews ? <Spinner /> : <ListComponent />}</div>
            </div>
        </div>
    );
}

export default News;