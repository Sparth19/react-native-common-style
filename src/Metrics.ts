import {
  Dimensions,
  Platform,
  StatusBar,
  PixelRatio,
  PlatformIOSStatic,
} from "react-native";

// Retrieve device dimensions for responsive design calculations
// Use for: Getting screen dimensions, calculating responsive sizes
const { width, height } = Dimensions.get("window");

/**
 * Calculate device height considering status bar and iPhone X notch
 * Use for: Accurate height calculations for responsive layouts
 * Common use cases: Full-screen layouts, avoiding notch overlap, status bar considerations
 * @returns {number} Adjusted device height
 */
const calculateDeviceHeight = (): number => {
  const standardLength = Math.max(width, height);
  const offset =
    Platform.OS === "ios"
      ? height > width
        ? 78 // iPhone X notch height
        : 0
      : StatusBar.currentHeight || 0; // Android status bar height
  return standardLength - offset;
};

/**
 * Check if the device is a tablet based on screen size and pixel density
 * Use for: Tablet-specific layouts, responsive design adjustments
 * Common use cases: Different layouts for tablets vs phones, larger touch targets, enhanced UI
 * @returns {boolean} True if device is a tablet
 */
const isTablet = (): boolean => {
  const platformIOS = Platform as PlatformIOSStatic;
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;

  return (
    (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) ||
    (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) ||
    platformIOS.isPad
  );
};

/**
 * Calculate responsive font size based on device characteristics
 * Use for: Responsive typography, consistent text scaling across devices
 * Common use cases: Font sizes that scale with screen size, tablet-optimized text, small device adjustments
 * @param {number} fontSize - Base font size to scale
 * @param {number} standardScreenHeight - Reference screen height (default: 812 - iPhone X)
 * @returns {number} Responsive font size
 */
export const size = (
  fontSize: number,
  standardScreenHeight: number = 812
): number => {
  const platformIOS = Platform as PlatformIOSStatic;
  const isSmallDevice = width < 360 || height < 640; // Threshold for very small devices

  // Adjust base font size for different device types
  const calculatedFontSize =
    isTablet() || platformIOS.isPad
      ? fontSize + 2 // Slightly larger for tablets
      : isSmallDevice
      ? fontSize * 1.1 // Slightly increase for very small devices
      : fontSize; // Standard size for regular phones

  // Calculate responsive size based on device height
  const deviceHeight = calculateDeviceHeight();
  const heightPercent =
    (calculatedFontSize * deviceHeight) / standardScreenHeight;

  // Return appropriate size based on device type
  return platformIOS.isPad || isTablet() || width > 500
    ? Number(heightPercent.toFixed(2)) // Responsive size for tablets and large screens
    : fontSize; // Fixed size for small screens to maintain readability
};

/**
 * Optimized metrics object for responsive design
 * Use for: Accessing device dimensions and responsive utilities
 * Common use cases: Layout calculations, responsive components, device-specific adjustments
 */
const Metrics = {
  // Device dimensions (width is always smaller dimension, height is larger)
  width: Math.min(width, height),
  height: Math.max(width, height),

  // Responsive font size function (alias for size function)
  rfv: size,

  // Device type indicator
  isTablet: isTablet(),
};

export default Metrics;
