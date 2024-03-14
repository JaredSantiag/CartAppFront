import { Link } from "react-router-dom";
import { ChevronBarLeft, ChevronBarRight, ChevronDoubleLeft, ChevronDoubleRight } from 'react-bootstrap-icons';

export const Paginator = ({ url, paginator }) => {

    return (<>
        {paginator?.length === 0 ||
            <ul className="pagination">

                <li className={paginator.first ? 'page-item disabled' : 'page-item'}>
                    <Link className="page-link" to={`${url}/0`}>
                        <ChevronBarLeft/>
                    </Link>
                </li>

                {paginator.number == 0 ||
                    <li className="page-item">
                        <Link className="page-link" to={`${url}/${paginator.number - 1}`}>
                            <ChevronDoubleLeft/>
                        </Link>
                    </li>
                }

                {paginator.number >= paginator.totalPages - 1 ||
                    <li className="page-item">
                        <Link className="page-link" to={`${url}/${paginator.number + 1}`}>
                            <ChevronDoubleRight/>
                        </Link>
                    </li>
                }

                <li className={paginator.last ? 'page-item disabled' : 'page-item'}>
                    <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`}>
                        <ChevronBarRight/>
                    </Link>
                </li>
            </ul>
        }
    </>)
}