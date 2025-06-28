// Import all style modules for the common styling library
import { borderStyle } from "./border";
import { flex } from "./flex";
import { fontSize } from "./fonts";
import Metrics, { size } from "./Metrics";
import { spacing } from "./spacing";
import { ui } from "./ui";

// Combine all style modules into a single common object
// This provides easy access to all spacing, flex, border, typography, UI styles, and responsive metrics
export const common = {
  ...flex, // Flexbox layouts and alignment utilities
  ...borderStyle, // Border radius and border width styles
  ...spacing, // Margins, padding, width, height, and gap utilities
  ...fontSize, // Typography and font size utilities
  ...ui, // UI utilities (shadows, colors, positioning, etc.)

  // Responsive metrics and device utilities
  size, // Responsive font size function
  width: Metrics.width, // Device width (smaller dimension)
  height: Metrics.height, // Device height (larger dimension)
  isTablet: Metrics.isTablet, // Device type indicator
  rfv: Metrics.rfv, // Responsive font size alias
};

// Direct exports for Metrics functions
export { size, Metrics };
export const { width, height, isTablet, rfv } = Metrics;
