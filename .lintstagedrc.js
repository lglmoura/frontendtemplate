module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `pnpm run lint --fix  . ${filenames.join(' --file ')}`,
    `pnpm run test -- --bail  --findRelatedTests --watchAll=false ${filenames.join(' ')}`
  ]
}
