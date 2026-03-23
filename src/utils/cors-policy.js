const ALLOW_METHODS = 'GET, POST, PUT, DELETE, OPTIONS';
const ALLOW_HEADERS = 'Content-Type, Authorization, X-Emby-Token, X-Emby-Authorization, X-Emby-Client, X-Emby-Client-Version, X-Emby-Device-Name, X-Emby-Device-Id';

function isAdminApiPath(reqPath = '') {
  return reqPath.startsWith('/admin/api/');
}

function applyCorsHeaders(req, res) {
  if (!isAdminApiPath(req.path || '')) {
    res.header('Access-Control-Allow-Origin', '*');
  }

  res.header('Access-Control-Allow-Methods', ALLOW_METHODS);
  res.header('Access-Control-Allow-Headers', ALLOW_HEADERS);
}

module.exports = {
  ALLOW_METHODS,
  ALLOW_HEADERS,
  applyCorsHeaders,
  isAdminApiPath,
};