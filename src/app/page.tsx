import Image from "next/image";
import Link from "next/link";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
  stars: number;
  featured: boolean;
}

const sampleIntegrations: Integration[] = [
  {
    id: "github",
    name: "GitHub",
    description: "Interact with GitHub repositories, issues, and pull requests",
    category: "Development Tools",
    author: "GitHub",
    stars: 1234,
    featured: true
  },
  {
    id: "postgres",
    name: "Postgres",
    description: "Query and manage PostgreSQL databases",
    category: "Data Analysis",
    author: "PostgreSQL Team",
    stars: 856,
    featured: true
  },
  {
    id: "slack",
    name: "Slack",
    description: "Send messages and interact with Slack workspaces",
    category: "Communication",
    author: "Slack",
    stars: 642,
    featured: false
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Access and manage files in Google Drive",
    category: "Productivity",
    author: "Google",
    stars: 923,
    featured: true
  },
  {
    id: "aws-s3",
    name: "AWS S3",
    description: "Manage objects and buckets in Amazon S3",
    category: "Cloud Services",
    author: "AWS",
    stars: 756,
    featured: false
  },
  {
    id: "discord",
    name: "Discord",
    description: "Send messages and manage Discord servers",
    category: "Communication",
    author: "Discord",
    stars: 489,
    featured: false
  }
];

const categories = [
  "All",
  "Development Tools",
  "Data Analysis", 
  "Communication",
  "Productivity",
  "Cloud Services"
];

export default function Home() {
  const featuredIntegrations = sampleIntegrations.filter(integration => integration.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation Header */}
      <nav className="border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-semibold">MCP Registry</span>
              </Link>
              
              <div className="hidden md:flex space-x-6">
                <Link href="/browse" className="text-gray-300 hover:text-white transition-colors">
                  Browse
                </Link>
                <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
                <Link href="/submit" className="text-gray-300 hover:text-white transition-colors">
                  Submit
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Model Context Protocol Registry
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover and share integrations that connect AI models to external tools and data sources through the Model Context Protocol.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search integrations..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredIntegrations.map((integration) => (
              <Link 
                key={integration.id}
                href={`/server/@${integration.author.toLowerCase()}/${integration.name.toLowerCase()}-mcp-server/${integration.id}`}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.description}</p>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm">{integration.stars}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {integration.category}
                  </span>
                  <span className="text-gray-500 text-sm">by {integration.author}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* All Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleIntegrations.map((integration) => (
              <Link 
                key={integration.id}
                href={`/server/@${integration.author.toLowerCase()}/${integration.name.toLowerCase()}-mcp-server/${integration.id}`}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.description}</p>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm">{integration.stars}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {integration.category}
                  </span>
                  <span className="text-gray-500 text-sm">by {integration.author}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-semibold">MCP Registry</span>
              </div>
              <p className="text-gray-400">
                The registry for Model Context Protocol integrations.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link href="/docs" className="text-gray-400 hover:text-white block transition-colors">
                  Documentation
                </Link>
                <Link href="/examples" className="text-gray-400 hover:text-white block transition-colors">
                  Examples
                </Link>
                <Link href="/guides" className="text-gray-400 hover:text-white block transition-colors">
                  Guides
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <div className="space-y-2">
                <Link href="/discord" className="text-gray-400 hover:text-white block transition-colors">
                  Discord
                </Link>
                <Link href="/github" className="text-gray-400 hover:text-white block transition-colors">
                  GitHub
                </Link>
                <Link href="/twitter" className="text-gray-400 hover:text-white block transition-colors">
                  Twitter
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="text-gray-400 hover:text-white block transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white block transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 MCP Registry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
