import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = insertContactMessageSchema;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InsertContactMessage>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contact-messages"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const subject = watch("subject");

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-capa-navy mb-4" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="text-xl text-capa-gray" data-testid="text-contact-subtitle">
            Get in touch with our research team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-capa-navy mb-6" data-testid="text-form-title">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-capa-gray mb-2">
                      First Name
                    </Label>
                    <Input
                      {...register("firstName")}
                      id="firstName"
                      className="mt-1"
                      data-testid="input-firstname"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-firstname">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-capa-gray mb-2">
                      Last Name
                    </Label>
                    <Input
                      {...register("lastName")}
                      id="lastName"
                      className="mt-1"
                      data-testid="input-lastname"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1" data-testid="error-lastname">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-capa-gray mb-2">
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="mt-1"
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-capa-gray mb-2">
                    Subject
                  </Label>
                  <Select onValueChange={(value) => setValue("subject", value)} value={subject}>
                    <SelectTrigger className="mt-1" data-testid="select-subject">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">Research Collaboration</SelectItem>
                      <SelectItem value="positions">Career Opportunities</SelectItem>
                      <SelectItem value="events">Events & Seminars</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-subject">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-capa-gray mb-2">
                    Message
                  </Label>
                  <Textarea
                    {...register("message")}
                    id="message"
                    rows={6}
                    className="mt-1"
                    data-testid="textarea-message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1" data-testid="error-message">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-capa-navy text-white hover:bg-blue-900"
                  disabled={isSubmitting || contactMutation.isPending}
                  data-testid="button-submit-form"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting || contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-capa-navy mb-6" data-testid="text-contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-capa-red mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-capa-navy" data-testid="text-address-label">Address</h4>
                      <p className="text-capa-gray" data-testid="text-address">
                        Universidad de Zaragoza<br />
                        Centro de Astropartículas y Física de Altas Energías<br />
                        C/ Pedro Cerbuna 12<br />
                        50009 Zaragoza, Spain
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-capa-red mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-capa-navy" data-testid="text-email-label">Email</h4>
                      <p className="text-capa-gray" data-testid="text-email">capa@unizar.es</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-capa-red mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-capa-navy" data-testid="text-phone-label">Phone</h4>
                      <p className="text-capa-gray" data-testid="text-phone">+34 976 76 1000</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-capa-navy mb-6" data-testid="text-location-title">
                  Location
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="University campus aerial view" 
                    className="w-full h-full object-cover rounded-lg"
                    data-testid="img-campus"
                  />
                </div>
                <p className="text-sm text-capa-gray mt-4" data-testid="text-location-description">
                  Located in the heart of Zaragoza, our facilities provide state-of-the-art research infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
