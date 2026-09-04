const CONFIG = {
  whatsappNumber: '94770000000', // Replace with the owner's WhatsApp number (country code, no + or spaces)
  displayPhone: '+94 77 000 0000',
  email: 'hello@clearlankatravel.com'
};

// Browser-local fallback while the production CMS loads.
const adminContent = JSON.parse(localStorage.getItem('clearLankaAdminContent') || '{}');
Object.assign(CONFIG, {
  whatsappNumber: adminContent.whatsappNumber || CONFIG.whatsappNumber,
  displayPhone: adminContent.displayPhone || CONFIG.displayPhone,
  email: adminContent.email || CONFIG.email
});
if (adminContent.heroEyebrow) document.querySelector('.eyebrow').lastChild.textContent = ` ${adminContent.heroEyebrow}`;
if (adminContent.heroTitle) document.querySelector('.hero h1').textContent = adminContent.heroTitle;
if (adminContent.heroLead) document.querySelector('.hero-lead').textContent = adminContent.heroLead;
if (adminContent.priceRoute) document.querySelector('.price-card-head h3').textContent = adminContent.priceRoute;
if (adminContent.priceMin) document.querySelectorAll('.price-range span')[0].textContent = `$${adminContent.priceMin}`;
if (adminContent.priceMax) document.querySelectorAll('.price-range span')[1].textContent = `$${adminContent.priceMax}`;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  const text = encodeURIComponent('Hello Clear Lanka Travel, I would like help planning my Sri Lanka trip.');
  link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
});
document.querySelectorAll('[data-phone]').forEach((node) => node.textContent = CONFIG.displayPhone);
document.querySelectorAll('[data-email]').forEach((link) => link.href = `mailto:${CONFIG.email}`);
document.querySelectorAll('[data-email-text]').forEach((node) => node.textContent = CONFIG.email);
document.querySelector('#year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const testimonials = [
  { quote: 'Our driver was exactly where promised, the price matched the quote, and we felt looked after without ever being sold to. It was the easiest part of planning Sri Lanka.', initials: 'AM', name: 'Anna & Marc', trip: 'Germany · 12-day trip' },
  { quote: 'The price check saved us from a very expensive taxi mistake. The advice was quick, warm, and genuinely useful—not pushy at all.', initials: 'JT', name: 'Jamie T.', trip: 'United Kingdom · Solo traveller' },
  { quote: 'Our guide in Ella was wonderful with our children and changed the pace when rain arrived. That kind of local care made the whole day.', initials: 'SR', name: 'Sofia & family', trip: 'Spain · Family holiday' }
];
document.querySelectorAll('.dots button').forEach((button, index) => button.addEventListener('click', () => {
  const item = testimonials[index];
  document.querySelector('.testimonial-wrap blockquote').textContent = item.quote;
  document.querySelector('.guest>span').textContent = item.initials;
  document.querySelector('.guest b').textContent = item.name;
  document.querySelector('.guest small').textContent = item.trip;
  document.querySelectorAll('.dots button').forEach((dot, i) => dot.classList.toggle('active', i === index));
  document.querySelector('.dots').setAttribute('aria-label', `Testimonial ${index + 1} of ${testimonials.length}`);
}));

const form = document.querySelector('#enquiry-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const status = form.querySelector('.form-status');
  const help = data.getAll('help').join(', ') || 'general travel help';
  const subject = encodeURIComponent(`Sri Lanka trip enquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nDates: ${data.get('dates') || 'Not decided'}\nTravellers: ${data.get('travellers')}\nHelp needed: ${help}\n\n${data.get('message')}`);
  status.textContent = 'Your email app is opening with your enquiry ready to send.';
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
});

const chatButton = document.querySelector('.chat-button');
const chatPopover = document.querySelector('.chat-popover');
const chatClose = document.querySelector('.chat-close');
function toggleChat(show) {
  chatPopover.hidden = !show;
  if (show) chatClose.focus(); else chatButton.focus();
}
chatButton.addEventListener('click', () => toggleChat(true));
chatClose.addEventListener('click', () => toggleChat(false));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !chatPopover.hidden) toggleChat(false); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

const cmsCfg=window.CLEAR_LANKA_SUPABASE;
const cmsClient=window.supabase?.createClient(cmsCfg?.url,cmsCfg?.anonKey);
async function loadPublishedCms(){
  if(!cmsClient)return;
  const [settingsResult,itemsResult]=await Promise.all([
    cmsClient.from('site_settings').select('content').eq('id','main').maybeSingle(),
    cmsClient.from('site_items').select('*').eq('is_published',true).order('sort_order')
  ]);
  if(settingsResult.error||itemsResult.error)return;
  const settings=settingsResult.data?.content||{},items=itemsResult.data||[];
  if(settings.heroEyebrow)document.querySelector('.eyebrow').lastChild.textContent=` ${settings.heroEyebrow}`;
  if(settings.heroTitle)document.querySelector('.hero h1').textContent=settings.heroTitle;
  if(settings.heroLead)document.querySelector('.hero-lead').textContent=settings.heroLead;
  Object.assign(CONFIG,{whatsappNumber:settings.whatsappNumber||CONFIG.whatsappNumber,displayPhone:settings.displayPhone||CONFIG.displayPhone,email:settings.email||CONFIG.email});
  refreshContactLinks();renderCmsServices(items.filter(i=>i.type==='service'));renderDiscover(items.filter(i=>['package','hotel','place'].includes(i.type)));renderCmsPartners(items.filter(i=>i.type==='partner'));applyCmsLayout(settings);
}
function refreshContactLinks(){document.querySelectorAll('[data-whatsapp]').forEach(link=>{link.href=`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Clear Lanka Travel, I would like help planning my Sri Lanka trip.')}`});document.querySelectorAll('[data-phone]').forEach(node=>node.textContent=CONFIG.displayPhone);document.querySelectorAll('[data-email]').forEach(link=>link.href=`mailto:${CONFIG.email}`);document.querySelectorAll('[data-email-text]').forEach(node=>node.textContent=CONFIG.email)}
function renderCmsServices(services){if(!services.length)return;document.querySelector('.service-grid').innerHTML=services.map((item,index)=>`<article class="service-card ${index===0?'featured':''} reveal visible"><div class="icon-box">${safeText(item.metadata?.icon||'⌁')}</div><span class="card-number">${String(index+1).padStart(2,'0')}</span><h3>${safeText(item.title)}</h3><p>${safeText(item.description)}</p>${item.price_label?`<b class="cms-price">${safeText(item.price_label)}</b>`:''}<a href="#enquire">Ask about this <span>→</span></a></article>`).join('')}
function renderDiscover(records){if(!records.length)return;let section=document.querySelector('#discover');if(!section){section=document.createElement('section');section.id='discover';section.className='section discover';document.querySelector('#services').insertAdjacentElement('afterend',section)}section.innerHTML=`<div class="container"><div class="section-heading"><div><span class="kicker">Explore your way</span><h2>Tours, stays and places<br>you can shape yourself.</h2></div><p>Every listing has a clear description, location and price guide.</p></div><div class="discover-grid">${records.map(item=>`<article class="discover-card">${item.image_url?`<img src="${safeAttr(item.image_url)}" alt="${safeAttr(item.image_alt||item.title)}" loading="lazy">`:`<div class="discover-art"></div>`}<div><span>${safeText(item.badge||item.type)}</span><h3>${safeText(item.title)}</h3><small>${safeText(item.location)}</small><p>${safeText(item.description)}</p><footer><b>${safeText(item.price_label||'Ask for details')}</b><a href="#enquire">Enquire →</a></footer></div></article>`).join('')}</div></div>`}
function renderCmsPartners(partners){if(!partners.length)return;document.querySelector('.partner-grid').innerHTML=partners.map(item=>`<article class="partner-card reveal visible">${item.image_url?`<img class="partner-upload" src="${safeAttr(item.image_url)}" alt="${safeAttr(item.image_alt||item.title)}" loading="lazy">`:'<div class="partner-image coast"></div>'}<div class="partner-info"><small>${safeText(item.subtitle)}</small><h3>${safeText(item.title)}</h3><p>${safeText(item.description)}</p><a href="#enquire">Ask about availability →</a></div></article>`).join('')}
function applyCmsLayout(settings){document.body.dataset.theme=settings.theme||'island';document.body.dataset.cardLayout=settings.cardLayout||'grid';const visibility=settings.sectionVisibility||{};for(const [key,visible] of Object.entries(visibility)){const section=document.querySelector(`#${key}`);if(section)section.hidden=visible===false}const order=settings.sectionOrder||[];const main=document.querySelector('main'),anchor=document.querySelector('.enquire');order.forEach(key=>{const section=document.querySelector(`#${key}`);if(section&&anchor)main.insertBefore(section,anchor)})}
function safeText(value=''){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function safeAttr(value=''){return safeText(value).replace(/`/g,'&#96;')}
loadPublishedCms();
