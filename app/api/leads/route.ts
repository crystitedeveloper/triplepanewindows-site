
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
      lastName,
      phone,
      zipCode,
      projectType,
      budget,
      timeline,
      source,
      notes
    } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create lead in database
    const lead = await prisma.lead.create({
      data: {
        email,
        firstName: firstName || null,
        lastName: lastName || null,
        phone: phone || null,
        zipCode: zipCode || null,
        projectType: projectType || null,
        budget: budget || null,
        timeline: timeline || null,
        source: source || 'unknown',
        notes: notes || null,
        subscribed: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      id: lead.id 
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    
    // Handle unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'Email already exists in our system' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50 // Limit to recent leads
    });

    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
