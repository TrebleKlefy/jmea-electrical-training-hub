export const TrustPartners = () => {
  const partners = [
    { name: "Jamaica Public Service", logo: "JPS", color: "bg-blue-600" },
    { name: "Caribbean Electrical Supply", logo: "CES", color: "bg-green-600" },
    { name: "Jamaican Institute of Engineers", logo: "JIE", color: "bg-purple-600" },
    { name: "Local Contractors Alliance", logo: "LCA", color: "bg-orange-600" },
    { name: "Equipment Suppliers Group", logo: "ESG", color: "bg-teal-600" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-muted-foreground mb-8">
            Trusted By Leading Jamaican Electrical Companies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center p-6 bg-card rounded-lg border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className={`w-12 h-12 ${partner.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
                </div>
                <div className="text-xs text-muted-foreground font-medium">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>JPS Approved Training</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Government Recognized</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Industry Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};