# @astrouxds/tokens

## 1.10.0

### Minor Changes

- 2971f9d: Added component tokens for tabs
- 2971f9d: Added component tokens for push button

## 1.9.0

### Minor Changes

- Added new component tokens for inline select variant: `select-color-text-inline`, `select-color-border-inline-default`, `select-color-background-inline`

## 1.8.0

### Minor Changes

- Added table components tokens: `table-header-color-background`, `table-header-cell-padding`, `table-header-shadow`, `table-row-color-background-default`, `table-row-color-background-selected`, `table-row-color-background-hover`, `table-row-color-text`, `table-row-color-border`, `table-row-border-width`, `table-body-cell-padding-y`, `table-body-cell-padding`

### Patch Changes

- Fixed iOS data visualization colors in light mode

## 1.7.0

### Minor Changes

- Added component tokens for button, slider, checkbox, checkbox group, radio, radio group, select, input, textarea.
- Added ios data visualization tokens
- Added experimental js output targets
- Deprecated `radio-radius-inner`. Use `radio.check.radius` instead.
- Deprecated checkbox-radius. Use checkbox-control-radius instead.
- Deprecated `radio-radius-outer`. Use radio-control-radius instead.
- Deprecated `slider-radius-background-track`. Use `slider-track-radius` instead

## 1.6.0

### Minor Changes

- Added `container-header-color-background` and `container-footer-color-background` component tokens
- Added new data visualization tokens: `color-data-visualization-1`, `color-data-visualization-2`, `color-data-visualization-3`, `color-data-visualization-4`, `color-data-visualization-5`, `color-data-visualization-6`, `color-data-visualization-7`, `color-data-visualization-8` for dark and light themes

### Patch Changes

- Updated hover colors in light theme to increase visual distinction

## 1.5.0

### Minor Changes

- Added `color-background-interactive-muted`
- Added light theme token for `color-background-interactive-muted`
- Added light theme tokens for `color-status-off`, `color-status-standby`, `color-status-normal`, `color-status-serious`, `color-status-critical`

### Patch Changes

- Formatted descriptions

## 1.4.1

### Patch Changes

- bfd2ab4: added light theme value for `container.color.border`
- 43c8c28: fixed incorrect value on `color-status-standby`. changed `#64d9ff` to `#2dccff`
- be393b5: improve contrast in light theme values for `container-color-border`, `log-color-border`

## 1.4.0

### Minor Changes

- Added `timeline-header-color-background` and `timeline-cell-color-background` tokens

### Patch Changes

- Updated light theme focus state color
- Added light theme values for timeline tokens

## 1.3.0

### Minor Changes

- 4ed8c4b: Adds `tooltip-color-background` and `tooltip-color-text` tokens for new Tooltip component

## 1.2.0

### Minor Changes

- Added new focus state tokens: `color-border-focus-default`, `border-width-focus-default`, `spacing-focus-default`.

## 1.1.1

### Patch Changes

- Fixed light theme regression on `clock-datetime-color-background`, `monitoring-icon-badge-color-background`, and `notification-banner-color-border-outer-*` tokens

## 1.1.0

### Minor Changes

- Added:

  - notification-banner-color-border-outer-default
  - notification-banner-color-border-outer-off
  - notification-banner-color-border-outer-standby
  - notification-banner-color-border-outer-critical
  - notification-banner-color-border-outer-serious
  - notification-banner-color-border-outer-caution
  - notification-banner-color-border-outer-normal
  - notification-banner-color-border-inner-default
  - notification-banner-color-border-inner-off
  - notification-banner-color-border-inner-standby
  - notification-banner-color-border-inner-critical
  - notification-banner-color-border-inner-serious
  - notification-banner-color-border-inner-caution
  - notification-banner-color-border-inner-normal
  - log-color-border
  - clock-datetime-color-background
  - monitoring-icon-badge-color-background

## 1.0.2

### Patch Changes

- Fixed an issue where the typography classes were using rems to calc
