# Wilson Score Interval [![Build Status](https://secure.travis-ci.org/msn0/wilson-score-interval.png?branch=master)](http://travis-ci.org/msn0/wilson-score-interval)

Simple implementation of [Wilson score interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval) for browser. A Node.js version can be found here https://github.com/msn0/wilson-node.

Wilson score interval is a perfect tool for scoring comments. The only data you need is a number of upvotes and a total number of votes. It has really good properties even for small number of votes.

## Installation

```
npm install wilson-score-interval
```
or

```
bower install wilson-score-interval
```

## Usage

```js
wilson(upVotes, total);

wilson(430, 474); // {left: 0.8776750858242243, right: 0.9301239839930541}
wilson(392, 436); // {left: 0.8672311846637769, right: 0.9239627360567735}
wilson(10, 14);   // {left: 0.4535045882751561, right: 0.882788120898909}
```
