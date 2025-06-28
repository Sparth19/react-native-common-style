# Contributing to React Native Common Style

Thank you for your interest in contributing to React Native Common Style! This document provides guidelines and information for contributors.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/sparth19/react-native-common-style.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development

### Prerequisites

- Node.js >= 14.0.0
- npm or yarn
- TypeScript knowledge

### Available Scripts

- `npm run build` - Build the TypeScript files to JavaScript
- `npm run clean` - Remove the dist folder
- `npm test` - Run tests (when implemented)

### Code Style

- Use TypeScript for all new code
- Follow the existing naming conventions
- Add JSDoc comments for new functions
- Keep utility functions pure and focused
- Add use case comments for style utilities

### Adding New Styles

When adding new style utilities:

1. **Choose the right file**: Add styles to the appropriate module (spacing, typography, flex, etc.)
2. **Follow naming conventions**: Use camelCase for style names
3. **Add comments**: Include use case examples in comments
4. **Consider responsiveness**: Use the Metrics system for responsive values
5. **Test cross-platform**: Ensure compatibility with both iOS and Android

### Example of adding a new style:

```typescript
// In spacing.ts
export const spacing = {
  // ... existing styles

  // New utility for specific use case
  sectionGap: responsiveSize(32), // Large gap between sections
};
```

## Testing

Before submitting a pull request:

1. Run the build: `npm run build`
2. Test in a React Native project
3. Ensure TypeScript compilation works
4. Verify cross-platform compatibility

## Submitting Changes

1. Commit your changes with clear commit messages
2. Push to your fork
3. Create a pull request with:
   - Clear description of changes
   - Any breaking changes noted
   - Examples of usage if adding new features

## Pull Request Guidelines

- **Title**: Clear, descriptive title
- **Description**: Explain what and why, not how
- **Breaking Changes**: Clearly mark any breaking changes
- **Examples**: Include usage examples for new features
- **Tests**: Add tests if applicable

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow

## Questions?

If you have questions about contributing, please open an issue or reach out to the maintainers.

Thank you for contributing! 🚀
