import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import { NextRequest, NextResponse } from 'next/server'
import { i18n } from '../i18n.config'

const { locales, defaultLocale } = i18n

function getLocale(request: Request): string {
  const headers = new Headers(request.headers)
  const acceptLanguages = headers.get('accept-language')
  if (acceptLanguages) {
    headers.set('accept-language', acceptLanguages.replaceAll('_', '-'))
  }

  const headersObject = Object.fromEntries(headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request) ?? defaultLocale
  const pathname = request.nextUrl.pathname

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl)

  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
