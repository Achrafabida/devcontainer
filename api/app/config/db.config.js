const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = {
  DB_USER: 'root',
  DB_PASSWORD: 'root',
  DB_HOST: 'localhost',
  DB_PORT: '27017',
  DB_NAME: 'app'
}

module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
}
