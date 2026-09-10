/**
 * NAMMA GYM - Dashboard Interactivity (Admin & Member Portals)
 */

(function () {
  'use strict';

  function initUserDashboard() {
    const isUserDash = window.location.pathname.includes('user-dashboard.html');
    if (!isUserDash) return;

    // --- Mobile Sidebar Toggle & Overlay ---
    const sidebar = document.getElementById('dashSidebar');
    const sidebarToggle = document.getElementById('dashSidebarToggle');
    const sidebarClose = document.getElementById('dashSidebarClose');
    const sidebarBackdrop = document.getElementById('dashSidebarBackdrop');

    function openSidebar() {
      if (sidebar) sidebar.classList.add('is-open');
      if (sidebarBackdrop) sidebarBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove('is-open');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar && sidebar.classList.contains('is-open')) {
        closeSidebar();
      }
    });

    // 1. Digital ID / QR Modal
    const showQrBtn = document.getElementById('btnShowQr');
    const sidebarGatePassBtn = document.getElementById('sidebarGatePassBtn');
    const qrModal = document.getElementById('qrModal');
    const closeQrBtn = document.getElementById('btnCloseQr');

    function openQrModal() {
      if (qrModal) qrModal.style.display = 'flex';
    }
    function closeQrModal() {
      if (qrModal) qrModal.style.display = 'none';
    }

    if (showQrBtn) showQrBtn.addEventListener('click', openQrModal);
    if (sidebarGatePassBtn) sidebarGatePassBtn.addEventListener('click', openQrModal);
    if (closeQrBtn) closeQrBtn.addEventListener('click', closeQrModal);
    if (qrModal) {
      qrModal.addEventListener('click', (e) => {
        if (e.target === qrModal) closeQrModal();
      });
    }

    // 2. Tab Navigation (Sidebar + In-page Nav)
    const navItems = document.querySelectorAll('.dash-sidebar-nav-item[data-target], .dash-nav-tab[data-target]');
    const tabContents = document.querySelectorAll('.dash-tab-pane');
    const breadcrumbTitle = document.getElementById('dashBreadcrumbTitle');

    function activateTab(targetId, titleText) {
      if (!targetId) return;

      // Update active nav buttons
      navItems.forEach(item => {
        if (item.getAttribute('data-target') === targetId) {
          item.classList.add('is-active');
          if (!titleText) titleText = item.getAttribute('data-title') || item.textContent.trim();
        } else {
          item.classList.remove('is-active');
        }
      });

      // Update visible tab pane
      tabContents.forEach(pane => pane.classList.remove('is-active'));
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('is-active');
      }

      // Update breadcrumb text
      if (breadcrumbTitle && titleText) {
        breadcrumbTitle.textContent = titleText;
      }

      // Close mobile sidebar if open
      closeSidebar();

      // Update URL hash smoothly
      history.replaceState(null, null, `#${targetId}`);
    }

    navItems.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const titleText = btn.getAttribute('data-title');
        activateTab(targetId, titleText);
      });
    });

    // Check URL hash on page load
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const matchingTab = document.querySelector(`[data-target="${hash}"]`);
      if (matchingTab) {
        activateTab(hash, matchingTab.getAttribute('data-title'));
      }
    }

    // 3. Class Filters (Discipline & Day)
    const disciplineFilter = document.getElementById('classDisciplineFilter');
    const dayFilter = document.getElementById('classDayFilter');
    const classCards = document.querySelectorAll('.class-card-item');

    function filterClasses() {
      const selectedDiscipline = disciplineFilter ? disciplineFilter.value : 'all';
      const selectedDay = dayFilter ? dayFilter.value : 'all';

      classCards.forEach(card => {
        const disc = card.getAttribute('data-discipline') || '';
        const day = card.getAttribute('data-day') || '';

        const matchDisc = selectedDiscipline === 'all' || disc === selectedDiscipline;
        const matchDay = selectedDay === 'all' || day === selectedDay;

        card.style.display = (matchDisc && matchDay) ? '' : 'none';
      });
    }

    if (disciplineFilter) disciplineFilter.addEventListener('change', filterClasses);
    if (dayFilter) dayFilter.addEventListener('change', filterClasses);

    // 4. Class Reservation Toggle
    document.querySelectorAll('.btn-book-class').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.class-card-item');
        const badge = card ? card.querySelector('.class-seat-badge') : null;
        const className = card ? card.querySelector('.class-title')?.textContent : 'Group Class';
        const isBooked = btn.getAttribute('data-booked') === 'true';

        if (isBooked) {
          btn.setAttribute('data-booked', 'false');
          btn.innerHTML = '<i class="fa-solid fa-calendar-plus mr-1"></i> Book Spot';
          btn.className = 'btn-book-class btn btn--sm w-full';
          if (badge) {
            badge.className = 'class-seat-badge text-emerald-600 bg-emerald-50';
            badge.innerHTML = '<i class="fa-solid fa-user-group text-xs"></i> <span>6 Spots Left</span>';
          }
          if (window.showToast) window.showToast(`Reservation for "${className}" has been cancelled.`, 'info', 'Booking Cancelled');
        } else {
          btn.setAttribute('data-booked', 'true');
          btn.innerHTML = '<i class="fa-solid fa-circle-check mr-1"></i> Spot Reserved';
          btn.className = 'btn-book-class btn btn--sm btn--outline w-full text-emerald-600 border-emerald-600';
          if (badge) {
            badge.className = 'class-seat-badge text-amber-600 bg-amber-50';
            badge.innerHTML = '<i class="fa-solid fa-circle-check text-xs"></i> <span>Confirmed</span>';
          }
          if (window.showToast) window.showToast(`You have reserved a spot for "${className}". Reminder sent!`, 'success', 'Class Reserved');
        }
      });
    });

    // 5. Workout Set Checkbox Tracking
    const setCheckboxes = document.querySelectorAll('.workout-set-checkbox');
    const workoutProgressEl = document.getElementById('workoutCompletedCount');
    const workoutProgressBar = document.getElementById('workoutProgressBar');

    function updateWorkoutProgress() {
      const total = setCheckboxes.length;
      let completed = 0;
      setCheckboxes.forEach(cb => {
        if (cb.checked) completed++;
      });

      if (workoutProgressEl) workoutProgressEl.textContent = `${completed}/${total} Sets`;
      if (workoutProgressBar && total > 0) {
        workoutProgressBar.style.width = `${(completed / total) * 100}%`;
      }
    }

    setCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const row = cb.closest('.workout-set-row');
        if (cb.checked) {
          if (row) row.classList.add('is-completed');
          if (window.showToast) window.showToast('Set recorded into coach progression logs.', 'success', 'Set Logged');
        } else {
          if (row) row.classList.remove('is-completed');
        }
        updateWorkoutProgress();
      });
    });

    // 6. Coach Chat Submission
    const chatForm = document.getElementById('coachChatForm');
    const chatInput = document.getElementById('coachChatInput');
    const chatFeed = document.getElementById('coachChatFeed');

    if (chatForm && chatInput && chatFeed) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        const timeStr = 'Just now';
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble chat-bubble--user';
        userBubble.innerHTML = `
          <div class="chat-bubble__content">
            <p>${text}</p>
            <span class="chat-time">${timeStr}</span>
          </div>
        `;
        chatFeed.appendChild(userBubble);
        chatInput.value = '';
        chatFeed.scrollTop = chatFeed.scrollHeight;

        // Auto coach reply simulation
        setTimeout(() => {
          const coachBubble = document.createElement('div');
          coachBubble.className = 'chat-bubble chat-bubble--coach';
          coachBubble.innerHTML = `
            <div class="chat-bubble__content">
              <b>Coach Vikram Rao</b>
              <p>Got it, Karthik! Focus on bracing your core through the eccentric phase today. I'll review your logs tonight.</p>
              <span class="chat-time">Just now</span>
            </div>
          `;
          chatFeed.appendChild(coachBubble);
          chatFeed.scrollTop = chatFeed.scrollHeight;
          if (window.showToast) window.showToast('Coach Vikram Rao replied to your note.', 'info', 'Coach Dispatch');
        }, 1200);
      });
    }

    const chatFormMain = document.getElementById('coachChatFormMain');
    const chatInputMain = document.getElementById('coachChatInputMain');
    const chatFeedMain = document.getElementById('coachChatFeedMain');

    if (chatFormMain && chatInputMain && chatFeedMain) {
      chatFormMain.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInputMain.value.trim();
        if (!text) return;

        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble chat-bubble--user';
        userBubble.innerHTML = `
          <div class="chat-bubble__content">
            <p>${text}</p>
            <span class="chat-time">Just now</span>
          </div>
        `;
        chatFeedMain.appendChild(userBubble);
        chatInputMain.value = '';
        chatFeedMain.scrollTop = chatFeedMain.scrollHeight;

        setTimeout(() => {
          const coachBubble = document.createElement('div');
          coachBubble.className = 'chat-bubble chat-bubble--coach';
          coachBubble.innerHTML = `
            <div class="chat-bubble__content">
              <b>Coach Vikram Rao</b>
              <p>Got your message, Karthik! Stay locked in on today's form and post your RPE notes right after the session.</p>
              <span class="chat-time">Just now</span>
            </div>
          `;
          chatFeedMain.appendChild(coachBubble);
          chatFeedMain.scrollTop = chatFeedMain.scrollHeight;
          if (window.showToast) window.showToast('Coach Vikram Rao replied to your dispatch.', 'info', 'Coach Dispatch');
        }, 1200);
      });
    }

    // 7. Membership Renewal Modal
    const btnRenewPlan = document.getElementById('btnRenewPlan');
    const renewModal = document.getElementById('renewModal');
    const btnCloseRenew = document.getElementById('btnCloseRenew');
    const renewForm = document.getElementById('renewForm');

    if (btnRenewPlan && renewModal) {
      btnRenewPlan.addEventListener('click', () => {
        renewModal.style.display = 'flex';
      });
    }
    if (btnCloseRenew && renewModal) {
      btnCloseRenew.addEventListener('click', () => {
        renewModal.style.display = 'none';
      });
    }
    if (renewModal) {
      renewModal.addEventListener('click', (e) => {
        if (e.target === renewModal) renewModal.style.display = 'none';
      });
    }
    if (renewForm) {
      renewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (renewModal) renewModal.style.display = 'none';
        if (window.showToast) {
          window.showToast('Membership renewed for 12 months! Next renewal: September 28, 2027.', 'success', 'Membership Extended');
        }
      });
    }
  }

  function initAdminDashboard() {
    const isAdminDash = window.location.pathname.includes('admin-dashboard.html');
    if (!isAdminDash) return;

    // --- Mobile Sidebar Toggle & Overlay ---
    const sidebar = document.getElementById('dashSidebar');
    const sidebarToggle = document.getElementById('dashSidebarToggle');
    const sidebarClose = document.getElementById('dashSidebarClose');
    const sidebarBackdrop = document.getElementById('dashSidebarBackdrop');

    function openSidebar() {
      if (sidebar) sidebar.classList.add('is-open');
      if (sidebarBackdrop) sidebarBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove('is-open');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

    document.querySelectorAll('.dash-sidebar-nav-item').forEach(item => {
      item.addEventListener('click', closeSidebar);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar && sidebar.classList.contains('is-open')) {
        closeSidebar();
      }
    });

    // 1. Live Member Filter & Search
    const searchInput = document.getElementById('adminMemberSearch');
    const statusFilter = document.getElementById('adminStatusFilter');
    const memberRows = document.querySelectorAll('.admin-member-row');

    function filterMembers() {
      const q = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const status = statusFilter ? statusFilter.value : 'all';

      memberRows.forEach(row => {
        const name = (row.querySelector('.member-name')?.textContent || '').toLowerCase();
        const id = (row.querySelector('.member-id')?.textContent || '').toLowerCase();
        const rowStatus = row.dataset.status || '';

        const matchQ = !q || name.includes(q) || id.includes(q);
        const matchStatus = status === 'all' || rowStatus === status;

        row.style.display = (matchQ && matchStatus) ? '' : 'none';
      });
    }

    if (searchInput) searchInput.addEventListener('input', filterMembers);
    if (statusFilter) statusFilter.addEventListener('change', filterMembers);

    // 2. Simulated Floor Check-in
    const btnSimCheckin = document.getElementById('btnSimulateCheckin');
    const currentCountEl = document.getElementById('liveFloorCount');
    if (btnSimCheckin && currentCountEl) {
      btnSimCheckin.addEventListener('click', () => {
        let val = parseInt(currentCountEl.textContent, 10) || 42;
        val += 1;
        currentCountEl.textContent = val;
        if (window.showToast) window.showToast(`Member NG-0941 checked in. Active floor: ${val} athletes.`, 'info', 'Gate Scan');
      });
    }

    // 3. Broadcast Alert Modal Simulator
    const btnBroadcast = document.getElementById('btnSendBroadcast');
    if (btnBroadcast) {
      btnBroadcast.addEventListener('click', () => {
        const msg = prompt('Enter emergency announcement or schedule update to broadcast to active members:');
        if (msg && msg.trim()) {
          if (window.showToast) window.showToast(`Broadcast published: "${msg.trim()}"`, 'success', 'Broadcast Live');
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initUserDashboard();
    initAdminDashboard();
  });

})();

