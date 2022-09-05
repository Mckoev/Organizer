import { newsAction } from 'reduxToolkit/slices/latestNews';
import { URL_LATEST_NEWS } from 'api/news/newsApiData';
import { store } from 'reduxToolkit/store';
import { isLoadingLatestNews } from 'reduxToolkit/slices/isLoading';

let page: number = 0;

export function getLatestNews(): void {
    fetch(`${URL_LATEST_NEWS}&page=${page}`, {
        method: 'Get',
    })
        .then((res) => res.json())
        .then((result) => {
            store.dispatch(newsAction(result.results));
            store.dispatch(isLoadingLatestNews({ isLoadingLatestNews: false }));
        });
    page += 1;
}
