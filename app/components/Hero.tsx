import { Button } from "./ui/Button";
import { ArrowRight, Play, MessageCircle, Bot, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                AI-Powered Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Automate Your <span className="text-primary">WhatsApp</span>{" "}
              Conversations with <span className="text-primary">ChatFlow AI</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Build intelligent chatbots, send bulk broadcasts, and create
              powerful workflow automations. Scale your customer engagement
              effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 font-semibold cursor-pointer">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 font-semibold bg-transparent cursor-pointer"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50M+</p>
                <p className="text-sm text-muted-foreground">Messages Sent</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl shadow-primary/5 hover:border-primary/20">
                {/* Chat header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ChatFlow AI Bot
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Online • Automated
                    </p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4 py-6">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Hi, I need help with my order</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">
                        Hello! I would be happy to help. Let me look up your order
                        details. 🔍
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">
                        Found it! Your order #12345 is on its way and will
                        arrive tomorrow. 📦
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input field */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="flex-1 bg-secondary rounded-full px-4 py-2">
                    <p className="text-sm text-muted-foreground">
                      Type a message...
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-foreground">
                    AI Responding...
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">
                    Instant Replies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
