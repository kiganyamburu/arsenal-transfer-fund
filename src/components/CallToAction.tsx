
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Trophy, 
  ArrowRight, 
  Zap, 
  Target,
  Share2,
  Clock
} from "lucide-react";

const CallToAction = () => {
  const donationTiers = [
    {
      amount: 25,
      title: "Young Gun",
      description: "Every pound counts in our mission",
      supporters: "3,247",
      color: "from-gray-500 to-gray-600"
    },
    {
      amount: 50,
      title: "Faithful Supporter",
      description: "Show your Arsenal passion",
      supporters: "2,156",
      color: "from-red-500 to-red-600",
      popular: false
    },
    {
      amount: 100,
      title: "Arsenal Legend",
      description: "Make a real difference",
      supporters: "1,891",
      color: "from-red-600 to-red-700",
      popular: true
    },
    {
      amount: 250,
      title: "Title Contender",
      description: "Champion-level contribution",
      supporters: "743",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-400 text-red-800 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            TIME IS RUNNING OUT
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            THIS IS
            <span className="text-yellow-400 block">OUR MOMENT</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-red-100 font-medium mb-6 leading-relaxed">
              Arsenal supporters have waited long enough. The time for dreams is over - 
              <strong className="text-yellow-400"> the time for action is NOW.</strong>
            </p>
            
            <p className="text-xl text-red-200 leading-relaxed">
              Rodrigo, Eze, and Gyökeres aren't just players - they're the final pieces 
              that will restore Arsenal to our rightful place at the summit of English football. 
              Together, we can make history.
            </p>
          </div>

          {/* Urgency Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Target className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">47 Days</div>
              <p className="text-red-100">Until Transfer Window Closes</p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">£132.5M</div>
              <p className="text-red-100">Still Needed</p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2">12,847</div>
              <p className="text-red-100">Supporters United</p>
            </div>
          </div>
        </div>

        {/* Donation Tiers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Choose Your Impact Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {donationTiers.map((tier, index) => (
              <Card key={tier.title} className={`relative border-0 overflow-hidden group hover:scale-105 transition-all duration-300 ${tier.popular ? 'ring-4 ring-yellow-400' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-800 font-bold z-10">
                    MOST POPULAR
                  </Badge>
                )}
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-white`}>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">£{tier.amount}</div>
                    <div className="text-lg font-bold mb-3">{tier.title}</div>
                    <p className="text-sm opacity-90 mb-4">{tier.description}</p>
                    <div className="text-xs opacity-75">{tier.supporters} supporters</div>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold group-hover:bg-yellow-400 group-hover:text-red-800 transition-all duration-300">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate £{tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-black text-xl px-12 py-6 rounded-2xl pulse-glow transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-6 h-6 mr-3" />
              DONATE NOW - MAKE HISTORY
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-8 py-6 rounded-2xl"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share with Arsenal Family
            </Button>
          </div>
          
          <p className="text-red-100 mt-6 text-lg">
            💳 Secure payments • 🔒 Safe & trusted • 🌍 Available worldwide
          </p>
        </div>

        {/* Emotional Appeal */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-black/30 backdrop-blur-sm border border-white/20 text-center">
            <CardContent className="p-12">
              <h3 className="text-4xl font-bold text-yellow-400 mb-6">
                The Emirates is Calling
              </h3>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Imagine the roar when Rodrigo scores his first goal. Picture Eze's magic creating 
                moments of pure joy. Feel the power when Gyökeres leads our charge. 
                <strong className="text-yellow-400"> This is more than football - this is Arsenal's destiny.</strong>
              </p>
              
              <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-xl p-8 text-white">
                <p className="text-2xl font-bold mb-4">
                  "We are Arsenal. We are united. We are unstoppable."
                </p>
                <p className="text-lg opacity-90">
                  Join the movement. Make the difference. Bring our stars home.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
