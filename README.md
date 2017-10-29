# Wilson Score Interval [![Build Status](https://secure.travis-ci.org/msn0/wilson-score-interval.png?branch=master)](http://travis-ci.org/msn0/wilson-score-interval)

Simple JavaScript implementation of [Wilson score interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Wilson_score_interval). Useful wherever you want to make a confident estimate about the actions or preferences of a general population, given a sample of data (e.g. assigning scores for ranking [comments by upvotes](https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9), products by popularity, [and more](#exampleusecases)).

#### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Explanation](#explanation)
    - [Less technical](#lesstechnical)
    - [More technical](#moretechnical)
- [Comparison with other sorting methods](#comparison)
- [Use cases](#usecases)
    - [Examples](#exampleusecases)

## <a name="installation"></a>Installation

```sh
$ npm i wilson-score-interval
```

## <a name="usage"></a>Usage

```js
const wilson = require('wilson-score-interval');

/*
  wilson(upVotes, total);
  // upVotes === whatever result you want to estimate the confidence interval for
  // total === your total sample size
*/

wilson(430, 474); // { left: 0.8776750858242243, right: 0.9301239839930541 }
wilson(392, 436); // { left: 0.8672311846637769, right: 0.9239627360567735 }
wilson(10, 14);   // { left: 0.4535045882751561, right: 0.882788120898909 }
```

## <a name="explanation"></a>Explanation

### <a name="lesstechnical"></a>Less technical:
If you know what a sample population thinks, you can use this tool to estimate the preferences of the population at large.

Suppose your site has a population of 10,000 users. One product has ratings from 100 users (your sample size): 40 upvotes, and 60 downvotes. You want to understand how popular the product would be across the whole population. So you run `wilson-score-interval(40, 100)`, which returns the result `{ left: 0.3093997461136029, right: 0.4979992153815976 }`. Now you can estimate _with 95% confidence_ that **between _30.9%_ and _49.7%_ of total users would upvote this product.**

It is common to use the lower bound of this interval (here, `30.9`) as the result, as it is the most conservative estimate of the "real" score.

For a beginner-friendly introduction to confidence intervals for population proportions, see [this YouTube video](https://www.youtube.com/watch?v=3ReWri_jh3M).

### <a name="moretechnical"></a>More technical:
The Wilson score interval, developed by American mathematician [Edwin Bidwell Wilson](https://en.wikipedia.org/wiki/Edwin_Bidwell_Wilson) in 1927, is a confidence interval for a proportion in a statistical population. It assumes that the statistical sample used for the estimation has a binomial distribution. A binomial distribution indicates, in general, that:

1. the experiment is repeated a fixed number of times;
2. the experiment has two possible outcomes ('success' and 'failure');
3. the probability of success is equal for each experiment;
4. the trials are statistically independent.

This package uses a [z-score](https://en.wikipedia.org/wiki/Standard_score) of **1.96** by default, which translates to a confidence level of 95%.

For more, please see the [Wikipedia page on the Wilson score interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Wilson_score_interval) and [this blog post](http://wordpress.mrreid.org/2014/05/20/ranking-ratings/).

## <a name="comparison"></a>Comparison with other scoring methods
Using a simple calculation of `score = (positive ratings) - (negative ratings)` or `score = average rating = (positive ratings) / (total ratings)` proves to be problematic when working with smaller sample sizes, or differences in sample sizes across populations. See [this blog post comparing scoring methods for details and examples](http://www.evanmiller.org/how-not-to-sort-by-average-rating.html).

The Wilson score interval is known for performing well given small sample sizes/extreme probabilities as compared to the [normal approximation interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Normal_approximation_interval), because the formula accounts for uncertainties in those scenarios.

[This paper](https://www.ucl.ac.uk/english-usage/staff/sean/resources/binomialpoisson.pdf) offers a more technical comparison of the Wilson interval with other statistical approaches.

## <a name="usecases"></a>Use cases
Apart from sorting by rating, the Wilson score interval has a lot of potential applications! You can use the Wilson score interval anywhere you need a confident estimate for what percentage of people took or would take a specific action.

You can even use it in cases where the data doesn't break cleanly into two specific outcomes (e.g. 1-5 star ratings), as long as you are able to creatively abstract the outcomes into two buckets (e.g. % of users who voted 4 stars and above vs % of users who didn't).

### <a name="exampleusecases"></a>Examples:

- [Most romantic city on Yelp](https://www.yelpblog.com/2011/02/the-most-romantic-city-on-yelp-is) (`wilson-score-interval(num_romantic_searches / num_total_searches)`)
- [Sorting commments by upvotes on Reddit](https://redditblog.com/2009/10/15/reddits-new-comment-sorting-system/) (`wilson-score-interval(num_upvotes / num_total_votes)`)
- Creating a 'most shared' list (`wilson-score-interval(num_shares / num_total_views)`)
- Spam/abuse detection (`wilson-score-interval(num_marked_spam / num_total_votes)`)
