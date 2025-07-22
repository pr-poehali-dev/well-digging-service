import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Drill',
      title: 'Копание колодцев',
      description: 'Профессиональное бурение колодцев любой глубины с использованием современного оборудования',
      features: ['До 50 метров глубины', 'Качественная обсадка', 'Гарантия 2 года']
    },
    {
      icon: 'Zap',
      title: 'Рытье траншей',
      description: 'Быстрое и аккуратное рытье траншей для коммуникаций, фундаментов и дренажных систем',
      features: ['Любая сложность', 'Точные размеры', 'Быстрые сроки']
    },
    {
      icon: 'Shield',
      title: 'Дренажные системы',
      description: 'Проектирование и установка дренажных систем для защиты фундамента от грунтовых вод',
      features: ['Проект в подарок', 'Качественные материалы', 'Гарантия результата']
    }
  ];

  const pricing = [
    { service: 'Копание колодца (за метр)', price: '3 500 ₽', unit: 'м' },
    { service: 'Рытье траншеи (за метр)', price: '450 ₽', unit: 'м' },
    { service: 'Дренаж участка', price: 'от 25 000 ₽', unit: 'участок' },
    { service: 'Обслуживание колодца', price: '8 500 ₽', unit: 'услуга' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Надежно • Быстро • Качественно
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
                Копаем колодцы и траншеи
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Профессиональные земляные работы любой сложности. Современное оборудование, 
                опытная бригада, гарантия качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-green-500" size={16} />
                  Более 500 выполненных проектов
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-blue-500" size={16} />
                  Работаем с 2018 года
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <img 
                src="/img/dc53aff6-fd81-4031-a989-767db4410f6c.jpg" 
                alt="Экскаватор на строительной площадке" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Выполняем все виды земляных работ с использованием профессионального оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-green-500" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-slate-600">
              Честные цены без скрытых доплат
            </p>
          </div>
          <div className="grid gap-6">
            {pricing.map((item, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.service}</h3>
                      <p className="text-sm text-slate-500">За {item.unit}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Card className="inline-block border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Icon name="Info" className="text-primary" size={24} />
                  <div className="text-left">
                    <p className="font-semibold text-primary">Бесплатный выезд на замер</p>
                    <p className="text-sm text-slate-600">В радиусе 30 км от города</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами для консультации и расчета стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100 font-semibold px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Clock" className="mx-auto mb-2" size={24} />
              <p className="font-semibold">Время работы</p>
              <p className="text-sm opacity-90">Пн-Сб: 8:00-18:00</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-2" size={24} />
              <p className="font-semibold">Работаем в области</p>
              <p className="text-sm opacity-90">Радиус до 100 км</p>
            </div>
            <div>
              <Icon name="Shield" className="mx-auto mb-2" size={24} />
              <p className="font-semibold">Гарантия</p>
              <p className="text-sm opacity-90">До 2 лет на работы</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;