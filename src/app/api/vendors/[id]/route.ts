import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db = readDB();
    const vendor = db.vendors.find((v: any) => v.id === id);
    
    if (!vendor) {
      return NextResponse.json({ success: false, error: 'Vendor not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: vendor });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const db = readDB();
    
    const index = db.vendors.findIndex((v: any) => v.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Vendor not found' }, { status: 404 });
    }
    
    db.vendors[index] = { ...db.vendors[index], ...body };
    writeDB(db);
    
    return NextResponse.json({ success: true, data: db.vendors[index] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
