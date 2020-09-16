// respond w/ JSON
const respond = (request, response, status, content) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(content));
  response.end();
};

const respondXML = (request, response, status, content) => {
  response.writeHead(status, { 'Content-Type': 'text/xml' });
  response.write(content);
  response.end();
};

const success = (request, response, acceptedTypes) => {
  const respondStruct = {
    message: 'This is a successful response.',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 200, responseXML);
  }

  respond(request, response, 200, respondStruct);
};

const badRequest = (request, response, acceptedTypes, params) => {
  const respondStruct = {
    message: 'This request has the required parameters.',
  };

  if (!params.valid) {
    respondStruct.message = 'Missing valid query parameter set to true.';
    respondStruct.id = 'badRequest';

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <id>${respondStruct.id}</id>`;
      responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
      responseXML = `${responseXML} </response>`;

      return respondXML(request, response, 400, responseXML);
    }

    return respond(request, response, 400, respondStruct);
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 200, responseXML);
  }

  respond(request, response, 200, respondStruct);
};

const unauthorized = (request, response, acceptedTypes, params) => {
  const respondStruct = {
    message: 'This is a successful response.',
  };

  if (!params.valid) {
    respondStruct.message = 'Missing valid loggedIn parameter set to yes.';
    respondStruct.id = 'unauthorized';

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <id>${respondStruct.id}</id>`;
      responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
      responseXML = `${responseXML} </response>`;

      return respondXML(request, response, 401, responseXML);
    }

    return respond(request, response, 401, respondStruct);
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 200, responseXML);
  }

  respond(request, response, 200, respondStruct);
};

const forbidden = (request, response, acceptedTypes) => {
  const respondStruct = {
    message: 'You do not have access to this content.',
    id: 'forbidden',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 403, responseXML);
  }

  respond(request, response, 403, respondStruct);
};

const internal = (request, response, acceptedTypes) => {
  const respondStruct = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 500, responseXML);
  }

  respond(request, response, 500, respondStruct);
};

const notImplemented = (request, response, acceptedTypes) => {
  const respondStruct = {
    message: 'A get request for this page has not been implemented yet. Please check again later.',
    id: 'notImplemented',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 501, responseXML);
  }

  respond(request, response, 501, respondStruct);
};

const notFound = (request, response, acceptedTypes) => {
  const respondStruct = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${respondStruct.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respondXML(request, response, 404, responseXML);
  }

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
