//if (process.env.AWS !== 'true')
require('dotenv').config();

/** Encryption Key */
export const APP_KEY = process.env.APP_KEY; // Key used to encrypt & decrypt, set to a random 32 character string
export const APP_URL = process.env.APP_URL || 'https://localhost:3000';
export const APP_ENV = process.env.APP_ENV || 'development';
export const API_VERSION = process.env.API_VERSION || '1';

/** Postgres Connection Settings */
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;

/** MercadoPago Configuration */
export const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;
export const MERCADOPAGO_PUBLIC_KEY = process.env.MERCADOPAGO_PUBLIC_KEY;
export const MERCADOPAGO_IDEMPOTENCY_KEY = process.env.MERCADOPAGO_IDEMPOTENCY_KEY;

/** Sentry */
export const SENTRY_CONFIG = 'https://'+ process.env.SENTRY_CONFIG_TOKEN +'@sentry.io/'+ process.env.SENTRY_CONFIG_ID;

/** Saved Credit Cards **/
export const STORED_CREDIT_CARDS_ENABLED = process.env.STORED_CREDIT_CARDS_ENABLED;
