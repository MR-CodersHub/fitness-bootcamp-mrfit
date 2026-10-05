/**
 * MR FIT - Services Data Catalog & Dynamic Detail Page Renderer
 */

(function () {
  'use strict';

  const SERVICES_DATA = {
    'strength-conditioning': {
      id: 'strength-conditioning',
      title: 'Strength & Athletic Conditioning',
      badge: 'Core Program',
      tagline: 'Scientific barbell progressions, functional hypertrophy and turf work.',
      heroImg: '../img/hero-athlete-full.jpg',
      lead: 'Built for lifters seeking progressive overload, raw bar power, functional mobility, and explosive metabolic conditioning without fads.',
      overview: 'Our Strength & Conditioning discipline forms the bedrock of physical preparedness. We combine compound powerlifts (squat, bench press, deadlift, overhead press) with Olympic weightlifting progressions, kettlebell ballistics, and athletic turf conditioning. Every block is structured into 4-week mesocycles with planned deloads, ensuring continuous neuromuscular adaptation without burnout.',
      highlights: [
        'Custom 4-week periodized barbell training block',
        'Eleiko competition barbells, calibrated bumper plates & calibrated power racks',
        'Velocity-based training feedback & bar speed metrics',
        'High-density sled, prowler & assault bike metabolic finishes',
        'Biomechanics screen & mobility calibration before every block'
      ],
      curriculum: [
        {
          week: 'Block Phase 1 · Neuromuscular Base',
          desc: 'High-volume hypertrophy & movement patterning with 70-75% 1RM loads. Focus on structural integrity, eccentric control, and tendon resilience.'
        },
        {
          week: 'Block Phase 2 · Strength & Force Production',
          desc: 'Transitioning to 80-87.5% 1RM intensities. Concentric speed, cluster sets, heavy doubles, and triphasic rate-of-force development.'
        },
        {
          week: 'Block Phase 3 · Athletic Power & Conditioning',
          desc: 'Contrast training, French contrast complexes, turf plyometrics, and lactate threshold sprints for complete engine development.'
        },
        {
          week: 'Block Phase 4 · Peak & Testing / Deload',
          desc: 'Volume taper with scheduled 1RM/3RM strength benchmark testing followed by an active recovery deload week.'
        }
      ],
      coach: {
        name: 'Coach Vikram Rao',
        role: 'Head Strength Coach & CSCS',
        exp: '11+ Years Coaching Experience',
        bio: 'Former national powerlifter and CSCS-certified specialist in barbell biomechanics and athletic performance programming.',
        img: '../img/coach-1.jpg'
      },
      schedule: [
        { day: 'Monday / Wednesday / Friday', time: '06:00 AM · 07:30 AM · 06:00 PM', focus: 'Upper / Lower Strength Split' },
        { day: 'Tuesday / Thursday', time: '06:30 AM · 07:00 PM', focus: 'Olympic Lifts & Athletic Power' },
        { day: 'Saturday', time: '08:00 AM · 10:00 AM', focus: 'Iron Engine: Turf Conditioning & Strongman' }
      ],
      pricing: {
        monthly: '₹3,499',
        quarterly: '₹8,999',
        annual: '₹26,999',
        includes: ['Full Gym Floor Access', 'All Strength & Conditioning Classes', 'Monthly InBody 570 Scan', 'Locker & Shower Facilities']
      },
      faqs: [
        {
          q: 'Is this class suitable for beginners who have never touched a barbell?',
          a: 'Yes! Every session provides scalable regressions. Our coaches coach movement mechanics and bar path before adding any load.'
        },
        {
          q: 'What equipment is provided in the gym?',
          a: 'We feature Eleiko calibrated discs, Rogue power racks, specialized Texas power bars, trap bars, safety squat bars, glute-ham developers, and 30m turf tracks.'
        },
        {
          q: 'How are progress and personal records tracked?',
          a: 'All members log lifts directly in our Member Portal, which automatically tracks estimated 1RM, volume load, and rep progression.'
        }
      ]
    },

    'boxing-mma': {
      id: 'boxing-mma',
      title: 'Boxing & Mixed Martial Arts',
      badge: 'Combat Lab',
      tagline: 'Authentic pugilism, Muay Thai striking, wrestling fundamentals & cage drills.',
      heroImg: '../img/boxing.jpg',
      lead: 'Step inside Bengaluru’s most authentic combat floor. High-intensity striking, technical footwork, defensive head movement, and sparring for all levels.',
      overview: 'Our Combat Lab is engineered for both pure boxing enthusiasts and MMA practitioners. Train under decorated fighters with access to heavy leather bags, teardrop Thai bags, speed bags, a 16-foot regulation cage, and full tatami grappling mats. Learn practical combat mechanics while torches 800+ calories per session.',
      highlights: [
        'Authentic 16ft regulation sparring octagon and ring floor',
        '8 heavy bags including 180kg Fairtex Muay Thai pole bags',
        'Hand-wrapping guidance, punch velocity drills, and defensive head movement',
        'Controlled, coached technical sparring (protective gear mandatory)',
        'Grappling, clinch fighting & cage control fundamentals'
      ],
      curriculum: [
        {
          week: 'Stance, Footwork & Jab Mastery',
          desc: 'Establishing the guard, rotational hip mechanics, pivot steps, and establishing range with the jab.'
        },
        {
          week: 'Combinations, Slips & Counter-Punching',
          desc: 'Weaving, slipping outside the centerline, catch-and-shoot counters, and multi-angle body punch sequencing.'
        },
        {
          week: 'Thai Clinch, Knee Strikes & Cage Control',
          desc: 'Muay Thai plum posture, off-balancing, low kicks, and defending takedowns against the cage.'
        },
        {
          week: 'Fight Conditioning & Ring IQ Simulation',
          desc: 'Round-based interval work (3-min rounds with 60s active recovery) and controlled technical sparring.'
        }
      ],
      coach: {
        name: 'Arjun "The Bull" Gowda',
        role: 'Head Striking Coach & Pro MMA Fighter',
        exp: '8-2 Pro Record · 9 Years Coaching',
        bio: 'Professional mixed martial artist and national Muay Thai medalist with extensive experience training both competitors and fitness boxers.',
        img: '../img/coach-2.jpg'
      },
      schedule: [
        { day: 'Monday / Wednesday', time: '07:00 AM · 06:30 PM', focus: 'Boxing Fundamentals & Bag Work' },
        { day: 'Tuesday / Thursday', time: '07:30 PM', focus: 'Muay Thai & Cage Clinch Work' },
        { day: 'Friday / Saturday', time: '07:00 PM (Fri) · 10:00 AM (Sat)', focus: 'Technical Sparring (Gear Required)' }
      ],
      pricing: {
        monthly: '₹3,999',
        quarterly: '₹9,999',
        annual: '₹29,999',
        includes: ['Full Combat Lab & Cage Access', 'All Striking & Sparring Classes', 'Free Glove & Wrap Rental for Trial', 'Gym Floor Access Included']
      },
      faqs: [
        {
          q: 'Do I have to spar if I just want to learn boxing for fitness?',
          a: 'No, sparring is strictly optional and reserved for advanced technical classes with full protective gear. Fitness boxing classes focus on pads, heavy bags, and footwork.'
        },
        {
          q: 'What gear do I need to bring to my first session?',
          a: 'Standard athletic wear and cross-trainers/barefoot on mats. We provide sanitized gloves and wraps for trial sessions, or you can purchase your own kit at our pro shop.'
        }
      ]
    },

    'personal-training': {
      id: 'personal-training',
      title: '1-on-1 Bespoke Coaching',
      badge: 'Elite Mentorship',
      tagline: 'Dedicated coaching, bespoke nutrition protocols and biomechanical analysis.',
      heroImg: '../img/facility-2.jpg',
      lead: 'Accelerate your transformation with a dedicated coach in your corner. Tailored specifically for busy professionals, athletes recovering from injury, or physique goals.',
      overview: 'Our 1-on-1 Personal Coaching matches you with a dedicated coach who oversees every facet of your physical development. From precise range-of-motion assessments and custom hypertrophy/fat-loss programming to daily macronutrient adjustments and weekly accountability checks.',
      highlights: [
        'Dedicated coach with CSCS / ACE / NSCA international accreditation',
        'Complete biomechanical screen and posture / mobility audit',
        'Customized weekly nutrition protocols tailored to your lifestyle & dietary choices',
        'Private coaching bays and prioritized equipment access',
        'Direct 24/7 WhatsApp / Portal messaging with your head coach'
      ],
      curriculum: [
        {
          week: 'Assessment & Baseline Testing',
          desc: 'FMS mobility audit, 3D body composition scan, structural balance evaluation, and cardiovascular threshold test.'
        },
        {
          week: 'Targeted Hypertrophy & Technique Refinement',
          desc: '1-on-1 guidance on execution cues, tension maintenance, and personalized tempo lifting.'
        },
        {
          week: 'Metabolic Optimization & Recovery Protocols',
          desc: 'Deload management, sleep hygiene tracking, and nutrition carb cycling integration.'
        },
        {
          week: 'Goal Milestone Review & Program Evolution',
          desc: 'Monthly re-test of strength metrics, body composition scan, and phase transition.'
        }
      ],
      coach: {
        name: 'Sarah D’Souza',
        role: 'Master Coach & Clinical Nutritionist',
        exp: '10+ Years Coaching · ISSN Certified',
        bio: 'Specialist in body recomposition, female athletic strength, post-rehab training, and precision evidence-based nutrition.',
        img: '../img/coach-3.jpg'
      },
      schedule: [
        { day: 'Monday – Saturday', time: '05:30 AM – 09:30 PM (Flexible slots)', focus: '1-on-1 Dedicated 60-Minute Sessions' }
      ],
      pricing: {
        monthly: '₹7,999 (12 sessions)',
        quarterly: '₹21,999 (36 sessions)',
        annual: '₹64,999 (Full Year Coach)',
        includes: ['1-on-1 Coach for every workout', 'Personalized Nutrition & Supplement Plan', 'Unlimited Gym & Recovery Access', 'Weekly InBody Composition Analysis']
      },
      faqs: [
        {
          q: 'Can I choose my trainer based on my specific fitness goals?',
          a: 'Yes, after your initial consultation and physical screen, we match you with the specialist best suited to your goals (strength, boxing, rehab, or physique).'
        },
        {
          q: 'What happens if I miss a scheduled personal training session?',
          a: 'You can reschedule any session with 6 hours prior notice through the Member Portal without forfeiting your credit.'
        }
      ]
    },

    'group-fitness': {
      id: 'group-fitness',
      title: 'High-Octane Group Training',
      badge: 'Community Energy',
      tagline: 'High-energy team conditioning, kettlebell circuits and functional HIIT.',
      heroImg: '../img/group-class.jpg',
      lead: 'Feed off the energy of the pack. Coach-led, heart-pumping group workouts designed to torch body fat, build endurance, and build relentless stamina.',
      overview: 'Our Group Training blends the camaraderie of a team workout with the technical rigor of personal coaching. Capped at 14 athletes per class, you get direct coach supervision across rowers, ski-ergs, assault runners, kettlebells, and bodyweight plyometrics.',
      highlights: [
        'Capped class sizes (max 14 athletes) for personalized attention',
        'State-of-the-art Concept2 Rowers, SkiErgs, Echo Bikes & Plyo Boxes',
        'Real-time heart rate zone monitoring and caloric burn metrics',
        'Daily changing programming to eliminate plateaus and workout boredom',
        'High-energy sound system and motivating group culture'
      ],
      curriculum: [
        {
          week: 'Metabolic Foundations',
          desc: 'High work-to-rest intervals (40s work / 20s rest) targeting cardiovascular output and movement flow.'
        },
        {
          week: 'Power Endurance & Kettlebell Complexes',
          desc: 'Unbroken kettlebell swings, cleans, snatches, and wall-ball complexes for relentless conditioning.'
        },
        {
          week: 'Team Sprints & Engine Testing',
          desc: 'Partner relay sprints, team sled drags, and ergometer intervals.'
        },
        {
          week: 'Championship Challenge Deload',
          desc: 'Benchmark workout challenge to celebrate progress, followed by active mobility cool-down.'
        }
      ],
      coach: {
        name: 'Rohan Mehta',
        role: 'Senior Group Fitness Lead & Cross-Athlete',
        exp: '7 Years Experience · Level 2 Cross Trainer',
        bio: 'High-energy coach renowned for high-tempo classes, meticulous movement standards, and fostering an inclusive community environment.',
        img: '../img/coach-4.jpg'
      },
      schedule: [
        { day: 'Monday – Friday', time: '06:00 AM · 07:00 AM · 08:00 AM · 05:30 PM · 06:30 PM · 07:30 PM', focus: 'Daily Dynamic Team Workout' },
        { day: 'Saturday & Sunday', time: '08:30 AM · 10:00 AM', focus: 'Weekend Battle Royale Super-Class' }
      ],
      pricing: {
        monthly: '₹2,799',
        quarterly: '₹6,999',
        annual: '₹21,999',
        includes: ['Unlimited Group Training Sessions', 'All 35+ Weekly Time Slots', 'Heart Rate Monitor Integration', 'Full Facility Access']
      },
      faqs: [
        {
          q: 'How difficult are the group fitness classes?',
          a: 'Every exercise has three progression levels (Scale, Standard, Rx), making the classes accessible to newcomers while challenging elite athletes.'
        }
      ]
    },

    'recovery-mobility': {
      id: 'recovery-mobility',
      title: 'Recovery & Mobility Suite',
      badge: 'Rest & Restore',
      tagline: 'Infrared sauna, cold plunge ice baths, soft tissue massage & yoga.',
      heroImg: '../img/facility-1.jpg',
      lead: 'Train hard, recover harder. Optimize HRV, eliminate soreness, and restore joint health with our dedicated thermal and mobility suite.',
      overview: 'Physical adaptation does not occur during training—it occurs during recovery. Our Recovery Suite features a full spectrum Finnish cedar dry sauna, commercial ice baths chilled to 3°C, NormaTec pneumatic compression boots, and weekly guided restorative mobility workshops.',
      highlights: [
        'Twin cold plunge pools kept at 3°C to 5°C with commercial filtration',
        'Custom Finnish cedarwood dry sauna with Himalayan salt wall (85°C)',
        'NormaTec 3 dynamic compression boots for rapid lymphatic drainage',
        'Weekly Yin Yoga, joint decompression, and spinal mobility workshops',
        'Percussive massage therapy guns and myofascial release station'
      ],
      curriculum: [
        {
          week: 'Contrast Hydrotherapy Protocols',
          desc: 'Structured 15-minute sauna heat exposure followed by 3-minute ice plunge cycles to stimulate mitochondrial biogenesis.'
        },
        {
          week: 'Spinal Decompression & Hip Opener',
          desc: 'Targeted mobility routines to alleviate lower back tightness and restore pelvic alignment from heavy squatting and deadlifts.'
        },
        {
          week: 'Pneumatic Lymphatic Drainage',
          desc: 'Targeted leg and arm recovery compression sessions following intense training bouts.'
        },
        {
          week: 'Parasympathetic Reset & Breathwork',
          desc: 'Box breathing, cadence down-regulation, and nervous system recovery techniques.'
        }
      ],
      coach: {
        name: 'Dr. Ananya Sen',
        role: 'Physical Therapist & Mobility Specialist',
        exp: '8 Years Clinical & Sports Experience',
        bio: 'Doctor of Physical Therapy specializing in joint longevity, athletic recovery modalities, and post-isometric relaxation.',
        img: '../img/coach-5.jpg'
      },
      schedule: [
        { day: 'Daily (Mon – Sun)', time: '06:00 AM – 09:30 PM', focus: 'Open Thermal Suite (Sauna + Cold Plunge)' },
        { day: 'Tue / Thu / Sat', time: '08:00 AM · 06:00 PM', focus: 'Guided Mobility & Myofascial Release Class' }
      ],
      pricing: {
        monthly: '₹2,499',
        quarterly: '₹5,999',
        annual: '₹17,999',
        includes: ['Daily Sauna & Cold Plunge Sessions', 'NormaTec Compression Boot Access', 'All Restorative Mobility Classes', 'Complimentary Herbal Tea & Towels']
      },
      faqs: [
        {
          q: 'What is the recommended protocol for the cold plunge?',
          a: 'We recommend 2 to 3 rounds of 12-15 minutes in the sauna followed by 2-3 minutes in the ice bath (3-5°C) for maximum metabolic and mental benefits.'
        }
      ]
    },

    'athletic-performance': {
      id: 'athletic-performance',
      title: 'Athletic Performance & Speed',
      badge: 'Sports Science',
      tagline: 'Sprint mechanics, deceleration training, vertical jump & agility.',
      heroImg: '../img/hero-trainer.jpg',
      lead: 'Bridge the gap between raw gym strength and high-speed on-field dominance for competitive athletes and sports enthusiasts.',
      overview: 'Engineered for competitive team sports (football, cricket, badminton, basketball, rugby), this program hones rapid acceleration, multi-directional COD (change of direction), plyometric elasticity, and injury mitigation.',
      highlights: [
        '30-meter indoor sprint turf with laser timing gates',
        'Just Jump vertical displacement mats and force velocity profiling',
        'Multi-vector deceleration and ankle/knee ACL injury prevention protocols',
        'Rotational power training with medicine balls and Keiser pneumatic cables',
        'Custom energy system development specific to your sport'
      ],
      curriculum: [
        {
          week: 'Sprint Mechanics & Force Application',
          desc: 'Linear acceleration angles, wall drills, triple extension, and resisted sled pushes.'
        },
        {
          week: 'Change of Direction & Deceleration',
          desc: 'Braking mechanics, 5-10-5 agility drills, reactive agility, and eccentric quad loading.'
        },
        {
          week: 'Plyometrics & Vertical Power',
          desc: 'Depth jumps, hurdle hops, rotational med ball throws, and stretch-shortening cycle efficiency.'
        },
        {
          week: 'Sport-Specific Energy Systems',
          desc: 'Simulating the intermittent sprint demands of football, cricket, and racquet sports.'
        }
      ],
      coach: {
        name: 'Coach Pradeep Kumar',
        role: 'Speed & Conditioning Specialist',
        exp: '9 Years Coaching · Ex-State Athletics Coach',
        bio: 'Specialist in linear sprinting mechanics, agility development, and youth athlete athletic pathways.',
        img: '../img/coach-6.jpg'
      },
      schedule: [
        { day: 'Mon / Wed / Fri', time: '05:30 PM · 07:00 PM', focus: 'Speed, Acceleration & Agility Turf Lab' },
        { day: 'Tue / Thu', time: '06:00 AM · 06:00 PM', focus: 'Rotational Power & Plyometric Mastery' }
      ],
      pricing: {
        monthly: '₹3,799',
        quarterly: '₹9,499',
        annual: '₹28,499',
        includes: ['Full Turf Lab & Laser Timing Access', 'Sport-Specific Conditioning Program', 'Bi-weekly Force Profile Testing', 'Gym Floor Access Included']
      },
      faqs: [
        {
          q: 'Is this only for professional athletes?',
          a: 'No, competitive weekend warriors, club players, and enthusiasts looking to run faster and jump higher are all welcome.'
        }
      ]
    }
  };

  // --- Dynamic Renderer for service-details.html ---
  function renderServiceDetails() {
    const isDetailsPage = window.location.pathname.includes('service-details.html');
    if (!isDetailsPage) return;

    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id') || 'strength-conditioning';
    const data = SERVICES_DATA[serviceId] || SERVICES_DATA['strength-conditioning'];

    // Update document title & metadata
    document.title = `${data.title} · Mr Fit Programs`;

    // Render Dynamic Content in containers
    const titleEl = document.getElementById('svc-title');
    const badgeEl = document.getElementById('svc-badge');
    const taglineEl = document.getElementById('svc-tagline');
    const leadEl = document.getElementById('svc-lead');
    const overviewEl = document.getElementById('svc-overview');
    const highlightsEl = document.getElementById('svc-highlights');
    const curriculumEl = document.getElementById('svc-curriculum');
    const coachImgEl = document.getElementById('svc-coach-img');
    const coachNameEl = document.getElementById('svc-coach-name');
    const coachRoleEl = document.getElementById('svc-coach-role');
    const coachBioEl = document.getElementById('svc-coach-bio');
    const scheduleEl = document.getElementById('svc-schedule');
    const priceMonthlyEl = document.getElementById('svc-price-monthly');
    const priceQuarterlyEl = document.getElementById('svc-price-quarterly');
    const priceAnnualEl = document.getElementById('svc-price-annual');
    const priceFeaturesEl = document.getElementById('svc-price-features');
    const faqsEl = document.getElementById('svc-faqs');
    const heroBannerEl = document.getElementById('svc-hero-banner');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (taglineEl) taglineEl.textContent = data.tagline;
    if (leadEl) leadEl.textContent = data.lead;
    if (overviewEl) overviewEl.textContent = data.overview;
    if (heroBannerEl && data.heroImg) {
      heroBannerEl.style.backgroundImage = `linear-gradient(rgba(15,30,46,0.75), rgba(15,30,46,0.92)), url('${data.heroImg}')`;
    }

    if (highlightsEl) {
      highlightsEl.innerHTML = data.highlights.map(item => `
        <li class="flex items-start gap-3">
          <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-xs mt-1 shrink-0"><i class="fa-solid fa-check"></i></span>
          <span class="text-slate-300">${item}</span>
        </li>
      `).join('');
    }

    if (curriculumEl) {
      curriculumEl.innerHTML = data.curriculum.map((c, i) => `
        <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-amber-500/40 transition-colors">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-8 h-8 rounded-lg bg-orange-600/20 text-orange-500 font-bold text-sm flex items-center justify-center">0${i+1}</span>
            <h4 class="text-white text-lg font-bold uppercase tracking-wide m-0">${c.week}</h4>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-0 pl-11">${c.desc}</p>
        </div>
      `).join('');
    }

    if (coachNameEl) coachNameEl.textContent = data.coach.name;
    if (coachRoleEl) coachRoleEl.textContent = `${data.coach.role} · ${data.coach.exp}`;
    if (coachBioEl) coachBioEl.textContent = data.coach.bio;
    if (coachImgEl) coachImgEl.src = data.coach.img;

    if (scheduleEl) {
      scheduleEl.innerHTML = data.schedule.map(s => `
        <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-900/60 border-b border-slate-800 last:border-0">
          <div>
            <b class="text-white block">${s.day}</b>
            <span class="text-xs text-orange-400 font-semibold tracking-wider uppercase">${s.focus}</span>
          </div>
          <div class="text-slate-300 text-sm font-mono mt-1 md:mt-0 font-medium">
            <i class="fa-regular fa-clock mr-1 text-amber-400"></i> ${s.time}
          </div>
        </div>
      `).join('');
    }

    if (priceMonthlyEl) priceMonthlyEl.textContent = data.pricing.monthly;
    if (priceQuarterlyEl) priceQuarterlyEl.textContent = data.pricing.quarterly;
    if (priceAnnualEl) priceAnnualEl.textContent = data.pricing.annual;

    if (priceFeaturesEl) {
      priceFeaturesEl.innerHTML = data.pricing.includes.map(inc => `
        <li class="flex items-center gap-2 text-sm text-slate-300">
          <i class="fa-solid fa-circle-check text-emerald-400 text-xs"></i> ${inc}
        </li>
      `).join('');
    }

    if (faqsEl) {
      faqsEl.innerHTML = data.faqs.map(f => `
        <details class="bg-slate-900/70 border border-slate-800 rounded-xl p-4 group">
          <summary class="text-white font-bold cursor-pointer list-none flex justify-between items-center text-base">
            <span>${f.q}</span>
            <span class="text-orange-500 group-open:rotate-180 transition-transform duration-200"><i class="fa-solid fa-chevron-down"></i></span>
          </summary>
          <p class="mt-3 text-slate-400 text-sm leading-relaxed">${f.a}</p>
        </details>
      `).join('');
    }
  }

  // --- Category Filter on services.html ---
  function initServicesFilter() {
    const filterBtns = document.querySelectorAll('.service-filter-btn');
    const serviceCards = document.querySelectorAll('.service-catalog-card');

    if (!filterBtns.length || !serviceCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active', 'bg-orange-500', 'text-white'));
        btn.classList.add('active', 'bg-orange-500', 'text-white');

        const filter = btn.dataset.filter;
        serviceCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderServiceDetails();
    initServicesFilter();
  });

  // Global export
  window.mrfitServices = SERVICES_DATA;

})();
