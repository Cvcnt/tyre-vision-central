import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Settings,
  Store,
  FileText,
  Target,
  TrendingUp,
  AlertCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Vendas", href: "/vendas", icon: ShoppingCart },
  { name: "Estoque", href: "/estoque", icon: Package },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Financeiro", href: "/financeiro", icon: DollarSign },
  { name: "Lojas", href: "/lojas", icon: Store },
  { name: "Relatórios", href: "/relatorios", icon: FileText },
  { name: "Metas", href: "/metas", icon: Target },
  { name: "Prospecção", href: "/prospeccao", icon: TrendingUp },
];

const bottomNavigation = [
  { name: "Alertas", href: "/alertas", icon: AlertCircle },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {!collapsed && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full bg-card border-r border-border/50 transition-all duration-300 lg:static lg:translate-x-0",
        collapsed ? "-translate-x-full lg:w-16" : "w-64",
        "flex flex-col"
      )}>
        {/* Header da Sidebar */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          {!collapsed && (
            <span className="font-semibold text-foreground">Menu Principal</span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navegação Principal */}
        <nav className="flex-1 p-2 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  collapsed && "justify-center"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Navegação Inferior */}
        <div className="p-2 border-t border-border/50">
          {bottomNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  collapsed && "justify-center"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </div>
      </aside>

      {/* Toggle Button for Desktop */}
      <Button
        variant="outline"
        size="sm"
        className="fixed top-20 left-2 z-40 hidden lg:flex lg:left-4"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  );
};