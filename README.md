Wilson Score Interval
=====================

[![Build Status](https://secure.travis-ci.org/msn0/wilson-score-interval.png?branch=master)](http://travis-ci.org/msn0/wilson-score-interval)

Simple implementation of [Wilson score interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval).

Wilson score interval is a perfect tool for scoring comments. The only data you need is a number of upvotes and a total number of votes. It has really good properties even for small number of votes.

Installation
------------

```bower install wilson-score-interval --save```

Basic usage
-----------

```js
wilson(upVotes, total);

wilson(430, 474); // → Object{left: 0.8776750858242243, right: 0.9301239839930541}
wilson(392, 436); // → Object{left: 0.8672311846637769, right: 0.9239627360567735}
wilson(10, 14);   // → Object{left: 0.4535045882751561, right: 0.882788120898909}
```
