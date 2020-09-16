(() => {
  function rule(user, context, callback) {
    const ipaddr = require('ipaddr.js');
    const corp_network = "47.220.7.162";
    const current_ip = ipaddr.parse(context.request.ip).toString();
    console.log(current_ip);
    if (current_ip !== corp_network) {
      return callback(new Error('This app is only available for Tyler only.'));
    }
    return callback(null, user, context);
  }
  if (module) {
    module.exports = rule;
  } else {
    return rule;
  }
})()
