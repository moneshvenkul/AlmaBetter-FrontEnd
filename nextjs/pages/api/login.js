import { getSession } from '../../lib/session';

export default async function handler(req, res) {
  const session = await getSession(req, res);

  // In a real app, you would check the request body for credentials
  // and validate them against a database.
  // For this example, we'll just create a session.
  session.user = {
    id: 1,
    username: 'testuser',
    isLoggedIn: true,
  };

  await session.save();

  res.status(200).json({ message: 'Logged in successfully' });
}