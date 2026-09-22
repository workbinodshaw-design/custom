import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const vendorId = searchParams.get('vendorId');
    
    const db = readDB();
    let leads = db.leads || [];
    
    if (vendorId) {
      leads = leads.filter((l: any) => l.vendorId === vendorId);
    }
    
    return NextResponse.json({ success: true, data: leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = readDB();
    
    const newLead = {
      id: `L_${Date.now()}`,
      ...body,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    
    db.leads.push(newLead);
    writeDB(db);
    
    return NextResponse.json({ success: true, data: newLead }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
