import { VercelRequest, VercelResponse } from '@vercel/node'
import { getConfigVariables, updateConfigVariable } from '../../lib/supabase'
import { requireAuth, setCorsHeaders } from '../../lib/auth'

async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res)

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    if (req.method === 'GET') {
      // Get all config variables (public endpoint - no auth required)
      const { category } = req.query
      const variables = await getConfigVariables(category as string)

      return res.status(200).json({
        success: true,
        data: variables,
      })
    }

    if (req.method === 'PUT') {
      // Update config variable (requires auth)
      const { id, value } = req.body

      if (!id || value === undefined) {
        return res.status(400).json({
          error: 'Missing required fields: id, value',
        })
      }

      const result = await updateConfigVariable(id, value)

      return res.status(200).json({
        success: true,
        message: 'Config variable updated',
        data: result,
      })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (error: any) {
    console.error('Config variables error:', error)
    return res.status(500).json({
      error: error.message || 'Failed to process request',
    })
  }
}

// Apply auth middleware only for non-GET requests
export default (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET' || req.method === 'OPTIONS') {
    return handler(req, res)
  }

  // For PUT/POST, require authentication
  return requireAuth(handler)(req, res)
}
