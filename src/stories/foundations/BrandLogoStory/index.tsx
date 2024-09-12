import Logo from "./Logo";
import styles from "./index.module.scss";
import logoBlack from "./logo-black.svg";
import logoNoWordmarkBlack from "./logo-no-wordmark-black.svg";
import logoNoWordmarkWhite from "./logo-no-wordmark-white.svg";
import logoNoWordmark from "./logo-no-wordmark.svg";
import logoOutline from "./logo-outline.svg";
import logoRentYourRideBlack from "./logo-rent-your-ride-black.svg";
import logoRentYourRideOutline from "./logo-rent-your-ride-outline.svg";
import logoRentYourRideSquareBlack from "./logo-rent-your-ride-square-black.svg";
import logoRentYourRideSquareOutline from "./logo-rent-your-ride-square-outline.svg";
import logoRentYourRideSquareWhite from "./logo-rent-your-ride-square-white.svg";
import logoRentYourRideSquare from "./logo-rent-your-ride-square.svg";
import logoRentYourRideWhite from "./logo-rent-your-ride-white.svg";
import logoRentYourRide from "./logo-rent-your-ride.svg";
import logoSnowboardSchoolWhite from "./logo-snowboard-school-white.svg";
import logoSnowboardSchool from "./logo-snowboard-school.svg";
import logoSquareBlack from "./logo-square-black.svg";
import logoSquareOutline from "./logo-square-outline.svg";
import logoSquareWhite from "./logo-square-white.svg";
import logoSquare from "./logo-square.svg";
import logoWhite from "./logo-white.svg";
import logo from "./logo.svg";

const BrandLogoStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Brand Logo</div>

		<div className={styles.subtitle}>Rectangle</div>

		<div className={styles.row}>
			<Logo src={logo} />
			<Logo background="dark" src={logoOutline} />
			<Logo src={logoBlack} />
			<Logo background="dark" src={logoWhite} />
		</div>

		<div className={styles.subtitle}>Square</div>

		<div className={styles.row}>
			<Logo src={logoSquare} />
			<Logo background="dark" src={logoSquareOutline} />
			<Logo src={logoSquareBlack} />
			<Logo background="dark" src={logoSquareWhite} />
		</div>

		<div className={styles.subtitle}>Square without wordmark</div>

		<div className={styles.row}>
			<Logo src={logoNoWordmark} />
			<Logo src={logoNoWordmarkBlack} />
			<Logo background="dark" src={logoNoWordmarkWhite} />
		</div>

		<div className={styles.subtitle}>Snowboard school</div>

		<div className={styles.row}>
			<Logo src={logoSnowboardSchool} />
			<Logo background="dark" src={logoSnowboardSchoolWhite} />
		</div>

		<div className={styles.subtitle}>Rent Your Ride</div>

		<div className={styles.row}>
			<Logo src={logoRentYourRide} />
			<Logo background="dark" src={logoRentYourRideOutline} />
			<Logo src={logoRentYourRideBlack} />
			<Logo background="dark" src={logoRentYourRideWhite} />
			<Logo src={logoRentYourRideSquare} />
			<Logo background="dark" src={logoRentYourRideSquareOutline} />
			<Logo src={logoRentYourRideSquareBlack} />
			<Logo background="dark" src={logoRentYourRideSquareWhite} />
		</div>
	</div>
);

export default BrandLogoStory;
