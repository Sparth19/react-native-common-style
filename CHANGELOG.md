# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-06-28

### Added

- **Responsive Metrics System**:
  - `size(fontSize)` - Responsive font sizing based on device characteristics
  - `width` and `height` - Device screen dimensions
  - `isTablet` - Device type detection
  - `rfv(fontSize)` - Alias for size function
- **Direct Exports**: Metrics functions can now be imported directly (`import { size, width, height, isTablet }`)
- **Enhanced Documentation**: Updated README with Metrics usage examples and API reference
- **New Examples**: Added `examples/metrics-usage.js` showing both direct imports and common object usage

### Changed

- **Import Flexibility**: Users can now choose between direct imports for Metrics functions or using the common object
- **Documentation**: Enhanced README with comprehensive Metrics section and usage patterns

### Technical

- **Export Structure**: Added direct exports for Metrics functions while maintaining backward compatibility
- **TypeScript**: Enhanced type definitions for Metrics functions

### Files Modified

- `src/index.ts` - Added direct exports for Metrics functions
- `README.md` - Added comprehensive Metrics documentation and examples
- `examples/basic-usage.js` - Updated to show Metrics usage

---

## [1.0.0] - 2025-06-28

### Added

- Initial release of React Native Common Style Library
- Comprehensive spacing system (0-25 scale, 0-100px)
- Complete typography system with responsive font sizes (6-100px)
- Full flexbox layout utilities with common combinations
- Border system with radius (0-25) and width utilities
- UI utilities including shadows, positioning, opacity, transforms
- Essential background colors (white, black, success, error, info)
- Responsive design system with device-specific scaling
- TypeScript support with full type definitions
- Cross-platform optimization for iOS and Android

### Features

- **Spacing**: Margins, padding, width, height, gap utilities
- **Typography**: Font sizes, alignment, weight, transforms, decoration
- **Flexbox**: Direction, alignment, justification, common combinations
- **Borders**: Border radius, border width, corner-specific radius
- **UI Utilities**: Shadows, positioning, opacity, z-index, transforms
- **Responsive**: Device-aware sizing with tablet and small device support

### Technical

- Built with TypeScript for type safety
- Responsive sizing using device metrics
- Cross-platform compatibility
- Comprehensive documentation with examples
- MIT License

---

## [Unreleased]

### Planned Features

- Additional color palettes
- Animation utilities
- Grid system
- Theme support
- Performance optimizations
