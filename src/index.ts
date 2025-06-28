// Import all style modules for the common styling library
import { borderStyle } from "./border";
import { flex } from "./flex";
import { fontSize } from "./fonts";
import { spacing } from "./spacing";
import { ui } from "./ui";

// Combine all style modules into a single common object
// This provides easy access to all spacing, flex, border, typography, and UI styles
export const common = {
  ...flex, // Flexbox layouts and alignment utilities
  ...borderStyle, // Border radius and border width styles
  ...spacing, // Margins, padding, width, height, and gap utilities
  ...fontSize, // Typography and font size utilities
  ...ui, // UI utilities (shadows, colors, positioning, etc.)
};
