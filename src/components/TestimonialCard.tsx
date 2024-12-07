import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

const TestimonialCard = ({ name, role, content }: TestimonialCardProps) => {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-2">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{content}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;