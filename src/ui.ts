import { StyleSheet } from "react-native";
import { size } from "./Metrics";

export const ui = StyleSheet.create({
  // Shadow styles - Use for: Cards, modals, elevated elements
  // Common use cases: shadow1-shadow3 for subtle elevation, shadow4+ for prominent elevation
  shadow1: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  shadow2: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shadow3: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  shadow4: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  shadow5: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  // Essential background colors - Use for: Universal status indicators, overlays, content backgrounds
  // Common use cases: bgWhite for content areas, bgBlack for overlays, bgSuccess/bgError for status indicators
  bgTransparent: { backgroundColor: "transparent" },
  bgWhite: { backgroundColor: "#FFFFFF" },
  bgBlack: { backgroundColor: "#000000" },
  bgSuccess: { backgroundColor: "#34C759" },
  bgError: { backgroundColor: "#FF3B30" },
  bgInfo: { backgroundColor: "#5AC8FA" },

  // Position utilities - Use for: Absolute positioning, overlays, floating elements
  // Common use cases: absolute for overlays, relative for positioning context
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  absoluteTop: { position: "absolute", top: 0 },
  absoluteBottom: { position: "absolute", bottom: 0 },
  absoluteLeft: { position: "absolute", left: 0 },
  absoluteRight: { position: "absolute", right: 0 },
  absoluteCenter: { position: "absolute", top: "50%", left: "50%" },

  // Overflow utilities - Use for: Content clipping, scroll containers
  // Common use cases: overflowHidden for clipped content, overflowScroll for scrollable areas
  overflowHidden: { overflow: "hidden" },
  overflowScroll: { overflow: "scroll" },
  overflowVisible: { overflow: "visible" },

  // Z-index utilities - Use for: Layering, modal overlays, floating elements
  // Common use cases: z1-z3 for subtle layering, z10+ for modals and overlays
  z0: { zIndex: 0 },
  z1: { zIndex: 1 },
  z2: { zIndex: 2 },
  z3: { zIndex: 3 },
  z10: { zIndex: 10 },
  z20: { zIndex: 20 },
  z30: { zIndex: 30 },
  z40: { zIndex: 40 },
  z50: { zIndex: 50 },

  // Opacity utilities - Use for: Disabled states, overlays, transparency effects
  // Common use cases: opacity50 for disabled states, opacity75 for subtle overlays
  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity100: { opacity: 1 },

  // Display utilities - Use for: Show/hide elements, layout control
  // Common use cases: hidden for conditional rendering, flex for layout containers
  hidden: { display: "none" },
  flex: { display: "flex" },

  // Text alignment - Use for: Text positioning, content alignment
  // Common use cases: textCenter for centered text, textLeft for left alignment
  textLeft: { textAlign: "left" },
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },
  textJustify: { textAlign: "justify" },

  // Text decoration - Use for: Links, emphasis, strikethrough text
  // Common use cases: underline for links, lineThrough for deleted content
  underline: { textDecorationLine: "underline" },
  lineThrough: { textDecorationLine: "line-through" },
  noDecoration: { textDecorationLine: "none" },

  // Font weight - Use for: Text emphasis, hierarchy, readability
  // Common use cases: fontWeightNormal for body text, fontWeightBold for headings
  fontWeightNormal: { fontWeight: "normal" },
  fontWeightBold: { fontWeight: "bold" },
  fontWeight100: { fontWeight: "100" },
  fontWeight200: { fontWeight: "200" },
  fontWeight300: { fontWeight: "300" },
  fontWeight400: { fontWeight: "400" },
  fontWeight500: { fontWeight: "500" },
  fontWeight600: { fontWeight: "600" },
  fontWeight700: { fontWeight: "700" },
  fontWeight800: { fontWeight: "800" },
  fontWeight900: { fontWeight: "900" },

  // Text transform - Use for: Text formatting, consistency
  // Common use cases: uppercase for buttons, capitalize for titles
  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },
  capitalize: { textTransform: "capitalize" },
  noTransform: { textTransform: "none" },

  // Line height - Use for: Text readability, spacing
  // Common use cases: lineHeightNormal for body text, lineHeightTight for headings
  lineHeightTight: { lineHeight: size(16) },
  lineHeightNormal: { lineHeight: size(20) },
  lineHeightRelaxed: { lineHeight: size(24) },
  lineHeightLoose: { lineHeight: size(28) },

  // Letter spacing - Use for: Text readability, emphasis
  // Common use cases: letterSpacingTight for compact text, letterSpacingWide for emphasis
  letterSpacingTight: { letterSpacing: -0.5 },
  letterSpacingNormal: { letterSpacing: 0 },
  letterSpacingWide: { letterSpacing: 0.5 },
  letterSpacingWider: { letterSpacing: 1 },

  // Border radius utilities - Use for: Quick border radius application
  // Common use cases: rounded for general rounding, roundedFull for circular elements
  rounded: { borderRadius: size(4) },
  roundedSm: { borderRadius: size(2) },
  roundedMd: { borderRadius: size(6) },
  roundedLg: { borderRadius: size(8) },
  roundedXl: { borderRadius: size(12) },
  roundedFull: { borderRadius: size(1000) },

  // Border width utilities - Use for: Quick border application
  // Common use cases: border for general borders, borderThick for emphasis
  border: { borderWidth: 1 },
  borderThick: { borderWidth: 2 },
  borderThicker: { borderWidth: 3 },
  noBorder: { borderWidth: 0 },

  // Aspect ratio - Use for: Image containers, video players, consistent proportions
  // Common use cases: aspectSquare for square elements, aspectVideo for 16:9 content
  aspectSquare: { aspectRatio: 1 },
  aspectVideo: { aspectRatio: 16 / 9 },
  aspectPhoto: { aspectRatio: 4 / 3 },

  // Min/Max dimensions - Use for: Responsive sizing, content constraints
  // Common use cases: minHeight for content areas, maxWidth for text containers
  minHeight0: { minHeight: 0 },
  minHeightFull: { minHeight: "100%" },
  maxWidthFull: { maxWidth: "100%" },
  maxWidthSm: { maxWidth: size(320) },
  maxWidthMd: { maxWidth: size(480) },
  maxWidthLg: { maxWidth: size(640) },

  // Transform utilities - Use for: Animations, positioning adjustments
  // Common use cases: scale for hover effects, translate for positioning
  scale0: { transform: [{ scale: 0 }] },
  scale50: { transform: [{ scale: 0.5 }] },
  scale75: { transform: [{ scale: 0.75 }] },
  scale100: { transform: [{ scale: 1 }] },
  scale125: { transform: [{ scale: 1.25 }] },
  scale150: { transform: [{ scale: 1.5 }] },

  // Rotate utilities - Use for: Icons, loading spinners, decorative elements
  // Common use cases: rotate45 for diagonal elements, rotate90 for vertical text
  rotate0: { transform: [{ rotate: "0deg" }] },
  rotate45: { transform: [{ rotate: "45deg" }] },
  rotate90: { transform: [{ rotate: "90deg" }] },
  rotate180: { transform: [{ rotate: "180deg" }] },
  rotate270: { transform: [{ rotate: "270deg" }] },
  rotate360: { transform: [{ rotate: "360deg" }] },
});
