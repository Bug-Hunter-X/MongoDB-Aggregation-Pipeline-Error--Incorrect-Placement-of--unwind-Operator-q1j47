# MongoDB Aggregation Pipeline Error

This repository demonstrates a common error in MongoDB aggregation pipelines involving the incorrect placement of the `$unwind` operator.  The provided `bug.js` file contains a pipeline that produces inaccurate results.  The corrected pipeline is shown in `bugSolution.js`.  The error stems from unwinding before grouping, leading to inaccurate sums. The solution reorders the pipeline to ensure proper aggregation.

## Steps to Reproduce

1. Clone this repository.
2. Run `bug.js` and observe the inaccurate results.
3. Run `bugSolution.js` and observe the corrected results.

## Explanation

The error occurs because the `$unwind` operator creates a separate document for each element in the array field. If this is done before grouping, the `$sum` operator will sum over individual elements instead of groups, leading to incorrect totals.