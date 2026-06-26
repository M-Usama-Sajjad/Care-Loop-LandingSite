import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, ShieldAlert, Store, MapPin } from 'lucide-react';

interface StatItemProps {
  key?: string;
  label: string;
  targetValue: number;
  suffix: string;
  icon: ReactNode;
}

function StatCard({ label, targetValue, suffix, icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = targetValue;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(end / (duration / 50)); // updates every 50ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <div
      ref={ref}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
    >
      <div className="p-3.5 bg-primary/10 rounded-xl text-primary shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-heading font-extrabold text-3xl md:text-4xl text-secondary tracking-tight">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-secondary/70 text-sm font-medium mt-0.5">{label}</div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const statsList = [
    {
      id: 'patients',
      label: 'Verified Patients',
      targetValue: 10000,
      suffix: '+',
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 'doctors',
      label: 'Active Doctors',
      targetValue: 500,
      suffix: '+',
      icon: <ShieldAlert className="h-6 w-6" />,
    },
    {
      id: 'pharmacies',
      label: 'Partner Pharmacies',
      targetValue: 200,
      suffix: '+',
      icon: <Store className="h-6 w-6" />,
    },
    {
      id: 'cities',
      label: 'Cities Reached',
      targetValue: 50,
      suffix: '+',
      icon: <MapPin className="h-6 w-6" />,
    },
  ];

  return (
    <section id="stats-section" className="py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat) => (
            <StatCard
              key={stat.id}
              label={stat.label}
              targetValue={stat.targetValue}
              suffix={stat.suffix}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
