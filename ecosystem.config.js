module.exports = {
  apps: [
    {
      name: "client",
      script: "pnpm",
      args: "client start",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "backend",
      script: "pnpm",
      args: "backend start:prod",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "admin",
      script: "pnpm",
      args: "admin start",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
