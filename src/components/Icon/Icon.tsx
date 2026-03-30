import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  DollarSign,
  ChevronDown,
  Circle,
  ClipboardCheck,
  ClipboardList,
  Facebook,
  GraduationCap,
  Grid3x3,
  Lightbulb,
  LayoutGrid,
  HardHat,
  Instagram,
  Linkedin,
  ChevronsRight,
  Menu,
  Database,
  BadgeDollarSign,
  Workflow,
  ShieldAlert,
  Cpu,
  PlugZap,
  Users,
  Trophy,
  Megaphone,
  MessageSquare,
  FileText,
  Sparkles,
  Store,
  Building2,
  Music2,
  Mail,
  MapPin,
  Phone,
  Route,
  Star,
  Truck,
  X,
  Youtube,
} from "lucide-react";
import styles from "./Icon.module.css";

const icons = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  calendarClock: CalendarClock,
  dollarSign: DollarSign,
  chevronDown: ChevronDown,
  chevronsRight: ChevronsRight,
  circle: Circle,
  clipboardCheck: ClipboardCheck,
  clipboardList: ClipboardList,
  facebook: Facebook,
  graduationCap: GraduationCap,
  grid3x3: Grid3x3,
  lightbulb: Lightbulb,
  layoutGrid: LayoutGrid,
  hardHat: HardHat,
  instagram: Instagram,
  linkedin: Linkedin,
  menu: Menu,
  database: Database,
  badgeDollarSign: BadgeDollarSign,
  workflow: Workflow,
  shieldAlert: ShieldAlert,
  cpu: Cpu,
  plugZap: PlugZap,
  users: Users,
  trophy: Trophy,
  megaphone: Megaphone,
  messageSquare: MessageSquare,
  fileText: FileText,
  sparkles: Sparkles,
  store: Store,
  building2: Building2,
  tiktok: Music2,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  route: Route,
  star: Star,
  truck: Truck,
  x: X,
  youtube: Youtube,
};

export type IconName = keyof typeof icons;
export type IconSize = "sm" | "md" | "lg";

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
}

export default function Icon({ name, size = "md", className }: IconProps) {
  const Svg = icons[name];
  const classes = [styles.icon, styles[size], className].filter(Boolean).join(" ");

  return (
    <span className={classes} aria-hidden="true">
      <Svg className={styles.svg} focusable="false" />
    </span>
  );
}
