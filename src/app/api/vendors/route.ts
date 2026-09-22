import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    const db = readDB();
    let vendors = db.vendors || [];
    
    // Filter by status if provided (e.g. status=approved)
    if (status) {
      vendors = vendors.filter((v: any) => v.status === status);
    }
    
    return NextResponse.json({ success: true, data: vendors });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = readDB();
    
    const newVendor = {
      id: `v_${Date.now()}`,
      ...body,
      status: 'pending', // Default status for new registrations requiring admin approval
      createdAt: new Date().toISOString()
    };
    
    db.vendors.push(newVendor);
    writeDB(db);
    
    return NextResponse.json({ success: true, data: newVendor }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
