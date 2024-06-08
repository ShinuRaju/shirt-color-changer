import tinycolor from "tinycolor2";
import { IColor } from "./Fields/RenderNameField";
import { IInitialState } from "../dataStore/localSlice";

export interface IColorVariants {
  [key: number]: string;
}

export function getColorVariants(baseColor: string) {
  const variants: IColorVariants = {};
  const base = tinycolor(baseColor);
  for (let i = 1; i <= 9; i++) {
    const variantColor = base
      .clone()
      .darken((i - 5) * 10)
      .toString();
    variants[i * 100] = variantColor;
  }
  return variants;
}

export function multiplyColors(
  shirtColors: Array<IColor>,
  pantColors: Array<IColor>
) {
  let colorCombo: IMixer[] = [];
  for (let a of shirtColors) {
    for (let b of pantColors) {
      let matchPercent = Math.floor(attaractionCalc(a.HEX, b.HEX));
      colorCombo.push({ shirtColor: a, pantColor: b, matchPercent });
    }
  }
  return colorCombo;
}

export function pairColors(
  shirtColors: Array<IColor>,
  pantColors: Array<IColor>
) {
  let colorCombo: IMixer[] = [];

  let count = Math.min(shirtColors.length, pantColors.length);

  for (let i = 0; i < count; i++) {
    let a = shirtColors[i];
    let b = pantColors[i];
    let matchPercent = Math.floor(attaractionCalc(a.HEX, b.HEX));

    colorCombo.push({ shirtColor: a, pantColor: b, matchPercent });
  }

  return colorCombo;
}

export interface IMixer {
  shirtColor: IColor;
  pantColor: IColor;
  matchPercent: number;
}

export const getMixer = (selected: IInitialState) => {
  const { shirtColors, pantColors, combinations, sort } = selected;

  let mixer: IMixer[];

  if (combinations) {
    mixer = multiplyColors(shirtColors, pantColors);
  } else {
    mixer = pairColors(shirtColors, pantColors);
  }

  if (sort) {
    mixer = mixer.sort((a, b) => b.matchPercent - a.matchPercent);
  } else {
    mixer = mixer.sort((a, b) => a.matchPercent - b.matchPercent);
  }
  return mixer;
};

export const isValidHex = (hex: string) => {
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  return hexRegex.test(hex);
};
//=========================

function calculateComplementary(color: string): string {
  // Convert color from hex to RGB
  const r: number = parseInt(color.slice(1, 3), 16);
  const g: number = parseInt(color.slice(3, 5), 16);
  const b: number = parseInt(color.slice(5, 7), 16);

  // Calculate complementary color
  const compR: number = 255 - r;
  const compG: number = 255 - g;
  const compB: number = 255 - b;

  // Convert complementary color back to hex
  const compColor: string = `#${compR.toString(16).padStart(2, "0")}${compG
    .toString(16)
    .padStart(2, "0")}${compB.toString(16).padStart(2, "0")}`;
  return compColor;
}

function calculateColorContrast(color1: string, color2: string): number {
  // Convert colors to RGB
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Calculate brightness difference
  const brightness1 = (rgb1.r * 299 + rgb1.g * 587 + rgb1.b * 114) / 1000;
  const brightness2 = (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1000;
  const contrast = Math.abs(brightness1 - brightness2);

  // Normalize contrast value to a scale of 0 to 100
  const normalizedContrast = Math.min((contrast / 255) * 100, 100);

  // Return normalized contrast value
  return normalizedContrast;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Parse hex into RGB components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

function calculateColorHarmony(color1: string, color2: string): number {
  // Check if colors are complementary
  const comp1 = calculateComplementary(color1);
  if (comp1 === color2) {
    return 100; // Complementary
  }

  const comp2 = calculateComplementary(color2);
  if (comp2 === color1) {
    return 100; // Complementary
  }

  return 0; // Not Complementary
}

// Example usage
const color1: string = "#000080"; // Navy Blue
const color2: string = "#FF7F50"; // Coral

export const attaractionCalc = (color1: string, color2: string) => {
  const harmonyPercentage: number = calculateColorHarmony(color1, color2);
  const contrastPercentage: number = calculateColorContrast(color1, color2);

  return (harmonyPercentage + contrastPercentage) / 2;
};
