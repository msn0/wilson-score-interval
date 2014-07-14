var wilson = function (positiveScore, total) {

  "use strict";

  if (total === 0) {
    return 0;
  }

  // phat is the proportion of successes
  // in a Bernoulli trial process
  var phat = positiveScore / total;

  // z is 1-alpha/2 percentile of a standard
  // normal distribution for error alpha=5%
  var z = 1.96;

  return (phat + z * z / (2 * total) - z * Math.sqrt((phat * (1 - phat) + z * z / (4 * total)) / total)) / (1 + z * z / total);
};