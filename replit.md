# replit.md

## Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js. The application appears to be a business landing page for "TechStore Indonesia," a company offering hosting panels, WhatsApp bots, and digital services. The architecture follows a monorepo structure with clear separation between client, server, and shared components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming support
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Animations**: Framer Motion for smooth animations and transitions
- **Component Structure**: Modular component architecture with reusable UI components

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Layer**: Abstract storage interface with in-memory implementation (MemStorage) for development
- **Development Setup**: Hot reload support with Vite integration in development mode
- **Build System**: ESBuild for server-side bundling

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Located in `shared/schema.ts` for type sharing between client and server
- **User Model**: Basic user entity with id, username, and password fields
- **Validation**: Zod schemas for runtime type validation

### Project Structure
- **Monorepo Layout**: Shared code in `/shared`, client code in `/client`, server code in `/server`
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared)
- **Type Safety**: Strict TypeScript configuration across all packages

### Development Workflow
- **Hot Reload**: Vite dev server with Express middleware integration
- **Database Migrations**: Drizzle Kit for schema migrations
- **Build Process**: Separate builds for client (Vite) and server (ESBuild)

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL

### UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for smooth user interactions

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript bundler for server builds
- **Replit Plugins**: Development environment enhancements for Replit

### Form & Validation
- **React Hook Form**: Form management with validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Validation resolver for React Hook Form

### Communication
- **WhatsApp Integration**: Business logic includes WhatsApp contact functionality for customer communication
- **Email Integration**: Contact form capabilities for customer inquiries

### Hosting & Deployment
- **Replit Ready**: Configured for Replit deployment with environment-specific optimizations
- **Environment Variables**: Database URL and other secrets managed through environment configuration