/**
 * MR FIT - Blog Articles Dataset, Live Search/Filter & Dynamic Article Renderer
 */

(function () {
  'use strict';

  const BLOG_DATA = {
    'hypertrophy-principles': {
      id: 'hypertrophy-principles',
      title: 'The Science of Muscle Hypertrophy: Mechanical Tension vs Volume',
      category: 'Strength & Science',
      categorySlug: 'science',
      date: 'Aug 14, 2026',
      readTime: '6 min read',
      author: {
        name: 'Coach Vikram Rao',
        role: 'Head Strength Coach & CSCS',
        avatar: '../img/coach-1.jpg',
        bio: 'CSCS-certified strength practitioner focusing on evidence-based periodization and motor unit recruitment.'
      },
      heroImg: '../img/weights.jpg',
      lead: 'Forget bro-splits and burning out with endless junk volume. Here is how modern exercise physiology dictates maximizing muscular hypertrophy through high-threshold motor unit recruitment.',
      takeaways: [
        'Mechanical tension is the undisputed primary driver of myofibrillar hypertrophy.',
        'Taking working sets within 1–3 reps of true muscular failure (RIR 1-3) produces optimal stimulus.',
        'Volume should be calculated as hard sets per muscle group (10–20 weekly sets is the sweet spot).',
        'Progressive overload must be verified across 4-week mesocycles rather than session-by-session ego-lifting.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. The Mechanical Tension Hierarchy</h3>
        <p class="text-slate-300 leading-relaxed mb-6">For decades, bodybuilding lore focused heavily on the "pump" (metabolic stress) and muscle soreness (muscle damage). However, research spearheaded by Dr. Brad Schoenfeld and Chris Beardsley has demonstrated that <strong>mechanical tension</strong> experienced by individual muscle fibers during active contraction is the sole trigger for intracellular signaling pathways like mTORC1.</p>
        
        <p class="text-slate-300 leading-relaxed mb-6">When a muscle contracts against high resistance (or against moderate resistance as fatigue accumulates), the nervous system recruits high-threshold motor units. These fast-twitch fibers produce the greatest hypertrophy response when subjected to slow contraction speeds under load.</p>

        <div class="p-6 bg-slate-900 border-l-4 border-orange-500 rounded-r-xl my-6">
          <h4 class="text-lg font-bold text-white uppercase mb-2">Key Rule of Proximity to Failure</h4>
          <p class="text-slate-300 text-sm mb-0">Sets terminated 5 or more reps away from failure offer negligible hypertrophic stimulus for trained lifters. Target <strong>1 to 3 Reps in Reserve (RIR)</strong> on compound movements, and 0–1 RIR on isolation movements.</p>
        </div>

        <h3 class="text-2xl font-bold uppercase text-white mb-4">2. Volume Thresholds: Finding Your Maximum Recoverable Volume (MRV)</h3>
        <p class="text-slate-300 leading-relaxed mb-6">More is not always better. Doing 30 sets for chest in a single workout results in excessive muscle damage that impairs protein synthesis and extends recovery past 96 hours. For 90% of lifters, 10 to 18 high-quality sets per muscle group spread across 2–3 weekly sessions yields maximal growth.</p>
        
        <h3 class="text-2xl font-bold uppercase text-white mb-4">3. Practical Application at Mr Fit</h3>
        <p class="text-slate-300 leading-relaxed mb-6">In our Barbell & Strength cycles, we prioritize exercises with high stability and great resistance profiles: barbell back squats, stiff-leg deadlifts, incline dumbbell presses, and chest-supported rows. Track your loads inside our Member Portal to ensure continuous progression.</p>
      `,
      related: ['nutrition-macros', 'recovery-sleep-hygiene']
    },

    'boxing-fundamentals': {
      id: 'boxing-fundamentals',
      title: '5 Essential Footwork Patterns Every Striker Must Master',
      category: 'Combat Arts',
      categorySlug: 'combat',
      date: 'Aug 10, 2026',
      readTime: '5 min read',
      author: {
        name: 'Arjun "The Bull" Gowda',
        role: 'Pro MMA Fighter & Head Striking Coach',
        avatar: '../img/coach-2.jpg',
        bio: 'Pro fighter with 8 wins by stoppage, specialized in footwork angles and Muay Thai striking.'
      },
      heroImg: '../img/boxing.jpg',
      lead: 'In combat sports, power does not come from your arms—it comes from the floor through your feet. Master these 5 positional shifts to control the ring.',
      takeaways: [
        'Always maintain 55/45 weight distribution on the balls of your feet.',
        'Never cross your feet while advancing, retreating, or cutting an angle.',
        'The pivot step is your primary defensive weapon against aggressive rushers.',
        'Your feet must land BEFORE your punch connects to transfer kinetic chain energy.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. The Push-Step (Step & Slide)</h3>
        <p class="text-slate-300 leading-relaxed mb-6">The foundational movement of all pugilism. When moving forward, push off your rear ball of foot and step with your lead. When retreating, push off the lead and step with the rear. This ensures your base never narrows and you are perpetually grounded to strike or defend.</p>

        <h3 class="text-2xl font-bold uppercase text-white mb-4">2. The 45-Degree Pendulum Cut</h3>
        <p class="text-slate-300 leading-relaxed mb-6">Moving in straight lines makes you predictable. By cutting 45 degrees outside your opponent's lead hand, you exit their power line while opening up devastating liver shots and straight right hands.</p>

        <div class="p-6 bg-slate-900 border-l-4 border-orange-500 rounded-r-xl my-6">
          <h4 class="text-lg font-bold text-white uppercase mb-2">Coach Arjun's Golden Rule</h4>
          <p class="text-slate-300 text-sm mb-0">"If your feet are frozen, your head is a target. Move your feet after every combination, even on the heavy bag."</p>
        </div>

        <h3 class="text-2xl font-bold uppercase text-white mb-4">3. The Check-Hook Pivot</h3>
        <p class="text-slate-300 leading-relaxed mb-6">When an opponent charges straight forward, plant your lead foot, pivot your rear leg 90 degrees like opening a swinging gate, and deliver a short lead hook. The opponent's forward momentum magnifies the impact.</p>
      `,
      related: ['hiit-conditioning-science', 'hypertrophy-principles']
    },

    'nutrition-macros': {
      id: 'nutrition-macros',
      title: 'Fueling the Athlete: Precision Macro Timing & Carb Cycling',
      category: 'Nutrition & Diet',
      categorySlug: 'nutrition',
      date: 'Aug 04, 2026',
      readTime: '7 min read',
      author: {
        name: 'Sarah D’Souza',
        role: 'Master Coach & Sports Nutritionist',
        avatar: '../img/coach-3.jpg',
        bio: 'ISSN-certified nutritionist optimizing athletic body composition and nutrient partitioning.'
      },
      heroImg: '../img/hero-athlete.jpg',
      lead: 'Nutrition does not need to be complicated. Learn how to calculate your baseline protein intake and time carbohydrates around your hardest training sessions.',
      takeaways: [
        'Set protein at 1.8g to 2.2g per kg of bodyweight spread across 3-5 meals.',
        'Carbohydrates should be heavily centered peri-workout (90 mins before and immediately after).',
        'Carb cycling allows high energy on heavy barbell/combat days while accelerating fat loss on rest days.',
        'Hydration with adequate electrolytes (sodium, potassium, magnesium) dramatically impacts strength output.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. Protein Distribution and Leucine Threshold</h3>
        <p class="text-slate-300 leading-relaxed mb-6">Consuming all your protein in one giant meal is suboptimal for Muscle Protein Synthesis (MPS). To trigger the leucine trigger (~3g of leucine per serving), aim for 30–45g of high-quality protein every 3 to 4 hours.</p>

        <h3 class="text-2xl font-bold uppercase text-white mb-4">2. Peri-Workout Carbohydrate Architecture</h3>
        <p class="text-slate-300 leading-relaxed mb-6">Carbohydrates are your muscles' primary anaerobic fuel during intense lifting and combat rounds. Consuming fast-digesting carbohydrates (rice cakes, oats, bananas, dates) with electrolytes 60-90 minutes prior to training replenishes intra-muscular glycogen.</p>

        <div class="p-6 bg-slate-900 border-l-4 border-emerald-500 rounded-r-xl my-6">
          <h4 class="text-lg font-bold text-white uppercase mb-2">Sample Daily Carb Cycling Protocol</h4>
          <ul class="text-slate-300 text-sm space-y-1 mb-0 list-disc pl-5">
            <li><strong>Heavy Training Days (Squats / Sparring):</strong> 4.0g carbs / kg bodyweight</li>
            <li><strong>Moderate Days (Conditioning / Hypertrophy):</strong> 2.5g carbs / kg bodyweight</li>
            <li><strong>Active Recovery / Rest Days:</strong> 1.5g carbs / kg bodyweight (High healthy fats)</li>
          </ul>
        </div>
      `,
      related: ['recovery-sleep-hygiene', 'hypertrophy-principles']
    },

    'recovery-sleep-hygiene': {
      id: 'recovery-sleep-hygiene',
      title: 'Optimizing Deep Sleep & Heart Rate Variability (HRV) for Recovery',
      category: 'Recovery & Longevity',
      categorySlug: 'recovery',
      date: 'Jul 28, 2026',
      readTime: '6 min read',
      author: {
        name: 'Dr. Ananya Sen',
        role: 'DPT & Longevity Specialist',
        avatar: '../img/coach-5.jpg',
        bio: 'Physical therapist researching sleep architectures, autonomic nervous system tone, and cold therapy.'
      },
      heroImg: '../img/facility-1.jpg',
      lead: 'You do not grow in the gym—you grow while you sleep. Discover why slow-wave deep sleep is the ultimate natural performance enhancer.',
      takeaways: [
        'Over 95% of human growth hormone (HGH) pulse release occurs during Stage 3 Slow Wave Sleep.',
        'High Heart Rate Variability (HRV) signals strong parasympathetic recovery and training readiness.',
        'Cold plunge and sauna contrast therapy resets autonomic nervous system tone when timed correctly.',
        'Eliminating blue light and lowering bedroom ambient temperature to 19°C dramatically increases sleep efficiency.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. The Biological Value of Slow-Wave Sleep</h3>
        <p class="text-slate-300 leading-relaxed mb-6">During deep sleep, blood flow is diverted toward skeletal muscles, initiating cellular repair and glycogen synthesis. Chronic sleep deprivation of under 6 hours diminishes testosterone by up to 15% and spikes cortisol, accelerating muscle catabolism.</p>

        <h3 class="text-2xl font-bold uppercase text-white mb-4">2. Tracking HRV as an Autonomic Compass</h3>
        <p class="text-slate-300 leading-relaxed mb-6">A high HRV indicates your nervous system is balanced and ready for high-intensity power output. A sudden dip in morning HRV is an early warning indicator of central nervous system fatigue or impending overtraining.</p>
      `,
      related: ['nutrition-macros', 'female-strength-myths']
    },

    'female-strength-myths': {
      id: 'female-strength-myths',
      title: 'Debunking the "Bulky" Myth: Heavy Barbell Training for Women',
      category: 'Strength & Science',
      categorySlug: 'science',
      date: 'Jul 20, 2026',
      readTime: '5 min read',
      author: {
        name: 'Sarah D’Souza',
        role: 'Master Coach & Clinical Nutritionist',
        avatar: '../img/coach-3.jpg',
        bio: 'Passionate advocate for female strength development and bone mineral density.'
      },
      heroImg: '../img/hero-athlete-full.jpg',
      lead: 'Why lifting heavy weights will not make you bulky, but will build dense bone density, bulletproof joints, and athletic confidence.',
      takeaways: [
        'Females possess roughly 1/15th the resting testosterone of males, preventing accidental "bulking".',
        'Heavy resistance training increases bone mineral density, preventing osteoporosis in later life.',
        'Compound lifts burn significantly more calories over a 48-hour period via excess post-exercise oxygen consumption (EPOC).'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. The Endocrinology of Muscle Growth</h3>
        <p class="text-slate-300 leading-relaxed mb-6">The fear of getting "too big" prevents millions of women from stepping onto the barbell platform. However, significant muscle mass requires astronomical levels of androgenic hormones and massive caloric surpluses. Lifting heavy barbells yields a lean, strong, and powerful physique.</p>
      `,
      related: ['hypertrophy-principles', 'nutrition-macros']
    },

    'hiit-conditioning-science': {
      id: 'hiit-conditioning-science',
      title: 'Zone 2 Base vs High-Intensity Interval Training (HIIT)',
      category: 'Conditioning',
      categorySlug: 'conditioning',
      date: 'Jul 12, 2026',
      readTime: '6 min read',
      author: {
        name: 'Rohan Mehta',
        role: 'Senior Group Fitness Lead',
        avatar: '../img/coach-4.jpg',
        bio: 'Cross-athlete and endurance specialist teaching aerobic capacity building.'
      },
      heroImg: '../img/group-class.jpg',
      lead: 'How to combine polarized cardiovascular training to build a massive aerobic gas tank without sacrificing maximal barbell strength.',
      takeaways: [
        'Zone 2 training (65-75% max heart rate) builds mitochondrial density and capillary beds.',
        'HIIT sessions should be limited to 1-2 times per week to prevent autonomic exhaustion.',
        'A bigger aerobic base allows faster inter-set recovery during heavy squat and deadlift sessions.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. The Power of the Aerobic Engine</h3>
        <p class="text-slate-300 leading-relaxed mb-6">Many lifters assume cardio destroys gains. In reality, a well-developed Zone 2 base accelerates lactate clearance, improves heart stroke volume, and allows you to recover twice as fast between grueling barbell sets.</p>
      `,
      related: ['boxing-fundamentals', 'recovery-sleep-hygiene']
    },

    'sleep-architecture': {
      id: 'sleep-architecture',
      title: 'The Sleep Architecture Blueprint for Strength Recovery',
      category: 'Recovery & Longevity',
      categorySlug: 'recovery',
      date: 'Jun 28, 2026',
      readTime: '6 min read',
      author: {
        name: 'Dr. Ananya Sen',
        role: 'Doctor of Physical Therapy & Recovery Specialist',
        avatar: '../img/coach-3.jpg',
        bio: 'DPT specializing in sleep hygiene, heart rate variability (HRV) telemetry, and athletic musculoskeletal rejuvenation.'
      },
      heroImg: '../img/facility-3.jpg',
      lead: 'Optimizing slow-wave deep sleep (SWS) and nocturnal growth hormone release for tendon repair and nervous system restoration.',
      takeaways: [
        'Over 95% of daily pulsatile growth hormone is secreted during Slow-Wave Sleep (Stages 3 and 4).',
        'Sleeping in a 18°C environment speeds autonomic down-regulation and deepens REM density.',
        'Magnesium bisglycinate and avoiding blue light 90 minutes pre-bed significantly lower nocturnal cortisol.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. The Hormonal Cascade of Deep Sleep</h3>
        <p class="text-slate-300 leading-relaxed mb-6">Without 7.5 to 9 hours of uninterrupted sleep, muscular supercompensation is severely stunted. The nervous system requires slow-wave sleep to replenish neurotransmitter pools and repair mechanical micro-tears in connective tissue.</p>
      `,
      related: ['recovery-sleep-hygiene', 'nutrition-macros']
    },

    'kettlebell-ballistics': {
      id: 'kettlebell-ballistics',
      title: 'Kettlebell Ballistics: Hip Hinge Mechanics for Max Power',
      category: 'Strength & Science',
      categorySlug: 'science',
      date: 'Jun 15, 2026',
      readTime: '5 min read',
      author: {
        name: 'Coach Vikram Rao',
        role: 'Head Strength Coach & CSCS',
        avatar: '../img/coach-1.jpg',
        bio: 'CSCS-certified strength practitioner focusing on evidence-based periodization and motor unit recruitment.'
      },
      heroImg: '../img/coach-1.jpg',
      lead: 'Unlocking explosive posterior chain drive and violent hip snap through heavy Russian swings, snatches, and cleans.',
      takeaways: [
        'Kettlebell ballistics generate rapid Rate of Force Development (RFD) without axial spinal compression.',
        'The hardstyle hip snap recruits gluteus maximus fibers at maximal velocity.',
        'Ballistic work conditions the cardiovascular system while enhancing deceleration control.'
      ],
      content: `
        <h3 class="text-2xl font-bold uppercase text-white mb-4">1. Rate of Force Development (RFD)</h3>
        <p class="text-slate-300 leading-relaxed mb-6">Unlike slow barbell grinds, ballistic kettlebell swings demand maximum speed at the bottom of the hinge, training your nervous system to fire fast-twitch motor units with minimal joint wear.</p>
      `,
      related: ['hypertrophy-principles', 'deadlift-mastery']
    }
  };

  // --- Dynamic Renderer for blog-details.html ---
  function renderBlogDetails() {
    const isDetails = window.location.pathname.includes('blog-details.html');
    if (!isDetails) return;

    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 'hypertrophy-principles';
    const article = BLOG_DATA[blogId] || BLOG_DATA['hypertrophy-principles'];

    // Title
    document.title = `${article.title} · Mr Fit Insights`;

    const titleEl = document.getElementById('blog-title');
    const categoryEl = document.getElementById('blog-category');
    const dateEl = document.getElementById('blog-date');
    const readTimeEl = document.getElementById('blog-readtime');
    const authorNameEl = document.getElementById('blog-author-name');
    const authorRoleEl = document.getElementById('blog-author-role');
    const authorBioEl = document.getElementById('blog-author-bio');
    const authorAvatarEl = document.getElementById('blog-author-avatar');
    const leadEl = document.getElementById('blog-lead');
    const takeawaysEl = document.getElementById('blog-takeaways');
    const contentEl = document.getElementById('blog-content');
    const heroBannerEl = document.getElementById('blog-hero-banner');
    const relatedContainer = document.getElementById('blog-related');

    if (titleEl) titleEl.textContent = article.title;
    if (categoryEl) categoryEl.textContent = article.category;
    if (dateEl) dateEl.textContent = article.date;
    if (readTimeEl) readTimeEl.textContent = article.readTime;
    if (leadEl) leadEl.textContent = article.lead;
    if (contentEl) contentEl.innerHTML = article.content;

    if (authorNameEl) authorNameEl.textContent = article.author.name;
    if (authorRoleEl) authorRoleEl.textContent = article.author.role;
    if (authorBioEl) authorBioEl.textContent = article.author.bio;
    if (authorAvatarEl) authorAvatarEl.src = article.author.avatar;

    if (heroBannerEl && article.heroImg) {
      heroBannerEl.style.backgroundImage = `linear-gradient(rgba(15,30,46,0.8), rgba(15,30,46,0.95)), url('${article.heroImg}')`;
    }

    if (takeawaysEl) {
      takeawaysEl.innerHTML = article.takeaways.map(t => `
        <li class="flex items-start gap-3">
          <span class="w-5 h-5 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs mt-1 shrink-0"><i class="fa-solid fa-check"></i></span>
          <span class="text-slate-200 text-sm leading-relaxed">${t}</span>
        </li>
      `).join('');
    }

    if (relatedContainer && article.related) {
      relatedContainer.innerHTML = article.related.map(relId => {
        const rel = BLOG_DATA[relId];
        if (!rel) return '';
        return `
          <a href="blog-details.html?id=${rel.id}" class="group block p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-500/40 transition-colors">
            <span class="text-xs font-bold text-orange-400 uppercase">${rel.category}</span>
            <h5 class="text-white text-base font-bold group-hover:text-orange-400 transition-colors mt-1 mb-2">${rel.title}</h5>
            <span class="text-xs text-slate-400 font-mono"><i class="fa-regular fa-clock mr-1"></i> ${rel.readTime}</span>
          </a>
        `;
      }).join('');
    }

    // Interactive Comment Section simulator
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    if (commentForm && commentList) {
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = commentForm.querySelector('#commentName').value.trim();
        const msg = commentForm.querySelector('#commentText').value.trim();

        if (!name || !msg) {
          if (window.showToast) window.showToast('Please provide your name and thoughts.', 'error', 'Comment Required');
          return;
        }

        const newComment = document.createElement('div');
        newComment.className = 'p-4 bg-slate-900/80 border border-slate-800 rounded-xl';
        newComment.innerHTML = `
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center">${name.substring(0,2).toUpperCase()}</span>
              <b class="text-white text-sm">${name}</b>
            </div>
            <span class="text-xs text-slate-400">Just now</span>
          </div>
          <p class="text-slate-300 text-sm mb-0 pl-10">${msg}</p>
        `;

        commentList.prepend(newComment);
        commentForm.reset();
        if (window.showToast) window.showToast('Your perspective has been shared!', 'success', 'Comment Published');
      });
    }
  }

  // --- Live Search & Filter on blog.html ---
  function initBlogListing() {
    const searchInput = document.getElementById('blogSearchInput');
    const categoryBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-article-card');
    const noResults = document.getElementById('blogNoResults');
    const articleCount = document.getElementById('blogArticleCount');

    if (!blogCards.length) return;

    let currentFilter = 'all';
    let currentQuery = '';

    function applyFilters() {
      let visibleCount = 0;

      blogCards.forEach(card => {
        const title = (card.dataset.title || card.querySelector('h3, h4')?.textContent || '').toLowerCase();
        const cat = card.dataset.category || '';
        const excerpt = (card.querySelector('p')?.textContent || '').toLowerCase();

        const matchesCategory = (currentFilter === 'all' || cat === currentFilter);
        const matchesQuery = !currentQuery || title.includes(currentQuery) || excerpt.includes(currentQuery);

        if (matchesCategory && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
      if (articleCount) {
        articleCount.textContent = `Showing ${visibleCount} articles`;
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = e.target.value.toLowerCase().trim();
        applyFilters();
      });
    }

    if (categoryBtns.length) {
      categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          categoryBtns.forEach(b => b.classList.remove('active', 'bg-orange-500', 'text-white'));
          btn.classList.add('active', 'bg-orange-500', 'text-white');
          currentFilter = btn.dataset.filter || 'all';
          applyFilters();
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderBlogDetails();
    initBlogListing();
  });

  // Global export
  window.mrfitBlog = BLOG_DATA;

})();
