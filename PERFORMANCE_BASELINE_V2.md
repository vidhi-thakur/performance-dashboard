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

---


### <u>Category 2</u>: Derived State & Memoization
### React Profiler

Interaction tested:
- Typing a single character in search input

Commits:
- Total commits: 1
- Slowest commit: 576.3ms

Component level cost:
- Row render count: 1
- Stats render count: 0

---

Interaction tested:
- Applied all filters

Commits:
- Total commits: 5
- Slowest commit: 11.4ms
- 1st commit: 11.4ms
- 2nd commit: 3ms
- 3rd commit: 3ms
- 4th commit: 3ms
- 5th commit: 10.7ms

Component level cost:
- Row render count: 1
- Stats render count: 0
---

Interaction tested:
- Cleared filters

Commits:
- Total commits: 1
- Commit duration: 525.5ms

Component level cost:
- Row render count: 1
- Stats render count: 0

### Performance tab

Interaction tested:
- Typing a single character in search input

Long Task:
- Duration: 793ms
- Triggered by: keypress event

Main Thread Breakdown:
- Scripting (JavaScript execution): 593ms
- React/System overhead: 181ms
- Rendering: 19ms

Interaction Latency:
- INP: 822ms

---

Interaction tested:
- Applying all filters

Long Task:
- Duration: 204ms
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 166ms
- React/System overhead: 35ms
- Rendering: 3ms

Interaction Latency:
- INP: 225ms

---

Interaction tested:
- Clearing filters

Long Task:
- Duration: 1.75s
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 971ms
- React/System overhead: 631ms
- Rendering: 144ms

Interaction Latency:
- INP: 1777ms

---


### <u>Category 3</u>: Virtualization to data list
### React Profiler

Interaction tested:
- Typing a single character in search input

Commits:
- Total commits: 2
- Slowest commit: 14.6ms
- Second commit: 0.7ms

Component level cost:
- Row render count: 
- Stats render count: 

---

Interaction tested:
- Applied all filters

Commits:
- Total commits: 6
- 6th commit: 8.6ms
- 1st commit: 3.3ms
- 2nd commit: 3.3ms
- 3rd commit: 3.6ms
- 4th commit: 14.4ms
- 5th commit: 1.2ms

Component level cost:
- Row render count: 
- Stats render count: 
---

Interaction tested:
- Cleared filters

Commits:
- Total commits: 2
- 1st commit: 18ms
- 2nd commit: 2.4ms

Component level cost:
- Row render count: 
- Stats render count: 

### Performance tab

Interaction tested:
- Typing a single character in search input

Long Task:
- Duration: 288ms
- Triggered by: keypress event

Main Thread Breakdown:
- Scripting (JavaScript execution): 227ms
- React/System overhead: 59ms
- Rendering: 2ms

Interaction Latency:
- INP: 70ms

---

Interaction tested:
- Applying all filters

Long Task:
- Duration: 149ms
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 0ms
- React/System overhead: 149ms
- Rendering: 0ms

Interaction Latency:
- INP: 225ms

---

Interaction tested:
- Clearing filters

Long Task:
- Duration: 77ms
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 0ms
- React/System overhead: 77ms
- Rendering: 0ms

Interaction Latency:
- INP: 85ms