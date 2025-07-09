
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Target, Heart, Zap } from "lucide-react";

const FundraisingProgress = () => {
  const totalTarget = 180000000; // £180M
  const currentAmount = 47500000; // £47.5M
  const progressPercentage = Math.round((currentAmount / totalTarget) * 100);
  
  const playerTargets = [
    { name: "Rodrigo", target: 65000000, raised: 18200000, color: "bg-blue-500" },
    { name: "Eberechi Eze", target: 55000000, raised: 15800000, color: "bg-green-500" },
    { name: "Viktor Gyökeres", target: 60000000, raised: 13500000, color: "bg-orange-500" }
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `£${(amount / 1000000).toFixed(1)}M`;
    }
    return `£${(amount / 1000).toFixed(0)}K`;
  };

  const getDaysRemaining = () => {
    const endDate = new Date('2025-08-31');
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            LIVE PROGRESS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Making
            <span className="arsenal-text-gradient block">History Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every pound brings us closer to securing these three incredible signings
          </p>
        </div>

        {/* Main Progress Card */}
        <Card className="mb-12 border-0 shadow-2xl bg-white overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div>
                <CardTitle className="text-3xl font-bold mb-2">Transfer Fund Progress</CardTitle>
                <p className="text-red-100">Arsenal supporters united for glory</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-yellow-400">
                  {formatCurrency(currentAmount)}
                </div>
                <div className="text-red-100">of {formatCurrency(totalTarget)} target</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* Main Progress Bar */}
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-700">Overall Progress</span>
                  <span className="text-lg font-bold text-red-600">{progressPercentage}%</span>
                </div>
                <Progress 
                  value={progressPercentage} 
                  className="h-6 bg-gray-200"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>£0</span>
                  <span>£180M Target</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center bg-red-50 rounded-lg p-4">
                  <Users className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <div className="text-2xl font-bold text-red-600">12,847</div>
                  <div className="text-sm text-gray-600">Supporters</div>
                </div>
                <div className="text-center bg-yellow-50 rounded-lg p-4">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <div className="text-2xl font-bold text-yellow-600">£367</div>
                  <div className="text-sm text-gray-600">Average Donation</div>
                </div>
                <div className="text-center bg-green-50 rounded-lg p-4">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold text-green-600">{getDaysRemaining()}</div>
                  <div className="text-sm text-gray-600">Days Remaining</div>
                </div>
                <div className="text-center bg-blue-50 rounded-lg p-4">
                  <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600">26%</div>
                  <div className="text-sm text-gray-600">Target Reached</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Player Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {playerTargets.map((player, index) => {
            const playerProgress = Math.round((player.raised / player.target) * 100);
            return (
              <Card key={player.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className={`w-4 h-4 rounded-full ${player.color} mr-3`}></div>
                    {player.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-bold text-red-600">{playerProgress}%</span>
                    </div>
                    <Progress value={playerProgress} className="h-3" />
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-green-600">
                        {formatCurrency(player.raised)}
                      </span>
                      <span className="text-gray-500">
                        of {formatCurrency(player.target)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Every Donation Counts!</h3>
            <p className="text-xl text-red-100 mb-6">
              Join thousands of Arsenal fans making history. Together, we can bring these three superstars to North London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold px-8 pulse-glow">
                <Zap className="w-5 h-5 mr-2" />
                DONATE NOW
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Share with Friends
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraisingProgress;
