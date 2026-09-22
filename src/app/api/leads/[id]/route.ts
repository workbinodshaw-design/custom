import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const db = readDB();
    
    const index = db.leads.findIndex((l: any) => l.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    
    db.leads[index] = { ...db.leads[index], ...body };
    writeDB(db);
    
    return NextResponse.json({ success: true, data: db.leads[index] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
