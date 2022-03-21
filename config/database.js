module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            // gcp my-sql db public-ip and port (to connect from outside gcp environment)
            // host: env('DATABASE_HOST'),
            // port: env.int('DATABASE_PORT'),
            socketPath: env('SOCKET_PATH'), // gcp my-sql db socket-path (to connect from inside App Engine)
            database: env('DATABASE_NAME'),
            user: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD'),
        },
    },
});