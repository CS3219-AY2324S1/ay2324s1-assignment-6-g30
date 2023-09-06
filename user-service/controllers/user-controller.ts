import { RequestHandler } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants';

const createUser: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.json({ err: 'Missing fields', res: '' });
    return;
  }

  // Check if username exists
  let registeredUser = await User.findOne({
    where: {
      username
    }
  });
  if (registeredUser) {
    res.json({ err: 'Username is in use', res: '' });
    return;
  }

  // Check if email exists
  registeredUser = await User.findOne({
    where: {
      email
    }
  });

  if (registeredUser) {
    res.json({ err: 'Email is in use', res: '' });
    return;
  }

  let hashedPassword;
  let salt;

  try {
    salt = await bcrypt.genSalt(SALT_ROUNDS);
    hashedPassword = await bcrypt.hash(password, salt);
  } catch (error) {
    res.json({ err: 'Internal server error', res: '' });
    return;
  }

  const newUser = User.build({
    username: req.body.username,
    salt,
    hashedPassword,
    email: req.body.email
  });

  try {
    await newUser.save();
    res.json({ err: '', res: 'Account created successfully' });
  } catch (error) {
    res.json({ err: 'Failed to add user to database', res: '' });
  }
};

export { createUser };
