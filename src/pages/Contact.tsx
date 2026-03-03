import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground">
              ¿Tienes preguntas o estás interesado en pedidos personalizados? Nos encantaría saber de ti
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">
                        Chatea con nosotros directamente para respuestas rápidas
                      </p>
                      <Button onClick={handleWhatsApp} variant="outline" size="sm">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chatear Ahora
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Correo</h3>
                      <p className="text-muted-foreground">info@adivan.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+1 (234) 567-8900</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-muted rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3">Pedidos Personalizados</h3>
                  <p className="text-muted-foreground">
                    ¿Buscas algo único? Ofrecemos trabajo en cuero personalizado adaptado a tus 
                    especificaciones. Contáctanos para discutir tu visión y creemos algo 
                    especial juntos.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                  <h2 className="font-serif text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@correo.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Teléfono (opcional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos sobre tu consulta o pedido personalizado..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Enviar Mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
