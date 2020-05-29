// We use the tailwind Zeplin Extension (https://extensions.zeplin.io/morrislaptop/tailwind-zeplin-extension)
// to improve designer-developer handoff. This should be run at the end of every zephyr-tailwind
// release to ensure developers have the most up-to-date class names

const fs = require('fs');
const transpilledConfig = require('./lib/tailwind').default;

fs.writeFileSync('./lib/zeplin-config.json', JSON.stringify(transpilledConfig));
