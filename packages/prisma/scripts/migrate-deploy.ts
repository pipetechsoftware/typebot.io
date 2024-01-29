import { executePrismaCommand } from './executeCommand'

if (process.env.DATABASE_URL?.startsWith('postgres'))
  executePrismaCommand('prisma migrate resolve --applied \"20220603074700_add_tokens\"')
  executePrismaCommand('prisma migrate reset --force')

