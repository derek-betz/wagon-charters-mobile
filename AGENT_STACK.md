# Wagon Charters Mobile Rebuild

Scope:
- Mobile-first redesign only
- No desktop pass yet
- Optimize for conversion, clarity, and booking/quote completion

Execution stack:
- Planner/orchestrator: 5.5-class model
- Audit workers: cheap models
- Design/system worker: cheap model
- Implementation workers: cheap models, split by page/slice
- QA worker: cheap model

Phase order:
1. Content and UX audit
2. Mobile wireframe and conversion hierarchy
3. Shell, navigation, and visual system
4. Offers/listings and quote/request flow
5. QA and merge review

Budget rules:
- Use the expensive model only for spec lock, conflict resolution, and final review
- Keep implementation prompts small and isolated
- Parallelize page-level work, not whole-site prompts
- Reuse prompt templates across workers

Initial deliverables:
- Mobile hero
- CTA hierarchy
- Ride/package presentation
- Trust signals
- Quote/request flow

