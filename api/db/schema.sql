-- Google Analytics Events Table
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name VARCHAR(255) NOT NULL,
  event_category VARCHAR(100) NOT NULL,
  event_label VARCHAR(255),
  user_id VARCHAR(255),
  session_id VARCHAR(255) NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_analytics_session_id ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_event_name ON analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics_events(created_at DESC);

-- Config Variables Table (CMS for Frontend)
CREATE TABLE IF NOT EXISTS config_variables (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100) NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  is_secret BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for config queries
CREATE INDEX IF NOT EXISTS idx_config_key ON config_variables(key);
CREATE INDEX IF NOT EXISTS idx_config_category ON config_variables(category);

-- Seed config variables for Hero Section
INSERT INTO config_variables (key, category, value, description, is_secret)
VALUES
  ('hero.title', 'hero', '"Arquitectura de Cuarta Dimensión"', 'Hero section title', false),
  ('hero.subtitle', 'hero', '"Cuarta Dimensión"', 'Hero section subtitle', false),
  ('hero.description', 'hero', '"Nuestros sistemas operan en núcleos..."', 'Hero section description', false),
  ('tesseract.geometry.outerCubeSize', 'tesseract', '4.5', 'Outer cube size', false),
  ('tesseract.geometry.innerCubeSize', 'tesseract', '2.5', 'Inner cube size', false),
  ('tesseract.animation.autoRotateSpeed', 'tesseract', '1.5', 'Auto-rotate speed', false),
  ('colors.novaBlue', 'colors', '"#00e5ff"', 'Nova blue primary color', false),
  ('colors.neonPurple', 'colors', '"#8B5CF6"', 'Neon purple accent color', false)
ON CONFLICT (key) DO NOTHING;

-- Audit Log Table (optional but recommended)
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_username VARCHAR(255) NOT NULL,
  action VARCHAR(100) NOT NULL,
  table_name VARCHAR(100),
  record_id UUID,
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for audit logs
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_logs_admin ON audit_logs(admin_username);
