import { Sidebar } from "@/components/sidebar"
import { StatsCard } from "@/components/stats-card"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 pl-64">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to your logistics command center</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StatsCard title="Projected Availability" value="92.4%" description="Current fleet operational status" />
            <StatsCard title="Monthly Spend" value="$233,455.50" description="Total logistics expenditure" />
            <StatsCard title="Inventory Turnover" value="6.7" description="Average turns per month" />
          </div>

          <div className="mt-8 rounded-xl bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Supply Chain Overview</h2>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary">
                    <th className="text-left py-3 px-4">Manufacturer</th>
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-left py-3 px-4">Stock</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-secondary/50">
                    <td className="py-3 px-4">TechFabrica</td>
                    <td className="py-3 px-4">Component A</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                        In Stock
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-secondary/50">
                    <td className="py-3 px-4">ProMakers</td>
                    <td className="py-3 px-4">Component B</td>
                    <td className="py-3 px-4">14,000</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                        In Stock
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">BuildWorks</td>
                    <td className="py-3 px-4">Component C</td>
                    <td className="py-3 px-4">2,000</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-500">
                        Low Stock
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

