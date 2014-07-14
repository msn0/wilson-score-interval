Wilson Score Interval
=====================

Simple implementation of [Wilson score interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval).

Wilson score interval is a perfect tool for scoring comments. The only data you need is a number of upvotes and a total number of votes. It has really good properties even for small number of votes.

Basic usage
-----------

```js
wilson(upVotes, total);

wilson(430, 474); // → 0.8776750858242243
wilson(392, 436); // → 0.8672311846637769
wilson(10, 14);   // → 0.4535045882751561
```
