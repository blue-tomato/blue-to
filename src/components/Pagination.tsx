import Button from "@/components/Button";
import { useState } from "react";
import styles from "./Pagination.module.scss";

type PaginationProps = {
	totalItemsCount: number;
	itemsCountPerPage: number;
	shouldShowProgressBar?: boolean;
	shouldShowInfoText?: boolean;
};

const Pagination = ({
	totalItemsCount,
	itemsCountPerPage,
	shouldShowInfoText,
	shouldShowProgressBar,
}: PaginationProps) => {
	const currentPageSearchParam = new URLSearchParams(
		window.location.search,
	).get("page");

	const [page, setPage] = useState(
		currentPageSearchParam ? Number.parseInt(currentPageSearchParam) : 1,
	);

	const totalPagesCount = Math.ceil(totalItemsCount / itemsCountPerPage);

	const handleNavigation = (page: number) => {
		setPage(page);
		const newUrlSearchParams = new URLSearchParams(window.location.search);
		newUrlSearchParams.set("page", page.toString());
		window.history.pushState(
			{},
			"",
			`${window.location.pathname}?${newUrlSearchParams.toString()}`,
		);
		window.scrollTo(0, 0);
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

	const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "ArrowRight") {
			navigateToNext();
		} else if (event.key === "ArrowLeft") {
			navigateToPrevious();
		}
	};

	const itemsSeen = page * itemsCountPerPage;
	const itemsVisibleOnPage =
		itemsSeen > totalItemsCount ? totalItemsCount : itemsSeen;

	return (
		<div className={styles.wrapper} onKeyUp={handleKeyUp} tabIndex={0}>
			{shouldShowInfoText ? (
				<p className={styles.infoText}>
					{`you saw ${itemsVisibleOnPage} from ${totalItemsCount}`}
				</p>
			) : null}
			{shouldShowProgressBar ? (
				<div className={styles.progressBar}>
					<div
						className={styles.progress}
						style={{ width: `${(page / totalPagesCount) * 100}%` }}
					></div>
				</div>
			) : null}
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
