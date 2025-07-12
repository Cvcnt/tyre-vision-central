import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:ml-64 xl:ml-72">
        <Header />
        <main className="p-4 lg:p-6 xl:p-8">
          <div className="mb-6 xl:mb-8">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm lg:text-base text-muted-foreground mt-1">
              Visão geral de todas as suas lojas e operações
            </p>
          </div>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
