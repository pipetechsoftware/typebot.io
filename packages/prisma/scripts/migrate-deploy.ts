import { executePrismaCommand } from './executeCommand'

if (process.env.DATABASE_URL?.startsWith('postgres'))
  executePrismaCommand('prisma migrate resolve --rolled-back \"20220603074700_add_tokens\" --schema postgresql/schema.prisma && prisma migrate deploy')
