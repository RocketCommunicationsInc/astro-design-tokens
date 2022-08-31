---
"@astrouxds/design-tokens": major
---

WHAT: The file structure for each output target has been changed
WHY: The current structure did not reflect our design token tier hierarchy. This new approach allos developers to include only the tokens they want.
HOW TO MIGRATE: Review the new files and update your imports accordingly. In most cases global -> ref, dark -> sys/components.
