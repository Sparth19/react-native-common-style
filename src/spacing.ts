import { StyleSheet } from "react-native";
import { size } from "./Metrics";

export const spacing = StyleSheet.create({
  // Margin - All sides
  // Use for: Spacing around elements, component separation
  // Common use cases: m1-m4 for small spacing, m5-m8 for medium spacing, m9+ for large spacing
  m0: { margin: 0 },
  m1: { margin: size(4) },
  m2: { margin: size(8) },
  m3: { margin: size(12) },
  m4: { margin: size(16) },
  m5: { margin: size(20) },
  m6: { margin: size(24) },
  m7: { margin: size(28) },
  m8: { margin: size(32) },
  m9: { margin: size(36) },
  m10: { margin: size(40) },
  m11: { margin: size(44) },
  m12: { margin: size(48) },
  m13: { margin: size(52) },
  m14: { margin: size(56) },
  m15: { margin: size(60) },
  m16: { margin: size(64) },
  m17: { margin: size(68) },
  m18: { margin: size(72) },
  m19: { margin: size(76) },
  m20: { margin: size(80) },
  m21: { margin: size(84) },
  m22: { margin: size(88) },
  m23: { margin: size(92) },
  m24: { margin: size(96) },
  m25: { margin: size(100) },

  // Margin Top - Vertical spacing above elements
  // Use for: Top spacing, section separation, header spacing
  // Common use cases: mt1-mt4 for small top spacing, mt5-mt8 for medium spacing, mt9+ for large spacing
  mt0: { marginTop: 0 },
  mthalf: { marginTop: size(2) },
  mt1: { marginTop: size(4) },
  mt2: { marginTop: size(8) },
  mt3: { marginTop: size(12) },
  mt4: { marginTop: size(16) },
  mt5: { marginTop: size(20) },
  mt6: { marginTop: size(24) },
  mt7: { marginTop: size(28) },
  mt8: { marginTop: size(32) },
  mt9: { marginTop: size(36) },
  mt10: { marginTop: size(40) },
  mt11: { marginTop: size(44) },
  mt12: { marginTop: size(48) },
  mt13: { marginTop: size(52) },
  mt14: { marginTop: size(56) },
  mt15: { marginTop: size(60) },
  mt16: { marginTop: size(64) },
  mt17: { marginTop: size(68) },
  mt18: { marginTop: size(72) },
  mt19: { marginTop: size(76) },
  mt20: { marginTop: size(80) },
  mt21: { marginTop: size(84) },
  mt22: { marginTop: size(88) },
  mt23: { marginTop: size(92) },
  mt24: { marginTop: size(96) },
  mt25: { marginTop: size(100) },

  // Margin Bottom - Vertical spacing below elements
  // Use for: Bottom spacing, section separation, footer spacing
  // Common use cases: mb1-mb4 for small bottom spacing, mb5-mb8 for medium spacing, mb9+ for large spacing
  mb0: { marginBottom: 0 },
  mb1: { marginBottom: size(4) },
  mb2: { marginBottom: size(8) },
  mb3: { marginBottom: size(12) },
  mb4: { marginBottom: size(16) },
  mb5: { marginBottom: size(20) },
  mb6: { marginBottom: size(24) },
  mb7: { marginBottom: size(28) },
  mb8: { marginBottom: size(32) },
  mb9: { marginBottom: size(36) },
  mb10: { marginBottom: size(40) },
  mb11: { marginBottom: size(44) },
  mb12: { marginBottom: size(48) },
  mb13: { marginBottom: size(52) },
  mb14: { marginBottom: size(56) },
  mb15: { marginBottom: size(60) },
  mb16: { marginBottom: size(64) },
  mb17: { marginBottom: size(68) },
  mb18: { marginBottom: size(72) },
  mb19: { marginBottom: size(76) },
  mb20: { marginBottom: size(80) },
  mb21: { marginBottom: size(84) },
  mb22: { marginBottom: size(88) },
  mb23: { marginBottom: size(92) },
  mb24: { marginBottom: size(96) },
  mb25: { marginBottom: size(100) },

  // Margin Left - Horizontal spacing to the left
  // Use for: Left spacing, indentation, left alignment spacing
  // Common use cases: ml1-ml4 for small left spacing, ml5-ml8 for medium spacing, ml9+ for large spacing
  ml0: { marginLeft: 0 },
  ml1: { marginLeft: size(4) },
  ml2: { marginLeft: size(8) },
  ml3: { marginLeft: size(12) },
  ml4: { marginLeft: size(16) },
  ml5: { marginLeft: size(20) },
  ml6: { marginLeft: size(24) },
  ml7: { marginLeft: size(28) },
  ml8: { marginLeft: size(32) },
  ml9: { marginLeft: size(36) },
  ml10: { marginLeft: size(40) },
  ml11: { marginLeft: size(44) },
  ml12: { marginLeft: size(48) },
  ml13: { marginLeft: size(52) },
  ml14: { marginLeft: size(56) },
  ml15: { marginLeft: size(60) },
  ml16: { marginLeft: size(64) },
  ml17: { marginLeft: size(68) },
  ml18: { marginLeft: size(72) },
  ml19: { marginLeft: size(76) },
  ml20: { marginLeft: size(80) },
  ml21: { marginLeft: size(84) },
  ml22: { marginLeft: size(88) },
  ml23: { marginLeft: size(92) },
  ml24: { marginLeft: size(96) },
  ml25: { marginLeft: size(100) },

  // Margin Right - Horizontal spacing to the right
  // Use for: Right spacing, right alignment spacing
  // Common use cases: mr1-mr4 for small right spacing, mr5-mr8 for medium spacing, mr9+ for large spacing
  mr0: { marginRight: 0 },
  mr1: { marginRight: size(4) },
  mr2: { marginRight: size(8) },
  mr3: { marginRight: size(12) },
  mr4: { marginRight: size(16) },
  mr5: { marginRight: size(20) },
  mr6: { marginRight: size(24) },
  mr7: { marginRight: size(28) },
  mr8: { marginRight: size(32) },
  mr9: { marginRight: size(36) },
  mr10: { marginRight: size(40) },
  mr11: { marginRight: size(44) },
  mr12: { marginRight: size(48) },
  mr13: { marginRight: size(52) },
  mr14: { marginRight: size(56) },
  mr15: { marginRight: size(60) },
  mr16: { marginRight: size(64) },
  mr17: { marginRight: size(68) },
  mr18: { marginRight: size(72) },
  mr19: { marginRight: size(76) },
  mr20: { marginRight: size(80) },
  mr21: { marginRight: size(84) },
  mr22: { marginRight: size(88) },
  mr23: { marginRight: size(92) },
  mr24: { marginRight: size(96) },
  mr25: { marginRight: size(100) },

  // Padding - All sides
  // Use for: Internal spacing within elements, content breathing room
  // Common use cases: p1-p4 for small padding, p5-p8 for medium padding, p9+ for large padding
  p0: { padding: 0 },
  p1: { padding: size(4) },
  p2: { padding: size(8) },
  p3: { padding: size(12) },
  p4: { padding: size(16) },
  p5: { padding: size(20) },
  p6: { padding: size(24) },
  p7: { padding: size(28) },
  p8: { padding: size(32) },
  p9: { padding: size(36) },
  p10: { padding: size(40) },
  p11: { padding: size(44) },
  p12: { padding: size(48) },
  p13: { padding: size(52) },
  p14: { padding: size(56) },
  p15: { padding: size(60) },
  p16: { padding: size(64) },
  p17: { padding: size(68) },
  p18: { padding: size(72) },
  p19: { padding: size(76) },
  p20: { padding: size(80) },
  p21: { padding: size(84) },
  p22: { padding: size(88) },
  p23: { padding: size(92) },
  p24: { padding: size(96) },
  p25: { padding: size(100) },

  // Padding Top - Internal spacing above content
  // Use for: Top internal spacing, header padding within containers
  // Common use cases: pt1-pt4 for small top padding, pt5-pt8 for medium padding, pt9+ for large padding
  pt0: { paddingTop: 0 },
  pt1: { paddingTop: size(4) },
  pt2: { paddingTop: size(8) },
  pt3: { paddingTop: size(12) },
  pt4: { paddingTop: size(16) },
  pt5: { paddingTop: size(20) },
  pt6: { paddingTop: size(24) },
  pt7: { paddingTop: size(28) },
  pt8: { paddingTop: size(32) },
  pt9: { paddingTop: size(36) },
  pt10: { paddingTop: size(40) },
  pt11: { paddingTop: size(44) },
  pt12: { paddingTop: size(48) },
  pt13: { paddingTop: size(52) },
  pt14: { paddingTop: size(56) },
  pt15: { paddingTop: size(60) },
  pt16: { paddingTop: size(64) },
  pt17: { paddingTop: size(68) },
  pt18: { paddingTop: size(72) },
  pt19: { paddingTop: size(76) },
  pt20: { paddingTop: size(80) },
  pt21: { paddingTop: size(84) },
  pt22: { paddingTop: size(88) },
  pt23: { paddingTop: size(92) },
  pt24: { paddingTop: size(96) },
  pt25: { paddingTop: size(100) },

  // Padding Bottom - Internal spacing below content
  // Use for: Bottom internal spacing, footer padding within containers
  // Common use cases: pb1-pb4 for small bottom padding, pb5-pb8 for medium padding, pb9+ for large padding
  pb0: { paddingBottom: 0 },
  pb1: { paddingBottom: size(4) },
  pb2: { paddingBottom: size(8) },
  pb3: { paddingBottom: size(12) },
  pb4: { paddingBottom: size(16) },
  pb5: { paddingBottom: size(20) },
  pb6: { paddingBottom: size(24) },
  pb7: { paddingBottom: size(28) },
  pb8: { paddingBottom: size(32) },
  pb9: { paddingBottom: size(36) },
  pb10: { paddingBottom: size(40) },
  pb11: { paddingBottom: size(44) },
  pb12: { paddingBottom: size(48) },
  pb13: { paddingBottom: size(52) },
  pb14: { paddingBottom: size(56) },
  pb15: { paddingBottom: size(60) },
  pb16: { paddingBottom: size(64) },
  pb17: { paddingBottom: size(68) },
  pb18: { paddingBottom: size(72) },
  pb19: { paddingBottom: size(76) },
  pb20: { paddingBottom: size(80) },
  pb21: { paddingBottom: size(84) },
  pb22: { paddingBottom: size(88) },
  pb23: { paddingBottom: size(92) },
  pb24: { paddingBottom: size(96) },
  pb25: { paddingBottom: size(100) },

  // Padding Left - Internal spacing to the left of content
  // Use for: Left internal spacing, content indentation within containers
  // Common use cases: pl1-pl4 for small left padding, pl5-pl8 for medium padding, pl9+ for large padding
  pl0: { paddingLeft: 0 },
  pl1: { paddingLeft: size(4) },
  pl2: { paddingLeft: size(8) },
  pl3: { paddingLeft: size(12) },
  pl4: { paddingLeft: size(16) },
  pl5: { paddingLeft: size(20) },
  pl6: { paddingLeft: size(24) },
  pl7: { paddingLeft: size(28) },
  pl8: { paddingLeft: size(32) },
  pl9: { paddingLeft: size(36) },
  pl10: { paddingLeft: size(40) },
  pl11: { paddingLeft: size(44) },
  pl12: { paddingLeft: size(48) },
  pl13: { paddingLeft: size(52) },
  pl14: { paddingLeft: size(56) },
  pl15: { paddingLeft: size(60) },
  pl16: { paddingLeft: size(64) },
  pl17: { paddingLeft: size(68) },
  pl18: { paddingLeft: size(72) },
  pl19: { paddingLeft: size(76) },
  pl20: { paddingLeft: size(80) },
  pl21: { paddingLeft: size(84) },
  pl22: { paddingLeft: size(88) },
  pl23: { paddingLeft: size(92) },
  pl24: { paddingLeft: size(96) },
  pl25: { paddingLeft: size(100) },

  // Padding Right - Internal spacing to the right of content
  // Use for: Right internal spacing within containers
  // Common use cases: pr1-pr4 for small right padding, pr5-pr8 for medium padding, pr9+ for large padding
  pr0: { paddingRight: 0 },
  pr1: { paddingRight: size(4) },
  pr2: { paddingRight: size(8) },
  pr3: { paddingRight: size(12) },
  pr4: { paddingRight: size(16) },
  pr5: { paddingRight: size(20) },
  pr6: { paddingRight: size(24) },
  pr7: { paddingRight: size(28) },
  pr8: { paddingRight: size(32) },
  pr9: { paddingRight: size(36) },
  pr10: { paddingRight: size(40) },
  pr11: { paddingRight: size(44) },
  pr12: { paddingRight: size(48) },
  pr13: { paddingRight: size(52) },
  pr14: { paddingRight: size(56) },
  pr15: { paddingRight: size(60) },
  pr16: { paddingRight: size(64) },
  pr17: { paddingRight: size(68) },
  pr18: { paddingRight: size(72) },
  pr19: { paddingRight: size(76) },
  pr20: { paddingRight: size(80) },
  pr21: { paddingRight: size(84) },
  pr22: { paddingRight: size(88) },
  pr23: { paddingRight: size(92) },
  pr24: { paddingRight: size(96) },
  pr25: { paddingRight: size(100) },

  // Margin Horizontal - Left and right margin
  // Use for: Horizontal centering, left-right spacing
  // Common use cases: mh1-mh4 for small horizontal spacing, mh5-mh8 for medium spacing, mh9+ for large spacing
  mh0: { marginHorizontal: 0 },
  mh1: { marginHorizontal: size(4) },
  mh2: { marginHorizontal: size(8) },
  mh3: { marginHorizontal: size(12) },
  mh4: { marginHorizontal: size(16) },
  mh5: { marginHorizontal: size(20) },
  mh6: { marginHorizontal: size(24) },
  mh7: { marginHorizontal: size(28) },
  mh8: { marginHorizontal: size(32) },
  mh9: { marginHorizontal: size(36) },
  mh10: { marginHorizontal: size(40) },
  mh11: { marginHorizontal: size(44) },
  mh12: { marginHorizontal: size(48) },
  mh13: { marginHorizontal: size(52) },
  mh14: { marginHorizontal: size(56) },
  mh15: { marginHorizontal: size(60) },
  mh16: { marginHorizontal: size(64) },
  mh17: { marginHorizontal: size(68) },
  mh18: { marginHorizontal: size(72) },
  mh19: { marginHorizontal: size(76) },
  mh20: { marginHorizontal: size(80) },
  mh21: { marginHorizontal: size(84) },
  mh22: { marginHorizontal: size(88) },
  mh23: { marginHorizontal: size(92) },
  mh24: { marginHorizontal: size(96) },
  mh25: { marginHorizontal: size(100) },

  // Padding Horizontal - Left and right padding
  // Use for: Horizontal content spacing within containers
  // Common use cases: ph1-ph4 for small horizontal padding, ph5-ph8 for medium padding, ph9+ for large padding
  ph0: { paddingHorizontal: 0 },
  ph1: { paddingHorizontal: size(4) },
  ph2: { paddingHorizontal: size(8) },
  ph3: { paddingHorizontal: size(12) },
  ph4: { paddingHorizontal: size(16) },
  ph5: { paddingHorizontal: size(20) },
  ph6: { paddingHorizontal: size(24) },
  ph7: { paddingHorizontal: size(28) },
  ph8: { paddingHorizontal: size(32) },
  ph9: { paddingHorizontal: size(36) },
  ph10: { paddingHorizontal: size(40) },
  ph11: { paddingHorizontal: size(44) },
  ph12: { paddingHorizontal: size(48) },
  ph13: { paddingHorizontal: size(52) },
  ph14: { paddingHorizontal: size(56) },
  ph15: { paddingHorizontal: size(60) },
  ph16: { paddingHorizontal: size(64) },
  ph17: { paddingHorizontal: size(68) },
  ph18: { paddingHorizontal: size(72) },
  ph19: { paddingHorizontal: size(76) },
  ph20: { paddingHorizontal: size(80) },
  ph21: { paddingHorizontal: size(84) },
  ph22: { paddingHorizontal: size(88) },
  ph23: { paddingHorizontal: size(92) },
  ph24: { paddingHorizontal: size(96) },
  ph25: { paddingHorizontal: size(100) },

  // Margin Vertical - Top and bottom margin
  // Use for: Vertical spacing, section separation
  // Common use cases: mv1-mv4 for small vertical spacing, mv5-mv8 for medium spacing, mv9+ for large spacing
  mv0: { marginVertical: 0 },
  mv1: { marginVertical: size(4) },
  mv2: { marginVertical: size(8) },
  mv3: { marginVertical: size(12) },
  mv4: { marginVertical: size(16) },
  mv5: { marginVertical: size(20) },
  mv6: { marginVertical: size(24) },
  mv7: { marginVertical: size(28) },
  mv8: { marginVertical: size(32) },
  mv9: { marginVertical: size(36) },
  mv10: { marginVertical: size(40) },
  mv11: { marginVertical: size(44) },
  mv12: { marginVertical: size(48) },
  mv13: { marginVertical: size(52) },
  mv14: { marginVertical: size(56) },
  mv15: { marginVertical: size(60) },
  mv16: { marginVertical: size(64) },
  mv17: { marginVertical: size(68) },
  mv18: { marginVertical: size(72) },
  mv19: { marginVertical: size(76) },
  mv20: { marginVertical: size(80) },
  mv21: { marginVertical: size(84) },
  mv22: { marginVertical: size(88) },
  mv23: { marginVertical: size(92) },
  mv24: { marginVertical: size(96) },
  mv25: { marginVertical: size(100) },

  // Padding Vertical - Top and bottom padding
  // Use for: Vertical content spacing within containers
  // Common use cases: pv1-pv4 for small vertical padding, pv5-pv8 for medium padding, pv9+ for large padding
  pv0: { paddingVertical: 0 },
  pv1: { paddingVertical: size(4) },
  pv2: { paddingVertical: size(8) },
  pv3: { paddingVertical: size(12) },
  pv4: { paddingVertical: size(16) },
  pv5: { paddingVertical: size(20) },
  pv6: { paddingVertical: size(24) },
  pv7: { paddingVertical: size(28) },
  pv8: { paddingVertical: size(32) },
  pv9: { paddingVertical: size(36) },
  pv10: { paddingVertical: size(40) },
  pv11: { paddingVertical: size(44) },
  pv12: { paddingVertical: size(48) },
  pv13: { paddingVertical: size(52) },
  pv14: { paddingVertical: size(56) },
  pv15: { paddingVertical: size(60) },
  pv16: { paddingVertical: size(64) },
  pv17: { paddingVertical: size(68) },
  pv18: { paddingVertical: size(72) },
  pv19: { paddingVertical: size(76) },
  pv20: { paddingVertical: size(80) },
  pv21: { paddingVertical: size(84) },
  pv22: { paddingVertical: size(88) },
  pv23: { paddingVertical: size(92) },
  pv24: { paddingVertical: size(96) },
  pv25: { paddingVertical: size(100) },

  // Width - Element width sizing
  // Use for: Component sizing, responsive widths, layout control
  // Common use cases: w1-w8 for small elements, w9-w16 for medium elements, w17+ for large elements
  w100: { width: "100%" },
  h100: { height: "100%" },

  w0: { width: 0 },
  whalf: { width: size(2) },
  w1: { width: size(4) },
  w2: { width: size(8) },
  w3: { width: size(12) },
  w4: { width: size(16) },
  w5: { width: size(20) },
  w6: { width: size(24) },
  w7: { width: size(28) },
  w8: { width: size(32) },
  w9: { width: size(36) },
  w10: { width: size(40) },
  w11: { width: size(44) },
  w12: { width: size(48) },
  w13: { width: size(52) },
  w14: { width: size(56) },
  w15: { width: size(60) },
  w16: { width: size(64) },
  w17: { width: size(68) },
  w18: { width: size(72) },
  w19: { width: size(76) },
  w20: { width: size(80) },
  w21: { width: size(84) },
  w22: { width: size(88) },
  w23: { width: size(92) },
  w24: { width: size(96) },
  w25: { width: size(100) },

  // Height - Element height sizing
  // Use for: Component sizing, responsive heights, layout control
  // Common use cases: h1-h8 for small elements, h9-h16 for medium elements, h17+ for large elements
  h0: { height: 0 },
  hhalf: { height: size(2) },
  h1: { height: size(4) },
  h2: { height: size(8) },
  h3: { height: size(12) },
  h4: { height: size(16) },
  h5: { height: size(20) },
  h6: { height: size(24) },
  h7: { height: size(28) },
  h8: { height: size(32) },
  h9: { height: size(36) },
  h10: { height: size(40) },
  h11: { height: size(44) },
  h12: { height: size(48) },
  h13: { height: size(52) },
  h14: { height: size(56) },
  h15: { height: size(60) },
  h16: { height: size(64) },
  h17: { height: size(68) },
  h18: { height: size(72) },
  h19: { height: size(76) },
  h20: { height: size(80) },
  h21: { height: size(84) },
  h22: { height: size(88) },
  h23: { height: size(92) },
  h24: { height: size(96) },
  h25: { height: size(100) },

  // Gap - Space between flex items
  // Use for: Flex container spacing, grid layouts, list item spacing
  // Common use cases: g1-g4 for small gaps, g5-g8 for medium gaps, g9+ for large gaps
  g0: { gap: 0 },
  g1: { gap: size(4) },
  g2: { gap: size(8) },
  g3: { gap: size(12) },
  g4: { gap: size(16) },
  g5: { gap: size(20) },
  g6: { gap: size(24) },
  g7: { gap: size(28) },
  g8: { gap: size(32) },
  g9: { gap: size(36) },
  g10: { gap: size(40) },
  g11: { gap: size(44) },
  g12: { gap: size(48) },
  g13: { gap: size(52) },
  g14: { gap: size(56) },
  g15: { gap: size(60) },
  g16: { gap: size(64) },
  g17: { gap: size(68) },
  g18: { gap: size(72) },
  g19: { gap: size(76) },
  g20: { gap: size(80) },
  g21: { gap: size(84) },
  g22: { gap: size(88) },
  g23: { gap: size(92) },
  g24: { gap: size(96) },
  g25: { gap: size(100) },
});
