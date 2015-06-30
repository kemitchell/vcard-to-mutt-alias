var vcf = require('vcf');

module.exports = function(vcard) {
  var parsed = vcf(vcard)
  return parsed
    .nickname.data
    .split(',')
    .map(function(nickname) {
      return (
        [ 'alias',
          nickname,
          parsed.fn,
          '<' + parsed.email.data + '>' ]
        .join(' ') ) })
    .join('\n') }
