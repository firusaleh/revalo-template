export default function FeedbackLoading() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-64 bg-white border-r border-gray-200" />
      <main className="flex-1 p-8">
        <div className="mb-6">
          <div className="h-7 w-32 bg-slate-200 rounded animate-pulse" />
          <div className="mt-2 h-4 w-64 bg-slate-200 rounded animate-pulse" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-4 w-24 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-16 bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="mt-3 h-4 w-full bg-slate-200 rounded animate-pulse" />
              <div className="mt-2 h-4 w-4/5 bg-slate-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
