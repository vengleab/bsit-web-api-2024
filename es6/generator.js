function* range(start, end, step)   {
  while (start < end ) {
    // console.log("before yield", start);
    yield start;
    // console.log("after yeild", start);
    start += step;
  }
}

module.exports = { range} ;