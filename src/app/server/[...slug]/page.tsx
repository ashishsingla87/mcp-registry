'use client';

import Link from "next/link";
import { useState, use } from "react";
import { ChevronRightIcon, StarIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
  stars: number;
  featured: boolean;
  monthlyToolCalls: number;
  successRate: number;
  license: string;
  published: string;
  homepage?: string;
  github: string;
  tools: string[];
  longDescription: string;
}

const integrationData: Record<string, Integration> = {
  "github": {
    id: "github",
    name: "GitHub",
    description: "Interact with GitHub repositories, issues, and pull requests",
    category: "Development Tools",
    author: "GitHub",
    stars: 1234,
    featured: true,
    monthlyToolCalls: 45672,
    successRate: 99.8,
    license: "MIT",
    published: "2024-01-15",
    homepage: "https://github.com",
    github: "github/github-mcp-server",
    tools: ["search_repositories", "create_issue", "get_pull_requests", "create_branch"],
    longDescription: "Enable seamless integration with GitHub repositories. Search for repositories, manage issues, create and review pull requests, and perform various repository operations directly through the Model Context Protocol."
  },
  "postgres": {
    id: "postgres",
    name: "Postgres",
    description: "Query and manage PostgreSQL databases",
    category: "Data Analysis",
    author: "PostgreSQL Team",
    stars: 856,
    featured: true,
    monthlyToolCalls: 23890,
    successRate: 99.5,
    license: "PostgreSQL",
    published: "2024-02-01",
    homepage: "https://postgresql.org",
    github: "postgres/postgres-mcp-server",
    tools: ["execute_query", "get_schema", "create_table", "backup_database"],
    longDescription: "Connect and interact with PostgreSQL databases through the Model Context Protocol. Execute queries, manage schemas, create tables, and perform database operations with full SQL support."
  },
  "slack": {
    id: "slack",
    name: "Slack",
    description: "Send messages and interact with Slack workspaces",
    category: "Communication",
    author: "Slack",
    stars: 642,
    featured: false,
    monthlyToolCalls: 18734,
    successRate: 99.2,
    license: "MIT",
    published: "2024-02-10",
    homepage: "https://slack.com",
    github: "slack/slack-mcp-server",
    tools: ["send_message", "create_channel", "get_users", "upload_file"],
    longDescription: "Integrate with Slack workspaces to send messages, manage channels, interact with users, and handle file uploads through the Model Context Protocol interface."
  },
  "google-drive": {
    id: "google-drive",
    name: "Google Drive",
    description: "Access and manage files in Google Drive",
    category: "Productivity",
    author: "Google",
    stars: 923,
    featured: true,
    monthlyToolCalls: 31456,
    successRate: 99.7,
    license: "Apache-2.0",
    published: "2024-01-20",
    homepage: "https://drive.google.com",
    github: "google/drive-mcp-server",
    tools: ["list_files", "upload_file", "download_file", "share_file", "create_folder"],
    longDescription: "Seamlessly access and manage Google Drive files and folders. Upload, download, share files, create folders, and perform comprehensive file management operations."
  },
  "aws-s3": {
    id: "aws-s3",
    name: "AWS S3",
    description: "Manage objects and buckets in Amazon S3",
    category: "Cloud Services",
    author: "AWS",
    stars: 756,
    featured: false,
    monthlyToolCalls: 27891,
    successRate: 99.9,
    license: "Apache-2.0",
    published: "2024-01-25",
    homepage: "https://aws.amazon.com/s3",
    github: "aws/s3-mcp-server",
    tools: ["list_objects", "upload_object", "download_object", "delete_object", "create_bucket"],
    longDescription: "Comprehensive Amazon S3 integration for managing buckets and objects. Upload, download, list, and delete objects, create and manage buckets with full S3 API support."
  },
  "discord": {
    id: "discord",
    name: "Discord",
    description: "Send messages and manage Discord servers",
    category: "Communication",
    author: "Discord",
    stars: 489,
    featured: false,
    monthlyToolCalls: 15234,
    successRate: 98.9,
    license: "MIT",
    published: "2024-02-15",
    homepage: "https://discord.com",
    github: "discord/discord-mcp-server",
    tools: ["send_message", "create_channel", "manage_roles", "get_members"],
    longDescription: "Connect with Discord servers and channels. Send messages, create channels, manage user roles, and interact with server members through the Discord API."
  }
};

const clientConfigs = {
  "Claude Desktop": {
    config: `{
  "mcpServers": {
    "INTEGRATION_NAME": {
      "command": "npx",
      "args": ["-y", "@author/INTEGRATION_NAME-mcp-server"]
    }
  }
}`
  },
  "VS Code": {
    config: `{
  "mcp": {
    "servers": {
      "INTEGRATION_NAME": {
        "command": "npx",
        "args": ["-y", "@author/INTEGRATION_NAME-mcp-server"]
      }
    }
  }
}`
  },
  "Cursor": {
    config: `{
  "mcp": {
    "servers": {
      "INTEGRATION_NAME": {
        "command": "npx", 
        "args": ["-y", "@author/INTEGRATION_NAME-mcp-server"]
      }
    }
  }
}`
  }
};

export default function ServerPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedClient, setSelectedClient] = useState("Claude Desktop");
  
  const resolvedParams = use(params);
  const integrationId = resolvedParams.slug[resolvedParams.slug.length - 1];
  const integration = integrationData[integrationId];

  if (!integration) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Integration Not Found</h1>
          <p className="text-gray-400 mb-8">The requested MCP integration could not be found.</p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
                Deploy Server
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRightIcon className="h-4 w-4" />
          <Link href="/servers" className="hover:text-white transition-colors">Servers</Link>
          <ChevronRightIcon className="h-4 w-4" />
          <span className="text-white">@{integration.author.toLowerCase()}/{integration.name.toLowerCase()}-mcp-server</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">
              @{integration.author.toLowerCase()}/{integration.name.toLowerCase()}-mcp-server
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {integration.longDescription}
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              {integration.homepage && (
                <a
                  href={integration.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  <span>Homepage</span>
                </a>
              )}
              <a
                href={`https://github.com/${integration.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:w-80 space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {integration.monthlyToolCalls.toLocaleString()}
                </div>
                <div className="text-gray-400">Monthly Tool Calls</div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {integration.successRate}%
                </div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">License</span>
                <span className="text-white">{integration.license}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Published</span>
                <span className="text-white">{new Date(integration.published).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Category</span>
                <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">
                  {integration.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-800">
          <nav className="flex space-x-8">
            {["overview", "tools", "api"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Installation */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Install</h2>
              
              {/* Client Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Choose a client to get started
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(clientConfigs).map((client) => (
                    <button
                      key={client}
                      onClick={() => setSelectedClient(client)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        selectedClient === client
                          ? "bg-blue-600 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {client}
                    </button>
                  ))}
                </div>
              </div>

              {/* Configuration */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{selectedClient} Configuration</h3>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    Copy
                  </button>
                </div>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-green-400">
                    {clientConfigs[selectedClient as keyof typeof clientConfigs].config
                      .replace(/INTEGRATION_NAME/g, integration.name.toLowerCase())
                      .replace(/@author/g, `@${integration.author.toLowerCase()}`)}
                  </code>
                </pre>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Available Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integration.tools.map((tool) => (
                  <div key={tool} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-2">{tool}</h3>
                    <p className="text-gray-400 text-sm">
                      Tool for {tool.replace(/_/g, ' ')} operations in {integration.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "tools" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tools</h2>
            {integration.tools.map((tool) => (
              <div key={tool} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{tool}</h3>
                <p className="text-gray-300 mb-4">
                  Detailed description for the {tool.replace(/_/g, ' ')} tool in {integration.name}.
                </p>
                <div className="bg-black/50 p-4 rounded-lg">
                  <code className="text-green-400 text-sm">
                    // Example usage for {tool}
                    <br />
                    {tool}(parameters)
                  </code>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "api" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">API Reference</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Model Context Protocol Interface</h3>
              <p className="text-gray-300 mb-4">
                This integration follows the Model Context Protocol specification for seamless integration with AI models.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <code className="text-green-400 text-sm">
                  {`{
  "name": "${integration.name.toLowerCase()}-mcp-server",
  "version": "1.0.0",
  "tools": [${integration.tools.map(tool => `"${tool}"`).join(', ')}]
}`}
                </code>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}