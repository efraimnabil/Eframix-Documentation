import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Project } from '@/lib/models'

export async function GET() {
  try {
    await connectDB()
    const projects = await Project.find({})
    return NextResponse.json(projects)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()
    const data = await req.json()
    const project = await Project.create(data)
    return NextResponse.json(project)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}