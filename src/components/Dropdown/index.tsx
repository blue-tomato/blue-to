import classNames from "classnames";
import { forwardRef, useEffect, useId, useMemo, useRef, useState } from "react";
import Icon from "../Icon";
import styles from "./index.module.scss";

type IconProp = React.ComponentProps<typeof Icon>["icon"];

type Option = {
	label: string;
	value: string;
	icon?: IconProp;
};

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
	options: Option[];
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	color?: "default" | "black" | "grey";
	size?: "large" | "small";
	icon?: IconProp;
	disabled?: boolean;
};

const Dropdown = forwardRef<HTMLDivElement, Props>(
	(
		{
			options,
			value,
			defaultValue,
			onChange,
			placeholder = "Dropdown Text",
			color = "default",
			size = "large",
			icon,
			disabled = false,
			className,
			...props
		},
		ref,
	) => {
		const listId = useId();
		const wrapperRef = useRef<HTMLDivElement>(null);
		const [open, setOpen] = useState(false);
		const [internalValue, setInternalValue] = useState(defaultValue);

		const isControlled = value !== undefined;
		const selectedValue = isControlled ? value : internalValue;
		const selectedOption = useMemo(
			() => options.find((option) => option.value === selectedValue),
			[options, selectedValue],
		);

		useEffect(() => {
			if (!open) return;

			const handlePointerDown = (event: MouseEvent) => {
				if (!wrapperRef.current?.contains(event.target as Node)) {
					setOpen(false);
				}
			};
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === "Escape") setOpen(false);
			};

			document.addEventListener("mousedown", handlePointerDown);
			document.addEventListener("keydown", handleKeyDown);
			return () => {
				document.removeEventListener("mousedown", handlePointerDown);
				document.removeEventListener("keydown", handleKeyDown);
			};
		}, [open]);

		const handleSelect = (option: Option) => {
			if (!isControlled) setInternalValue(option.value);
			onChange?.(option.value);
			setOpen(false);
		};

		const leadingIcon = icon ?? selectedOption?.icon;

		return (
			<div
				ref={mergeRefs(ref, wrapperRef)}
				className={classNames(className, styles.wrapper, styles[color], styles[size], {
					[styles.open]: open,
					[styles.disabled]: disabled,
				})}
				{...props}
			>
				<button
					type="button"
					className={styles.trigger}
					aria-haspopup="listbox"
					aria-expanded={open}
					aria-controls={listId}
					disabled={disabled}
					onClick={() => setOpen((previous) => !previous)}
				>
					{leadingIcon && <Icon className={styles.leadingIcon} icon={leadingIcon} />}
					<span className={styles.text}>{selectedOption?.label ?? placeholder}</span>
					<Icon
						className={styles.arrow}
						icon={open ? "functional.arrowupDefaultBlack" : "functional.arrowdownDefaultBlack"}
					/>
				</button>

				{open && (
					<div id={listId} className={styles.list} role="listbox">
						{options.map((option) => (
							<button
								key={option.value}
								type="button"
								role="option"
								aria-selected={option.value === selectedValue}
								className={classNames(styles.option, {
									[styles.optionSelected]: option.value === selectedValue,
								})}
								onClick={() => handleSelect(option)}
							>
								{option.icon && <Icon className={styles.leadingIcon} icon={option.icon} />}
								<span className={styles.text}>{option.label}</span>
							</button>
						))}
					</div>
				)}
			</div>
		);
	},
);

const mergeRefs =
	<T,>(...refs: (React.Ref<T> | undefined)[]) =>
	(node: T) => {
		for (const ref of refs) {
			if (typeof ref === "function") ref(node);
			else if (ref) (ref as React.MutableRefObject<T>).current = node;
		}
	};

export default Dropdown;
export type { Option as DropdownOption, Props as DropdownProps };
