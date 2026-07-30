import {
  GraduationCap,
  Laptop,
  Target,
  University,
  BadgeCheck,
  Presentation,
  UserRoundCheck,
  MessageCircleMore,
  SquareChartGantt,
  LaptopMinimalCheck,
  Sprout,
  Clock,
  Users,
  ShieldCheck,
  Calendar,
  MapPin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  laptop: Laptop,
  target: Target,
  university: University,
  "badge-check": BadgeCheck,
  presentation: Presentation,
  "user-round-check": UserRoundCheck,
  "message-circle-more": MessageCircleMore,
  "square-chart-gantt": SquareChartGantt,
  "laptop-minimal-check": LaptopMinimalCheck,
  sprout: Sprout,
  clock: Clock,
  users: Users,
  "shield-check": ShieldCheck,
  calendar: Calendar,
  marker: MapPin,
  mail: Mail,
};

export function Icon({
  name,
  className,
}: {
  name?: string | string[] | null;
  className?: string;
}) {
  const key = Array.isArray(name) ? name[0] : name;
  const Cmp = (key && iconMap[key]) || Target;
  return <Cmp className={className} />;
}
