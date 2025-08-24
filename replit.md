# CAPA - Center for Astroparticles and High Energy Physics

## Overview

CAPA is a modern web application for the Center for Astroparticles and High Energy Physics at the University of Zaragoza. The project is a complete redesign of their existing website, featuring a clean, responsive interface built with React and TypeScript. The application showcases research areas, team members, news, events, and provides contact functionality for potential collaborators and students.

The application serves as both an informational portal and a gateway for academic engagement, featuring sections for research areas, latest news, upcoming events, team information, and opportunities for PhD and postdoctoral positions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Design System**: Custom CAPA brand colors integrated into Tailwind configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with dedicated routes for different resources
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging and performance monitoring

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Models**: User management, contact messages, news items, and events

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store
- **User Model**: Basic user system with username/password authentication
- **Admin Features**: Protected routes for managing contact messages and content

### Component Architecture
- **Layout Components**: Header with navigation, footer with social links
- **Section Components**: Modular sections for hero, research areas, news, team, events, and contact
- **UI Components**: Reusable shadcn/ui components with custom styling
- **Form Components**: Contact form with validation and submission handling
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Build Tools**: Vite with TypeScript support, ESBuild for server bundling
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon Database serverless
- **Validation**: Zod for runtime type checking and form validation
- **Query Management**: TanStack React Query for server state

### UI and Styling
- **Design System**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono)

### Development Tools
- **Code Quality**: TypeScript for type safety, ESLint configuration
- **Development**: Replit-specific plugins for development environment
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **Utilities**: class-variance-authority for component variants, clsx for conditional classes

### Third-Party Services
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Image Assets**: Unsplash for placeholder images and stock photography
- **Maps Integration**: Prepared for Google Maps integration in contact section
- **Font Delivery**: Google Fonts CDN for web font serving

### Runtime Dependencies
- **Server**: Express.js with middleware for JSON parsing, URL encoding
- **Date Handling**: date-fns for date manipulation and formatting
- **UUID Generation**: Node.js crypto module for unique ID generation
- **Environment**: dotenv for environment variable management