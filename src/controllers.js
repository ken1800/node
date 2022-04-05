module.exports = {
  status,
  notFound,
  user,
};

const callback = (statusCode, payload) => {
  return {
    statusCode,
    payload,
  };
};

const status = callback(200, { status: 'ok', message: 'app running.' });
const notFound = callback(404);

const writeUserJsonToFileSystem = (user) => {
  const userJson = JSON.stringify(user);
  fs.writeFileSync('./data/users.json', userJson);
  return user;
};

const user = (user) => callback(200, writeUserJsonToFileSystem(user));
