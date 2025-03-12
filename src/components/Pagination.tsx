import Button from "@/components/Button";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.infoText}>{`you saw 10 from 200 products`}</p>
      {/* <p>{`you saw ${productsCount} from ${totalProductsCount}`}</p> */}
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(page / totalPage) * 100}%` }}
        ></div>
      </div>
      <nav aria-label="pagination" className={styles.buttonsContainer}>
        <Button
          icon="functional.arrowleftDefaultWhite"
          variant="secondary"
          disabled={page === 1}
          className={styles.button}
          onClick={() => console.log("previous")}
        ></Button>
        <span className={styles.pageNumberText}>
          {`page ${page} from ${totalPage}`}
        </span>
        <Button
          icon="functional.arrowrightDefaultWhite"
          variant="secondary"
          disabled={page === totalPage}
          className={styles.button}
          onClick={() => console.log("next")}
        ></Button>
      </nav>
    </div>
  );
};

export default Pagination;
