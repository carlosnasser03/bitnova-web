import { VercelRequest, VercelResponse } from '@vercel/node'
import { generateToken, setCorsHeaders } from '../../lib/auth'
import crypto from 'crypto'

// Simple in-memory user store (in production, use database)
const ADMIN_USERS = {
  admin: {
    email: 'admin@bitnova.com',
    passwordHash: crypto.createHash('sha256').update('admin123').digest('hex'),
    role: 'admin',
  },
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res)

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({
        error: 'Missing required fields: username, password',
      })
    }

    const user = ADMIN_USERS[username as keyof typeof ADMIN_USERS]

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
      })
    }

    const passwordHash = crypto.createHash('sha256').update(password).digest('hex')

    if (passwordHash !== user.passwordHash) {
      return res.status(401).json({
        error: 'Invalid credentials',
      })
    }

    // Generate JWT token
    const token = generateToken({
      username,
      email: user.email,
      role: user.role,
    })

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        username,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error: any) {
    console.error('Login error:', error)
    return res.status(500).json({
      error: error.message || 'Login failed',
    })
  }
}
