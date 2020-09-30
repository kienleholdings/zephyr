# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2020-09-30

This is a major release. Users of 0.x will need to make the following updates

- Remove and replace any instances of `spinner-normal` and `spinner-small` with [native TailwindCSS animations](https://tailwindcss.com/docs/animation#spin)
- Update color names to new names built around light and dark mode

### Added

- Dark Mode Support

### Changed

- Completely overhauled color configuration. Fun color names have been replaced with more usable and customizable color names.
- Replaced `light` and `dark` with `lighter` and `darker` to reduce developer confusion with light mode and dark mode

### Removed

- Removed [tailwind-spinner](https://github.com/aniftyco/tailwindcss-spinner) as the package is now deprecated

## [0.1.0] - 2020-06-26

### Added

- Initial Release

### Changed

- N / A

### Removed

- N / A
