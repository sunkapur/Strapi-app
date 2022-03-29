module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'de2c9e1c6e488296c6e56e36b3c45f9b'),
  },
});
