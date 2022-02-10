export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 900,
  laptopMax: 1300,
}
export const QUERIES = {
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  'tableAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}