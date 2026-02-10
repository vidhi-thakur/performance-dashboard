## Performance Baseline (v2)

### <u>Category 1</u>: React Rendering & Render Boundaries
### React Profiler

Interaction tested:
- Typing a single character in search input

Commits:
- Total commits: 2
- Slowest commit: 359ms
- Secondary commit: 3ms 

Component level cost:
- Row render count: 1
- Stats render count: 0

---

Interaction tested:
- Applied all filters

Commits:
- Total commits: 6
- Slowest commit: 14.6ms
- 1st commit: 14.6ms
- 2nd commit: 2.2ms
- 3rd commit: 2.2ms
- 4th commit: 2.2ms
- 5th commit: 4.7ms
- 6th commit: 12.4ms

Component level cost:
- Row render count: 1
- Stats render count: 0
---

Interaction tested:
- Cleared filters

Commits:
- Total commits: 1
- Commit duration: 817ms

Component level cost:
- Row render count: 2
- Stats render count: 0

### Performance tab

Interaction tested:
- Typing a single character in search input

Long Task:
- Duration: 446ms
- Triggered by: keypress event

Main Thread Breakdown:
- Scripting (JavaScript execution): 1ms
- React/System overhead: 445ms
- Rendering: 19ms

Interaction Latency:
- INP: 671ms

---

Interaction tested:
- Applying all filters

Long Task:
- Duration: 339ms
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 0ms
- React/System overhead: 339ms
- Rendering: 0ms

Interaction Latency:
- INP: 41ms

---

Interaction tested:
- Clearing filters

Long Task:
- Duration: 1.66s
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 985ms
- React/System overhead: 543ms
- Rendering: 136ms

Interaction Latency:
- INP: 1684ms


### FPS & UI Responsiveness

- Initial load FPS: 1.2
- Scrolling FPS: 30-50
- Typing FPS: <30
- Applying filters FPS: < 40-50
- UI effectively frozen during heavy interactions
