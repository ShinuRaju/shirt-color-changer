import tinycolor from "tinycolor2";
import { IColor } from "./Fields/RenderNameField";
import zIndex from "@mui/material/styles/zIndex";

export const chipStyle = (color: string) => ({
  backgroundColor: color,
  color: tinycolor(color).isLight() ? "black" : "white",
  margin: "2px",
  "& .MuiChip-deleteIcon": {
    color: "grey",
    border: ` 2px solid ${tinycolor(color).isLight() ? "black" : "white"}`,
    borderRadius: "50%",
  },
});

export const autoCompleteListStyle = (color: string) => ({
  backgroundColor: color,
  color: tinycolor(color).isLight() ? "black" : "white",
});

export const tempBox = {
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 4,
  height: "100%",
  width: "100%",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: "2px solid #F5F5F5",
};

export const subTempBox = (color: IColor) => ({
  flex: 1,
  bgcolor: color.HEX,
  color: tinycolor(color.HEX).isLight() ? "black" : "white",
  display: "grid",
  placeItems: "center",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
});

export const dressCard = {
  position: "relative",
  borderRadius: "5px",
  m: 1,
  p: 1,
  bgcolor: "#F5F5F5",
  width: "170px",
  flex: 1,
  display: "grid",
  placeItems: "center",
};

export const badgeStyles = {
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 11,
};

export const visibilityIconStyle = (color: IColor, visible: boolean) => ({
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 10,
  color: !visible || tinycolor(color.HEX).isLight() ? "black" : "white",
});
