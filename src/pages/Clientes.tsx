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
  Users,
  Phone,
  Mail,
  Car,
  Eye
} from "lucide-react";

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clientes = [
    {
      id: "C001",
      nome: "João Silva",
      email: "joao.silva@email.com",
      telefone: "(11) 99999-9999",
      veiculo: "Honda Civic 2020",
      placa: "ABC-1234",
      ultimaVisita: "15/01/2024",
      totalGasto: "R$ 2.450,00",
      status: "Ativo"
    },
    {
      id: "C002",
      nome: "Maria Oliveira",
      email: "maria.oliveira@email.com", 
      telefone: "(11) 98888-8888",
      veiculo: "Toyota Corolla 2019",
      placa: "DEF-5678",
      ultimaVisita: "12/01/2024",
      totalGasto: "R$ 1.890,00",
      status: "Ativo"
    },
    {
      id: "C003",
      nome: "Pedro Mendes",
      email: "pedro.mendes@email.com",
      telefone: "(11) 97777-7777",
      veiculo: "Volkswagen Gol 2018",
      placa: "GHI-9012",
      ultimaVisita: "08/01/2024",
      totalGasto: "R$ 980,00",
      status: "Inativo"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-success text-success-foreground";
      case "Inativo":
        return "bg-muted text-muted-foreground";
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
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground">
              Gerencie todos os seus clientes e histórico
            </p>
          </div>

          {/* Controles e Filtros */}
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar clientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Cliente
            </Button>
          </div>

          {/* Cards de Resumo */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.247</div>
                <p className="text-xs text-muted-foreground">
                  Cadastrados no sistema
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
                <Users className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">892</div>
                <p className="text-xs text-muted-foreground">
                  Últimos 90 dias
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Novos Este Mês</CardTitle>
                <Plus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  +18% vs mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Valor Médio</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 450</div>
                <p className="text-xs text-muted-foreground">
                  Por cliente/ano
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Clientes */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clientes.map((cliente) => (
                  <div key={cliente.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-1 grid grid-cols-1 gap-2 sm:grid-cols-4">
                      <div>
                        <p className="font-medium text-sm">{cliente.nome}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {cliente.email}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {cliente.telefone}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-sm">
                          <Car className="h-3 w-3" />
                          {cliente.veiculo}
                        </div>
                        <p className="text-xs text-muted-foreground">Placa: {cliente.placa}</p>
                      </div>
                      <div>
                        <p className="text-sm">Última visita:</p>
                        <p className="text-xs text-muted-foreground">{cliente.ultimaVisita}</p>
                        <p className="text-sm font-semibold text-success">{cliente.totalGasto}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className={getStatusColor(cliente.status)} variant="secondary">
                          {cliente.status}
                        </Badge>
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

export default Clientes;