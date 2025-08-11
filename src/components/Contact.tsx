
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form handling
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "ksunilkumar1249@gmail.com",
      action: () => window.open('mailto:ksunilkumar1249@gmail.com')
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (219) 916-0571",
      action: () => window.open('tel:+12199160571')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Greater Chicago, USA",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-8 w-8" />,
      name: "GitHub",
      url: "https://github.com/Sunilkumarkalagarla/",
      color: "hover:text-gray-700"
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sunil1249/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information - Centered */}
          <div className="max-w-md space-y-8">
            <Card className="bg-white border-2 border-gold shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-accent transition-colors duration-200 ${
                      info.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white border-2 border-gold shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                      className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-all duration-200 hover:scale-110 text-foreground"
                      title={link.name}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-white border-2 border-gold shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Available for new opportunities</span>
                </div>
                <p className="text-muted-foreground text-center">
                  I'm currently open to full-time positions and interesting freelance projects. 
                  Let's discuss how I can contribute to your team!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
