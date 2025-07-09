
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-yellow-400 text-red-800 text-sm font-bold px-4 py-2 hover:bg-yellow-300 transition-colors">
            <Trophy className="w-4 h-4 mr-2" />
            ARSENAL TRANSFER FUND 2025
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              BRING THE
              <span className="block arsenal-text-gradient bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                STARS HOME
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Unite as one Arsenal family to sign <strong>Rodrigo</strong>, <strong>Eberechi Eze</strong>, 
              and <strong>Viktor Gyökeres</strong> - the three players who will take us back to glory!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Target className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-white">£180M</span>
              </div>
              <p className="text-red-100">Transfer Target</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-white">12,847</span>
              </div>
              <p className="text-red-100">Supporters United</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <p className="text-red-100">Game Changers</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold text-lg px-8 py-4 rounded-xl pulse-glow transition-all duration-300 transform hover:scale-105"
            >
              DONATE NOW - MAKE HISTORY
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Mission Statement Preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">OUR MISSION</h2>
              <p className="text-lg text-red-100 leading-relaxed">
                Arsenal deserves to compete at the highest level. These three exceptional talents - 
                a prolific striker, a creative maestro, and a clinical finisher - represent the missing 
                pieces in our title-winning puzzle. Together, we can make this dream a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
