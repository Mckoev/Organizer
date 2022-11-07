import { useEffect } from "react";
import { getLatestNews } from "api/news/getLatestNews";
import { useAppSelector } from "reduxToolkit/hooks";
import classNames from "classnames/bind";
import Spinner from "../spinner/Spinner";
import ListComponent from "../../components/News/ListComponent";
import styles from "./news.module.scss";
import Error from "../error/Error";
import ApiError from "../../components/Errors/ApiError/ApiError";

function News() {
    const isLoadingLatestNews: boolean = useAppSelector((state) => state.isLoading.isLoadingLatestNews);
    const isLoadingErrorLatestNews: boolean = useAppSelector((state) => state.isLoading.isErrorApiLatestNews);

    useEffect(() => getLatestNews(), []);

    const cx = classNames.bind(styles);

    let notDownload;
    if (isLoadingErrorLatestNews) {
        notDownload = <Error><ApiError/></Error>
    } else {
        notDownload = <Spinner/>
    }

    return (
        <div className={styles.news}>
            <div className={cx('newsList', 'news__newsList')}>{isLoadingLatestNews ? notDownload : <ListComponent />}</div>
        </div>
    );
}

export default News;
