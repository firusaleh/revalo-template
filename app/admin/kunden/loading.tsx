export default function KundenLoading() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-64 bg-white border-r border-gray-200" />
      <main className="flex-1 p-8">
        <div className="mb-6">
          <div className="h-7 w-32 bg-slate-200 rounded animate-pulse" />
          <div className="mt-2 h-4 w-56 bg-slate-200 rounded animate-pulse" />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-3 border-b border-gray-200 flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-28 bg-slate-200 rounded animate-pulse"
              />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, row) => (
            <div
              key={row}
              className="px-6 py-4 border-b border-gray-100 flex gap-4"
            >
              {Array.from({ length: 4 }).map((_, col) => (
                <div
                  key={col}
                  className="h-4 w-28 bg-slate-200 rounded animate-pulse"
                />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
