import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  CreditCard,
  AlertCircle
} from "lucide-react";

const Financeiro = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const transacoes = [
    {
      id: "T001",
      tipo: "Recebimento",
      descricao: "Venda Pneus - João Silva",
      valor: "R$ 1.280,00",
      data: "15/01/2024",
      status: "Pago",
      loja: "Loja Centro",
      categoria: "Vendas"
    },
    {
      id: "T002",
      tipo: "Pagamento",
      descricao: "Fornecedor Pirelli",
      valor: "R$ 8.500,00",
      data: "14/01/2024",
      status: "Pendente",
      loja: "Matriz",
      categoria: "Compras"
    },
    {
      id: "T003",
      tipo: "Recebimento",
      descricao: "Serviços - Maria Oliveira",
      valor: "R$ 180,00",
      data: "14/01/2024",
      status: "Pago",
      loja: "Loja Shopping",
      categoria: "Serviços"
    },
    {
      id: "T004",
      tipo: "Pagamento",
      descricao: "Aluguel Loja Norte",
      valor: "R$ 3.200,00",
      data: "10/01/2024",
      status: "Vencido",
      loja: "Loja Norte",
      categoria: "Despesas"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pago":
        return "bg-success text-success-foreground";
      case "Pendente":
        return "bg-warning text-warning-foreground";
      case "Vencido":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTipoIcon = (tipo: string) => {
    return tipo === "Recebimento" ? 
      <TrendingUp className="h-4 w-4 text-success" /> : 
      <TrendingDown className="h-4 w-4 text-destructive" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
            <p className="text-muted-foreground">
              Controle completo das finanças de todas as lojas
            </p>
          </div>

          {/* Controles e Filtros */}
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar transações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Transação
            </Button>
          </div>

          {/* Cards de Resumo Financeiro */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receitas do Mês</CardTitle>
                <TrendingUp className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">R$ 284.750</div>
                <p className="text-xs text-muted-foreground">
                  +12.5% vs mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Despesas do Mês</CardTitle>
                <TrendingDown className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">R$ 156.230</div>
                <p className="text-xs text-muted-foreground">
                  +3.2% vs mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">R$ 128.520</div>
                <p className="text-xs text-muted-foreground">
                  Margem de 45.1%
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contas em Atraso</CardTitle>
                <AlertCircle className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">7</div>
                <p className="text-xs text-muted-foreground">
                  R$ 12.450 em atraso
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fluxo de Caixa Previsto */}
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">A Receber (30 dias)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">R$ 45.780</div>
                <p className="text-sm text-muted-foreground">12 faturas pendentes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">A Pagar (30 dias)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">R$ 23.450</div>
                <p className="text-sm text-muted-foreground">8 contas pendentes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Saldo Projetado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">R$ 22.330</div>
                <p className="text-sm text-muted-foreground">Próximos 30 dias</p>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Transações */}
          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transacoes.map((transacao) => (
                  <div key={transacao.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-1 grid grid-cols-1 gap-2 sm:grid-cols-5">
                      <div className="flex items-center gap-3">
                        {getTipoIcon(transacao.tipo)}
                        <div>
                          <p className="font-medium text-sm">{transacao.descricao}</p>
                          <p className="text-xs text-muted-foreground">{transacao.id}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">{transacao.categoria}</p>
                        <p className="text-xs text-muted-foreground">{transacao.loja}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{transacao.valor}</p>
                        <p className="text-xs text-muted-foreground">{transacao.data}</p>
                      </div>
                      <div>
                        <Badge className={getStatusColor(transacao.status)} variant="secondary">
                          {transacao.status}
                        </Badge>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Financeiro;