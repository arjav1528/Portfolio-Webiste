# Content reconciliation

Sources: the original portfolio components and supplied resume.tex; the three user-linked Jira summaries read on 15 November 2026. No Jira payloads, internal implementation details, customer information, or screenshots are stored here.

- Resume-only content added: TechStaX; course-registration portal; Apache Airflow/NuttX/NuttX Apps; CommitCut; Flutter Chaos Toolkit; four-platform Nudron work; team and teaching scope.
- Website-only content retained: Pragati One; CTE teaching; ClassSync; GiftGenie; campus solar research; education/coursework; skills. The earlier DevSoc role was removed at the user’s request.
- Shared projects merged: fest app (3,500+ users from website, ₹10M+ payments from resume), SWD Store, Night Vigil.
- Nudron and DevSoc end dates follow the resume instead of the older website’s “Present”. The user supplied Showpad’s role as Software Engineering Intern and dates as July–December 2026.
- Showpad is a normal work-experience entry covering AI-powered search, sharing expiry controls, and AI roleplay glossary/pronunciation improvements. Ticket identifiers, titles, and links are omitted at the user’s request. No completed/shipped status is claimed.
- TechStaX size change is presented as 123.1 MB → 65 MB (about 47%, rather than the resume's rounded 50%).
- Solar research and GiftGenie are retained, but the old site's 15% efficiency / 85% accuracy figures and publication status are omitted pending a paper, benchmark, or evaluation source. Arbitrary skill percentages are replaced with skill groups.
- The old contact component contains a placeholder phone, inconsistent profiles, and a doubled email domain. The resume email/GitHub and hero LinkedIn are used. No fake message form or testimonials.
- The supplied PDF is preserved as a download; it has not been rewritten or regenerated. The website is the consolidated source of portfolio content.

# Design

Next.js App Router + React + TypeScript, exported to static HTML. Locally bundled Syne display type and Space Grotesk body type. Ink #0E0E12, lime #CCFF00, magenta #FF1E8E, cobalt #2D5BFF, cream #FFF8E7, and chrome surfaces. Thick black outlines, offset shadows, asymmetric projects, a portrait collage, and a documented-impact wall. Native anchors and details; small client components for mobile navigation, project filters, and motion controls. Reduced motion, keyboard focus, readable contrast, and mobile stacking are required.
