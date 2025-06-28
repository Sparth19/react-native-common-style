import { StyleSheet } from "react-native";

export const flex = StyleSheet.create({
  // Flex values - Control how much space an item takes relative to siblings
  // Use for: Layout distribution, responsive sizing, content scaling
  // Common use cases: flex1 for equal distribution, flex0 for fixed size, flex2+ for emphasis
  flex0: { flex: 0 },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  // Flex direction - Controls the main axis direction
  // Use for: Layout orientation, content flow direction
  // Common use cases: flexRow for horizontal layouts, flexColumn for vertical layouts
  flexRow: { flexDirection: "row" },
  flexRowReverse: { flexDirection: "row-reverse" },
  flexColumn: { flexDirection: "column" },
  flexColumnReverse: { flexDirection: "column-reverse" },

  // Justify content - Aligns items along the main axis
  // Use for: Horizontal/vertical alignment, spacing distribution
  // Common use cases: center for centered content, spaceBetween for equal spacing, start/end for alignment
  justifyContentStart: { justifyContent: "flex-start" },
  justifyContentCenter: { justifyContent: "center" },
  justifyContentEnd: { justifyContent: "flex-end" },
  justifyContentBetween: { justifyContent: "space-between" },
  justifyContentAround: { justifyContent: "space-around" },
  justifyContentEvenly: { justifyContent: "space-evenly" },

  // Align items - Aligns items along the cross axis
  // Use for: Vertical/horizontal alignment within containers
  // Common use cases: center for centered alignment, stretch for full height/width, start/end for positioning
  alignItemsStart: { alignItems: "flex-start" },
  alignItemsCenter: { alignItems: "center" },
  alignItemsEnd: { alignItems: "flex-end" },
  alignItemsStretch: { alignItems: "stretch" },
  alignItemsBaseline: { alignItems: "baseline" },

  // Align self - Overrides align-items for individual items
  // Use for: Individual item positioning within flex containers
  // Common use cases: Override parent alignment, position specific items differently
  alignSelfStart: { alignSelf: "flex-start" },
  alignSelfCenter: { alignSelf: "center" },
  alignSelfEnd: { alignSelf: "flex-end" },
  alignSelfStretch: { alignSelf: "stretch" },
  alignSelfBaseline: { alignSelf: "baseline" },
  alignSelfAuto: { alignSelf: "auto" },

  // Align content - Aligns flex lines when there's extra space in cross axis
  // Use for: Multi-line flex containers, wrapping content alignment
  // Common use cases: center for centered wrapped content, spaceBetween for distributed lines
  alignContentStart: { alignContent: "flex-start" },
  alignContentCenter: { alignContent: "center" },
  alignContentEnd: { alignContent: "flex-end" },
  alignContentStretch: { alignContent: "stretch" },
  alignContentBetween: { alignContent: "space-between" },
  alignContentAround: { alignContent: "space-around" },

  // Flex wrap - Controls whether items wrap to new lines
  // Use for: Responsive layouts, content overflow handling
  // Common use cases: flexWrap for responsive grids, flexNoWrap for single-line layouts
  flexWrap: { flexWrap: "wrap" },
  flexNoWrap: { flexWrap: "nowrap" },
  flexWrapReverse: { flexWrap: "wrap-reverse" },

  // Flex grow - Controls how much an item can grow relative to siblings
  // Use for: Dynamic sizing, responsive content scaling
  // Common use cases: flexGrow1 for expanding items, flexGrow0 for fixed size items
  flexGrow0: { flexGrow: 0 },
  flexGrow1: { flexGrow: 1 },

  // Flex shrink - Controls how much an item can shrink relative to siblings
  // Use for: Space distribution when container is too small
  // Common use cases: flexShrink0 for items that shouldn't shrink, flexShrink1 for flexible items
  flexShrink0: { flexShrink: 0 },
  flexShrink1: { flexShrink: 1 },

  // Flex basis - Sets the initial main size of an item
  // Use for: Initial sizing before flex calculations
  // Common use cases: flexBasisAuto for content-based sizing, flexBasis0 for flex-only sizing
  flexBasisAuto: { flexBasis: "auto" },
  flexBasis0: { flexBasis: 0 },

  // Common combinations - Frequently used layout patterns
  // Use for: Quick layout setup, common UI patterns
  // Common use cases: centerRow/centerColumn for centered content, spaceBetweenRow for navigation bars
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  centerColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetweenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spaceAroundRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  spaceEvenlyRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  spaceBetweenColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spaceAroundColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  spaceEvenlyColumn: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  startRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  endRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  startColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  endColumn: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  // Additional utility combinations - Specific alignment patterns
  // Use for: Complex layouts, specific positioning needs
  // Common use cases: centerRowStart for top-aligned centered content, spaceBetweenRowEnd for bottom-aligned distributed content
  centerRowStart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  centerRowEnd: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  centerColumnStart: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  centerColumnEnd: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  spaceBetweenRowStart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  spaceBetweenRowEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  spaceBetweenColumnStart: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  spaceBetweenColumnEnd: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  // Stretch combinations - Items stretch to fill container
  // Use for: Full-width/height layouts, equal height rows
  // Common use cases: stretchRow for equal-height cards, centerStretchColumn for full-width centered content
  stretchRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  stretchColumn: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  centerStretchRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  centerStretchColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },

  // Wrap combinations - Content wraps to new lines
  // Use for: Responsive grids, tag lists, flexible content
  // Common use cases: wrapRow for tag clouds, centerWrapRow for centered wrapped content
  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrapColumn: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  centerWrapRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  spaceBetweenWrapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  // Baseline combinations - Align items by text baseline
  // Use for: Text alignment, form layouts, mixed content alignment
  // Common use cases: baselineRow for form labels and inputs, baselineColumn for text with icons
  baselineRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  baselineColumn: {
    flexDirection: "column",
    alignItems: "baseline",
  },
});
