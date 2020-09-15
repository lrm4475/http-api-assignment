// respond w/ XML or JSON
const respond = (request, response, status, type, content) => {
  response.writeHead(status, { 'Content-Type': 'type' });
  response.write(content);
  response.end();
};

const success = (request, response) => {
  const respondStruct = {
    message: 'This is a successful response.',
  };

  respond(request, response, 200, respondStruct);
};

const badRequest = (request, respond, params) => {
  const respondStruct = {
    message: 'This request has the required parameters.',
  };

  if (!params.valid) {
    respondStruct.message = 'Missing valid query parameter set to true.';
    respondStruct.id = 'badRequest';

    return respond(request, response, 400, respondStruct);
  }

  respond(request, response, 200, respondStruct);
};

const unauthorized = (request, response, params) => {
  const respondStruct = {
    message: 'This is a successful response.',
  };

  if (!params.valid) {
    respondStruct'.message = 'Missing valid loggedIn parameter set to yes.';
    respondStruct'.id = 'unauthorized';

    return respond(request, response, 401, respondStruct);
  }
  respond(request, response, 200, respondStruct);
};

const forbidden = (request, response) => {
  const respondStruct = {
    message: 'You do not have access to this content.',
    id: 'forbidden',
  };

  respond(request, response, 403, respondStruct);
};

const internal = (request, response) => {
  const respondStruct = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };

  respond(request, response, 500, respondStruct);
};

const notImplemented = (request, response) => {
  const respondStruct = {
    message: 'A get request for this page has not been implemented yet. Please check again later.',
    id: 'notImplemented',
  };

  respond(request, response, 501, respondStruct);
};

const notFound = (request, response) => {
  const respondStruct = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respond(request, response, 404, respondStruct);
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
