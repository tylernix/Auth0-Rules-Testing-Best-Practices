// eslint-disable-next-line no-unused-vars
function ipAddressWhitelist(user, context, callback) {
  const whitelist = ['47.220.7.162']; // authorized IPs
  const userHasAccess = whitelist.some(ip => context.request.ip === ip );
  if (!userHasAccess) {
    return callback(new Error('Access denied from this IP address.'));
  }
  return callback(null, user, context);
}
