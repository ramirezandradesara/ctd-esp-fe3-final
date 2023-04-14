import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const response = req.cookies.get("Access");
  const url = req.nextUrl.pathname;

  if (url.includes("confirmacion-compra") && !response)
    return NextResponse.redirect("/");
};
