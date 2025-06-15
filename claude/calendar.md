# Calendar

<ClientOnly>
<div class="calendar-wrapper">

<style>
.calendar-wrapper {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f5f5f7;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
}

.calendar-container {
  max-width: 400px;
  margin: 0 auto 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  overflow: hidden;
}

.calendar-header {
  padding: 20px;
  text-align: center;
  background: #007AFF;
  color: white;
}

.calendar-header h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.calendar-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.nav-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.nav-btn:hover {
  background: rgba(255,255,255,0.3);
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 15px 20px 0;
}

.weekday {
  text-align: center;
  font-size: 12px;
  color: #8E8E93;
  font-weight: 500;
  padding: 8px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  padding: 10px 20px 20px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  overflow: hidden;
  min-height: 40px;
}

.calendar-day:hover {
  background: #f0f0f0;
}

.calendar-day.other-month {
  color: #C7C7CC;
}

.calendar-day.today {
  background: #34C759 !important;
  color: white;
  font-weight: 600;
}

.calendar-day.morning-only::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #FF9500 50%, transparent 50%);
  z-index: 1;
}

.calendar-day.afternoon-only::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 50%, #007AFF 50%);
  z-index: 1;
}

.calendar-day.full-day {
  background: #FF3B30 !important;
  color: white;
}

.calendar-day span {
  position: relative;
  z-index: 2;
  font-weight: 500;
}

.legend {
  max-width: 400px;
  margin: 0 auto 30px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.legend h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #1D1D1F;
}

.legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-box {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.legend-box.morning::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #FF9500 50%, #f0f0f0 50%);
}

.legend-box.afternoon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f0f0f0 50%, #007AFF 50%);
}

.legend-box.full {
  background: #FF3B30;
}

.legend-text {
  font-size: 14px;
  color: #1D1D1F;
}

.alternatives {
  max-width: 800px;
  margin: 0 auto;
}

.alternatives h2 {
  text-align: center;
  margin: 0 0 30px 0;
  color: #1D1D1F;
}

.alt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.alt-example {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.alt-example h3 {
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #1D1D1F;
  text-align: center;
}

.alt-days {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.alt-day {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.alt-day.top-half::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: #FF9500;
  z-index: 1;
}

.alt-day.bottom-half::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: #007AFF;
  z-index: 1;
}

.alt-day.left-half::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  bottom: 0;
  background: #FF9500;
  z-index: 1;
}

.alt-day.right-half::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  bottom: 0;
  background: #007AFF;
  z-index: 1;
}

.alt-day.corner-tl::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-top: 18px solid #FF9500;
  border-right: 18px solid transparent;
  z-index: 1;
}

.alt-day.corner-br::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 18px solid #007AFF;
  border-left: 18px solid transparent;
  z-index: 1;
}

.alt-day.dots::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #FF9500;
  border-radius: 50%;
  z-index: 2;
}

.alt-day.dots::before {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #007AFF;
  border-radius: 50%;
  z-index: 2;
}

.alt-day.dots.morning-only::before {
  display: none;
}

.alt-day.dots.afternoon-only::after {
  display: none;
}

.alt-day span {
  position: relative;
  z-index: 3;
  color: #1D1D1F;
}

.interactive-demo {
  max-width: 400px;
  margin: 40px auto;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.interactive-demo h3 {
  text-align: center;
  margin: 0 0 15px 0;
  color: #1D1D1F;
}

.demo-instructions {
  text-align: center;
  font-size: 14px;
  color: #8E8E93;
  margin-bottom: 15px;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
</style>

<div class="calendar-container">
  <div class="calendar-header">
    <div class="calendar-nav">
      <button class="nav-btn">‹</button>
      <h2>June 2025</h2>
      <button class="nav-btn">›</button>
    </div>
  </div>

  <div class="weekdays">
    <div class="weekday">M</div>
    <div class="weekday">T</div>
    <div class="weekday">W</div>
    <div class="weekday">T</div>
    <div class="weekday">F</div>
    <div class="weekday">S</div>
    <div class="weekday">S</div>
  </div>

  <div class="calendar-grid">
    <div class="calendar-day other-month"><span>26</span></div>
    <div class="calendar-day other-month"><span>27</span></div>
    <div class="calendar-day other-month"><span>28</span></div>
    <div class="calendar-day other-month"><span>29</span></div>
    <div class="calendar-day other-month"><span>30</span></div>
    <div class="calendar-day other-month"><span>31</span></div>
    <div class="calendar-day"><span>1</span></div>
    <div class="calendar-day"><span>2</span></div>
    <div class="calendar-day morning-only"><span>3</span></div>
    <div class="calendar-day"><span>4</span></div>
    <div class="calendar-day afternoon-only"><span>5</span></div>
    <div class="calendar-day"><span>6</span></div>
    <div class="calendar-day"><span>7</span></div>
    <div class="calendar-day"><span>8</span></div>
    <div class="calendar-day"><span>9</span></div>
    <div class="calendar-day full-day"><span>10</span></div>
    <div class="calendar-day"><span>11</span></div>
    <div class="calendar-day today"><span>12</span></div>
    <div class="calendar-day"><span>13</span></div>
    <div class="calendar-day morning-only"><span>14</span></div>
    <div class="calendar-day afternoon-only"><span>15</span></div>
    <div class="calendar-day"><span>16</span></div>
    <div class="calendar-day"><span>17</span></div>
    <div class="calendar-day"><span>18</span></div>
    <div class="calendar-day"><span>19</span></div>
    <div class="calendar-day full-day"><span>20</span></div>
    <div class="calendar-day full-day"><span>21</span></div>
    <div class="calendar-day"><span>22</span></div>
    <div class="calendar-day"><span>23</span></div>
    <div class="calendar-day"><span>24</span></div>
    <div class="calendar-day morning-only"><span>25</span></div>
    <div class="calendar-day afternoon-only"><span>26</span></div>
    <div class="calendar-day"><span>27</span></div>
    <div class="calendar-day"><span>28</span></div>
    <div class="calendar-day"><span>29</span></div>
    <div class="calendar-day"><span>30</span></div>
    <div class="calendar-day other-month"><span>1</span></div>
    <div class="calendar-day other-month"><span>2</span></div>
    <div class="calendar-day other-month"><span>3</span></div>
    <div class="calendar-day other-month"><span>4</span></div>
    <div class="calendar-day other-month"><span>5</span></div>
    <div class="calendar-day other-month"><span>6</span></div>
  </div>
</div>

<div class="legend">
  <h3>Vacation Legend</h3>
  <div class="legend-items">
    <div class="legend-item">
      <div class="legend-box morning"></div>
      <span class="legend-text">Morning Only</span>
    </div>
    <div class="legend-item">
      <div class="legend-box afternoon"></div>
      <span class="legend-text">Afternoon Only</span>
    </div>
    <div class="legend-item">
      <div class="legend-box full"></div>
      <span class="legend-text">Full Day</span>
    </div>
  </div>
</div>

<div class="alternatives">
  <h2>Alternative Visual Approaches</h2>
  <div class="alt-grid">
    <div class="alt-example">
      <h3>Diagonal Split</h3>
      <div class="alt-days">
        <div class="alt-day morning-only"><span>15</span></div>
        <div class="alt-day afternoon-only"><span>16</span></div>
        <div class="alt-day full-day"><span>17</span></div>
      </div>
    </div>
    <div class="alt-example">
      <h3>Horizontal Split</h3>
      <div class="alt-days">
        <div class="alt-day top-half"><span>15</span></div>
        <div class="alt-day bottom-half"><span>16</span></div>
        <div class="alt-day full-day"><span>17</span></div>
      </div>
    </div>
    <div class="alt-example">
      <h3>Vertical Split</h3>
      <div class="alt-days">
        <div class="alt-day left-half"><span>15</span></div>
        <div class="alt-day right-half"><span>16</span></div>
        <div class="alt-day full-day"><span>17</span></div>
      </div>
    </div>
    <div class="alt-example">
      <h3>Corner Triangles</h3>
      <div class="alt-days">
        <div class="alt-day corner-tl"><span>15</span></div>
        <div class="alt-day corner-br"><span>16</span></div>
        <div class="alt-day full-day"><span>17</span></div>
      </div>
    </div>
    <div class="alt-example">
      <h3>Dot Indicators</h3>
      <div class="alt-days">
        <div class="alt-day dots morning-only"><span>15</span></div>
        <div class="alt-day dots afternoon-only"><span>16</span></div>
        <div class="alt-day full-day"><span>17</span></div>
      </div>
    </div>
  </div>
</div>

<div class="interactive-demo">
  <h3>Interactive Demo</h3>
  <p class="demo-instructions">Click days to cycle through: None → Morning → Afternoon → Full Day</p>
  <div class="demo-grid">
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>15</span></div>
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>16</span></div>
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>17</span></div>
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>18</span></div>
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>19</span></div>
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>20</span></div>
    <div class="calendar-day demo-day" data-state="none" onclick="cycleDayState(this)"><span>21</span></div>
  </div>
</div>

</div>
</ClientOnly>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Make function globally available
  window.cycleDayState = function(element) {
    const states = ['none', 'morning-only', 'afternoon-only', 'full-day'];
    let currentState = element.dataset.state;
    let currentIndex = states.indexOf(currentState);
    let nextIndex = (currentIndex + 1) % states.length;
    let nextState = states[nextIndex];

    // Remove all state classes
    states.forEach(state => element.classList.remove(state));

    // Add new state class
    if (nextState !== 'none') {
      element.classList.add(nextState);
    }

    element.dataset.state = nextState;
  }
})
</script>
