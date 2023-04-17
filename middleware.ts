import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const access = req.cookies.get("Access");
  const url = req.nextUrl.pathname;

  const dev = process.env.NODE_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : "https://my-marvel-store.vercel.app/";

  if (url.includes("confirmacion-compra")) {
    if(!access){
      return NextResponse.redirect(server);
    }
  }

};
