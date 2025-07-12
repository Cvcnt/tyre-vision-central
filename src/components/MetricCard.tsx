import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend, 
  className 
}: MetricCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-border/50 shadow-card hover:shadow-metric transition-all duration-300",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
        {trend && (
          <div className={cn(
            "text-xs mt-2 flex items-center gap-1",
            trend.isPositive ? "text-success" : "text-destructive"
          )}>
            <span className={cn(
              "inline-block w-0 h-0 border-l-2 border-r-2 border-l-transparent border-r-transparent",
              trend.isPositive 
                ? "border-b-2 border-b-success" 
                : "border-t-2 border-t-destructive"
            )} />
            {trend.isPositive ? "+" : ""}{trend.value}% vs mês anterior
          </div>
        )}
      </CardContent>
    </Card>
  );
};