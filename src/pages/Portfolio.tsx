import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Film, Camera, ShoppingBag, LayoutTemplate } from "lucide-react";
import Reveal from "@/components/Reveal";

type Cat = "all" | "ecommerce" | "cinematic" | "short-form";

const projects: { title: string; cat: Exclude<Cat, "all">; desc: string; icon?: any; tone?: string; video?: string; tag?: string }[] = [
  { 
    title: "Action Sports Coverage", 
    cat: "short-form", 
    tag: "DYNAMIC EVENT CINEMATOGRAPHY",
    desc: "Dynamic short-form content creation for a high-profile client, showcasing versatile editing styles and engaging storytelling.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1778691968/1.0_GradeLabStudios_Skatepark_Brand_Reel_hkhu5j.mp4"
  },
  { 
    title: "WearESO Activewear Campaign", 
    cat: "cinematic", 
    tag: "DTC • APPAREL LAUNCH",
    desc: "Cinematic launch video for WearESO, showcasing high-end fashion with dynamic editing and rich color grading.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1778358357/WearESO_Launch_zytmkp.mp4"
  },
  { 
    title: "EduCollege AI Commercial", 
    cat: "ecommerce", 
    tag: "VFX & 3D INTEGRATION",
    desc: "AI-driven commercial video for educational tech platforms.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922220/EduCollege_Ai_video_monster_cip5iw.mp4",
    tone: "from-zinc-800 to-black"
  },
  { 
    title: "Creator Vlog Production", 
    cat: "ecommerce", 
    tag: "HIGH-RETENTION EDITING",
    desc: "Seasonal campaign video for a Japanese e-commerce brand, blending cinematic storytelling with festive visuals.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1778358743/Christmas_In_Hiroshima_kowfsx.mp4",
    tone: "from-amber-900/40 to-zinc-900"
  },
  { 
    title: "International Travel Narrative", 
    cat: "cinematic", 
    tag: "CREATOR ECONOMY ASSETS",
    desc: "Dynamic brand storytelling featuring high-energy editing and precision color grading.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777923843/Short_for_GL_Studios_Website_JP_New_year_riedrm.mp4",
    tone: "from-zinc-900 to-black"
  },
  {
    title: "Bristol Fit Commercial Facility",
    cat: "cinematic",
    tag: "BRICK & MORTAR BRANDING",
    desc: "Dynamic commercial branding video showcasing the energy and facilities of Bristol Fit.",
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1778855320/Bristol_Gym_For_Website_hbd5k2.mp4",
    tone: "from-zinc-900 to-black"
  }
];



const digitalProjects = [
  {
    title: "Modern E-Commerce Storefront",
    tag: "SHOPIFY PLUS",
    desc: "A custom headless commerce solution designed for high-volume conversion and brand storytelling.",
    tone: "from-zinc-800/80 to-black",
    image: "https://res.cloudinary.com/dthwzsl69/image/upload/v1778855040/Mockup_image_for_website_laptop_frame_sgfd26.png"
  },
  {
    title: "B2B Enterprise Platform",
    tag: "WEB ARCHITECTURE",
    desc: "A high-performance digital presence engineered to accelerate enterprise lead generation.",
    tone: "from-zinc-800 to-zinc-900",
    image: "https://res.cloudinary.com/dthwzsl69/image/upload/v1778854877/Mockup_image_for_website_ipad_frame_zyhtal.png"
  },
  {
    title: "Technical SEO Framework",
    tag: "SEARCH OPTIMIZATION",
    desc: "Comprehensive technical overhaul driving sustained organic traffic and domain authority.",
    tone: "from-zinc-900 to-black",
    image: "https://res.cloudinary.com/dthwzsl69/image/upload/v1778854946/Mockup_image_for_website_IPHONE_frame_gfnrsl.png"
  }
];

const Portfolio = () => {

  return (
    <div>
      <section className="pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">Selected Work</p>
            <h1 className="font-serif-display text-[2.4rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl md:leading-[1.02] max-w-5xl">
              A library of visual case studies.
            </h1>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Real projects across real estate, e-commerce and cinematic product work —
              shot, edited and finished entirely in-house.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="py-8 md:py-12">
        <div className="container">
          <Reveal>
            <h2 className="font-serif-display text-3xl md:text-4xl mb-10">
              Cinematic Production & Brand Narratives
            </h2>
          </Reveal>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="group cursor-pointer"
                >
                  {/* Visual placeholder */}
                  <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.tone} overflow-hidden rounded-[var(--radius)] mb-4 border border-border`}>
                    {p.video ? (
                      <video
                        src={p.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-40">
                        <Film className="h-12 w-12" strokeWidth={1.2} />
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <p className="text-sm text-white/90 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{p.tag}</p>
                      <h3 className="font-serif-display text-xl transition-all">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* DIGITAL GRID */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="font-serif-display text-3xl md:text-4xl mb-4">
                  Digital Architecture & E-Commerce Growth
                </h2>
                <p className="text-muted-foreground max-w-xl text-sm md:text-base">
                  High-converting digital experiences, enterprise-grade storefronts, and 
                  data-driven search optimization.
                </p>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {digitalProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  {/* Visual content */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.tone} overflow-hidden rounded-[var(--radius)] mb-4 border border-border flex items-center justify-center`}>
                    {p.image ? (
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="opacity-40">
                        <LayoutTemplate className="h-12 w-12" strokeWidth={1.2} />
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <p className="text-sm text-white/90 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{p.tag}</p>
                      <h3 className="font-serif-display text-xl transition-all">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 surface-soft border-t border-border/50">
        <div className="container">
          <Reveal>
            <h2 className="font-serif-display text-3xl md:text-7xl leading-[1.05] max-w-4xl">
              Your project could be next.
            </h2>
            <p className="mt-5 md:mt-6 text-muted-foreground max-w-md text-sm md:text-base">
              We take on a small number of new clients each quarter to keep craft at the highest level.
            </p>
            <Link to="/contact" className="btn-primary mt-8 md:mt-10">
              Book a Pitch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
