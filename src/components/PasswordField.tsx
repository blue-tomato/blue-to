import { forwardRef, useState } from "react";
import Icon from "./Icon";
import styles from "./PasswordField.module.scss";
import TextField from "./TextField";

type IconProp = React.ComponentProps<typeof Icon>["icon"];

type Props = React.ComponentProps<typeof TextField> & {};

const PasswordField = forwardRef<HTMLLabelElement, Props>(({ ...props }, ref) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isRevealed, setIsRevealed] = useState(false);
	const icon = {
		"true,true": "functional.eyeclosedDefaultBlack",
		"true,false": "functional.eyeopenDefaultBlack",
		"false,true": "functional.eyeclosedDefaultGrey",
		"false,false": "functional.eyeopenDefaultGrey",
	}[[isFocused, isRevealed].toString()] as IconProp;

	return (
		<TextField
			ref={ref}
			onBlur={() => setIsFocused(false)}
			onFocus={() => setIsFocused(true)}
			slots={{
				afterInput: (
					<Icon
						className={styles.icon}
						icon={icon}
						onClick={(event) => {
							event.preventDefault();
							setIsRevealed(!isRevealed);
						}}
					/>
				),
			}}
			type={isRevealed ? "text" : "password"}
			{...props}
		/>
	);
});

export default PasswordField;
