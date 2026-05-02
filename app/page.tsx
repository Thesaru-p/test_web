'use client';

import { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/test-connection');
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
      }
      
      setResponse(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 md:p-24 bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-medium text-zinc-300 mb-4 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Connection Test
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            Beyond Presence API
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Verify your authentication configuration and fetch the latest available avatars directly from the Beyond Presence platform.
          </p>
        </div>

        {/* Avatar Integration Section */}
        <div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900/50 shadow-2xl">
          <div className="p-8 bg-zinc-950 rounded-xl space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white">Live Avatar Agent</h2>
                <p className="text-zinc-400 text-sm">Interact with your Beyond Presence agent in real-time.</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono text-zinc-300">Agent Active</span>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-inner">
              <iframe 
                src="https://bey.chat/b94ac831-c527-42b6-a656-b15a1e1297ef" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allowFullScreen
                allow="camera; microphone; fullscreen"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="I13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-200/80 leading-relaxed">
                <span className="font-semibold text-blue-300">Pro Tip:</span> Ensure you have granted camera and microphone permissions to your browser for a fully interactive experience.
              </div>
            </div>
          </div>
        </div>

        {/* API Test Section */}
        <div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900/50 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
          <div className="p-8 bg-zinc-950 rounded-xl space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={testConnection}
                disabled={loading}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg transition-all hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-500/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Testing Connection...
                  </>
                ) : (
                  <>
                    Test API Connection
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
              
              <p className="text-sm text-zinc-500 text-center sm:text-left">
                Ensure <code className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono">BEY_API_KEY</code> is set in your .env.local file.
              </p>
            </div>

            {error && (
              <div className="p-6 bg-red-950/30 text-red-400 rounded-xl border border-red-900/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-red-200">Connection Failed</h3>
                </div>
                <p className="pl-8 text-sm opacity-90">{error}</p>
              </div>
            )}

            {response && (
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Raw Response payload</h2>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-green-400 font-medium">Success 200 OK</span>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"></div>
                  <pre className="relative p-6 bg-zinc-950 border border-zinc-800/80 rounded-xl overflow-x-auto shadow-2xl">
                    <code className="text-sm font-mono text-zinc-300 leading-relaxed">{response}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
