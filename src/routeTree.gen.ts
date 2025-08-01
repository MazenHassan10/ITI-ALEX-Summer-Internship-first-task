/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as ShopnowRouteImport } from './routes/shopnow'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as BlogRouteImport } from './routes/blog'
import { Route as IndexRouteImport } from './routes/index'

const ShopnowRoute = ShopnowRouteImport.update({
  id: '/shopnow',
  path: '/shopnow',
  getParentRoute: () => rootRouteImport,
} as any)
const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
} as any)
const BlogRoute = BlogRouteImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blog': typeof BlogRoute
  '/services': typeof ServicesRoute
  '/shopnow': typeof ShopnowRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blog': typeof BlogRoute
  '/services': typeof ServicesRoute
  '/shopnow': typeof ShopnowRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/blog': typeof BlogRoute
  '/services': typeof ServicesRoute
  '/shopnow': typeof ShopnowRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/blog' | '/services' | '/shopnow'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/blog' | '/services' | '/shopnow'
  id: '__root__' | '/' | '/blog' | '/services' | '/shopnow'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlogRoute: typeof BlogRoute
  ServicesRoute: typeof ServicesRoute
  ShopnowRoute: typeof ShopnowRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/shopnow': {
      id: '/shopnow'
      path: '/shopnow'
      fullPath: '/shopnow'
      preLoaderRoute: typeof ShopnowRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlogRoute: BlogRoute,
  ServicesRoute: ServicesRoute,
  ShopnowRoute: ShopnowRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
