module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "localhost",
      port: 1025,
      ignoreTLS: true,
    },
  },
  meilisearch: {
    host: "http://localhost:7700",
    api_key: "masterKey",
  },
});
