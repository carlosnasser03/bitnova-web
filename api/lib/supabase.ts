import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Supabase credentials not configured')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper to get analytics table
export async function getAnalyticsEvents(limit = 100) {
  const { data, error } = await supabase
    .from('analytics_events')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw new Error(`Failed to fetch analytics: ${error.message}`)
  return data
}

// Helper to insert analytics event
export async function trackEvent(event: {
  event_name: string
  event_category: string
  event_label?: string
  user_id?: string
  session_id: string
  metadata?: Record<string, any>
}) {
  const { data, error } = await supabase
    .from('analytics_events')
    .insert([
      {
        event_name: event.event_name,
        event_category: event.event_category,
        event_label: event.event_label || null,
        user_id: event.user_id || null,
        session_id: event.session_id,
        metadata: event.metadata || {},
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) throw new Error(`Failed to track event: ${error.message}`)
  return data
}

// Helper to get config variables
export async function getConfigVariables(category?: string) {
  let query = supabase.from('config_variables').select('*')

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  if (error) throw new Error(`Failed to fetch config: ${error.message}`)
  return data
}

// Helper to update config variable
export async function updateConfigVariable(id: string, value: any) {
  const { data, error } = await supabase
    .from('config_variables')
    .update({
      value,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()

  if (error) throw new Error(`Failed to update config: ${error.message}`)
  return data
}
