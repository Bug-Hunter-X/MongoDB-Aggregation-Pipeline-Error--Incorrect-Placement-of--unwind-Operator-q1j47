```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: {/*some filter*/}
  },
  {
    $lookup: {
      from: 'otherCollection',
      localField: 'someField',
      foreignField: '_id',
      as: 'results'
    }
  },
  {
    $unwind: '$results'
  },
  {
    $group: {
      _id: '$someField',
      total: { $sum: '$results.someField' }
    }
  }
]);
```