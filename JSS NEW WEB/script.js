// Translations object
const translations = {
  en: {
    hero_title: "Empowering Biscuit Manufacturing with High-Quality Products and Expertise",
    hero_desc: "Your Trusted Partner for Engineering Goods, Biscuit Die Solutions and Cotton Conveyor Belts.",
    services_title: "Efficient Manufacturing and Integrated Service",
    service_1_title: "Production & Assembly",
    service_1_desc: "Made to Order for precision and efficiency in biscuit production",
    service_2_title: "Custom Manufacturing",
    service_2_desc: "Custom Made In India parts of the assembly line manufactured for various use",
    service_3_title: "Spare Parts & Tools",
    service_3_desc: "Sale of Spare parts and Tools used by the assembly and workforce",
    service_4_title: "Packaging & Logistics",
    service_4_desc: "Custom packaging and Seamless Logistics Solutions",
    service_5_title: "Sales and Support",
    service_5_desc: "Pre and After Sales Support for Seamless Integration",
    service_6_title: "Consulting & Research",
    service_6_desc: "Consultation Services for new assembly lines and machinery",
    benefits_title: "Key Benefits of Working with us",
    benefit_1_title: "Efficiency",
    benefit_1_desc: "Streamline manufacturing with durable and precision engineered parts.",
    benefit_2_title: "Customization",
    benefit_2_desc: "Tailored solutions for unique machinery and production needs.",
    benefit_3_title: "Reliability",
    benefit_3_desc: "Trusted by Biscuit manufacturers in East and West Africa for top-notch quality.",
    cta_title: "About Us",
    cta_desc_1: "Established in 2007, J. S. S. Enterprises has grown to become a trusted name in the manufacturing and trading of high-quality biscuit moulds and industrial components. With a commitment to precision, innovation, and customer satisfaction.",
    cta_desc_2: "Operating from Mumbai, India, our compact yet highly skilled team is dedicated to delivering solutions that meet the highest standards of quality. We proudly serve a diverse clientele, including leading biscuit manufacturers across India and international markets. At J. S. S. Enterprises, we combine over a decade of expertise with a deep understanding of industry needs to create reliable and efficient products that help our clients succeed. Whether you're looking for precision moulds or custom solutions, we're here to help bring your vision to life.",
    cta_subtitle: "From Idea to Production in Days",
    ctap: "Request a quote for your emerging Business"
  },
  fr: {
    hero_title: "Renforcer la fabrication de biscuits avec des produits de haute qualité et une expertise",
    hero_desc: "Votre partenaire de confiance pour les biens d'ingénierie, les solutions de moules à biscuits et les bandes transporteuses en coton.",
    services_title: "Fabrication efficace et service intégré",
    service_1_title: "Production et assemblage",
    service_1_desc: "Fabriqué sur commande pour la précision et l'efficacité dans la production de biscuits",
    service_2_title: "Fabrication sur mesure",
    service_2_desc: "Pièces de la chaîne de montage fabriquées en Inde sur mesure pour divers usages",
    service_3_title: "Pièces détachées et outils",
    service_3_desc: "Vente de pièces détachées et d'outils utilisés par l'assemblage et la main-d'œuvre",
    service_4_title: "Emballage et logistique",
    service_4_desc: "Solutions d'emballage personnalisées et logistiques fluides",
    service_5_title: "Ventes et support",
    service_5_desc: "Support avant et après-vente pour une intégration fluide",
    service_6_title: "Consultation et recherche",
    service_6_desc: "Services de consultation pour les nouvelles lignes d'assemblage et machines",
    benefits_title: "Avantages clés de travailler avec nous",
    benefit_1_title: "Efficacité",
    benefit_1_desc: "Optimisez la fabrication avec des pièces durables et conçues avec précision.",
    benefit_2_title: "Personnalisation",
    benefit_2_desc: "Solutions sur mesure pour des besoins uniques en machines et production.",
    benefit_3_title: "Fiabilité",
    benefit_3_desc: "Approuvé par les fabricants de biscuits en Afrique de l'Est et de l'Ouest pour une qualité exceptionnelle.",
    cta_title: "À propos de nous",
    cta_desc_1: "Fondée en 2007, J. S. S. Enterprises est devenue un nom de confiance dans la fabrication et le commerce de moules à biscuits et de composants industriels de haute qualité. Avec un engagement envers la précision, l'innovation et la satisfaction client.",
    cta_desc_2: "Basée à Mumbai, en Inde, notre équipe compacte mais hautement qualifiée se consacre à fournir des solutions répondant aux normes de qualité les plus élevées. Nous servons avec fierté une clientèle diversifiée, y compris les principaux fabricants de biscuits en Inde et sur les marchés internationaux. Chez J. S. S. Enterprises, nous combinons plus d'une décennie d'expertise avec une compréhension approfondie des besoins de l'industrie pour créer des produits fiables et efficaces qui aident nos clients à réussir. Que vous recherchiez des moules de précision ou des solutions personnalisées, nous sommes là pour donner vie à votre vision.",
    cta_subtitle: "De l'idée à la production en quelques jours",
    ctap: "Demandez un devis pour votre entreprise émergente"
  },
  ar: {
    hero_title: "تمكين تصنيع البسكويت بمنتجات عالية الجودة والخبرة",
    hero_desc: "شريكك الموثوق للسلع الهندسية، حلول قوالب البسكويت، وأحزمة النقل القطنية.",
    services_title: "تصنيع فعال وخدمة مدمجة",
    service_1_title: "الإنتاج والتجميع",
    service_1_desc: "مصنوع حسب الطلب للدقة والكفاءة في إنتاج البسكويت",
    service_2_title: "التصنيع المخصص",
    service_2_desc: "أجزاء خط التجميع المصنوعة في الهند حسب الطلب لاستخدامات متنوعة",
    service_3_title: "قطع الغيار والأدوات",
    service_3_desc: "بيع قطع الغيار والأدوات المستخدمة في التجميع والقوى العاملة",
    service_4_title: "التعبئة والخدمات اللوجستية",
    service_4_desc: "حلول تعبئة مخصصة وخدمات لوجستية سلسة",
    service_5_title: "المبيعات والدعم",
    service_5_desc: "دعم ما قبل وبعد البيع لتكامل سلس",
    service_6_title: "الاستشارات والبحث",
    service_6_desc: "خدمات استشارية لخطوط التجميع والآلات الجديدة",
    benefits_title: "الفوائد الرئيسية للعمل معنا",
    benefit_1_title: "الكفاءة",
    benefit_1_desc: "تبسيط التصنيع بأجزاء متينة ومصممة بدقة.",
    benefit_2_title: "التخصيص",
    benefit_2_desc: "حلول مخصصة لتلبية احتياجات الآلات والإنتاج الفريدة.",
    benefit_3_title: "الموثوقية",
    benefit_3_desc: "موثوق به من قبل مصنعي البسكويت في شرق وغرب إفريقيا لجودة عالية.",
    cta_title: "من نحن",
    cta_desc_1: "تأسست في عام 2007، أصبحت J. S. S. Enterprises اسمًا موثوقًا في تصنيع وتجارة قوالب البسكويت والمكونات الصناعية عالية الجودة. مع التزام بالدقة والابتكار ورضا العملاء.",
    cta_desc_2: "تعمل من مومباي، الهند، فريقنا المدمج ولكنه عالي المهارة مكرس لتقديم حلول تلبي أعلى معايير الجودة. نحن نخدم بفخر عملاء متنوعين، بما في ذلك الشركات المصنعة الرائدة للبسكويت في الهند والأسواق الدولية. في J. S. S. Enterprises، نجمع بين أكثر من عقد من الخبرة وفهم عميق لاحتياجات الصناعة لخلق منتجات موثوقة وفعالة تساعد عملائنا على النجاح. سواء كنت تبحث عن قوالب دقيقة أو حلول مخصصة، نحن هنا لتحقيق رؤيتك.",
    cta_subtitle: "من الفكرة إلى الإنتاج في أيام",
    ctap: "اطلب عرض أسعار لأعمالك الناشئة"
  },
  es: {
    hero_title: "Potenciando la fabricación de galletas con productos de alta calidad y experiencia",
    hero_desc: "Su socio de confianza para bienes de ingeniería, soluciones de moldes para galletas y cintas transportadoras de algodón.",
    services_title: "Fabricación eficiente y servicio integrado",
    service_1_title: "Producción y montaje",
    service_1_desc: "Hecho a medida para precisión y eficiencia en la producción de galletas",
    service_2_title: "Fabricación personalizada",
    service_2_desc: "Piezas de la línea de montaje fabricadas en India a medida para diversos usos",
    service_3_title: "Repuestos y herramientas",
    service_3_desc: "Venta de repuestos y herramientas utilizados por el montaje y la fuerza laboral",
    service_4_title: "Embalaje y logística",
    service_4_desc: "Soluciones de embalaje personalizadas y logística fluida",
    service_5_title: "Ventas y soporte",
    service_5_desc: "Soporte antes y después de la venta para una integración fluida",
    service_6_title: "Consultoría e investigación",
    service_6_desc: "Servicios de consultoría para nuevas líneas de montaje y maquinaria",
    benefits_title: "Beneficios clave de trabajar con nosotros",
    benefit_1_title: "Eficiencia",
    benefit_1_desc: "Optimice la fabricación con piezas duraderas y diseñadas con precisión.",
    benefit_2_title: "Personalización",
    benefit_2_desc: "Soluciones a medida para necesidades únicas de maquinaria y producción.",
    benefit_3_title: "Confiabilidad",
    benefit_3_desc: "Confiado por fabricantes de galletas en África Oriental y Occidental por su calidad excepcional.",
    cta_title: "Sobre nosotros",
    cta_desc_1: "Establecida en 2007, J. S. S. Enterprises se ha convertido en un nombre de confianza en la fabricación y comercio de moldes para galletas y componentes industriales de alta calidad. Con un compromiso con la precisión, la innovación y la satisfacción del cliente.",
    cta_desc_2: "Operando desde Mumbai, India, nuestro equipo compacto pero altamente capacitado está dedicado a entregar soluciones que cumplen con los más altos estándares de calidad. Servimos con orgullo a una clientela diversa, incluyendo a los principales fabricantes de galletas en India y mercados internacionales. En J. S. S. Enterprises, combinamos más de una década de experiencia con un profundo entendimiento de las necesidades de la industria para crear productos confiables y eficientes que ayudan a nuestros clientes a tener éxito. Ya sea que busque moldes de precisión o soluciones personalizadas, estamos aquí para hacer realidad su visión.",
    cta_subtitle: "De la idea a la producción en días",
    ctap: "Solicite un presupuesto para su negocio emergente"
  },
  pt: {
    hero_title: "Fortalecendo a fabricação de biscoitos com produtos de alta qualidade e expertise",
    hero_desc: "Seu parceiro confiável para bens de engenharia, soluções de moldes para biscoitos e correias transportadoras de algodão.",
    services_title: "Fabricação eficiente e serviço integrado",
    service_1_title: "Produção e montagem",
    service_1_desc: "Feito sob medida para precisão e eficiência na produção de biscoitos",
    service_2_title: "Fabricação personalizada",
    service_2_desc: "Peças da linha de montagem fabricadas na Índia sob medida para diversos usos",
    service_3_title: "Peças sobressalentes e ferramentas",
    service_3_desc: "Venda de peças sobressalentes e ferramentas usadas pela montagem e pela força de trabalho",
    service_4_title: "Embalagem e logística",
    service_4_desc: "Soluções de embalagem personalizadas e logística fluida",
    service_5_title: "Vendas e suporte",
    service_5_desc: "Suporte pré e pós-venda para integração fluida",
    service_6_title: "Consultoria e pesquisa",
    service_6_desc: "Serviços de consultoria para novas linhas de montagem e máquinas",
    benefits_title: "Benefícios principais de trabalhar conosco",
    benefit_1_title: "Eficiência",
    benefit_1_desc: "Otimize a fabricação com peças duráveis e projetadas com precisão.",
    benefit_2_title: "Personalização",
    benefit_2_desc: "Soluções sob medida para necessidades únicas de máquinas e produção.",
    benefit_3_title: "Confiabilidade",
    benefit_3_desc: "Confiado por fabricantes de biscoitos na África Oriental e Ocidental por sua qualidade excepcional.",
    cta_title: "Sobre nós",
    cta_desc_1: "Fundada em 2007, a J. S. S. Enterprises tornou-se um nome confiável na fabricação e comércio de moldes para biscoitos e componentes industriais de alta qualidade. Com um compromisso com precisão, inovação e satisfação do cliente.",
    cta_desc_2: "Operando a partir de Mumbai, Índia, nossa equipe compacta, mas altamente qualificada, dedica-se a entregar soluções que atendem aos mais altos padrões de qualidade. Servimos com orgulho uma clientela diversa, incluindo os principais fabricantes de biscoitos na Índia e mercados internacionais. Na J. S. S. Enterprises, combinamos mais de uma década de experiência com um profundo entendimento das necessidades da indústria para criar produtos confiáveis e eficientes que ajudam nossos clientes a ter sucesso. Seja você buscando moldes de precisão ou soluções personalizadas, estamos aqui para tornar sua visão realidade.",
    cta_subtitle: "Da ideia à produção em dias",
    ctap: "Solicite um orçamento para seu negócio emergente"
  },
  sw: {
    hero_title: "Kutoa Nguvu kwa Utengenezaji wa Biskuti kwa Bidhaa za Ubora wa Juu na Utaalam",
    hero_desc: "Mshirika Wako wa Kuaminika kwa Bidhaa za Uhandisi, Suluhisho za Mold za Biskuti na Mikanda ya Usafirishaji ya Pamba.",
    services_title: "Utengenezaji wa Ufanisi na Huduma Iliyojumuishwa",
    service_1_title: "Uzalishaji na Mkusanyiko",
    service_1_desc: "Imeundwa kwa Agizo kwa Usahihi na Ufanisi katika Uzalishaji wa Biskuti",
    service_2_title: "Utengenezaji wa Kubinafsisha",
    service_2_desc: "Sehemu za Laini ya Mkusanyiko Zilizotengenezwa India kwa Matumizi Mbalimbali",
    service_3_title: "Vipuri na Zana",
    service_3_desc: "Uuzaji wa Vipuri na Zana Zinazotumiwa na Mkusanyiko na Wafanyakazi",
    service_4_title: "Ufungaji na Usafirishaji",
    service_4_desc: "Suluhisho za Ufungaji za Kubinafsisha na Usafirishaji Usio na Mshono",
    service_5_title: "Mauzo na Msaada",
    service_5_desc: "Msaada wa Kabla na Baada ya Mauzo kwa Usanisi Usio na Mshono",
    service_6_title: "Ushauri na Utafiti",
    service_6_desc: "Huduma za Mushauri kwa Mistari Mipya ya Mkusanyiko na Mashine",
    benefits_title: "Faida za Msingi za Kufanya Kazi Nasi",
    benefit_1_title: "Ufanisi",
    benefit_1_desc: "Rahisisha utengenezaji kwa sehemu za kudumu na zilizoundwa kwa usahihi.",
    benefit_2_title: "Ubinafsishaji",
    benefit_2_desc: "Suluhisho zilizobinafsishwa kwa mahitaji ya kipekee ya mashine na uzalishaji.",
    benefit_3_title: "Kuegemea",
    benefit_3_desc: "Inaaminika na watengenezaji wa biskuti katika Afrika Mashariki na Magharibi kwa ubora wa hali ya juu.",
    cta_title: "Kuhusu Sisi",
    cta_desc_1: "Ilianzishwa mwaka 2007, J. S. S. Enterprises imekua na kuwa jina linaloaminika katika utengenezaji na biashara ya mold za biskuti za ubora wa juu na vifaa vya viwandani. Kwa kujitolea kwa usahihi, uvumbuzi, na kuridhika kwa wateja.",
    cta_desc_2: "Inafanya kazi kutoka Mumbai, India, timu yetu ndogo lakini yenye ujuzi wa hali ya juu imejitolea kutoa suluhisho zinazokidhi viwango vya juu vya ubora. Tunawahudumia kwa fahari wateja wa aina mbalimbali, ikiwa ni pamoja na watengenezaji wakuu wa biskuti nchini India na masoko ya kimataifa. Katika J. S. S. Enterprises, tunachanganya zaidi ya muongo wa utaalamu na uelewa wa kina wa mahitaji ya sekta ili kuunda bidhaa zinazoaminika na zenye ufanisi zinazosaidia wateja wetu kufaulu. Iwe unatafuta mold za usahihi au suluhisho za kubinafsisha, tuko hapa kusaidia kuleta maono yako kwa maisha.",
    cta_subtitle: "Kutoka Wazo hadi Uzalishaji kwa Siku",
    ctap: "Omba Nukuu kwa Biashara Yako Inayochipuka"
  }
};

// Country to language mapping
const countryLanguageMap = {
  'DZ': 'ar', 'AO': 'pt', 'BJ': 'fr', 'BW': 'en', 'BF': 'fr', 'BI': 'fr', 'CV': 'pt',
  'CM': 'fr', 'CF': 'fr', 'TD': 'fr', 'KM': 'fr', 'CG': 'fr', 'CI': 'fr', 'CD': 'fr',
  'DJ': 'fr', 'EG': 'ar', 'GQ': 'es', 'ER': 'en', 'SZ': 'en', 'ET': 'en', 'GA': 'fr',
  'GM': 'en', 'GH': 'en', 'GN': 'fr', 'GW': 'pt', 'KE': 'sw', 'LS': 'en', 'LR': 'en',
  'LY': 'ar', 'MG': 'fr', 'MW': 'en', 'ML': 'fr', 'MR': 'ar', 'MU': 'en', 'MA': 'ar',
  'MZ': 'pt', 'NA': 'en', 'NE': 'fr', 'NG': 'en', 'RW': 'fr', 'ST': 'pt', 'SN': 'fr',
  'SC': 'en', 'SL': 'en', 'SO': 'ar', 'ZA': 'en', 'SS': 'en', 'SD': 'ar', 'TZ': 'sw',
  'TG': 'fr', 'TN': 'ar', 'UG': 'sw', 'ZM': 'en', 'ZW': 'en',
  'SA': 'ar', 'AE': 'ar', 'JO': 'ar', 'BR': 'pt', 'AR': 'es', 'CL': 'es', 'PE': 'es',
  'CO': 'es', 'VE': 'es'
};

// Function to update page content
function setLanguage(language) {
  const lang = translations[language] ? language : 'en'; // Fallback to English

  // Update hero section
  document.getElementById('hero-title').textContent = translations[lang].hero_title;
  document.getElementById('hero-desc').textContent = translations[lang].hero_desc;

  // Update services section
  document.getElementById('services-title').textContent = translations[lang].services_title;
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`service-${i}-title`).textContent = translations[lang][`service_${i}_title`];
    document.getElementById(`service-${i}-desc`).textContent = translations[lang][`service_${i}_desc`];
  }

  // Update benefits section
  document.getElementById('benefits-title').textContent = translations[lang].benefits_title;
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`benefit-${i}-title`).textContent = translations[lang][`benefit_${i}_title`];
    document.getElementById(`benefit-${i}-desc`).textContent = translations[lang][`benefit_${i}_desc`];
  }

  // Update CTA section
  document.getElementById('cta-title').textContent = translations[lang].cta_title;
  document.getElementById('cta-desc-1').textContent = translations[lang].cta_desc_1;
  document.getElementById('cta-desc-2').textContent = translations[lang].cta_desc_2;
  document.getElementById('cta-subtitle').textContent = translations[lang].cta_subtitle;
  document.getElementById('ctap').textContent = translations[lang].ctap;

  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
    document.querySelectorAll('.services-grid, .benefits-grid').forEach(grid => {
      grid.style.direction = 'rtl';
    });
  } else {
    document.body.style.direction = 'ltr';
    document.querySelectorAll('.services-grid, .benefits-grid').forEach(grid => {
      grid.style.direction = 'ltr';
    });
  }

  // Update HTML lang attribute for accessibility
  document.documentElement.lang = lang;

  // Save preference
  localStorage.setItem('preferredLanguage', lang);

  // Ensure content is visible after language is set
  document.body.classList.remove('loading');
}

// Function to show language modal
function showLanguageModal(defaultLang) {
  const modal = document.getElementById('language-modal');
  const select = document.getElementById('language-select');
  const continueBtn = document.getElementById('language-continue');

  // Pre-select language
  select.value = defaultLang || 'en';
  modal.classList.add('active');
  document.body.classList.add('loading');

  // Handle continue button
  continueBtn.addEventListener('click', () => {
    const selectedLang = select.value;
    setLanguage(selectedLang);
    modal.classList.remove('active');
  }, { once: true }); // Ensure listener is removed after click

  // Optional: Close modal on outside click with default language
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      setLanguage(defaultLang || 'en');
      modal.classList.remove('active');
    }
  }, { once: true });
}

// Function to detect country and set language
function detectCountryAndSetLanguage() {
  // Check saved preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage);
    return;
  }

  // Fetch country code
  fetch('https://ipapi.co/json/')
    .then(response => {
      console.log('ipapi.co status:', response.status); // Debug log
      if (!response.ok) throw new Error('API failed');
      return response.json();
    })
    .then(data => {
      console.log('Country detected:', data.country_code); // Debug log
      const language = countryLanguageMap[data.country_code] || 'en';
      showLanguageModal(language);
    })
    .catch(error => {
      console.error('Error fetching country:', error);
      showLanguageModal('en');
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  detectCountryAndSetLanguage();

  // Keep existing scroll script
  document.querySelectorAll('[data-delayed-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    });
  });
});
