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
  Package,
  AlertTriangle,
  TrendingDown,
  Scan,
  Download
} from "lucide-react";

const Estoque = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const produtos = [
    {
      id: "P001",
      codigo: "185651501",
      nome: "Pneu 185/65 R15",
      marca: "Pirelli",
      categoria: "Pneus",
      estoque: 24,
      minimo: 10,
      maximo: 50,
      preco: "R$ 320,00",
      localizacao: "A1-B2",
      status: "Normal"
    },
    {
      id: "P002",
      codigo: "195601601", 
      nome: "Pneu 195/60 R16",
      marca: "Michelin",
      categoria: "Pneus",
      estoque: 8,
      minimo: 15,
      maximo: 40,
      preco: "R$ 380,00",
      localizacao: "A1-B3",
      status: "Baixo"
    },
    {
      id: "P003",
      codigo: "OLEO5W30",
      nome: "Óleo Motor 5W30",
      marca: "Castrol",
      categoria: "Lubrificantes",
      estoque: 45,
      minimo: 20,
      maximo: 60,
      preco: "R$ 45,00",
      localizacao: "C2-A1",
      status: "Normal"
    },
    {
      id: "P004",
      codigo: "FILTROAR01",
      nome: "Filtro de Ar",
      marca: "Mann",
      categoria: "Filtros",
      estoque: 2,
      minimo: 10,
      maximo: 30,
      preco: "R$ 35,00",
      localizacao: "B3-C1",
      status: "Crítico"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal":
        return "bg-success text-success-foreground";
      case "Baixo":
        return "bg-warning text-warning-foreground";
      case "Crítico":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Baixo":
      case "Crítico":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Estoque</h1>
            <p className="text-muted-foreground">
              Controle completo do estoque de todas as lojas
            </p>
          </div>

          {/* Controles e Filtros */}
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Scan className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Novo Produto
              </Button>
            </div>
          </div>

          {/* Cards de Resumo */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.247</div>
                <p className="text-xs text-muted-foreground">
                  Em todas as lojas
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Estoque Baixo</CardTitle>
                <AlertTriangle className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">23</div>
                <p className="text-xs text-muted-foreground">
                  Produtos abaixo do mínimo
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Estoque Crítico</CardTitle>
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">5</div>
                <p className="text-xs text-muted-foreground">
                  Produtos em falta
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 2.8M</div>
                <p className="text-xs text-muted-foreground">
                  Valor do estoque total
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Produtos */}
          <Card>
            <CardHeader>
              <CardTitle>Produtos em Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {produtos.map((produto) => (
                  <div key={produto.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex-1 grid grid-cols-1 gap-2 sm:grid-cols-5">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(produto.status)}
                        <div>
                          <p className="font-medium text-sm">{produto.nome}</p>
                          <p className="text-xs text-muted-foreground">{produto.codigo}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">{produto.marca}</p>
                        <p className="text-xs text-muted-foreground">{produto.categoria}</p>
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">{produto.estoque}</span> unidades
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Mín: {produto.minimo} | Máx: {produto.maximo}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{produto.preco}</p>
                        <p className="text-xs text-muted-foreground">{produto.localizacao}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className={getStatusColor(produto.status)} variant="secondary">
                          {produto.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                        </div>
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

export default Estoque;