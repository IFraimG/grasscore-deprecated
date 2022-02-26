import { NextResponse } from 'next/server'

export function middleware(req, el) {
  let res = NextResponse.next()
  let isChanged = false

  const url = req.nextUrl.clone()

  let id = url.search.split("=")[1]?.split("&")[0]
  let token = url.search.split("&")[1]?.split("=")[1]

  console.log("bbbbb");
  if (id != null) res.cookie('dsUserID', id, { maxAge: 2592e3, sameSite: 'strict' })
  if (token != null) res.cookie('token', token, { maxAge: 2592e3, sameSite: 'strict' })
  // url.searchParams.forEach((_, key) => {
  //   url.searchParams.delete(key)
  //   isChanged = true
  // })
  // response.clearCookie('hello')

  // if (isChanged) return NextResponse.redirect(url)

  return res
}