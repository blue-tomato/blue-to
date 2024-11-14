import icons from "@/foundations/icons";
import { capitalize } from "es-toolkit";
import Icon from "./Icon";
import styles from "./index.module.scss";

const IconsStory = () => (
	<div className={styles.wrapper}>
		<div className={styles.header}>Icons</div>

		{Object.entries(icons).map(([key, values]) => (
			<div key={key} className={styles.iconsWrapper}>
				<div className={styles.subtitle}>{capitalize(key)}</div>

				<div className={styles.icons}>
					{Object.entries(values).map(([name, src]) => (
						<Icon
							key={name}
							background={
								name.toLowerCase().includes("white") ? "dark" : "light"
							}
							name={name}
							src={src}
						/>
					))}
				</div>
			</div>
		))}
	</div>
);

export default IconsStory;
