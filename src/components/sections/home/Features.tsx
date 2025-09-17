'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Database,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Cloud,
  Headphones,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Database,
      title: 'SAP ERP Integration',
      description:
        'Seamlessly connect your SAP ERP with CRM, e-commerce, and third-party applications for unified data flow.',
      badge: 'Core Integration',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-grade encryption and SAP-certified security protocols protect your critical business data.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Real-Time Sync',
      description:
        'Instant data synchronization between SAP and connected systems with 99.9% uptime guarantee.',
      badge: 'Performance',
    },
    {
      icon: Globe,
      title: 'Multi-System Connectivity',
      description:
        'Connect SAP with Salesforce, Shopify, Microsoft 365, and 200+ business applications.',
      badge: 'Connectivity',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Comprehensive dashboards and reporting tools for monitoring integration performance and data flow.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description:
        'Tailored integration workflows designed specifically for your business processes and requirements.',
      badge: 'Customization',
    },
    {
      icon: Cloud,
      title: 'Cloud & On-Premise',
      description:
        'Support for SAP S/4HANA Cloud, on-premise installations, and hybrid deployment models.',
      badge: 'Deployment',
    },
    {
      icon: Headphones,
      title: 'Expert SAP Support',
      description:
        '24/7 support from certified SAP consultants with deep ERP integration expertise.',
      badge: 'Support',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description:
        'Built-in compliance features for GDPR, SOX, and industry-specific regulatory requirements.',
      badge: 'Compliance',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete SAP ERP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlock the full potential of your SAP investment with seamless integrations that connect
            your ERP to every critical business system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to streamline your SAP integrations?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule SAP Assessment
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Integration Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
