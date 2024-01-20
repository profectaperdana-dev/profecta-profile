//import pagination
import Pagination from "react-js-pagination";
import styles from './pagination.module.css';
function definePagination(props) {
    return (
        props.total > 0 && (
            <>
                <Pagination
                    innerClass={ `pagination pagination-sm justify-content-${props.position} mb-0 mt-3` }
                    activePage={ props.currentPage }
                    activeClass={ `page-item` }
                    activeLinkClass={ `${styles.pageactive} text-white` }
                    itemsCountPerPage={ props.perPage }
                    totalItemsCount={ props.total }
                    onChange={ props.onChange }
                    itemClasss="page-item fs-20 text-dark"
                    linkClass="page-link mr-10 text-dark"
                />
            </>

        )
    )
}

export default definePagination;