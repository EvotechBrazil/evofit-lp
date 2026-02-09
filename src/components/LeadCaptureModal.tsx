import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5543999864409";
const WEBHOOK_URL = "https://n8n-n8n.rte6ms.easypanel.host/webhook/formulario";

interface LeadModalContextType {
  openLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType>({ openLeadModal: () => {} });

export const useLeadModal = () => useContext(LeadModalContext);

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)})${digits.slice(2)}`;
  return `(${digits.slice(0, 2)})${digits.slice(2, 3)}.${digits.slice(3, 7)}-${digits.slice(7)}`;
};

export const LeadModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const openLeadModal = () => setOpen(true);

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Email inválido", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          nome: name.trim(),
          telefone: phone.trim(),
          email: email.trim(),
          timestamp: new Date().toISOString(),
          origem: window.location.origin,
        }),
      });

      toast({ title: "Dados enviados com sucesso!" });
      setOpen(false);
      resetForm();

      const message = encodeURIComponent(
        `Olá! Meu nome é ${name.trim()}, gostaria de saber mais sobre as soluções de IA da Evotech.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    } catch (error) {
      console.error("Webhook error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LeadModalContext.Provider value={{ openLeadModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Fale com a Evotech</DialogTitle>
            <p className="text-muted-foreground text-sm">
              Preencha seus dados e você será direcionado ao nosso WhatsApp.
            </p>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="lead-name" className="mb-1.5 block">Nome Completo</Label>
              <Input
                id="lead-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="h-12"
                maxLength={100}
                required
              />
            </div>
            <div>
              <Label htmlFor="lead-phone" className="mb-1.5 block">Telefone</Label>
              <Input
                id="lead-phone"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="(00)0.0000-0000"
                className="h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor="lead-email" className="mb-1.5 block">Email</Label>
              <Input
                id="lead-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="h-12"
                maxLength={255}
                required
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full text-lg h-14"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <>
                  Continuar para WhatsApp
                  <ArrowRight className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </LeadModalContext.Provider>
  );
};
