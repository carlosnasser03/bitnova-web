import jwt from 'jsonwebtoken'
import { VercelRequest, VercelResponse } from '@vercel/node'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-min-32-chars'

// Generate JWT Token
export function generateToken(payload: any, expiresIn = '7d') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

// Verify JWT Token
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    throw new Error('Invalid or expired token')
  }
}

// Middleware to verify token
export function requireAuth(handler: (req: VercelRequest, res: VercelResponse) => Promise<void>) {
  return async (req: VercelRequest, res: VercelResponse) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({ error: 'Missing authorization token' })
    }

    try {
      const decoded = verifyToken(token)
      ;(req as any).user = decoded
      return handler(req, res)
    } catch (error) {
      return res.status(401).json({ error: 'Invalid or expired token' })
    }
  }
}

// CORS Headers
export function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return res
}
