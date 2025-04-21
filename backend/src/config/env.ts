const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export const env = {
  port: getEnv('PORT'),
  mongoUri: getEnv('MONGO_URI'),
  appOrigin: getEnv('APP_ORIGIN'),
  jwtSecret: getEnv('JWT_SECRET'),
  jwtRefreshSecret: getEnv('JWT_REFRESH_SECRET'),
}
