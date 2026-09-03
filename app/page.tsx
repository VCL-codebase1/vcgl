"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Target, Sparkles, Phone, ArrowUp } from "lucide-react";

const subsidiaries = [
  ["Etcon Analytical & Environmental Systems Ltd", "Industrial, scientific and biomedical laboratory solutions.", "/logos/etcon-analytical.png", "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85", "https://etconanalytical.com/"],
  ["Asset Matrix Energy Ltd", "Industrial Engineering Solutions", "/logos/asset-matrix-energy.png", "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85", "https://assetmatrixenergy.com"],
  ["Vethan Concepts Ltd", "Conference & Exhibition event Management, Co-workspace facility.", "/logos/vethanconcepts.png", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85", "https://vethanconcepts.com"],
  ["Asset Matrix Automation Ltd", "Renewable, Automation, Robotics Engineering Solutions.", "/logos/asset-matrix-automation.png", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85", "https://assetmatrixautomation.com/"],
  ["Etcon Labs", "Laboratory Services", "/logos/etcon-labs.webp", "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85", "https://lab.etconanalytical.com/"],
  ["Perfect Events Retail & Consumer", "Event & Party Props, Retail & Wholesale .", "/logos/perfect-events.jpeg", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85", "https://perfecteventsng.com/"],
  ["VethanCon", "Software as a Service (SaaS), App Development (Mobile & Web), FinTech solutions.", "/logos/vethancon.png", "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85", "#"],
];

const brands = [
  "/Brands/a-matrix.jpg",
  "/Brands/anywork365.jpg",
  "/Brands/asset matrix reliability.JPG",
  "/Brands/cerene.PNG",
  "/Brands/RRA.webp",
  "/Brands/Scientifrika.webp",
  "/Brands/V-One1.png",
];

const team = [
  ["Osasogie Osazuwa", "Group Managing Director", "/team/Osasogie%20Osazuwa.jpeg"],
  ["Patricia Osazuwa", "Group Executive Director", "/team/Patricia%20Osazuwa.jpeg"],
  ["Deborah Samuel", "Group Head, Legal, HR & Admin", "/team/Deborah%20Samuel.jpeg"],
  ["Chima Chinonso", "Group Head IT / Digital Products Manager", "/team/Chima%20Chinonso.jpeg"],
  ["Usman Adeniji", "Group Head, Accounts, Finance & Procurement", "/team/Usman%20Adeniji.jpeg"],
  ["Sulaimon Dauda", "Group Head, Operations & Logistics", "/team/Sulaimon%20Dauda.jpeg"],
  ["Regina Imevbore", "Group Head, Creative Marketing & Customer Services", "/team/Regina%20Imevbore.PNG"],
  ["Funmilayo Omoarukhe", "Manager, Events & Exhibition Services", "/team/Funmilayo%20Omoarukhe.jpeg"],
  ["Chinedu Temple", "Group Head, Sales & Business Development", "/team/Chinedu%20Temple.jpeg"],
  ["Michael Adeoye", "Group Head, Technical Sales and Services (Engineering and Scientific Solutions)", "/team/Michael%20Adeoye.jpeg"],
  ["Amosu Deborah", "Manager, Scientific & Laboratory Products", "/team/Amosu%20Deborah.jpeg"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VCGL home">
          <Image className="brand-logo" src="/vcgl logo.jpg" alt="VCGL - Vethan Concepts Group Ltd" width={190} height={70} priority />
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#sectors" onClick={() => setMenuOpen(false)}>Subsidiaries</a>
          <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Vethan Concepts Group / Lagos, Nigeria</p>
          <h1>Innovation Across Industries.<br /><span>Excellence Without Limits</span></h1>
          <p className="hero-copy">Vethan Concepts Group Limited is a diversified conglomerate driving innovation across science, energy, automation, and event experiences in Nigeria and beyond.</p>
          <a className="button button-accent" href="#contact">Start a conversation <span className="icon-animate"><ArrowUpRight size={18} /></span></a>
        </div>
        <div className="hero-footer"><span>01 — 06</span><span className="scroll-line" /> <span>Scroll to explore</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-label"><span>01</span><span>Who we are</span></div>
        <div className="intro-copy">
          <p className="eyebrow">A group with range. A standard without compromise.</p>
          <h2>Excellence without <em>limits.</em></h2>
          <p className="body-copy">Vethan Concepts Group Limited is a dynamic, multi-disciplinary holding company with interests across import and export, sales and distribution, technology, entertainment, agriculture, construction and real estate, and consulting. Founded on innovation, integrity, and impact, we bring together expertise and enterprise to deliver solutions that are future-focused and socially responsible.</p>
          <a className="text-link" href="#sectors">Explore subsidiaries <span className="icon-animate"><ArrowUpRight size={18} /></span></a>
        </div>
        <div className="intro-stat"><strong>06</strong><span>distinct businesses<br />one shared ambition</span></div>
      </section>

      <section className="about-details section-pad" id="about-us">
        <div className="section-label"><span>02</span><span>About us</span></div>
        <div className="company-profile">
          <p className="eyebrow">About Company</p>
          <h2>Who We Are</h2>
          <p>Vethan Concepts Group Limited is a dynamic, multi-disciplinary holding company with interests across diverse industries, including Import and export, Sales and distribution, Technology, Entertainment, Agriculture, Construction and real estate, Consulting.</p>
          <p>Founded on the principles of innovation, integrity, and impact, we bring together expertise and enterprise to deliver solutions that are future focused and socially responsible.</p>
          <p>Headquartered in Lagos-Nigeria, Vethan Concepts Group is driven by a bold ambition: to be a catalyst for transformation. Our integrated business model allows us to adapt rapidly, seize opportunities, and create lasting value for stakeholders across sectors and borders.</p>
        </div>
        <div className="about-details-heading"><p className="eyebrow">What guides the group</p><h2>Purpose in every<br /><em>direction.</em></h2></div>
        <div className="principle-list">
          <article className="principle-card"><span className="principle-icon icon-animate"><Target size={23} /></span><div><h3>Our Mission</h3><p>At Vethan Concepts Group Limited, our mission is to deliver innovative, sustainable, and high-impact solutions that drive value for our clients, empower communities, and shape industries. We are committed to excellence in every endeavor, providing cutting-edge solutions across our diversified portfolio.</p></div></article>
          <article className="principle-card"><span className="principle-icon icon-animate"><ArrowUpRight size={23} /></span><div><h3>Our Vision</h3><p>To be a globally recognized, multi-sector powerhouse, renowned for transforming ideas into lasting legacies, leading with integrity, and creating inclusive growth across all markets we serve.</p></div></article>
          <article className="principle-card"><span className="principle-icon icon-animate"><Sparkles size={23} /></span><div><h3>Our People / Our Culture</h3><p>Our people are the heartbeat of our success. We foster a culture of collaboration, creativity, and continuous growth, empowering talent and nurturing leadership at every level of the organization.</p></div></article>
        </div>
      </section>

      <section className="values section-pad" id="values">
        <div className="section-label light-label"><span>03</span><span>Core values</span></div>
        <div className="values-heading"><h2>The standard<br /><em>we share.</em></h2><p>Our values shape how we think, work, and build relationships across every part of the group.</p></div>
        <div className="values-grid">
          <article className="value-card value-feature"><span>01</span><h3>Professionalism</h3><p>We uphold the highest standards of professionalism in all our interactions, operations, and deliverables, with integrity, accountability, and respect.</p></article>
          <article className="value-card"><span>02</span><h3>Originality</h3><p>Fresh thinking and creativity are the foundation of our innovation and competitive advantage.</p></article>
          <article className="value-card"><span>03</span><h3>World-class</h3><p>We are committed to world-class standards in our products, solutions, and customer experience.</p></article>
          <article className="value-card"><span>04</span><h3>Excellence</h3><p>We pursue the highest standards of quality and performance in every project.</p></article>
          <article className="value-card"><span>05</span><h3>Relationship</h3><p>Trust, transparency, and mutual respect are the cornerstone of sustainable success.</p></article>
        </div>
      </section>

      <section className="sectors section-pad" id="sectors">
        <div className="section-label light-label"><span>04</span><span>Subsidiaries</span></div>
        <div className="sectors-heading"><h2>Network of innovative<br /><em>subsidiaries.</em></h2><p>Our businesses operate independently, connected by a shared commitment to quality, innovation, and customer satisfaction.</p></div>
        <div className="subsidiary-carousel" aria-label="VCGL subsidiaries">
          <div className="subsidiary-track">
            {[...subsidiaries, ...subsidiaries].map(([title, description, logo, image, website], index) => <a className="subsidiary-card" href={website} key={`${title}-${index}`} target="_blank" rel="noopener noreferrer">
              <div className="subsidiary-photo" style={{ backgroundImage: `url(${image})` }}><div className="subsidiary-photo-shade" /><div className="subsidiary-logo"><Image src={logo} alt={`${title} logo`} fill sizes="148px" /></div></div>
            <div className="subsidiary-card-body"><p className="card-category">VCGL subsidiary</p><h3>{title}</h3><p>{description}</p><span className="card-arrow icon-animate"><ArrowUpRight size={22} /></span></div>
          </a>)}
          </div>
        </div>
      </section>

      <section className="brands">
        <h2 className="brands-heading">VCGL Brands</h2>
        <div className="brand-carousel" aria-label="VCGL brands">
          <div className="brand-track">
            {[...brands, ...brands].map((logo, index) => (
              <div className="brand-logo" key={`brand-${index}`}>
                <Image src={logo} alt="Brand logo" fill sizes="120px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team section-pad" id="team">
        <div className="section-label"><span>05</span><span>Meet our team</span></div>
        <div className="team-heading"><h2>The people<br /><em>behind the work.</em></h2><p>Our people are the heartbeat of our success: curious, capable, and committed to making a difference.</p></div>
        <div className="team-grid">
          {team.map(([name, role, image]) => <article className="team-card" key={name}>
            <div className="team-photo" style={{ backgroundImage: `url(${image})` }} />
            <div className="team-card-body"><h3>{name}</h3><p>{role}</p></div>
          </article>)}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-label"><span>06</span><span>Let&apos;s connect</span></div>
        <div className="contact-panel">
          <div className="contact-heading">
            <p className="eyebrow">A good conversation starts here</p>
            <h2>&quot;Innovation across industries.<br /><em>Excellence without limits.</em>&quot;</h2>
          </div>
          <div className="contact-actions">
            <a className="phone-link" href="tel:+2347041943795" aria-label="Call VCGL">
              <span className="phone-icon icon-animate" aria-hidden="true"><Phone size={31} /></span>
              <span><small>Call us anytime</small><strong>+234 704 194 3795</strong></span>
            </a>
            <a className="button button-whatsapp" href="https://wa.me/2347041943795" target="_blank" rel="noreferrer">Send us a WhatsApp message <span className="icon-animate"><ArrowUpRight size={18} /></span></a>
          </div>
          <div className="contact-footer">
            <a className="contact-email" href="mailto:info@vcgl.ng">info@vcgl.ng <span className="icon-animate"><ArrowUpRight size={18} /></span></a>
            <p>Head Office: No. 23, House 13 Osogbo Street, Ogudu, Lagos.<br />Operational Office: 445 Herbert Macaulay Way, Yaba, Lagos State.</p>
          </div>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><Image className="brand-logo footer-logo" src="/wheel logo.png" alt="VCGL - Vethan Concepts Group Ltd" width={150} height={50} /></a><span>Innovation across industries. Excellence without limits.</span><a href="#top">Back to top <span className="icon-animate"><ArrowUp size={16} /></span></a></footer>
    </main>
  );
}
