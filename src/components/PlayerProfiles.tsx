
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Target, Zap, TrendingUp } from "lucide-react";

const players = [
  {
    name: "Rodrigo",
    position: "Striker",
    age: 23,
    nationality: "Spain",
    currentClub: "Manchester City",
    transferValue: "£65M",
    stats: {
      goals: 25,
      assists: 8,
      appearances: 38
    },
    strengths: ["Clinical Finishing", "Pace", "Link-up Play", "Big Game Player"],
    description: "A proven goalscorer who knows how to find the back of the net when it matters most. Rodrigo's pace and clinical finishing would transform our attack.",
    impact: "Will provide the 20+ goals per season we need to challenge for the title",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Eberechi Eze",
    position: "Attacking Midfielder",
    age: 26,
    nationality: "England",
    currentClub: "Crystal Palace",
    transferValue: "£55M",
    stats: {
      goals: 18,
      assists: 12,
      appearances: 35
    },
    strengths: ["Creativity", "Set Pieces", "Dribbling", "Vision"],
    description: "A creative genius who can unlock any defense. Eze's ability to create magic from nothing would add the X-factor we've been missing.",
    impact: "The creative spark that will turn half-chances into clear goalscoring opportunities",
    gradient: "from-green-500 to-blue-500"
  },
  {
    name: "Viktor Gyökeres",
    position: "Forward",
    age: 26,
    nationality: "Sweden",
    currentClub: "Sporting CP",
    transferValue: "£60M",
    stats: {
      goals: 29,
      assists: 7,
      appearances: 33
    },
    strengths: ["Physical Presence", "Aerial Ability", "Work Rate", "Versatility"],
    description: "A complete forward who can play anywhere across the front line. Gyökeres brings the physicality and work rate that embodies the Arsenal spirit.",
    impact: "Adds depth and quality to our attack while providing tactical flexibility",
    gradient: "from-red-500 to-orange-500"
  }
];

const PlayerProfiles = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white mb-4">
            <Star className="w-4 h-4 mr-2" />
            TRANSFER TARGETS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="arsenal-text-gradient block">Game Changers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three world-class players who will transform Arsenal into title contenders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <Card key={player.name} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
              <CardHeader className="relative p-0">
                {/* Player Image Placeholder */}
                <div className={`h-80 bg-gradient-to-br ${player.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                        <p className="text-white/80">{player.position}</p>
                      </div>
                      <Badge className="bg-yellow-400 text-red-800 font-bold">
                        {player.transferValue}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Arsenal Kit Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold text-xs">AFC</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Player Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-semibold">{player.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-semibold">{player.nationality}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-red-600" />
                    Season Stats
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center bg-red-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-red-600">{player.stats.goals}</div>
                      <div className="text-xs text-gray-500">Goals</div>
                    </div>
                    <div className="text-center bg-yellow-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-yellow-600">{player.stats.assists}</div>
                      <div className="text-xs text-gray-500">Assists</div>
                    </div>
                    <div className="text-center bg-green-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-green-600">{player.stats.appearances}</div>
                      <div className="text-xs text-gray-500">Apps</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{player.description}</p>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-red-600" />
                    Arsenal Impact
                  </h4>
                  <p className="text-red-600 font-medium text-sm">{player.impact}</p>
                </div>

                {/* Strengths */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Key Strengths</h4>
                  <div className="flex flex-wrap gap-2">
                    {player.strengths.map((strength) => (
                      <Badge key={strength} variant="secondary" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Support Button */}
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold group-hover:bg-yellow-400 group-hover:text-red-800 transition-all duration-300">
                  <Zap className="w-4 h-4 mr-2" />
                  Support {player.name}'s Transfer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerProfiles;
