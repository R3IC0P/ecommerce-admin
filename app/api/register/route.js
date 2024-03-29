import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectMongoDB } from '@/lib/mongoose'
import User from '@/models/user'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    const name = email.split('@')[0]
    await connectMongoDB()

    // check if user exists
    const user = await User.findOne({ email }).select('_id')
    if (user) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({
      name,
      email,
      password: hashedPassword,
      position: 'magazynier',
      rule: 'USER',
      image: '',
    })

    return NextResponse.json({ message: 'User registered' }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'An error occured while registering the user' },
      { status: 500 }
    )
  }
}
