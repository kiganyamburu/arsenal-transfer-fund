
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Trophy, Star } from "lucide-react";
import { useEffect, useState } from "react";

const supporters = [
  {
    name: "David Thompson",
    location: "London",
    amount: 500,
    message: "COYG! These signings will take us back to the top where we belong! 🔴⚪️",
    timeAgo: "2 minutes ago",
    tier: "Champion"
  },
  {
    name: "Sarah Mitchell",
    location: "Manchester",
    amount: 250,
    message: "Arsenal till I die! Rodrigo will be the missing piece in our attack. Let's make this happen!",
    timeAgo: "5 minutes ago",
    tier: "Legend"
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai",
    amount: 1000,
    message: "Watching from the Middle East and so proud to support this cause. Arsenal family worldwide! 🌍",
    timeAgo: "8 minutes ago",
    tier: "Champion"
  },
  {
    name: "Emma Wilson",
    location: "Melbourne",
    amount: 75,
    message: "Every little bit helps! Come on you Gunners! Eze would be incredible in red and white! 💪",
    timeAgo: "12 minutes ago",
    tier: "Supporter"
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid",
    amount: 300,
    message: "¡Vamos Arsenal! Rodrigo deserves to play for a club with real ambition. This is it!",
    timeAgo: "15 minutes ago",
    tier: "Legend"
  },
  {
    name: "Michael O'Brien",
    location: "Dublin",
    amount: 150,
    message: "Been supporting Arsenal for 40 years. Never been more excited about our future! COYG!",
    timeAgo: "18 minutes ago",
    tier: "Legend"
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    amount: 200,
    message: "Arsenal fans in India are behind this 100%! Gyökeres will bring the physicality we need!",
    timeAgo: "22 minutes ago",
    tier: "Legend"
  },
  {
    name: "James Wilson",
    location: "New York",
    amount: 50,
    message: "Supporting from the US! Small donation but big dreams! These players will change everything!",
    timeAgo: "25 minutes ago",
    tier: "Supporter"
  },
  {
    name: "Lisa Chen",
    location: "Singapore",
    amount: 400,
    message: "Arsenal family across Asia! Can't wait to see these three in red and white! 🔥",
    timeAgo: "28 minutes ago",
    tier: "Legend"
  },
  {
    name: "Roberto Silva",
    location: "São Paulo",
    amount: 125,
    message: "Arsenal Brasil sempre! These signings will make us title contenders! Força Arsenal! 🇧🇷",
    timeAgo: "32 minutes ago",
    tier: "Supporter"
  }
];

const SupporterWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % supporters.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "Champion":
        return <Trophy className="w-4 h-4 text-yellow-500" />;
      case "Legend":
        return <Star className="w-4 h-4 text-red-500" />;
      default:
        return <Heart className="w-4 h-4 text-red-400" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Champion":
        return "bg-yellow-100 text-yellow-800";
      case "Legend":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatAmount = (amount: number) => {
    return `£${amount}`;
  };

  const visibleSupporters = [
    supporters[currentIndex],
    supporters[(currentIndex + 1) % supporters.length],
    supporters[(currentIndex + 2) % supporters.length],
    supporters[(currentIndex + 3) % supporters.length]
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-400 text-red-800 mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            SUPPORTER WALL
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Voices of the
            <span className="text-yellow-400 block">Arsenal Family</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real messages from passionate Arsenal supporters around the world who are making this dream possible
          </p>
        </div>

        {/* Featured Supporter */}
        <div className="mb-16">
          <Card className={`bg-gradient-to-r from-red-600 to-red-700 border-0 max-w-4xl mx-auto transform transition-all duration-500 ${isAnimating ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}>
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-red-800">
                  {supporters[currentIndex].name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{supporters[currentIndex].name}</h3>
                    <Badge className={`${getTierColor(supporters[currentIndex].tier)} flex items-center space-x-1`}>
                      {getTierIcon(supporters[currentIndex].tier)}
                      <span>{supporters[currentIndex].tier}</span>
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 font-bold">
                      {formatAmount(supporters[currentIndex].amount)}
                    </Badge>
                  </div>
                  <p className="text-lg text-red-100 mb-3 leading-relaxed">
                    "{supporters[currentIndex].message}"
                  </p>
                  <div className="flex items-center text-sm text-red-200 space-x-4">
                    <span>📍 {supporters[currentIndex].location}</span>
                    <span>⏰ {supporters[currentIndex].timeAgo}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Supporters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleSupporters.slice(1).map((supporter, index) => (
            <Card key={`${supporter.name}-${index}`} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {supporter.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{supporter.name}</p>
                    <p className="text-xs text-gray-400">{supporter.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  "{supporter.message}"
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    {formatAmount(supporter.amount)}
                  </Badge>
                  <span className="text-xs text-gray-500">{supporter.timeAgo}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">12,847</div>
            <div className="text-gray-400">Total Supporters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">87</div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">£367</div>
            <div className="text-gray-400">Average Donation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupporterWall;
