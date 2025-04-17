// app/dashboard/page.tsx
import { Card } from '@/components/Card';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card title="Inventory Items" value="1245" />
      <Card title="Today’s Sales" value="₹8,530" />
      <Card title="Low-Stock Alerts" value="12" />
      <Card title="Notifications" value="5" />
    </div>
  );
}
