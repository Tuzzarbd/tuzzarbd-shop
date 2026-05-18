import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(orders)
  } catch (error) {
    console.error('Orders fetch error:', error)
    return NextResponse.json({ error: 'Error' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const order = await prisma.order.create({
      data: {
        name: body.name,
        phone: body.phone,
        address: body.address,
        district: body.district,
        total: body.total,
        payment: body.payment,
        items: { create: body.items }
      }
    })
    return NextResponse.json(order)
  } catch (error) {
    console.error('Order create error:', error)
    return NextResponse.json({ error: 'Error' }, { status: 500 })
  }
}
