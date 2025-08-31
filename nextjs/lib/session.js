import { getIronSession } from 'iron-session';

const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: 'my-app-session',
  // secure: true should be used in production (HTTPS) but can be false for development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getSession(req, res) {
  const session = await getIronSession(req, res, sessionOptions);
  return session;
}