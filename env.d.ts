declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_URL: string;
    NODE_ENV: 'development' | 'production';
    PORT: number;
    DATABASE_URL: string;
    ADMIN_NAME: string;
    ADMIN_PASSWORD: string;
    GUEST_NAME: string;
    GUEST_PASSWORD: string;
    THREADS_APP_ID: number;
    THREADS_REDIRECT_URI: string;
    THREADS_SCOPE: string;
    THREADS_APP_SECRET: string;
    THREADS_USER_ID: number;
    THREADS_ACCESS_TOKEN: string;
  }
}
