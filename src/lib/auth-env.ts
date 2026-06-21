export const authEnv = {
  githubClientId: process.env.GITHUB_ID,
  githubClientSecret: process.env.GITHUB_SECRET,
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
};

export const isAuthRuntimeConfigured = Boolean(
  authEnv.githubClientId &&
    authEnv.githubClientSecret &&
    authEnv.nextAuthSecret,
);
