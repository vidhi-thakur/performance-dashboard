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