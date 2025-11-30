// Configuration temporaire SQLite pour tester
export default ({ env }) => ({
  connection: {
    client: 'better-sqlite3',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    debug: false,
  },
});