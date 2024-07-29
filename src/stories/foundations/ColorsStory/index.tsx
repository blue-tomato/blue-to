import ColorTile from "./ColorTile";
import classes from "./index.module.scss";

const ColorsStory = () => (
	<div className={classes.wrapper}>
		<div className={classes.header}>Colors (click to copy)</div>

		<div className={classes.row}>
			<ColorTile color="#333333" name="$grey-1" />
			<ColorTile color="#8f8f8f" name="$grey-2" />
			<ColorTile color="#cccccc" name="$grey-3" />
			<ColorTile color="#f4f4f4" name="$grey-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#ffde00" name="$green-1" />
			<ColorTile color="#ffde00" name="$green-2" />
			<ColorTile color="#ffde00" name="$green-3" />
			<ColorTile color="#fffad9" name="$green-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#ff4444" name="$red-1" />
			<ColorTile color="#ff9898" name="$red-2" />
			<ColorTile color="#ffc7c7" name="$red-3" />
			<ColorTile color="#ffe3e3" name="$red-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#0099CC" name="$sky-1" />
			<ColorTile color="#73C7E3" name="$sky-2" />
			<ColorTile color="#B3E0F0" name="$sky-3" />
			<ColorTile color="#D9F0F7" name="$sky-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#2D69AA" name="$blue-1" />
			<ColorTile color="#8CADD0" name="$blue-2" />
			<ColorTile color="#C0D2E6" name="$blue-3" />
			<ColorTile color="#E0E9F1" name="$blue-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#2fa9b4" name="$petrol-1" />
			<ColorTile color="#8dd0d6" name="$petrol-2" />
			<ColorTile color="#c1e5e9" name="$petrol-3" />
			<ColorTile color="#e0f2f4" name="$petrol-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#21cdab" name="$mint-1" />
			<ColorTile color="#8ee4d1" name="$mint-2" />
			<ColorTile color="#c2f0e6" name="$mint-3" />
			<ColorTile color="#e0f8f2" name="$mint-4" />
		</div>

		<div className={classes.row}>
			<ColorTile color="#24a779" name="$green-1" />
			<ColorTile color="#87cfb5" name="$green-2" />
			<ColorTile color="#bde5d7" name="$green-3" />
			<ColorTile color="#def2eb" name="$green-4" />
		</div>
	</div>
);

export default ColorsStory;
