import { MetricCard } from "./MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Package, 
  AlertTriangle,
  Target,
  BarChart3
} from "lucide-react";

export const Dashboard = () => {
  const metricsData = [
    {
      title: "Faturamento Mensal",
      value: "R$ 284.750",
      subtitle: "Todas as lojas",
      icon: <DollarSign className="h-4 w-4" />,
      trend: { value: 12.5, isPositive: true }
    },
    {
      title: "Novos Contratos",
      value: "47",
      subtitle: "Este mês",
      icon: <Users className="h-4 w-4" />,
      trend: { value: 8.2, isPositive: true }
    },
    {
      title: "Ticket Médio",
      value: "R$ 385",
      subtitle: "Serviços + produtos",
      icon: <ShoppingCart className="h-4 w-4" />,
      trend: { value: -2.1, isPositive: false }
    },
    {
      title: "Growth Rate",
      value: "18.3%",
      subtitle: "Crescimento MoM",
      icon: <TrendingUp className="h-4 w-4" />,
      trend: { value: 5.7, isPositive: true }
    },
    {
      title: "Estoque Crítico",
      value: "23",
      subtitle: "Produtos em falta",
      icon: <AlertTriangle className="h-4 w-4" />,
      trend: { value: -15.4, isPositive: true }
    },
    {
      title: "Contratos Ativos",
      value: "1.247",
      subtitle: "Clientes cadastrados",
      icon: <Package className="h-4 w-4" />,
      trend: { value: 3.8, isPositive: true }
    }
  ];

  const topProducts = [
    { name: "Pneu 185/65 R15", sales: 45, revenue: "R$ 13.500" },
    { name: "Alinhamento", sales: 78, revenue: "R$ 7.800" },
    { name: "Balanceamento", sales: 65, revenue: "R$ 3.250" },
    { name: "Pneu 195/60 R16", sales: 32, revenue: "R$ 12.800" },
    { name: "Troca de óleo", sales: 89, revenue: "R$ 4.450" }
  ];

  const storePerformance = [
    { name: "Loja Centro", sales: "R$ 78.500", growth: 15.2 },
    { name: "Loja Shopping", sales: "R$ 92.300", growth: 8.7 },
    { name: "Loja Rodovia", sales: "R$ 65.400", growth: 22.1 },
    { name: "Loja Norte", sales: "R$ 48.550", growth: -3.2 }
  ];

  return (
    <div className="space-y-6">
      {/* Métricas Principais - Otimizado para Desktop */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metricsData.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Gráficos e Listas - Layout Desktop Otimizado */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {/* Top Produtos/Serviços */}
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card xl:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="h-5 w-5 text-primary" />
              Top Produtos/Serviços
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} vendas</p>
                  </div>
                  <div className="text-right ml-2">
                    <p className="font-semibold text-sm text-success">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance por Loja */}
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card xl:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="h-5 w-5 text-primary" />
              Performance por Loja
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {storePerformance.map((store, index) => (
                <div key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate">{store.name}</p>
                    <p className="text-xs text-muted-foreground">Vendas do mês</p>
                  </div>
                  <div className="text-right ml-2">
                    <p className="font-semibold text-sm">{store.sales}</p>
                    <p className={`text-xs ${store.growth > 0 ? 'text-success' : 'text-destructive'}`}>
                      {store.growth > 0 ? '+' : ''}{store.growth}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Área para Gráfico Adicional em Desktop */}
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card xl:col-span-1 hidden xl:block">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="h-5 w-5 text-primary" />
              Análise de Tendências
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-sm font-medium">Vendas em Alta</span>
                </div>
                <p className="text-xs text-muted-foreground">Crescimento de 18.3% em relação ao mês anterior</p>
              </div>
              <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <span className="text-sm font-medium">Estoque Baixo</span>
                </div>
                <p className="text-xs text-muted-foreground">23 produtos necessitam reposição</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Meta do Mês</span>
                </div>
                <p className="text-xs text-muted-foreground">87% da meta alcançada</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};