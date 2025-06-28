# React Native Common Style Library

A comprehensive styling utility library for React Native applications that provides consistent spacing, typography, flexbox layouts, border styles, and UI utilities. Built with responsive design in mind and optimized for cross-platform development.

## 🚀 Features

- **Responsive Design** - All sizes scale based on device characteristics
- **Comprehensive Spacing** - Complete spacing system from 0-25 (0-100px)
- **Typography System** - Font sizes from 6-100px with proper hierarchy
- **Flexbox Utilities** - Complete flexbox layout system with common combinations
- **Border System** - Border radius (0-25) and border width utilities
- **UI Utilities** - Shadows, positioning, opacity, transforms, and more
- **Essential Colors** - Universal background colors (white, black, success, error, info)
- **TypeScript Support** - Full TypeScript support with type definitions
- **Cross-Platform** - Optimized for both iOS and Android

## 📦 Installation

### Using npm:

```bash
npm install react-native-common-style
```

### Using yarn:

```bash
yarn add react-native-common-style
```

## 🎯 Quick Start

```typescript
import common from "react-native-common-style";

// Basic usage
<View style={[common.flex1, common.centerRow, common.p4, common.bgWhite]}>
  <Text
    style={[
      { fontSize: common.medium },
      common.textCenter,
      common.fontWeightBold,
    ]}
  >
    Hello World
  </Text>
</View>;
```

## 📚 Usage Guide

### Import Options

```typescript
// Import everything
import common from "react-native-common-style";

// Import specific modules
import {
  flex,
  spacing,
  fontSize,
  borderStyle,
  ui,
} from "react-native-common-style";

// Import responsive utilities
import { Metrics, size } from "react-native-common-style";
```

### Spacing System

The spacing system provides margins, padding, width, height, and gap utilities from 0-25:

```typescript
// Margins
<View style={common.m4}>     // margin: 16px
<View style={common.mt8}>    // marginTop: 32px
<View style={common.mb12}>   // marginBottom: 48px
<View style={common.ml6}>    // marginLeft: 24px
<View style={common.mr10}>   // marginRight: 40px
<View style={common.mh16}>   // marginHorizontal: 64px
<View style={common.mv20}>   // marginVertical: 80px

// Padding
<View style={common.p4}>     // padding: 16px
<View style={common.pt8}>    // paddingTop: 32px
<View style={common.pb12}>   // paddingBottom: 48px
<View style={common.pl6}>    // paddingLeft: 24px
<View style={common.pr10}>   // paddingRight: 40px
<View style={common.ph16}>   // paddingHorizontal: 64px
<View style={common.pv20}>   // paddingVertical: 80px

// Dimensions
<View style={common.w8}>     // width: 32px
<View style={common.h12}>    // height: 48px
<View style={common.w100}>   // width: 100%
<View style={common.h100}>   // height: 100%

// Gap (for flex containers)
<View style={[common.flexRow, common.g4]}>  // gap: 16px
```

### Typography System

Font sizes scale responsively and follow a consistent hierarchy:

```typescript
// Font sizes (responsive)
<Text style={[{ fontSize: common.very_tiny }]}>    // 6px
<Text style={[{ fontSize: common.tiny }]}>         // 8px
<Text style={[{ fontSize: common.small }]}>        // 12px
<Text style={[{ fontSize: common.medium }]}>       // 16px
<Text style={[{ fontSize: common.regular }]}>      // 20px
<Text style={[{ fontSize: common.large }]}>        // 24px
<Text style={[{ fontSize: common.extra_large }]}>  // 48px

// Text utilities
<Text style={common.textCenter}>           // text-align: center
<Text style={common.fontWeightBold}>       // font-weight: bold
<Text style={common.uppercase}>            // text-transform: uppercase
<Text style={common.underline}>            // text-decoration: underline
```

### Flexbox Layout System

Complete flexbox utilities with common layout combinations:

```typescript
// Basic flex properties
<View style={common.flex1}>        // flex: 1
<View style={common.flexRow}>      // flexDirection: row
<View style={common.flexColumn}>   // flexDirection: column

// Alignment
<View style={common.centerRow}>    // row + center + center
<View style={common.centerColumn}> // column + center + center
<View style={common.spaceBetweenRow}> // row + space-between + center

// Common combinations
<View style={common.startRow}>     // row + start + center
<View style={common.endRow}>       // row + end + center
<View style={common.wrapRow}>      // row + wrap
<View style={common.stretchRow}>   // row + stretch
```

### Border System

Comprehensive border radius and border width utilities:

```typescript
// Border radius (all corners)
<View style={common.br4}>          // borderRadius: 16px
<View style={common.br8}>          // borderRadius: 32px
<View style={common.brfull}>       // borderRadius: 1000px (circular)

// Top/Bottom border radius
<View style={common.brt6}>         // top border radius: 24px
<View style={common.brb8}>         // bottom border radius: 32px

// Border width
<View style={common.borderWidth1}> // borderWidth: 1
<View style={common.borderWidth2}> // borderWidth: 2
<View style={common.borderWidth3}> // borderWidth: 3
```

### UI Utilities

Essential UI utilities for modern app development:

```typescript
// Shadows
<View style={common.shadow1}>      // subtle shadow
<View style={common.shadow3}>      // medium shadow
<View style={common.shadow5}>      // prominent shadow

// Essential background colors
<View style={common.bgWhite}>      // white background
<View style={common.bgBlack}>      // black background
<View style={common.bgSuccess}>    // success green
<View style={common.bgError}>      // error red
<View style={common.bgInfo}>       // info blue

// Positioning
<View style={common.absolute}>     // position: absolute
<View style={common.relative}>     // position: relative
<View style={common.absoluteTop}>  // absolute + top: 0

// Opacity
<View style={common.opacity50}>    // opacity: 0.5
<View style={common.opacity75}>    // opacity: 0.75

// Z-index
<View style={common.z10}>          // zIndex: 10
<View style={common.z50}>          // zIndex: 50

// Transforms
<View style={common.scale125}>     // scale: 1.25
<View style={common.rotate45}>     // rotate: 45deg

// Text alignment
<Text style={common.textLeft}>     // text-align: left
<Text style={common.textCenter}>   // text-align: center
<Text style={common.textRight}>    // text-align: right

// Font weights
<Text style={common.fontWeightNormal}> // font-weight: normal
<Text style={common.fontWeightBold}>   // font-weight: bold
<Text style={common.fontWeight600}>    // font-weight: 600
```

### Responsive Metrics

Device-aware responsive utilities for adaptive layouts:

```typescript
// Method 1: Direct imports (recommended for Metrics functions)
import { size, width, height, isTablet } from 'react-native-common-style';

// Responsive font sizing
<Text style={{ fontSize: size(24) }}>Responsive Title</Text>
<Text style={{ fontSize: size(18) }}>Responsive Subtitle</Text>
<Text style={{ fontSize: size(16) }}>Responsive Body</Text>

// Using rfv alias (same as size)
<Text style={{ fontSize: rfv(20) }}>Responsive Text</Text>

// Device dimensions
<View style={{ width: width * 0.8 }}>80% of device width</View>
<View style={{ height: height * 0.5 }}>50% of device height</View>

// Device type detection
{isTablet ? (
  <View style={common.p4}>Tablet Layout</View>
) : (
  <View style={common.p2}>Phone Layout</View>
)}

// Responsive layout calculations
<View style={{
  paddingHorizontal: width * 0.05,
  marginTop: height * 0.02
}}>
  Responsive Container
</View>

// Method 2: Via common object
import { common } from 'react-native-common-style';

<Text style={{ fontSize: common.size(24) }}>Responsive Title</Text>
<View style={{ width: common.width * 0.8 }}>80% of device width</View>
{common.isTablet && <View>Tablet specific content</View>}
```

## 🎨 Common Patterns

### Card Component

```typescript
<View
  style={[
    common.bgWhite,
    common.rounded,
    common.shadow2,
    common.p4,
    common.mb4,
  ]}
>
  <Text style={[{ fontSize: common.large }, common.fontWeightBold, common.mb2]}>
    Card Title
  </Text>
  <Text style={[{ fontSize: common.medium }]}>Card content goes here</Text>
</View>
```

### Button Component

```typescript
<TouchableOpacity
  style={[
    common.bgSuccess,
    common.rounded,
    common.p3,
    common.shadow1,
    common.centerRow,
  ]}
>
  <Text
    style={[
      { fontSize: common.medium },
      common.textCenter,
      common.fontWeight600,
      common.uppercase,
    ]}
  >
    Button Text
  </Text>
</TouchableOpacity>
```

### Modal Overlay

```typescript
<View style={[common.absolute, common.bgBlack, common.opacity50, common.z50]}>
  <View
    style={[
      common.bgWhite,
      common.rounded,
      common.p4,
      common.shadow4,
      common.m4,
    ]}
  >
    <Text style={[{ fontSize: common.large }]}>Modal Content</Text>
  </View>
</View>
```

### List Item

```typescript
<View
  style={[
    common.flexRow,
    common.centerRow,
    common.p3,
    common.borderBottomWidth1,
  ]}
>
  <View style={[common.w12, common.h12, common.bgInfo, common.rounded]} />
  <View style={[common.flex1, common.ml3]}>
    <Text style={[{ fontSize: common.medium }, common.fontWeightBold]}>
      Item Title
    </Text>
    <Text style={[{ fontSize: common.small }]}>Item description</Text>
  </View>
</View>
```

## 📱 Responsive Design

The library includes a responsive sizing system that adapts to different device characteristics:

```typescript
import { size } from "react-native-common-style";

// Custom responsive size
const customSize = size(20); // Responsive 20px

// Responsive font size
<Text style={{ fontSize: size(18) }}>Responsive Text</Text>;
```

## 🔧 Customization

### Adding Custom Colors

```typescript
// Create your own color system
const colors = {
  primary: "#007AFF",
  secondary: "#5856D6",
  background: "#FFFFFF",
  text: "#000000",
  // ... your color palette
};

// Use with common styles
<View
  style={[
    common.shadow2,
    common.rounded,
    { backgroundColor: colors.background },
  ]}
>
  <Text style={[common.medium, { color: colors.text }]}>
    Custom styled content
  </Text>
</View>;
```

### Extending the Library

```typescript
// Create custom style combinations
const customStyles = {
  card: [common.bgWhite, common.rounded, common.shadow2, common.p4],
  button: [common.bgSuccess, common.rounded, common.p3, common.centerRow],
  input: [common.border, common.rounded, common.p3, common.mb3],
};
```

## 📋 API Reference

### Spacing (0-25)

- **Margins**: `m0-m25`, `mt0-mt25`, `mb0-mb25`, `ml0-ml25`, `mr0-mr25`, `mh0-mh25`, `mv0-mv25`
- **Padding**: `p0-p25`, `pt0-pt25`, `pb0-pb25`, `pl0-pl25`, `pr0-pr25`, `ph0-ph25`, `pv0-pv25`
- **Dimensions**: `w0-w25`, `h0-h25`, `w100`, `h100`
- **Gap**: `g0-g25`

### Typography

- **Font Sizes**: `very_tiny` (6px) to `extra_large` (48px)
- **Text Alignment**: `textLeft`, `textCenter`, `textRight`, `textJustify`
- **Font Weight**: `fontWeight100` to `fontWeight900`
- **Text Transform**: `uppercase`, `lowercase`, `capitalize`
- **Text Decoration**: `underline`, `lineThrough`, `noDecoration`

### Flexbox

- **Flex Values**: `flex0` to `flex5`
- **Direction**: `flexRow`, `flexColumn`, `flexRowReverse`, `flexColumnReverse`
- **Justify Content**: `justifyContentStart`, `justifyContentCenter`, `justifyContentEnd`, `justifyContentBetween`, `justifyContentAround`, `justifyContentEvenly`
- **Align Items**: `alignItemsStart`, `alignItemsCenter`, `alignItemsEnd`, `alignItemsStretch`, `alignItemsBaseline`
- **Common Combinations**: `centerRow`, `centerColumn`, `spaceBetweenRow`, `startRow`, `endRow`, etc.

### Borders

- **Border Radius**: `br0-br25`, `brt0-brt25`, `brb0-brb25`, `brfull`
- **Border Width**: `borderWidth1`, `borderWidth2`, `borderWidth3`

### UI Utilities

- **Shadows**: `shadow1-shadow5`
- **Background Colors**: `bgTransparent`, `bgWhite`, `bgBlack`, `bgSuccess`, `bgError`, `bgInfo`
- **Position**: `absolute`, `relative`, `absoluteTop`, `absoluteBottom`, etc.
- **Opacity**: `opacity0`, `opacity25`, `opacity50`, `opacity75`, `opacity100`
- **Z-index**: `z0`, `z1`, `z2`, `z3`, `z10`, `z20`, `z30`, `z40`, `z50`
- **Transforms**: `scale0-scale150`, `rotate0-rotate360`
- **Text Utilities**: `textLeft`, `textCenter`, `textRight`, `textJustify`
- **Font Weights**: `fontWeightNormal`, `fontWeightBold`, `fontWeight100-900`
- **Text Transforms**: `uppercase`, `lowercase`, `capitalize`, `noTransform`
- **Text Decoration**: `underline`, `lineThrough`, `noDecoration`

### Responsive Metrics

- **Responsive Font Sizing**: `size(fontSize)` - Calculate responsive font size based on device
- **Device Dimensions**: `width`, `height` - Device screen dimensions (width is smaller, height is larger)
- **Device Type**: `isTablet` - Boolean indicating if device is a tablet
- **Responsive Font Alias**: `rfv(fontSize)` - Alias for size() function

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by utility-first CSS frameworks like Tailwind CSS
- Built for the React Native community
- Optimized for cross-platform development

---

**Made with ❤️ for React Native developers**
