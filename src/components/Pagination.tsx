import Button from "@/components/Button";
import styles from "./Pagination.module.scss";
import { useState } from "react";

type PaginationProps = {
  totalPagesCount: number;
  totalItemsCount: number;
  itemsCountPerPage: number;
};

const Pagination = ({
  totalPagesCount,
  totalItemsCount,
  itemsCountPerPage,
}: PaginationProps) => {
  const currentPageSearchParam = new URLSearchParams(
    window.location.search
  ).get("page");

  const [page, setPage] = useState(
    currentPageSearchParam ? parseInt(currentPageSearchParam) : 1
  );

  const handleNavigation = (page: number) => {
    setPage(page);
    const newUrlSearchParams = new URLSearchParams(window.location.search);
    newUrlSearchParams.set("page", page.toString());
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${newUrlSearchParams.toString()}`
    );
  };

  const navigateToNext = () => {
    if (page < totalPagesCount) {
      handleNavigation(page + 1);
    }
  };

  const navigateToPrevious = () => {
    if (page > 1) {
      handleNavigation(page - 1);
    }
  };

  const itemsVisibleOnPage = page * itemsCountPerPage;

  return (
    <div className={styles.wrapper}>
      <p className={styles.infoText}>
        {`you saw ${itemsVisibleOnPage} from ${totalItemsCount}`}
      </p>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(page / totalPagesCount) * 100}%` }}
        ></div>
      </div>
      <nav aria-label="pagination" className={styles.buttonsContainer}>
        <Button
          icon="functional.arrowleftDefaultWhite"
          variant="secondary"
          disabled={page === 1}
          className={styles.button}
          onClick={navigateToPrevious}
        ></Button>
        <span className={styles.pageNumberText}>
          {`page ${page} from ${totalPagesCount}`}
        </span>
        <Button
          icon="functional.arrowrightDefaultWhite"
          variant="secondary"
          disabled={page === totalPagesCount}
          className={styles.button}
          onClick={navigateToNext}
        ></Button>
      </nav>
    </div>
  );
};

export default Pagination;
