import tinycolor from "tinycolor2";

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
  shirtColors: Array<string>,
  pantColors: Array<string>
) {
  let colorCombo = [];
  for (let a of shirtColors) {
    for (let b of pantColors) {
      colorCombo.push([a, b]);
    }
  }
  return colorCombo;
}

export function calculateColorMatchScore(color1: string, color2: string) {
  // Convert hexadecimal color codes to RGB
  const rgbColor1 = hexToRgb(color1);
  const rgbColor2 = hexToRgb(color2);

  // Calculate the Euclidean distance between the two colors
  const distance = Math.sqrt(
    Math.pow(rgbColor1.r - rgbColor2.r, 2) +
      Math.pow(rgbColor1.g - rgbColor2.g, 2) +
      Math.pow(rgbColor1.b - rgbColor2.b, 2)
  );

  // Calculate match score based on the distance
  // Adjust the thresholds as needed
  if (distance < 30) {
    return 10; // Perfect match
  } else if (distance < 60) {
    return 7; // Good match
  } else if (distance < 90) {
    return 5; // Fair match
  } else if (distance < 120) {
    return 3; // Poor match
  } else {
    return 0; // Mismatch
  }
}

// Function to convert hexadecimal color code to RGB
function hexToRgb(hex: string) {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hexadecimal value to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// Example usage:
const shirtColor = "#336699";
const pantColor = "#cc9933";
const matchScore = calculateColorMatchScore(shirtColor, pantColor);
console.log("Match score:", matchScore);
