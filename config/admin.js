module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '47f7e734f21511f2f7e44a76b5b3c717'),
  },
});
