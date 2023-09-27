const { exec } = require('child_process');

exec('node_modules/.bin/token-transformer data/tokens.json tokens/primitive.json primitives --expandTypography --preserveRawValue')
// Core
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/base.reference.json primitives --expandTypography --preserveRawValue')
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/base.system.json reference,system reference --expandTypography --preserveRawValue')
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/base.component.json reference,system,components reference,system --expandTypography --preserveRawValue')

// // Light Theme
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/theme/light.json reference,system,components,theme-light reference,system,components --expandTypography --preserveRawValue')

// // Typography Classes
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/extra.typography.json reference --preserveRawValue=true')

// // iOS
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/ios/light.json reference,system,components,ios-light --preserveRawValue=true')
// exec('node_modules/.bin/token-transformer data/tokens.json tokens/ios/base.json reference,system,components,ios-dark --preserveRawValue=true')