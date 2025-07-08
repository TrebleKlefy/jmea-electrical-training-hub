import { Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { articles } from '@/data/articles';
import { Button } from '@/components/ui/button';

export const Articles = () => {
  // Split articles into featured and regular
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-foreground mb-4">
              Learn All Things Electrical - Jamaica Edition
            </h2>
            <h3 className="text-section-subtitle text-secondary mb-6">Latest Articles</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free articles to increase your electrical knowledge with Jamaican context!
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-hero p-12 text-white flex items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                      <TrendingUp size={14} />
                      <span>Featured Article</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-white/80 mb-6">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      <span>{featuredArticle.category}</span>
                    </div>
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Read Full Article
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-section p-12 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="w-16 h-16 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularArticles.map((article, index) => (
              <div key={index} className="card-elevated group hover:scale-105 transition-all duration-300">
                {/* Category Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground space-x-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h4>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <a 
                  href={article.url} 
                  className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors group/link"
                >
                  Read More 
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-card border border-border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Jamaican Electrical News
              </h3>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, code updates, and industry news delivered to your inbox monthly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                <Button className="btn-secondary shrink-0">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. Only relevant electrical content for Jamaica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};