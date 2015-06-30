#!/usr/bin/env node

var input = ''

process.stdin
  .on('data', function(buffer) {
    input += buffer.toString() })
  .on('end', function() {
    process.stdout.write(require('./')(input) + '\n') })
  .resume()
