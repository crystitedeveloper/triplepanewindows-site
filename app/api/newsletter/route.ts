
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      email,
      firstName,
      interests,
      source
    } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create newsletter subscription
    const subscription = await prisma.newsletter.create({
      data: {
        email,
        firstName: firstName || null,
        interests: interests || [],
        source: source || 'unknown',
        subscribed: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      id: subscription.id 
    });

  } catch (error) {
    console.error('Error creating newsletter subscription:', error);
    
    // Handle unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
