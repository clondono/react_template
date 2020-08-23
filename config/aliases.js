
const paths = require('./paths');
const test = 'blah';


module.exports = (env) => ({
  appRoot: `${paths.appSrc}`,
  actions: `${paths.appSrc}/actions`,
  components: `${paths.appSrc}/components`,
  constants: `${paths.appSrc}/constants`,
  fonts: `${paths.appSrc}/fonts`,
  images: `${paths.appSrc}/images`,
  middleware: `${paths.appSrc}/middleware`,
  reducers: `${paths.appSrc}/reducers`,
  routes: `${paths.appSrc}/routes`,
  selectors: `${paths.appSrc}/selectors`,
  utils: `${paths.appSrc}/utils`,
});
//NOTE: when adding aliases we must add the corresponding alias the package.json jest.moduleNameMapper so that jest test files can resolve the file paths
