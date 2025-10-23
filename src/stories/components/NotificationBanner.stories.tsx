import { NotificationBanner } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./NotificationBanner.stories.module.scss";

const Docs: StoryMeta<typeof NotificationBanner> = {
	title: "BLUETO/components/NotificationBanner",
	component: NotificationBanner,
	args: {
		type: "information",
		children:
			"Die im Apple Pay-Konto angegebene Lieferadresse stimmt nicht mit dem ausgewählten Land überein. Bitte überprüfe die Lieferadresse und das ausgewählte Land und versuche es erneut.",
	},
	argTypes: {
		type: {
			control: "radio",
			options: ["error", "information", "success"],
		},
	},
	parameters: {
		links: {
			confluence: "PQAAXw", 
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=2018-144&t=BfSej1K6bcRmrlfU-0",
		},
	},
};

const Information: StoryMeta<typeof NotificationBanner> = {};

const Success: StoryMeta<typeof NotificationBanner> = {
	render: (props) => (
		<div className={styles.container}>
			<NotificationBanner {...props} />
		</div>
	),
	args: {
		type: "success",
		children: "Du hast dich erfolgreich registriert. Bitte bestätige deine E-Mail Adresse.",
	},
};

const Error: StoryMeta<typeof NotificationBanner> = {
	render: (props) => (
		<div className={styles.container}>
			<p className={styles.description}>
				Das Banner wird inline angezeigt.
			</p>
			<div className={styles.component}>
				<NotificationBanner {...props} />
				<div className={styles.content}>
					<h3 className={styles.title}>Bestellübersicht</h3>
					<div className={styles.item}>
						<span>Produkt A (x2)</span>
						<span>50,00 €</span>
					</div>
					<div className={styles.item}>
						<span>Versand</span>
						<span>5,00 €</span>
					</div>
					<hr className={styles.divider} />
					<div className={styles.total}>
						<span>Total</span>
						<span>55,00 €</span>
					</div>
				</div>
			</div>
		</div>
	),
	args: {
		type: "error",
		children: "Es ist ein Fehler bei der Bestellung aufgetreten. Der Warenkorb hat sich verändert.",
	},
};

export default Docs;
export { Information, Success, Error };