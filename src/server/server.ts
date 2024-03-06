/* eslint-disable @typescript-eslint/no-explicit-any */

// Import necessary modules and types
import { Hono } from 'hono';
import type { Env, NotFoundHandler, ErrorHandler, MiddlewareHandler } from 'hono';
import { createMiddleware } from 'hono/factory';
import type { H } from 'hono/types';
import { IMPORTING_ISLANDS_ID } from '../constants.js';
import {
  filePathToPath,
  groupByDirectory,
  listByDirectory,
  sortDirectoriesByDepth,
} from '../utils/file.js';

// Constants and types
const NOTFOUND_FILENAME = '_404.tsx';
const ERROR_FILENAME = '_error.tsx';
const METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'] as const;

// Define types for different files used in the application
type AppFile = { default: Hono };
type InnerMeta = { [key in typeof IMPORTING_ISLANDS_ID]?: boolean };
type RouteFile = {
  default?: Function
} & { [M in (typeof METHODS)[number]]?: H[] } & InnerMeta;
type RendererFile = { default: MiddlewareHandler };
type NotFoundFile = { default: NotFoundHandler };
type ErrorFile = { default: ErrorHandler };
type MiddlewareFile = { default: MiddlewareHandler[] };
type InitFunction<E extends Env = Env> = (app: Hono<E>) => void;
type BaseServerOptions<E extends Env = Env> = {
  ROUTES: Record<string, RouteFile | AppFile>;
  RENDERER: Record<string, RendererFile>;
  NOT_FOUND: Record<string, NotFoundFile>;
  ERROR: Record<string, ErrorFile>;
  MIDDLEWARE: Record<string, MiddlewareFile>;
  root: string;
  app?: Hono<E>;
  init?: InitFunction<E>;
};

// Define ServerOptions type
export type ServerOptions<E extends Env = Env> = Partial<BaseServerOptions<E>>;

// Function to create the application
export const createApp = <E extends Env>(options: BaseServerOptions<E>): Hono<E> => {
  // Extract configuration options
  const root = options.root;
  const app = options.app ?? new Hono();

  // Initialize the application if init function provided
  if (options.init) {
    options.init(app);
  }

  // Define helper function to apply not found routes
  function applyNotFound(app: Hono, dir: string, map: Record<string, Record<string, NotFoundFile>>) {
    // Implementation of applyNotFound function...
  }

  // Define helper function to apply error handling routes
  function applyError(app: Hono, dir: string, map: Record<string, Record<string, ErrorFile>>) {
    // Implementation of applyError function...
  }

  // Implementation of createApp function...

  // Return the configured application
  return app;
};

// Helper function to apply not found routes
function applyNotFound(app: Hono, dir: string, map: Record<string, Record<string, NotFoundFile>>) {
  // Implementation of applyNotFound function...
}

// Helper function to apply error handling routes
function applyError(app: Hono, dir: string, map: Record<string, Record<string, ErrorFile>>) {
  // Implementation of applyError function...
}
