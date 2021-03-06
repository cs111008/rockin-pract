import axios from 'axios';
import config from './../app/config';

const methods = ['get', 'post', 'put', 'patch', 'del'];
function formatUrl(path, directUrl = false) {
  if (directUrl) return path;
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  if (path.indexOf('http') === 0) {
    return path;
  }
  return config.apiHost + adjustedPath;
}

function buildHeaders(url, headers) {
  if (url.includes('login')) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    };
  }
  if (url.includes('forgot_password')) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    };
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-access-token': `${localStorage.getItem('token')}`,
    ...headers,
  };
}

class _ApiClient {
  constructor() { // we can get an access to req
    const _this = this;
    methods.forEach((method) => {
      _this[method] = (path, {
        params,
        data,
        headers,
        attachments,
        directUrl,
        handleProgress,
      } = {}) => {
        const requestConfig = {
          method,
          url: formatUrl(path, directUrl)
        };

        if (params) {
          requestConfig.params = { ...params };
        }
        requestConfig.headers = buildHeaders(path, headers);

        if (attachments) {
          if (attachments && typeof attachments === 'object') {
            const _data = new FormData();
            Object.keys(attachments).forEach((c) => {
              _data.append(c, attachments[c]);
            });
            requestConfig.data = _data;
          }
        }

        if (data && !attachments) {
          requestConfig.data = { ...data };
        }

        if (handleProgress) {
          requestConfig.onUploadProgress = handleProgress;
        }

        return axios(requestConfig);
      };
    });
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
