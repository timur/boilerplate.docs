# Month Calendar

<div class="calendar-container">
  <!-- Header -->
  <div class="calendar-header">
    <div class="header-left">
      <button class="btn" id="today-btn">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
        <span class="btn-text">Today</span>
      </button>
      <div class="header-controls">
        <button class="btn btn-icon" id="prev-btn">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        <button class="btn btn-icon" id="next-btn">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
      <h2 class="calendar-title" id="calendar-title">June 2025</h2>
    </div>
    <div class="header-right">
      <div class="view-dropdown">
        <button class="btn" id="dropdown-btn">
          <span>Month</span>
          <svg class="icon chevron-down" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
        <div class="dropdown-content" id="view-dropdown">
          <button class="dropdown-item">Month</button>
          <button class="dropdown-item">Week</button>
          <button class="dropdown-item">Day</button>
          <button class="dropdown-item">Agenda</button>
        </div>
      </div>
      <button class="btn btn-primary" id="new-event-btn">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        <span class="btn-text">New event</span>
      </button>
    </div>
  </div>

  <!-- Weekdays -->
  <div class="weekdays">
    <div class="weekday">Sun</div>
    <div class="weekday">Mon</div>
    <div class="weekday">Tue</div>
    <div class="weekday">Wed</div>
    <div class="weekday">Thu</div>
    <div class="weekday">Fri</div>
    <div class="weekday">Sat</div>
  </div>

  <!-- Calendar Grid -->
  <div class="calendar-grid" id="calendar-grid">
    <!-- Calendar days will be generated by JavaScript -->
  </div>
</div>

<style>
.calendar-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header */
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.btn-icon {
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
}

.calendar-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.view-dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 1000;
  display: none;
}

.dropdown-content.show {
  display: block;
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 14px;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: #f9fafb;
}

/* Weekdays */
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #e2e8f0;
}

.weekday {
  padding: 12px 0;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

/* Calendar Grid */
.calendar-grid {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  min-height: 600px;
  width: 100%;
}

.calendar-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
}

.calendar-day {
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
  min-height: 100px;
  max-height: 100px;
  padding: 8px;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.calendar-day:last-child {
  border-right: none;
}

.calendar-week:last-child .calendar-day {
  border-bottom: none;
}

.calendar-day:hover {
  background: #f9fafb;
}

.calendar-day.outside-month {
  background: #f8fafc;
  color: #9ca3af;
}

.calendar-day.today .day-number {
  background: #3b82f6;
  color: white;
}

.day-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
}

/* Events */
.event-container {
  min-height: 60px;
  max-height: 70px;
  overflow: hidden;
  width: 100%;
}

.event {
  padding: 2px 6px;
  margin: 1px 0;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.event:hover {
  opacity: 0.8;
}

/* Event Colors */
.event.sky {
  background: #e0f2fe;
  color: #0c4a6e;
  border-left: 3px solid #0ea5e9;
}

.event.amber {
  background: #fef3c7;
  color: #92400e;
  border-left: 3px solid #f59e0b;
}

.event.orange {
  background: #fed7aa;
  color: #9a3412;
  border-left: 3px solid #ea580c;
}

.event.emerald {
  background: #d1fae5;
  color: #065f46;
  border-left: 3px solid #10b981;
}

.event.violet {
  background: #ede9fe;
  color: #5b21b6;
  border-left: 3px solid #8b5cf6;
}

.event.rose {
  background: #fce7f3;
  color: #9f1239;
  border-left: 3px solid #f43f5e;
}

.more-events {
  padding: 2px 6px;
  margin: 1px 0;
  background: transparent;
  color: #6b7280;
  font-size: 12px;
  cursor: pointer;
  border: none;
  text-align: left;
  width: 100%;
  border-radius: 4px;
  transition: background 0.2s;
}

.more-events:hover {
  background: #f3f4f6;
}

/* Icons */
.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.chevron-down {
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 768px) {
  .calendar-header {
    padding: 12px 16px;
  }

  .header-left {
    gap: 8px;
  }

  .calendar-title {
    font-size: 16px;
  }

  .calendar-day {
    min-height: 80px;
    padding: 4px;
  }

  .event {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .weekday {
    font-size: 12px;
    padding: 8px 0;
  }

  .calendar-day {
    min-height: 60px;
  }

  .btn .btn-text {
    display: none;
  }
}
</style>

<script type="module">
// Wait for DOM to be ready
function initCalendar() {
  // Sample events data - June 2025
  const sampleEvents = [
    {
      id: "1",
      title: "Project Deadline",
      description: "Submit final deliverables",
      start: new Date(2025, 5, 2, 13, 0),
      end: new Date(2025, 5, 2, 15, 30),
      color: "amber",
      location: "Office"
    },
    {
      id: "2",
      title: "Team Meeting",
      description: "Weekly team sync",
      start: new Date(2025, 5, 11, 10, 0),
      end: new Date(2025, 5, 11, 11, 0),
      color: "sky",
      location: "Conference Room A"
    },
    {
      id: "3",
      title: "Lunch with Client",
      description: "Discuss new project requirements",
      start: new Date(2025, 5, 12, 12, 0),
      end: new Date(2025, 5, 12, 13, 15),
      color: "emerald",
      location: "Downtown Cafe"
    },
    {
      id: "4",
      title: "Product Launch",
      description: "New product release",
      start: new Date(2025, 5, 14),
      end: new Date(2025, 5, 14),
      allDay: true,
      color: "violet"
    },
    {
      id: "5",
      title: "Sales Conference",
      description: "Discuss about new clients",
      start: new Date(2025, 5, 15, 14, 30),
      end: new Date(2025, 5, 15, 16, 0),
      color: "rose",
      location: "Conference Center"
    },
    {
      id: "6",
      title: "Team Meeting",
      description: "Weekly team sync",
      start: new Date(2025, 5, 16, 9, 0),
      end: new Date(2025, 5, 16, 10, 30),
      color: "orange",
      location: "Conference Room A"
    },
    {
      id: "7",
      title: "Review contracts",
      description: "Legal review session",
      start: new Date(2025, 5, 16, 14, 0),
      end: new Date(2025, 5, 16, 15, 30),
      color: "sky",
      location: "Legal Department"
    },
    {
      id: "8",
      title: "Budget Planning",
      description: "Q3 budget review",
      start: new Date(2025, 5, 16, 16, 0),
      end: new Date(2025, 5, 16, 17, 0),
      color: "amber",
      location: "Finance Room"
    },
    {
      id: "9",
      title: "Marketing Strategy Session",
      description: "Quarterly marketing planning",
      start: new Date(2025, 5, 20, 10, 0),
      end: new Date(2025, 5, 20, 15, 30),
      color: "emerald",
      location: "Marketing Department"
    },
    {
      id: "10",
      title: "Annual Shareholders Meeting",
      description: "Presentation of yearly results",
      start: new Date(2025, 5, 28),
      end: new Date(2025, 5, 28),
      allDay: true,
      color: "sky",
      location: "Grand Conference Center"
    }
  ];

  let currentDate = new Date(2025, 5, 11); // Start at June 2025, 11th is today
  let events = [...sampleEvents];

  // Calendar navigation
  function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  }

  function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  }

  function goToToday() {
    currentDate = new Date();
    renderCalendar();
  }

  // View management
  function toggleDropdown() {
    const dropdown = document.getElementById('view-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  }

  // Event management
  function createEvent() {
    const title = prompt('Event title:');
    if (title) {
      const newEvent = {
        id: Date.now().toString(),
        title: title,
        start: new Date(),
        end: new Date(),
        allDay: true,
        color: 'sky'
      };
      events.push(newEvent);
      renderCalendar();
    }
  }

  function eventClick(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
      alert(`Event: ${event.title}\nTime: ${event.start.toLocaleDateString()}`);
    }
  }

  // Utility functions
  function getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  }

  function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  function isToday(date) {
    return isSameDay(date, new Date());
  }

  function isSameMonth(date, monthDate) {
    return date.getMonth() === monthDate.getMonth() &&
           date.getFullYear() === monthDate.getFullYear();
  }

  function getEventsForDay(day) {
    return events.filter(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      if (event.allDay) {
        return day >= eventStart && day <= eventEnd;
      } else {
        return isSameDay(day, eventStart);
      }
    });
  }

  function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  // Render calendar
  function renderCalendar() {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const titleElement = document.getElementById('calendar-title');
    if (titleElement) {
      titleElement.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    }

    const days = getDaysInMonth(currentDate);
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;

    grid.innerHTML = '';

    for (let week = 0; week < 6; week++) {
      const weekDiv = document.createElement('div');
      weekDiv.className = 'calendar-week';

      for (let day = 0; day < 7; day++) {
        const dayIndex = week * 7 + day;
        const currentDay = days[dayIndex];
        const dayEvents = getEventsForDay(currentDay);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';

        if (!isSameMonth(currentDay, currentDate)) {
          dayDiv.classList.add('outside-month');
        }

        if (isToday(currentDay)) {
          dayDiv.classList.add('today');
        }

        dayDiv.addEventListener('click', () => {
          console.log('Day clicked:', currentDay);
          createEvent();
        });

        // Day number
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = currentDay.getDate();
        dayDiv.appendChild(dayNumber);

        // Events container
        const eventContainer = document.createElement('div');
        eventContainer.className = 'event-container';

        // Show first few events
        const maxVisible = 3;
        const visibleEvents = dayEvents.slice(0, maxVisible);

        visibleEvents.forEach(event => {
          const eventDiv = document.createElement('div');
          eventDiv.className = `event ${event.color}`;
          eventDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            eventClick(event.id);
          });

          let eventText = event.title;
          if (!event.allDay) {
            eventText = `${formatTime(event.start)} ${event.title}`;
          }

          eventDiv.textContent = eventText;
          eventContainer.appendChild(eventDiv);
        });

        // Show "more" button if there are additional events
        if (dayEvents.length > maxVisible) {
          const moreButton = document.createElement('button');
          moreButton.className = 'more-events';
          moreButton.textContent = `+${dayEvents.length - maxVisible} more`;
          moreButton.addEventListener('click', (e) => {
            e.stopPropagation();
            alert(`All events for ${currentDay.toLocaleDateString()}:\n\n${dayEvents.map(e => e.title).join('\n')}`);
          });
          eventContainer.appendChild(moreButton);
        }

        dayDiv.appendChild(eventContainer);
        weekDiv.appendChild(dayDiv);
      }

      grid.appendChild(weekDiv);
    }
  }

  // Setup event listeners
  const todayBtn = document.getElementById('today-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const dropdownBtn = document.getElementById('dropdown-btn');
  const newEventBtn = document.getElementById('new-event-btn');

  if (todayBtn) todayBtn.addEventListener('click', goToToday);
  if (prevBtn) prevBtn.addEventListener('click', previousMonth);
  if (nextBtn) nextBtn.addEventListener('click', nextMonth);
  if (dropdownBtn) dropdownBtn.addEventListener('click', toggleDropdown);
  if (newEventBtn) newEventBtn.addEventListener('click', createEvent);

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('view-dropdown');
    const button = e.target.closest('.view-dropdown');
    if (!button && dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  });

  // Initial render
  renderCalendar();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCalendar);
} else {
  initCalendar();
}

// Also try to initialize after a short delay in case VitePress hasn't finished loading
setTimeout(initCalendar, 100);
</script>
