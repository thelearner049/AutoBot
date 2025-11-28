import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/Card";
import { Bot, Send, Workflow, BarChart3, Users, Clock } from "lucide-react";
// import { LuBotMessageSquare, LuUsers } from "react-icons/lu";
// import { AiOutlineSend } from "react-icons/ai";
// import { LuWorkflow } from "react-icons/lu";
// import { BiBarChartSquare } from "react-icons/bi";
// import { HiOutlineClock } from "react-icons/hi";

const features = [
  {
    icon: Bot,
    title: "Automated Chatbots",
    description:
      "Build intelligent AI chatbots that understand context and respond naturally to customer inquiries 24/7.",
  },
  {
    icon: Send,
    title: "Bulk Broadcasts",
    description:
      "Send personalized messages to thousands of contacts at once with smart scheduling and segmentation.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Create powerful automation flows with drag-and-drop builder. Trigger actions based on customer behavior.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track message delivery, response rates, and customer engagement with real-time analytics and insights.",
  },
  {
    icon: Users,
    title: "Multi-Agent Inbox",
    description:
      "Collaborate with your team in a unified inbox. Assign conversations and manage customer support efficiently.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description:
      "Schedule messages for optimal delivery times. AI suggests the best time to reach your audience.",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary text-2xl font-semibold mb-4">Features</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Everything You Need to Scale Customer Engagement
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools to automate, analyze, and optimize your WhatsApp
            communications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((features, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <features.icon className="w-6 h-6 text-primary text-2xl"/>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {features.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {features.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
