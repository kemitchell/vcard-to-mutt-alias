var vcf = require('vcf');

module.exports = function(vcard) {
  var parsed = vcf(vcard)
  return [
    'alias',
    parsed.nickname.data,
    parsed.fn,
    '<' + parsed.email.data + '>'].join(' ') }
