import { VercelRequest, VercelResponse } from '@vercel/node'
import { trackEvent } from './lib/supabase'
import { setCorsHeaders } from './lib/auth'

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
    const { event_name, event_category, event_label, user_id, session_id, metadata } = req.body

    // Validate required fields
    if (!event_name || !event_category || !session_id) {
      return res.status(400).json({
        error: 'Missing required fields: event_name, event_category, session_id',
      })
    }

    // Track event in database
    const result = await trackEvent({
      event_name,
      event_category,
      event_label,
      user_id,
      session_id,
      metadata,
    })

    return res.status(200).json({
      success: true,
      message: 'Event tracked successfully',
      data: result,
    })
  } catch (error: any) {
    console.error('Track event error:', error)
    return res.status(500).json({
      error: error.message || 'Failed to track event',
    })
  }
}
