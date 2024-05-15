import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ameay" },
    { id: 2, name: "Pratik" },
  ]);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required." }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({ id: params.id, name: body.name }, { status: 201 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}
