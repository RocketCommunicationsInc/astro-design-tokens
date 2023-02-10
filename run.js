const {exec} = require('child_process');

// const opts = {
// 	expandTypography: true,
// 	preserveRawValues: true
// }
// Object.keys(opts).map(i => `--${i}=${opts[i]}`).toString().replace(',',' ')

// "transform.light": "node_modules/.bin/token-transformer data/tokens.json tokens/tokens.light.json reference,system,components,theme-light reference,system,components --expandTypography --preserveRawValue=true",
// "transform.ios-light": "node_modules/.bin/token-transformer data/tokens.json tokens/ios-light.json reference,system,components,ios-light --expandTypography --preserveRawValue=true",
// "transform.ios-dark": "node_modules/.bin/token-transformer data/tokens.json tokens/ios.json reference,system,components,ios-dark  --expandTypography --preserveRawValue=true",
// "transform": "node_modules/.bin/token-transformer data/tokens.json tokens/tokens.json reference,system,components  --expandTypography --preserveRawValue=true",
// "transform.refs": "node_modules/.bin/token-transformer data/tokens.json tokens/reference.json reference --preserveRawValue=true",
// Core
exec('node_modules/.bin/token-transformer data/tokens.json tokens/base.reference.json reference --expandTypography --preserveRawValue')
exec('node_modules/.bin/token-transformer data/tokens.json tokens/base.system.json reference,system reference --expandTypography --preserveRawValue')
exec('node_modules/.bin/token-transformer data/tokens.json tokens/base.component.json reference,system,components,input reference,system --expandTypography --preserveRawValue')

// Light Theme
exec('node_modules/.bin/token-transformer data/tokens.json tokens/theme/light.json reference,system,components,theme-light reference,system,components --expandTypography --preserveRawValue')

// Typography Classes
exec('node_modules/.bin/token-transformer data/tokens.json tokens/extra.typography.json reference --preserveRawValue=true')

// iOS
exec('node_modules/.bin/token-transformer data/tokens.json tokens/ios/light.json reference,system,components,ios-light --preserveRawValue=true')
exec('node_modules/.bin/token-transformer data/tokens.json tokens/ios/base.json reference,system,components,ios-dark --preserveRawValue=true')