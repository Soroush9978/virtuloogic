import Link from "next/link"
import { LayoutDashboard, Boxes, Settings, LineChart, Truck, Warehouse, Users } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Boxes },
  { name: "Analytics", href: "/analytics", icon: LineChart },
  { name: "Shipments", href: "/shipments", icon: Truck },
  { name: "Warehouses", href: "/warehouses", icon: Warehouse },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 bg-card border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold">LogisticsPro</h1>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

