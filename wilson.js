module.exports = function (positiveScore, total) {

    if (total === 0) {
        return {
            left: 0,
            right: 0
        };
    }

  // phat is the proportion of successes
  // in a Bernoulli trial process
    const phat = positiveScore / total;

  // z is 1-alpha/2 percentile of a standard
  // normal distribution for error alpha=5%
    const z = 1.96;

  // implement the algorithm
  // (http://goo.gl/kgmV3g)
    const a = phat + z * z / (2 * total);
    const b = z * Math.sqrt((phat * (1 - phat) + z * z / (4 * total)) / total);
    const c = 1 + z * z / total;

    return {
        left: (a - b) / c,
        right: (a + b) / c
    };
};
