import { executePrismaCommand } from './executeCommand'

if (process.env.DATABASE_URL?.startsWith('postgres'))
  executePrismaCommand('prisma migrate resolve --applied \"20230203065215_add_missing_updated_at_fields\"')
  executePrismaCommand('prisma migrate reset --force')

