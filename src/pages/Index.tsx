import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const services = {
  body: [
    { name: 'Полировка кузова', price: 'от 10 000 ₽' },
    { name: 'Полировка фар', price: 'от 3 000 ₽' },
    { name: 'Полировка боковых стекол', price: 'от 3 000 ₽' },
    { name: 'Керамическое покрытие', price: 'от 5 000 ₽' },
    { name: 'Тонировка авто', price: 'от 6 000 ₽' },
    { name: 'Бронирование лобового стекла', price: 'от 20 000 ₽' }
  ],
  interior: [
    { name: 'Химчистка салона', price: 'от 5 000 ₽' },
    { name: 'Химчистка салона с разбором', price: 'от 9 000 ₽' },
    { name: 'Реставрация салона', price: 'по запросу' }
  ],
  films: [
    { name: 'Оклейка зон риска (защитная)', price: 'от 70 000 ₽' },
    { name: 'Антихром', price: 'от 3 000 ₽' },
    { name: 'Оклейка фар (бронепленка)', price: 'от 7 000 ₽' },
    { name: 'Оклейка цветной пленкой', price: 'от 120 000 ₽' },
    { name: 'Оклейка защитной пленкой', price: 'от 4 000 ₽' }
  ],
  packages: [
    { 
      name: 'Предпродажная подготовка', 
      description: 'мойка, полировка, уборка, воск', 
      price: 'от 25 000 ₽' 
    },
    { 
      name: 'Комплекс "Новое авто"', 
      description: 'мойка, полировка, химчистка, керамика, бронепленка фар', 
      price: 'от 50 000 ₽' 
    }
  ],
  additional: [
    { name: 'Шумоизоляция / Виброизоляция', price: 'от 3 000 ₽' }
  ]
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/9533cade-b471-429c-b41f-6973f98228c3.png" 
                  alt="CheckPoint Service" 
                  className="w-12 h-12 rounded-full border-2 border-primary/30"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-card"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">CheckPoint Service</h1>
                <p className="text-sm text-primary"></p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'body', label: 'Кузов' },
                { id: 'interior', label: 'Салон' },
                { id: 'films', label: 'Плёнки' },
                { id: 'packages', label: 'Комплексы' },
                { id: 'additional', label: 'Дополнительно' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <img src="https://cdn.poehali.dev/files/9533cade-b471-429c-b41f-6973f98228c3.png" alt="" className="w-32 h-32 rounded-full" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <img src="https://cdn.poehali.dev/files/9533cade-b471-429c-b41f-6973f98228c3.png" alt="" className="w-48 h-48 rounded-full" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold mb-6 text-foreground text-4xl">Профессиональный детейлинг в автосервисе</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Полный спектр услуг по уходу за вашим автомобилем. Качественная работа, 
            современное оборудование, гарантия результата.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contacts')}
            className="gap-2"
          >+ 7 994 408-00-05</Button>
        </div>
      </section>

      {/* Services Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Body Care */}
        <section id="body">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="Car" size={24} className="text-primary" />
                Уход за кузовом и стёклами
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {services.body.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/10 hover:border-primary/20">
                    <span className="font-medium">{service.name}</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interior */}
        <section id="interior">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="Armchair" size={24} className="text-primary" />
                Детейлинг салона
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {services.interior.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/10 hover:border-primary/20">
                    <span className="font-medium">{service.name}</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Films */}
        <section id="films">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="Shield" size={24} className="text-primary" />
                Защитные и декоративные плёнки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {services.films.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/10 hover:border-primary/20">
                    <span className="font-medium">{service.name}</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Packages */}
        <section id="packages">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="Package" size={24} className="text-primary" />
                Комплексные работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {services.packages.map((service, index) => (
                  <div key={index} className="p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/10 hover:border-primary/20 relative">
                    <div className="absolute top-2 right-2 opacity-20">
                      <img src="https://cdn.poehali.dev/files/9533cade-b471-429c-b41f-6973f98228c3.png" alt="" className="w-8 h-8 rounded-full" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{service.name}</h3>
                      <span className="font-bold text-primary text-lg">{service.price}</span>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional */}
        <section id="additional">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="Plus" size={24} className="text-primary" />
                Дополнительные услуги
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {services.additional.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/10 hover:border-primary/20">
                    <span className="font-medium">{service.name}</span>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contacts */}
        <section id="contacts">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="MapPin" size={24} className="text-primary" />
                Контакты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <a href="tel:+79944080005" className="text-lg font-semibold hover:text-primary transition-colors">
                      +7 994 408-00-05
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <address className="not-italic">
                      Шафировский проспект 22к5 ст2
                    </address>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Цены являются ориентировочными. 
                    Уточняйте стоимость у менеджера.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <a href="tel:+79944080005">+ 7 994 408-00-05</a>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <a href="https://t.me/checkpointserv1ce" target="_blank" rel="noopener noreferrer">
                        <Icon name="MessageCircle" size={18} className="mr-2" />
                        Telegram: @checkpointserv1ce
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/9533cade-b471-429c-b41f-6973f98228c3.png" 
                alt="CheckPoint Service" 
                className="w-10 h-10 rounded-full border border-primary/30"
              />
              <span className="font-bold text-lg text-primary">CheckPoint Service</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <a href="tel:+79944080005" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
            </a>
            <a href="https://t.me/checkpointserv1ce" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
          <p className="text-muted-foreground">
            © 2024 CheckPoint Service. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;