# Smithery.ai Clone - Model Context Protocol Registry

A modern, responsive web application that replicates the Smithery.ai UI - a comprehensive Model Context Protocol (MCP) Registry. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Homepage
- **Dark Theme Design** - Clean, modern interface with `#0a0a0a` background
- **Navigation Header** - Sticky navigation with logo and menu items
- **Hero Section** - Gradient title and search functionality
- **Featured Integrations** - Showcase of popular MCP integrations
- **Category Filters** - Browse integrations by category (Development Tools, Data Analysis, etc.)
- **Responsive Grid Layout** - Mobile-friendly card-based design

### Individual Integration Pages
- **Detailed Server Pages** - Individual pages for each MCP integration following the `/server/@author/integration-name/id` pattern
- **Breadcrumb Navigation** - Clear navigation hierarchy
- **Stats Display** - Monthly tool calls, success rate, and metadata
- **Tabbed Interface** - Overview, Tools, and API tabs
- **Installation Instructions** - Client-specific configuration for Claude Desktop, VS Code, and Cursor
- **Tools Documentation** - Complete listing of available MCP tools

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Heroicons for consistent iconography
- **Routing**: Dynamic routing for individual server pages

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and dark theme
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage with integration grid
│   └── server/
│       └── [...slug]/
│           └── page.tsx     # Dynamic server detail pages
├── .github/
│   └── copilot-instructions.md  # Workspace-specific Copilot guidance
```

## 🎨 Design Features

- **Modern Card Design** - Gray cards with subtle borders and hover effects
- **Professional Color Scheme** - Blue accent colors for branding
- **Typography Hierarchy** - Clean gradients and proper text sizing
- **Interactive Elements** - Smooth transitions and hover states
- **Component Architecture** - Reusable TypeScript interfaces

## 📊 Sample MCP Integrations

The project includes 6 sample integrations:

1. **GitHub** - Repository management and issue tracking
2. **Postgres** - Database querying and schema management
3. **Google Drive** - File management and sharing
4. **Slack** - Workspace communication
5. **AWS S3** - Object storage management
6. **Discord** - Server and channel management

Each integration includes:
- Detailed descriptions and tool listings
- Installation configurations for multiple clients
- Success rate and usage statistics
- License and publishing information

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:3000`

## 🔗 Navigation

- **Homepage**: Browse all integrations and featured items
- **Individual Pages**: Click any integration card to view detailed information
- **Dynamic URLs**: Each integration has a unique URL following Smithery.ai's pattern

## 🎯 Key Design Matches

✅ **Exact Color Scheme** - Dark background (`#0a0a0a`) matching Smithery.ai  
✅ **Navigation Structure** - Logo, menu items, and call-to-action buttons  
✅ **Card Layout** - Gray cards with metadata and star ratings  
✅ **Typography** - Clean gradients and professional text hierarchy  
✅ **Interactive Elements** - Hover effects and smooth transitions  
✅ **Responsive Design** - Mobile-friendly grid layouts  
✅ **Server Pages** - Complete individual integration pages with tabs and stats  

The project successfully replicates the Smithery.ai experience while maintaining modern React best practices and TypeScript safety.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
