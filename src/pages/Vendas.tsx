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
  Eye, 
  Calendar,
  DollarSign,
  Package,
  Clock
} from "lucide-react";

const Vendas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const vendas = [
    {
      id: "V001",
      data: "2024-01-15",
      cliente: "João Silva",
      loja: "Loja Centro",
      produtos: "Pneu 185/65 R15 (4x), Alinhamento",
      valor: "R$ 1.280,00",
      status: "Concluída",
      vendedor: "Carlos Santos"
    },
    {
      id: "V002", 
      data: "2024-01-15",
      cliente: "Maria Oliveira",
      loja: "Loja Shopping",
      produtos: "Balanceamento, Troca de óleo",
      valor: "R$ 180,00",
      status: "Pendente",
      vendedor: "Ana Costa"
    },
    {
      id: "V003",
      data: "2024-01-14",
      cliente: "Pedro Mendes",
      loja: "Loja Rodovia", 
      produtos: "Pneu 195/60 R16 (2x)",
      valor: "R$ 760,00",
      status: "Concluída",
      vendedor: "Ricardo Lima"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída":
        return "bg-success text-success-foreground";
      case "Pendente":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Vendas</h1>
            <p className="text-muted-foreground">
              Gerencie todas as vendas e serviços realizados
            </p>
          </div>

          {/* Controles e Filtros */}
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar vendas..."
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
              Nova Venda
            </Button>
          </div>

          {/* Cards de Resumo */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 2.220</div>
                <p className="text-xs text-muted-foreground">
                  +12% em relação a ontem
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Itens Vendidos</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  8 serviços, 39 produtos
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 385</div>
                <p className="text-xs text-muted-foreground">
                  -5% vs média mensal
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Aguardando finalização
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Vendas */}
          <Card>
            <CardHeader>
              <CardTitle>Vendas Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendas.map((venda) => (
                  <div key={venda.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-1 grid grid-cols-1 gap-2 sm:grid-cols-4">
                      <div>
                        <p className="font-medium text-sm">{venda.id}</p>
                        <p className="text-xs text-muted-foreground">{venda.data}</p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{venda.cliente}</p>
                        <p className="text-xs text-muted-foreground">{venda.loja}</p>
                      </div>
                      <div>
                        <p className="text-sm">{venda.produtos}</p>
                        <p className="text-xs text-muted-foreground">Por: {venda.vendedor}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{venda.valor}</p>
                          <Badge className={getStatusColor(venda.status)} variant="secondary">
                            {venda.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
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

export default Vendas;