import Image from "next/image";

const services = [
  ["01", "Clinical dermatology", "Thoughtful consultations for skin concerns, guided by a qualified clinic professional.", "/images/dermatology-concept.png", "Dermatology consultation tools in a clean clinic setting"],
  ["02", "Skin & facial care", "Personalized treatments designed around your skin, comfort, and long-term care.", "/images/facial-care-concept.png", "A calm facial treatment room prepared for a client"],
  ["03", "Laser & aesthetics", "Modern aesthetic services delivered in a calm, professional clinic setting.", "/images/laser-aesthetics-concept.png", "Modern aesthetic equipment in a clinic treatment room"],
];

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="MyDerm home"><Image src="/myderm-logo.png" alt="MyDerm" width={160} height={160} priority /></a>
      <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="header-cta" href="tel:+639497289206">Book appointment <Arrow /></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Aesthetics · Dermatology · Anti-aging</p>
        <h1>Expert care for skin that feels like <em>you.</em></h1>
        <p className="hero-intro">Dermatology and aesthetic care in a calm, welcoming clinic—thoughtfully tailored to your skin and your goals.</p>
        <div className="hero-actions">
          <a className="button" href="tel:+639497289206">Book an appointment <Arrow /></a>
          <a className="text-link" href="https://www.instagram.com/mydermph/" target="_blank" rel="noreferrer">Message us <span>↗</span></a>
        </div>
        <p className="fine-print">All services begin with appropriate clinic guidance. Results vary by individual.</p>
      </div>
      <div className="hero-visual" aria-label="Placeholder for an approved clinic photograph">
        <Image className="hero-photo" src="/images/clinic-hero-concept.png" alt="Concept image of a calm dermatology treatment room" fill sizes="(max-width: 900px) 100vw, 53vw" priority />
        <div className="photo-shade" />
        <div className="visual-note"><b>✦</b><p><strong>Care, made personal.</strong><small>A calm space for thoughtful skin care.</small></p></div>
        <p className="placeholder-label">AI concept image · approved clinic photography to follow</p>
      </div>
    </section>

    <section className="trust-bar" aria-label="Clinic details">
      <div><span>✦</span><p><strong>Dermatology & aesthetics</strong><small>Care tailored to your needs</small></p></div>
      <div><span>⌖</span><p><strong>Antipolo City</strong><small>Sumulong Highway, Mambugan</small></p></div>
      <div><span>☎</span><p><strong>0949 728 9206</strong><small>Call to request an appointment</small></p></div>
    </section>

    <section className="services" id="services">
      <div className="section-heading"><div><p className="eyebrow"><span /> Our services</p><h2>Care that starts with <em>listening.</em></h2></div><p>From everyday skin concerns to aesthetic goals, explore clinic services designed around informed, individual care.</p></div>
      <div className="service-grid">{services.map(([number,title,copy,image,alt]) => <article className="service-card" key={number}>
        <div className="service-top"><span>{number}</span><small>Consultation-led</small></div><div className="service-art"><Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
        <h3>{title}</h3><p>{copy}</p><a href="tel:+639497289206">Ask about this service <Arrow /></a>
      </article>)}</div>
      <p className="preview-end">Preview scope · About, team, gallery, reviews, FAQ, and complete contact sections will follow after visual approval.</p>
    </section>
  </main>;
}
