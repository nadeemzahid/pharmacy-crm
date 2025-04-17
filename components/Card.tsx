// components/Card.tsx
export function Card({ title, value }: { title: string; value: string }) {
    return (
      <div className="bg-white rounded-2xl shadow p-4">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    );
  }
  