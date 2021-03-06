# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2020-10-01

### Added

- Added Dark Mode support. All Zephyr elements will automatically change to light or dark mode
  depending on the user's machine settings
- Added React to peer dependency list

### Changed

- Upgraded `zephyr-tailwind` to 1.x which changes a lot of things including colors
- Changed default generated text to `responsive` which by default enables light / dark mode changing

### Removed

- N / A

## [0.3.3] - 2020-09-06

### Added

- N / A

### Changed

- Modified gutter in grid and container to fit the new mobile gutter

### Removed

- N / A

## [0.3.2] - 2020-09-06

### Added

- N / A

### Changed

- Modified columns to support 1-12 regardless of screen resolution
- Modified grid and columns for a 16px gutter on mobile rather than 32px

### Removed

- N / A

## [0.3.1] - 2020-09-06

### Added

- N / A

### Changed

- Fixed mobile grid being out of 6 and tablet grid being out of 4
- Fixed margin not showing up be default in text

### Removed

- N / A

## [0.3.0] - 2020-09-06

### Added

- Icon Component with Close Icon
- Modal Component
- ALl (`a`) size for grid columns for columns that need to be the same size on every device
- Added a `link` text formatter to `generateTextStyle`

### Changed

- Changed margin of grid columns to include a 32px bottom margin
- Fixed `m` and `t` sizes not working in grid columns

### Removed

- N / A

## [0.2.0] - 2020-07-13

### Added

- Alert component to help display errors to users

### Changed

- N / A

### Removed

- N / A

## [0.1.0] - 2020-07-07

### Added

- Initial Release

### Changed

- N / A

### Removed

- N / A
