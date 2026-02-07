## Performance Baseline (v1)

### React Profiler

Interaction tested:
- Typing a single character in search input

Commits:
- Total commits: 2
- Slowest commit: 462.9ms
- Secondary commit: 55ms

React Profiler:
- Root cause: App-level state update

Browser Impact:
- Main thread blocked > 500ms

UX Impact:
- UI freezes briefly

Component level cost:
- Row render count: 2
- Stats render count: 8

---

Interaction tested:
- Applied all filters

Commits:
- Total commits: 6
- Slowest commit: 550.1ms
- 1st commit: 537.7ms
- 2nd commit: 1.8ms
- 3rd commit: 1.5ms
- 4th commit: 1.9ms
- 5th commit: 550.1ms
- 6th commit: 4.6ms

React Profiler:
- Root cause: App-level state update

Browser Impact:
- Main thread blocked > 1000ms

UX Impact:
- UI lag visible

Component level cost:
- Row render count: 3
- Stats render count: 12

---

Interaction tested:
- Cleared filters

Commits:
- Total commits: 1
- Commit duration: 766.8ms

React Profiler:
- Root cause: App-level state update

Browser Impact:
- Main thread blocked > 700ms

UX Impact:
- UI lag visible

Component level cost:
- Row render count: 2
- Stats render count: 4


### Performance tab

### Chrome Performance (Browser-level)

Interaction tested:
- Typing a single character in search input

Long Task:
- Duration: 1.39s
- Triggered by: keypress event

Main Thread Breakdown:
- Scripting (JavaScript execution): 947ms
- React/System overhead: 441ms
- Rendering: 6ms

Interaction Latency:
- INP: 1418ms

Conclusion:
- Main thread is blocked by synchronous JavaScript work
- Performance issue is computation-heavy, not DOM-related

---

Interaction tested:
- Applying all filters

Long Task:
- Duration: 1.37s
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 957ms
- React/System overhead: 398ms
- Rendering: 14ms

Interaction Latency:
- INP: 1385ms

Conclusion:
- Main thread is blocked by synchronous JavaScript work
- Performance issue is computation-heavy, not DOM-related

---

Interaction tested:
- Clearing filters

Long Task:
- Duration: 1.5s
- Triggered by: click event

Main Thread Breakdown:
- Scripting (JavaScript execution): 939ms
- React/System overhead: 478ms
- Rendering: 78ms

Interaction Latency:
- INP: 1586ms

Conclusion:
- Main thread is blocked by synchronous JavaScript work
- Performance issue is computation-heavy, not DOM-related


### FPS & UI Responsiveness

- Initial load FPS: 1.2
- Scrolling FPS: <30
- Typing FPS: < 15
- Applying filters FPS: < 20
- UI effectively frozen during heavy interactions