import { StyleSheet } from "react-native";
import { size } from "./Metrics";

export const borderStyle = StyleSheet.create({
  // Border Radius - All corners
  // Use for: Cards, buttons, images, containers that need rounded corners
  // Common use cases: br1-br3 for subtle rounding, br4-br8 for medium rounding, br9+ for pill-shaped elements
  br0: { borderRadius: 0 },
  br1: { borderRadius: size(4), borderCurve: "continuous" },
  br2: { borderRadius: size(8), borderCurve: "continuous" },
  br3: { borderRadius: size(12), borderCurve: "continuous" },
  br4: { borderRadius: size(16), borderCurve: "continuous" },
  br5: { borderRadius: size(20), borderCurve: "continuous" },
  br6: { borderRadius: size(24), borderCurve: "continuous" },
  br7: { borderRadius: size(28), borderCurve: "continuous" },
  br8: { borderRadius: size(32), borderCurve: "continuous" },
  br9: { borderRadius: size(36), borderCurve: "continuous" },
  br10: { borderRadius: size(40), borderCurve: "continuous" },
  br11: { borderRadius: size(44), borderCurve: "continuous" },
  br12: { borderRadius: size(48), borderCurve: "continuous" },
  br13: { borderRadius: size(52), borderCurve: "continuous" },
  br14: { borderRadius: size(56), borderCurve: "continuous" },
  br15: { borderRadius: size(60), borderCurve: "continuous" },
  br16: { borderRadius: size(64), borderCurve: "continuous" },
  br17: { borderRadius: size(68), borderCurve: "continuous" },
  br18: { borderRadius: size(72), borderCurve: "continuous" },
  br19: { borderRadius: size(76), borderCurve: "continuous" },
  br20: { borderRadius: size(80), borderCurve: "continuous" },
  br21: { borderRadius: size(84), borderCurve: "continuous" },
  br22: { borderRadius: size(88), borderCurve: "continuous" },
  br23: { borderRadius: size(92), borderCurve: "continuous" },
  br24: { borderRadius: size(96), borderCurve: "continuous" },
  br25: { borderRadius: size(100), borderCurve: "continuous" },
  // Full radius for circular elements (buttons, avatars, etc.)
  brfull: { borderRadius: size(1000), borderCurve: "continuous" },

  // Top Border Radius - Top corners only
  // Use for: Bottom sheets, modals, dropdowns, tabs that connect to content below
  // Common use cases: brt6-brt12 for bottom sheets, brt3-brt6 for tabs
  brt0: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  brt1: { borderTopLeftRadius: size(4), borderTopRightRadius: size(4) },
  brt2: { borderTopLeftRadius: size(8), borderTopRightRadius: size(8) },
  brt3: { borderTopLeftRadius: size(12), borderTopRightRadius: size(12) },
  brt4: { borderTopLeftRadius: size(16), borderTopRightRadius: size(16) },
  brt5: { borderTopLeftRadius: size(20), borderTopRightRadius: size(20) },
  brt6: { borderTopLeftRadius: size(24), borderTopRightRadius: size(24) },
  brt7: { borderTopLeftRadius: size(28), borderTopRightRadius: size(28) },
  brt8: { borderTopLeftRadius: size(32), borderTopRightRadius: size(32) },
  brt9: { borderTopLeftRadius: size(36), borderTopRightRadius: size(36) },
  brt10: { borderTopLeftRadius: size(40), borderTopRightRadius: size(40) },
  brt11: { borderTopLeftRadius: size(44), borderTopRightRadius: size(44) },
  brt12: { borderTopLeftRadius: size(48), borderTopRightRadius: size(48) },
  brt13: { borderTopLeftRadius: size(52), borderTopRightRadius: size(52) },
  brt14: { borderTopLeftRadius: size(56), borderTopRightRadius: size(56) },
  brt15: { borderTopLeftRadius: size(60), borderTopRightRadius: size(60) },
  brt16: { borderTopLeftRadius: size(64), borderTopRightRadius: size(64) },
  brt17: { borderTopLeftRadius: size(68), borderTopRightRadius: size(68) },
  brt18: { borderTopLeftRadius: size(72), borderTopRightRadius: size(72) },
  brt19: { borderTopLeftRadius: size(76), borderTopRightRadius: size(76) },
  brt20: { borderTopLeftRadius: size(80), borderTopRightRadius: size(80) },
  brt21: { borderTopLeftRadius: size(84), borderTopRightRadius: size(84) },
  brt22: { borderTopLeftRadius: size(88), borderTopRightRadius: size(88) },
  brt23: { borderTopLeftRadius: size(92), borderTopRightRadius: size(92) },
  brt24: { borderTopLeftRadius: size(96), borderTopRightRadius: size(96) },
  brt25: { borderTopLeftRadius: size(100), borderTopRightRadius: size(100) },

  // Bottom Border Radius - Bottom corners only
  // Use for: Top sheets, headers, navigation bars that connect to content above
  // Common use cases: brb6-brb12 for top sheets, brb3-brb6 for headers
  brb0: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  brb1: { borderBottomLeftRadius: size(4), borderBottomRightRadius: size(4) },
  brb2: { borderBottomLeftRadius: size(8), borderBottomRightRadius: size(8) },
  brb3: { borderBottomLeftRadius: size(12), borderBottomRightRadius: size(12) },
  brb4: { borderBottomLeftRadius: size(16), borderBottomRightRadius: size(16) },
  brb5: { borderBottomLeftRadius: size(20), borderBottomRightRadius: size(20) },
  brb6: { borderBottomLeftRadius: size(24), borderBottomRightRadius: size(24) },
  brb7: { borderBottomLeftRadius: size(28), borderBottomRightRadius: size(28) },
  brb8: { borderBottomLeftRadius: size(32), borderBottomRightRadius: size(32) },
  brb9: { borderBottomLeftRadius: size(36), borderBottomRightRadius: size(36) },
  brb10: {
    borderBottomLeftRadius: size(40),
    borderBottomRightRadius: size(40),
  },
  brb11: {
    borderBottomLeftRadius: size(44),
    borderBottomRightRadius: size(44),
  },
  brb12: {
    borderBottomLeftRadius: size(48),
    borderBottomRightRadius: size(48),
  },
  brb13: {
    borderBottomLeftRadius: size(52),
    borderBottomRightRadius: size(52),
  },
  brb14: {
    borderBottomLeftRadius: size(56),
    borderBottomRightRadius: size(56),
  },
  brb15: {
    borderBottomLeftRadius: size(60),
    borderBottomRightRadius: size(60),
  },
  brb16: {
    borderBottomLeftRadius: size(64),
    borderBottomRightRadius: size(64),
  },
  brb17: {
    borderBottomLeftRadius: size(68),
    borderBottomRightRadius: size(68),
  },
  brb18: {
    borderBottomLeftRadius: size(72),
    borderBottomRightRadius: size(72),
  },
  brb19: {
    borderBottomLeftRadius: size(76),
    borderBottomRightRadius: size(76),
  },
  brb20: {
    borderBottomLeftRadius: size(80),
    borderBottomRightRadius: size(80),
  },
  brb21: {
    borderBottomLeftRadius: size(84),
    borderBottomRightRadius: size(84),
  },
  brb22: {
    borderBottomLeftRadius: size(88),
    borderBottomRightRadius: size(88),
  },
  brb23: {
    borderBottomLeftRadius: size(92),
    borderBottomRightRadius: size(92),
  },
  brb24: {
    borderBottomLeftRadius: size(96),
    borderBottomRightRadius: size(96),
  },
  brb25: {
    borderBottomLeftRadius: size(100),
    borderBottomRightRadius: size(100),
  },

  // Border Width - All sides
  // Use for: Cards, buttons, input fields, dividers
  // Common use cases: borderWidth1 for subtle borders, borderWidth2 for emphasis, borderWidth3 for strong borders
  borderWidth1: { borderWidth: 1 },
  borderWidth2: { borderWidth: 2 },
  borderWidth3: { borderWidth: 3 },

  // Top Border Width
  // Use for: Section dividers, headers, content separators
  borderTopWidth1: { borderTopWidth: 1 },
  borderTopWidth2: { borderTopWidth: 2 },
  borderTopWidth3: { borderTopWidth: 3 },

  // Right Border Width
  // Use for: Vertical dividers, sidebar separators, content boundaries
  borderRightWidth1: { borderRightWidth: 1 },
  borderRightWidth2: { borderRightWidth: 2 },
  borderRightWidth3: { borderRightWidth: 3 },

  // Bottom Border Width
  // Use for: List item separators, input field underlines, section dividers
  borderBottomWidth1: { borderBottomWidth: 1 },
  borderBottomWidth2: { borderBottomWidth: 2 },
  borderBottomWidth3: { borderBottomWidth: 3 },

  // Left Border Width
  // Use for: Vertical dividers, sidebar separators, accent borders
  borderLeftWidth1: { borderLeftWidth: 1 },
  borderLeftWidth2: { borderLeftWidth: 2 },
  borderLeftWidth3: { borderLeftWidth: 3 },
});
