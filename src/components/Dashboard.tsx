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
    <div className="space-y-8 min-h-screen">
      {/* Métricas Principais - Otimizado para Desktop */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metricsData.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Gráficos e Listas - Layout Desktop Otimizado */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 min-h-[600px]">
        {/* Top Produtos/Serviços */}
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card xl:col-span-1 h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg xl:text-xl">
              <Target className="h-6 w-6 text-primary" />
              Top Produtos/Serviços
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-base xl:text-lg truncate">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sales} vendas</p>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-base xl:text-lg text-success">{product.revenue}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance por Loja */}
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card xl:col-span-1 h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg xl:text-xl">
              <BarChart3 className="h-6 w-6 text-primary" />
              Performance por Loja
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            {storePerformance.map((store, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-base xl:text-lg truncate">{store.name}</p>
                  <p className="text-sm text-muted-foreground">Vendas do mês</p>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-base xl:text-lg">{store.sales}</p>
                  <p className={`text-sm ${store.growth > 0 ? 'text-success' : 'text-destructive'}`}>
                    {store.growth > 0 ? '+' : ''}{store.growth}%
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Área para Gráfico Adicional em Desktop */}
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card xl:col-span-1 hidden xl:block h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg xl:text-xl">
              <TrendingUp className="h-6 w-6 text-primary" />
              Análise de Tendências
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-6">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-base font-medium">Vendas em Alta</span>
              </div>
              <p className="text-sm text-muted-foreground">Crescimento de 18.3% em relação ao mês anterior</p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <span className="text-base font-medium">Estoque Baixo</span>
              </div>
              <p className="text-sm text-muted-foreground">23 produtos necessitam reposição</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-base font-medium">Meta do Mês</span>
              </div>
              <p className="text-sm text-muted-foreground">87% da meta alcançada</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção adicional para aproveitar melhor o espaço em desktop */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-8">
        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <DollarSign className="h-5 w-5 text-primary" />
              Vendas Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">R$ 15.280</div>
            <p className="text-sm text-muted-foreground">+12% vs ontem</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-primary" />
              Clientes Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">127</div>
            <p className="text-sm text-muted-foreground">+5% vs ontem</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="h-5 w-5 text-primary" />
              Produtos Vendidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">342</div>
            <p className="text-sm text-muted-foreground">Unidades</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/80 shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Eficiência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">94%</div>
            <p className="text-sm text-muted-foreground">Meta: 90%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};