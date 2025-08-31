import { getSession } from '../../lib/session';

export default async function handler(req, res) {
  const session = await getSession(req, res);

  if (session.user && session.user.isLoggedIn) {
    // User is authenticated
    res.status(200).json(session.user);
  } else {
    // User is not authenticated
    res.status(401).json({ message: 'Unauthorized' });
  }
}