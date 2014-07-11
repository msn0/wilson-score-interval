var wilson = function (positiveScore, total) {
  var CONFIDENCE_LEVEL = 1.96;
  var phat;

  if (total === 0) {
    return 0;
  }
  phat = positiveScore / total;
  return (phat + CONFIDENCE_LEVEL * CONFIDENCE_LEVEL / (2 * total) - CONFIDENCE_LEVEL * Math.sqrt((phat * (1 - phat) + CONFIDENCE_LEVEL * CONFIDENCE_LEVEL / (4 * total)) / total)) / (1 + CONFIDENCE_LEVEL * CONFIDENCE_LEVEL / total);
};