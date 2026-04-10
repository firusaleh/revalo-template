export default function AdminDashboardLoading() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-64 bg-white border-r border-gray-200" />
      <main className="flex-1 p-8">
        <div className="mb-6">
          <div className="h-7 w-40 bg-slate-200 rounded animate-pulse" />
          <div className="mt-2 h-4 w-80 bg-slate-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
              <div className="mt-3 h-8 w-20 bg-slate-200 rounded animate-pulse" />
              <div className="mt-2 h-3 w-28 bg-slate-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="mt-10 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="h-5 w-48 bg-slate-200 rounded animate-pulse" />
          <div className="mt-3 h-4 w-full bg-slate-200 rounded animate-pulse" />
          <div className="mt-2 h-4 w-5/6 bg-slate-200 rounded animate-pulse" />
        </div>
      </main>
    </div>
  );
}
