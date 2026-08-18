import Image from "next/image";
import { MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { CanvasText } from "@/components/ui/canvas-text";
import { SiteHeader } from "@/components/site-header";

const heroWaveColors = ["#e3ae28", "#f7d77a", "#fff3c4", "#e3ae28", "#c48a12"];

const services = [
  ["01", "Dermatology care", "Clinical dermatology", "Thoughtful consultations for skin concerns, guided by a qualified clinic professional.", "/images/dermatology-concept.png", "Dermatology consultation tools in a clean clinic setting"],
  ["02", "Skin & facial care", "Skin & facial care", "Personalized treatments designed around your skin, comfort, and long-term care.", "/images/facial-care-concept.png", "A calm facial treatment room prepared for a client"],
  ["03", "Aesthetic treatments", "Laser & aesthetics", "Modern aesthetic services delivered in a calm, professional clinic setting.", "/images/laser-aesthetics-concept.png", "Modern aesthetic equipment in a clinic treatment room"],
];

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>;

export default function Home() {
  return <main>
    <SiteHeader />

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Aesthetics · Dermatology · Anti-aging</p>
        <h1>Expert care for skin that feels like <CanvasText text="you." className="hero-canvas-word" backgroundClassName="bg-[#e3ae28]" colors={heroWaveColors} animationDuration={14} lineGap={5} lineWidth={1.2} curveIntensity={18} /></h1>
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
        <p className="placeholder-label">AI concept image · approved clinic photography to follow</p>
      </div>
    </section>

    <section className="trust-bar" aria-label="Clinic details">
      <div><span className="trust-icon"><Sparkles aria-hidden="true" /></span><p><strong>Dermatology & aesthetics</strong><small>Care tailored to your needs</small></p></div>
      <div><span className="trust-icon"><MapPin aria-hidden="true" /></span><p><strong>Antipolo City</strong><small>Sumulong Highway, Mambugan</small></p></div>
      <div><span className="trust-icon"><Phone aria-hidden="true" /></span><p><strong>0949 728 9206</strong><small>Call to request an appointment</small></p></div>
    </section>

    <section className="services anchor-section" id="services">
      <div className="section-heading"><div><p className="eyebrow"><span /> Our services</p><h2>Care that starts with <em>listening.</em></h2></div><p>From everyday skin concerns to aesthetic goals, explore clinic services designed around informed, individual care.</p></div>
      <div className="service-grid">{services.map(([number,label,title,copy,image,alt]) => <article className="service-card" key={number}>
        <div className="service-top"><span>{number}</span><small>{label}</small></div><div className="service-art"><Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
        <h3>{title}</h3><p>{copy}</p><a href="tel:+639497289206">Ask about this service <Arrow /></a>
      </article>)}</div>
    </section>

    <section className="about anchor-section" id="about">
      <div className="about-heading">
        <p className="eyebrow eyebrow-light"><span /> About MyDerm</p>
        <h2>Thoughtful care in a setting designed to feel <em>calm.</em></h2>
      </div>
      <div className="about-copy">
        <p>MyDerm brings dermatology and aesthetic services together with an emphasis on personal guidance, comfort, and clear communication.</p>
        <p>This private concept presents how the clinic&apos;s existing navy, pale blue, ivory, and gold identity can translate into a quieter and more informative digital experience.</p>
        <small>Clinic description and service details remain subject to confirmation.</small>
      </div>
    </section>

    <section className="contact anchor-section" id="contact">
      <div className="contact-intro">
        <p className="eyebrow"><span /> Contact</p>
        <h2>Start with a conversation.</h2>
        <p>For appointments and service questions, contact the clinic directly. Medical questions should always be discussed with qualified clinic staff.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item"><Phone aria-hidden="true" /><p><small>Call the clinic</small><a href="tel:+639497289206">0949 728 9206</a></p></div>
        <div className="contact-item"><MapPin aria-hidden="true" /><p><small>Location</small><span>Sumulong Highway, Mambugan<br />Antipolo City</span></p></div>
        <div className="contact-item"><MessageCircle aria-hidden="true" /><p><small>Instagram</small><a href="https://www.instagram.com/mydermph/" target="_blank" rel="noreferrer">@mydermph</a></p></div>
        <div className="contact-actions"><a className="button" href="tel:+639497289206">Book an appointment <Arrow /></a><a className="text-link" href="https://www.instagram.com/mydermph/" target="_blank" rel="noreferrer">Message us <span>↗</span></a></div>
      </div>
    </section>

    <aside className="concept-note" aria-label="Private preview status">
      <strong>Private concept preview</strong>
      <p>Clinic information and imagery require approval before publication. Additional team, gallery, reviews, FAQ, and booking sections can follow after visual and content confirmation.</p>
    </aside>

    <footer><Image src="/myderm-logo.png" alt="MyDerm" width={120} height={120} /><p>Private website concept · Not an official published clinic website</p></footer>
  </main>;
}
