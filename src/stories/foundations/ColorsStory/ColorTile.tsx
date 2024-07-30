import classes from "./ColorTile.module.scss";

type Props = React.HTMLAttributes<HTMLElement> & {
	color?: string;
	name?: string;
};

const ColorTile = ({ color, name, ...props }: Props) => (
	<button
		className={classes.wrapper}
		onClick={() => name && navigator.clipboard.writeText(name)}
		style={{ backgroundColor: color }}
		{...props}
	>
		{name}
		<br />({color?.toUpperCase()})
	</button>
);

export default ColorTile;
