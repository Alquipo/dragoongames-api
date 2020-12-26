module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'wonGames'),
        username: env('DATABASE_USERNAME', 'wonGames'),
        password: env('DATABASE_PASSWORD', 'wonGames123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
