import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { Contributor } from '@/lib/models'

export async function GET() {
  try {
    await connectDB()
    const contributors = await Contributor.find({})
    return NextResponse.json(contributors)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch contributors' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()
    const data = await req.json()
    const contributor = await Contributor.create(data)
    return NextResponse.json(contributor)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create contributor' }, { status: 500 })
  }
}
