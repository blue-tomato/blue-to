import brandlogos from "@/foundations/brandlogos";
import Logo from "./Logo";
import styles from "./index.module.scss";

const BrandlogosStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Brand Logo</div>

		<div className={styles.subtitle}>Rectangle</div>

		<div className={styles.row}>
			<Logo src={brandlogos.index} />
			<Logo background="dark" src={brandlogos.outline} />
			<Logo src={brandlogos.black} />
			<Logo background="dark" src={brandlogos.white} />
		</div>

		<div className={styles.subtitle}>Square</div>

		<div className={styles.row}>
			<Logo src={brandlogos.square} />
			<Logo background="dark" src={brandlogos.squareOutline} />
			<Logo src={brandlogos.squareBlack} />
			<Logo background="dark" src={brandlogos.squareWhite} />
		</div>

		<div className={styles.subtitle}>Square without wordmark</div>

		<div className={styles.row}>
			<Logo src={brandlogos.noWordmark} />
			<Logo src={brandlogos.noWordmarkBlack} />
			<Logo background="dark" src={brandlogos.noWordmarkWhite} />
		</div>

		<div className={styles.subtitle}>Snowboard school</div>

		<div className={styles.row}>
			<Logo src={brandlogos.snowboardSchool} />
			<Logo background="dark" src={brandlogos.snowboardSchoolWhite} />
		</div>

		<div className={styles.subtitle}>Rent Your Ride</div>

		<div className={styles.row}>
			<Logo src={brandlogos.rentYourRide} />
			<Logo background="dark" src={brandlogos.rentYourRideOutline} />
			<Logo src={brandlogos.rentYourRideBlack} />
			<Logo background="dark" src={brandlogos.rentYourRideWhite} />
			<Logo src={brandlogos.rentYourRideSquare} />
			<Logo background="dark" src={brandlogos.rentYourRideSquareOutline} />
			<Logo src={brandlogos.rentYourRideSquareBlack} />
			<Logo background="dark" src={brandlogos.rentYourRideSquareWhite} />
		</div>
	</div>
);

export default BrandlogosStory;
