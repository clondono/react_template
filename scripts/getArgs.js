const getArgs = () => require('minimist')(process.argv.slice(2), {
  default: {
  },
});

// argv is output of minimist
// will give LAST item in array, or single value if not an array
// use can call npm run advertiser -- --skin=bain to override script defaults
const getSingleArgument = (argv, argName) => {
  const argValue = argv[argName];
  return Array.isArray(argValue) ? argValue[argValue.length - 1] : argValue;
};

module.exports = {
  getArgs,
  getSingleArgument,
};
