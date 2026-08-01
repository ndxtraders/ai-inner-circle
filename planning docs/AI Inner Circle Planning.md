**AI Inner Circle Planning**

I'm trying to determine which of these github repos are worth using and which are a waste of time. Some like Cherny, Karpathy, and Superpowers are known to be useful and I use Cherney's approach in some of my website building What's not clear is of the others repos, which are truly valuable and useful. Can you review, create a category system and an explanation of why I might or might not want to use them  
Gemini response  
Based on your current sources, here is a breakdown and category system for the repositories you've provided. These tools are designed to optimize AI-assisted coding workflows, specifically for **Claude Code** and **Cursor**.

### **At a Glance: Repository Evaluation**

| Repository | Focus Area | Value Proposition |
| ----- | ----- | ----- |
| **Superpowers** | **Process Rigor** | Best for high-stakes projects requiring strict TDD and systematic execution.[1](https://drive.google.com/file/d/1ibdfGxyUjvbSFskR2o6PMbdtnNRRNmFs/view?usp=drive_web)[2](https://drive.google.com/file/d/1YY-Vd_LSuDhb3ti-tXaBRNJjCbcOqUh7/view?usp=drive_web) |
| **Claude Boris** | **Automation/Orchestration** | Best for power users who want a "hands-off" experience with complex multi-agent setups.[3](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[4](https://drive.google.com/file/d/1LWucEuu-qU6nUWArHmqEzCU_Ai-VHpyG/view?usp=drive_web) |
| **Karpathy-Skills** | **Clean Code/Simplicity** | Best for preventing LLM "slop," over-engineering, and unnecessary code churn.[5](https://drive.google.com/file/d/1OqabArRPC4HmYfifdCoBR1Psxtiaccsw/view?usp=drive_web)[6](https://drive.google.com/file/d/1muNzCpGq_zLNOdafcAN9WU2Ca3Gcpn-4/view?usp=drive_web) |
| **Ultimate SEO \+ GEO** | **Domain Expertise** | Best for technical SEO audits and AI search optimization (GEO) rather than general coding.[7](https://drive.google.com/file/d/1o8_65IXnz7ldn4BHacWCARIsaXYyn22Z/view?usp=drive_web)[8](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web) |
| **ChernyCode** | **Personal Productivity** | Best for individuals wanting a lightweight, personal implementation of Boris Cherny's tips.[9](https://drive.google.com/file/d/1gpEPUaGEBqOSRkCRcu40IDRoO261ylrE/view?usp=drive_web)[10](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web) |

---

### **Category 1: Workflow Orchestration & Automation**

These repositories focus on *how* the AI agent works through a task.

#### **Superpowers**

* **Why use it:** It enforces a high-rigor methodology including TDD (Red-Green-Refactor), systematic debugging, and subagent-driven development. It is highly opinionated and designed to prevent "AI slop" through strict PR guidelines.[1](https://drive.google.com/file/d/1ibdfGxyUjvbSFskR2o6PMbdtnNRRNmFs/view?usp=drive_web)[2](https://drive.google.com/file/d/1YY-Vd_LSuDhb3ti-tXaBRNJjCbcOqUh7/view?usp=drive_web)[11](https://drive.google.com/file/d/1_dNd4T0i70tOrP_bcO72yFRHMD3BolsM/view?usp=drive_web)  
* **Why skip it:** The 94% rejection rate for PRs highlights that it has a very high bar for entry. It might feel too heavy for small, solo projects.[11](https://drive.google.com/file/d/1_dNd4T0i70tOrP_bcO72yFRHMD3BolsM/view?usp=drive_web)

#### **Claude Boris (v2.0)**

* **Why use it:** It solves the "context loss" gap between sessions using a specialized **Memory Bank** system. It provides 14 specialist agents (like security-auditor and git-guardian) and 18 custom slash commands to automate the "inner loop" of development.[3](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[12](https://drive.google.com/file/d/1YZ6cI3BjH1_fhCuzyEKSMuZzFED11u22/view?usp=drive_web)  
* **Why skip it:** If you prefer a "vanilla" experience or find multiple autonomous agents confusing, this orchestrated system might be overkill.[4](https://drive.google.com/file/d/1LWucEuu-qU6nUWArHmqEzCU_Ai-VHpyG/view?usp=drive_web)

---

### **Category 2: Behavioral Guardrails**

These repos focus on *restricting* the AI to ensure high-quality, senior-level output.

#### **Karpathy-Inspired Guidelines**

* **Why use it:** Specifically targets common LLM pitfalls like overcomplicating APIs and making silent assumptions. It uses four core principles: **Think Before Coding**, **Simplicity First**, **Surgical Changes**, and **Goal-Driven Execution**.[5](https://drive.google.com/file/d/1OqabArRPC4HmYfifdCoBR1Psxtiaccsw/view?usp=drive_web)[13](https://drive.google.com/file/d/1gtl1wdY9m3OFMw9IUv-L6Blad5jHVLiW/view?usp=drive_web)  
* **Why skip it:** It biases toward **caution over speed**. If you are doing trivial one-liner fixes, the full rigor of these guidelines may slow you down.[5](https://drive.google.com/file/d/1OqabArRPC4HmYfifdCoBR1Psxtiaccsw/view?usp=drive_web)

---

### **Category 3: Domain-Specific Expertise**

Tools built for a specific technical niche rather than general coding.

#### **Ultimate SEO \+ GEO**

* **Why use it:** It is a highly specialized agent for **Technical SEO** and **Generative Engine Optimization**. It includes 31 diagnostic scripts and covers everything from Core Web Vitals to AI citation strategy for platforms like Perplexity and ChatGPT.[7](https://drive.google.com/file/d/1o8_65IXnz7ldn4BHacWCARIsaXYyn22Z/view?usp=drive_web)[8](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web)  
* **Why skip it:** It is **not** for general web development. Use it only when you need a professional-grade SEO audit or schema generation.[7](https://drive.google.com/file/d/1o8_65IXnz7ldn4BHacWCARIsaXYyn22Z/view?usp=drive_web)[14](https://drive.google.com/file/d/15Nn-DA8J_ij3bverU3XTjyOswA8uF8xg/view?usp=drive_web)

---

### **Category 4: Reference & Templates**

Lightweight implementations used as a starting point.

#### **ChernyCode**

* **Why use it:** It serves as a "Project Memory" template. It's excellent if you want to manually manage your CLAUDE.md and AGENTS.md files while following Cherny's advice to "update memory after every mistake."[9](https://drive.google.com/file/d/1gpEPUaGEBqOSRkCRcu40IDRoO261ylrE/view?usp=drive_web)[10](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web)[15](https://drive.google.com/file/d/17yA7kiFLEKp2g7ykmbBD-viE7Cw6NRO0/view?usp=drive_web)  
* **Why skip it:** If you are already using a more robust system like *Claude Boris*, this repo will feel redundant as it provides the static templates that *Boris* automates.[10](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web)

Would you like me to help you draft a custom CLAUDE.md that merges the simplicity of Karpathy's guidelines with the Memory Bank system from Claude Boris?  
sorry, I wasn't clear. My main work is GTM and revenue growth systems. Some of that uses AI Leverage I sometimes get work that requires me to build websites, mobile apps, and Do SEO/GEO/AEO and GBP optimization That is the frame of reference and not just building websites  
Gemini response  
Based on your focus on GTM (Go-To-Market) systems, revenue growth, and technical SEO/GEO for client projects, here is a strategic evaluation of the available tools. These repositories are not just "coding helpers"; they are frameworks for automating the high-value, repetitive work of a growth operator.

### **At a Glance: Strategic Value for GTM & Revenue**

| Repository | Best For | GTM Impact |
| ----- | ----- | ----- |
| **Ultimate SEO \+ GEO** | **Audits & Technical SEO** | High-speed client site audits and automated Schema generation.[1](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web) |
| **Surface Labs Engine** | **Content Ops & AEO** | Turning founder recordings into 50+ pieces of citation-ready content.[2](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web)[3](https://drive.google.com/file/d/1og-E9HUyEG_A3dxKSAkUoZjuORt5voUx/view?usp=drive_web) |
| **GTM Orchestrator** | **Sales & CRM Ops** | Automated lead enrichment and outbound pipeline management.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) |
| **Lead Magnet Quiz** | **Lead Gen Systems** | Rapidly building high-converting quiz funnels and vision boards.[5](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web) |
| **Google Ads Copilot** | **Paid Search Ops** | Intent-based account optimization to eliminate wasted ad spend.[7](https://drive.google.com/file/d/1EdEHcZZsIxGwOSPUu-Vo62wc6B0RUOv4/view?usp=drive_web) |

---

### **Category 1: Search & AI Citation (SEO/GEO/AEO)**

These tools handle the technical requirements of making a site visible to both Google and AI Answer Engines.

* **Ultimate SEO \+ GEO (By Myk Pono)**  
  * **Why Use It:** It is a professional-grade audit engine with 31 diagnostic scripts. For revenue growth, it helps you identify "Quick Wins" and creates a phased roadmap. It specifically targets **GEO** (Generative Engine Optimization) to help clients get cited in ChatGPT and Perplexity.[8](https://drive.google.com/file/d/15Nn-DA8J_ij3bverU3XTjyOswA8uF8xg/view?usp=drive_web)[9](https://drive.google.com/file/d/10NxXmtrCfywLBtAanSoA2GV8_woi5nn3/view?usp=drive_web)[1](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web)[10](https://drive.google.com/file/d/1HwIqc3-w9LTAJ61nm8UhHm8G5shNsbYr/view?usp=drive_web)  
  * **Why Skip It:** If you aren't comfortable running terminal commands or Python scripts, you might find the "Full Skill" version heavy. However, you can still use it as a Custom GPT.[10](https://drive.google.com/file/d/1HwIqc3-w9LTAJ61nm8UhHm8G5shNsbYr/view?usp=drive_web)  
* **Surface Labs AEO/GEO Content Engine**  
  * **Why Use It:** This is a "Recording-to-Revenue" pipeline. It takes one 30-minute founder recording and extracts topics, creates angles, and generates 5–10 high-intent articles. This is ideal for GTM teams that need to scale content without a massive writing team.[2](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web)[3](https://drive.google.com/file/d/1og-E9HUyEG_A3dxKSAkUoZjuORt5voUx/view?usp=drive_web)[11](https://drive.google.com/file/d/1gzj8Ip9EPmMhIqFqWDyHOBCU9jrEf62-/view?usp=drive_web)  
  * **Why Skip It:** It requires a consistent recording habit from the client/founder to work effectively.[12](https://drive.google.com/file/d/1F-lhMkxk1s4i5gR70QWuMIPwefkV04lq/view?usp=drive_web)

---

### **Category 2: Lead Generation & Funnels**

These tools are built to capture leads and qualify them before they reach a sales team.

* **Lead Magnet Quiz & Vision Board Workflow**  
  * **Why Use It:** It automates the creation of a full Vercel-deployable quiz funnel, including personalized email sequences (26 emails across 5 tracks) and an analytics dashboard.[5](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web)  
  * **Why Skip It:** It requires a specific stack (Supabase, Vercel, Astro). If your client is locked into a different ecosystem (like ClickFunnels), this might require more manual migration.[5](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web)

---

### **Category 3: GTM Orchestration & Paid Media**

These tools focus on the "Outbound" and "Paid" levers of revenue growth.

* **GTM Orchestrator (By Jan Skuba)**  
  * **Why Use It:** This is the "connective tissue" for your GTM stack. It has 30 hooks for Slack, Apollo, HubSpot, and Lemlist. You can run an /outbound-pipeline that scrapes signals, prioritizes leads, and builds sequences automatically.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)  
  * **Why Skip It:** It is highly specialized for **Claude Code** users. If you don't use the Claude CLI, you won't be able to trigger these automated hooks.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)  
* **Google Ads Copilot**  
  * **Why Use It:** It focuses on "Intent Mapping"—seeing what the account is actually buying. It helps you find "waste" (non-converting researchers or job seekers) so you can reallocate budget to buyers.[7](https://drive.google.com/file/d/1EdEHcZZsIxGwOSPUu-Vo62wc6B0RUOv4/view?usp=drive_web)[13](https://drive.google.com/file/d/11C-pBUSvoYmTyLO1-fUWqKnpwoex84fi/view?usp=drive_web)[14](https://drive.google.com/file/d/1yhoXvLQeFuf93e9yPDc9CV0Z-xeUMRl4/view?usp=drive_web)  
  * **Why Skip It:** If your client only runs Brand-Search with exact-match keywords, this tool won't find much to fix.[14](https://drive.google.com/file/d/1yhoXvLQeFuf93e9yPDc9CV0Z-xeUMRl4/view?usp=drive_web)

---

### **Category 4: Operational Guardrails**

These are not tools, but "Behavioral Guidelines" to ensure your AI doesn't mess up your technical builds.

* **Karpathy-Skills (Andrej Karpathy Inspired)**  
  * **Why Use It:** It enforces a "Simplicity First" and "Surgical Changes" mindset. This is critical when you are building for clients; it prevents the AI from over-engineering simple features or refactoring code that isn't broken.[15](https://drive.google.com/file/d/1YWvArIq13pyx6DxHbrhRVLa9CTUMIFRn/view?usp=drive_web)[16](https://drive.google.com/file/d/1LKPuo38PvkQuAt6LPF0Q289JW3I_orux/view?usp=drive_web)  
  * **Why Skip It:** Use it as a set of rules for your AI, not as a standalone software tool.

Would you like me to help you set up the **Ultimate SEO \+ GEO** audit for a specific client URL to see how it categorizes their technical health?  
Export to Docs  
Gemini response  
[Gemini Export July 1, 2026 at 2:51:05 PM PDT](https://docs.google.com/document/d/1d_Ay3FprPbPpqGSdv1a1R5jCTGKYr5hqdx-Ww3xDiqs/edit?usp=drivesdk) was created and added to [My Drive](https://drive.google.com/drive/folders/0ALjsLj2sy3M0Uk9PVA)  
This response isn't saved in history  
Export to Docs  
Gemini response  
[Gemini Export July 1, 2026 at 2:52:26 PM PDT](https://docs.google.com/document/d/1AEvrrwBfRGSviiGabyOOqlg7s1Mou7ryKh2A8L7KxEQ/edit?usp=drivesdk) was created and added to [My Drive](https://drive.google.com/drive/folders/0ALjsLj2sy3M0Uk9PVA)  
This response isn't saved in history  
Can you do a similar process with the skills in this folder: https://drive.google.com/drive/folders/1VjS60zf1DZAZ9VHXcP\_sfRiDeAKLg\_pg?usp=sharing  
Gemini response  
There's no such information in your Drive.  
the link works. maybe you can't access "AI Inner Circle Skills" via the link Here is the folder structure in my drive 1 AI /1 documents\_1 AI/1 AI /AI Inner Circle Skills  
Gemini response  
Based on your focus on **GTM, revenue growth, and technical SEO/GEO**, I have reviewed the files in your "AI Inner Circle Skills" folder. I’ve categorized them based on their direct utility to your work as a growth operator.

### **Category 1: Search & AI Answer Engines (SEO/GEO/AEO)**

These tools are your "revenue generators" for technical search projects.

* **Ultimate SEO \+ GEO**[1](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web)  
  * **Value:** This is the most robust tool in your folder for your SEO/GEO work. It provides a scored audit (0–100) and an actionable roadmap for getting clients cited in ChatGPT, Perplexity, and Google AI Overviews.[1](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web)  
  * **Why use it:** Use it to perform professional-grade technical audits and generate schema markup without needing separate, expensive SEO software.[1](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web)  
* **Surface Labs AEO/GEO Content Engine**[2](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web)  
  * **Value:** A specialized "Recording-to-Blog" pipeline. It uses 9 agents to turn a single founder recording into 50+ blog posts optimized for AI search.[2](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web)[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
  * **Why use it:** This is perfect for the "Content Ops" side of GTM. It automates the extraction of "proof points" and original insights from transcripts to build authority.[2](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web)[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
* **Video-to-Guide**[4](https://drive.google.com/file/d/1TJ1XIS3wQII_OwB8F3w3b-kZQRHKzFpz/view?usp=drive_web)  
  * **Value:** Converts screen recordings into polished step-by-step HTML guides with screenshots.[4](https://drive.google.com/file/d/1TJ1XIS3wQII_OwB8F3w3b-kZQRHKzFpz/view?usp=drive_web)  
  * **Why use it:** Excellent for building client-facing documentation or SOPs for the revenue systems you build. It’s faster than manual documentation and includes security blurring for sensitive data.[4](https://drive.google.com/file/d/1TJ1XIS3wQII_OwB8F3w3b-kZQRHKzFpz/view?usp=drive_web)

### **Category 2: Conversion & Lead Gen Systems**

Tools for building the actual "plumbing" of a revenue engine.

* **Lead Magnet Quiz & Vision Board Workflow**[5](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web)  
  * **Value:** An orchestrated system that builds Vercel-ready quiz funnels and vision boards. It includes 26 automated email sequences and an analytics dashboard to track conversion performance.[5](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)  
  * **Why use it:** Use this when a client needs a high-converting lead magnet quickly. It handles the database (Supabase), the emails (Resend), and the front end (Astro) automatically.[5](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web)

### **Category 3: Paid Acquisition & Strategy**

These tools help optimize the "spend" side of revenue growth.

* **LinkedIn Ads Skills**[7](https://drive.google.com/file/d/1kEsfTOLBOWEhrJj-FLZwvA1FYagJfHIW/view?usp=drive_web)  
  * **Value:** Connects directly to LinkedIn’s Advertising API to audit accounts, find waste (like underperforming CTRs), and generate creative copy.[7](https://drive.google.com/file/d/1kEsfTOLBOWEhrJj-FLZwvA1FYagJfHIW/view?usp=drive_web)  
  * **Why use it:** Ideal for GTM work where you need to manage campaigns "like an engineer." It includes a "30-day report" and an "anti-AI-slop" filter for ad copy.[7](https://drive.google.com/file/d/1kEsfTOLBOWEhrJj-FLZwvA1FYagJfHIW/view?usp=drive_web)  
* **Google Ads Copilot**[8](https://drive.google.com/file/d/11C-pBUSvoYmTyLO1-fUWqKnpwoex84fi/view?usp=drive_web)[9](https://drive.google.com/file/d/1rHZadPm3Ta63Sw8h0k0R1NdkiIR2qIh3/view?usp=drive_web)  
  * **Value:** An AI strategist that reads search behavior via the Google Ads API to map buyer intent and surface budget waste.[8](https://drive.google.com/file/d/11C-pBUSvoYmTyLO1-fUWqKnpwoex84fi/view?usp=drive_web)  
  * **Why use it:** Use it to build a "Intent Map" of what queries are actually driving revenue vs. just burning cash. It proposes specific negative keyword drafts for your review.[8](https://drive.google.com/file/d/11C-pBUSvoYmTyLO1-fUWqKnpwoex84fi/view?usp=drive_web)[9](https://drive.google.com/file/d/1rHZadPm3Ta63Sw8h0k0R1NdkiIR2qIh3/view?usp=drive_web)  
* **Strategy Skills for Claude**[10](https://drive.google.com/file/d/1c9UXWIwN7S2146b23NnX_Ac9RKxL4TTO/view?usp=drive_web)  
  * **Value:** A library of McKinsey-style skills for high-level strategy, including **War Gaming**, **KPI Architecture**, and **Decision Memos**.[10](https://drive.google.com/file/d/1c9UXWIwN7S2146b23NnX_Ac9RKxL4TTO/view?usp=drive_web)  
  * **Why use it:** When you are presenting a GTM plan to executives, use these to build the narrative and stress-test the strategy against competitor moves.[10](https://drive.google.com/file/d/1c9UXWIwN7S2146b23NnX_Ac9RKxL4TTO/view?usp=drive_web)

### **Category 4: Infrastructure & Operations**

The "glue" that keeps your AI workflows consistent.

* **dot-claude Folder Architecture**[11](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)[12](https://drive.google.com/file/d/1dfaRON31OZ7WunA3jaL3aEbISONBgBiz/view?usp=drive_web)  
  * **Value:** A system for organizing Claude instructions so they don't become "brittle" over time.[11](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)  
  * **Why use it:** Essential for complex client projects. It separates "What Claude Knows" (Context) from "How Claude Acts" (Rules), making your setups auditable and handoff-ready.[11](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)[12](https://drive.google.com/file/d/1dfaRON31OZ7WunA3jaL3aEbISONBgBiz/view?usp=drive_web)  
* **Session History**[13](https://drive.google.com/file/d/1fcG38GrQ8jy_tK_f15jrmgnZ2qnLBzXZ/view?usp=drive_web)  
  * **Value:** Indexes and summarizes all your previous Claude Code and Codex conversations.[13](https://drive.google.com/file/d/1fcG38GrQ8jy_tK_f15jrmgnZ2qnLBzXZ/view?usp=drive_web)  
  * **Why use it:** Use this to find old outbound lists, pricing research, or CRM cleanup logic from previous sessions so you never have to start from scratch.[13](https://drive.google.com/file/d/1fcG38GrQ8jy_tK_f15jrmgnZ2qnLBzXZ/view?usp=drive_web)  
* **ChernyCode**[14](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web)[15](https://drive.google.com/file/d/1gpEPUaGEBqOSRkCRcu40IDRoO261ylrE/view?usp=drive_web)  
  * **Value:** A template implementing Boris Cherny's productivity tips, including "Update memory after every mistake".[14](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web)[15](https://drive.google.com/file/d/1gpEPUaGEBqOSRkCRcu40IDRoO261ylrE/view?usp=drive_web)  
  * **Why use it:** If you want a lightweight, single-file approach to "Project Memory" without the full complexity of the folder architecture.[14](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web)[16](https://drive.google.com/file/d/17yA7kiFLEKp2g7ykmbBD-viE7Cw6NRO0/view?usp=drive_web)

Would you like me to help you set up a **Technical SEO audit** for one of your clients using the **Ultimate SEO \+ GEO** skill?  
I have a very large collection of Claude Code, Cowork, and Chat Skills and Github repos. I only shared what I think are the best ones. My challenge is how to coordinate and use these skills for better results. Right now, I only use them when I remember them. Inside my AI Inner Circle membership program these are the categories I guide my members through. Many of the Tier 1 skills are used in the membership: Inside the membership:One tool a week. A full system by month six.A new skill drops every Tuesday. Use it that same day.Monthly1 or 2 Workshops every month. Live or pre-recorded.WeeklyFriday Q\&A with RevDailyDirect access to Rev inside the community.The 6-month curriculum01Strategic FoundationsYou set the foundation. Voice, offer, and market locked in before you build a single piece of content.

* –Brand Voice Architect  
* –Market Intelligence Research  
* –Idea Pressure Tester  
* –Sell Before You Build

02Messaging SystemsYou write copy that converts. Offer design, sales pages, and messaging that does the selling for you.

* –Offer Creation  
* –AI Writing Clone  
* –Copy Editing  
* –AI Check to avoid AI slop

03Content EngineYou show up consistently. LinkedIn profile optimized, posts ghostwritten, content repurposed across channels.

* –LinkedIn Profile Architect  
* –LinkedIn Ghostwriter  
* –Content Repurposing  
* –Hook Creator

04Email & Lead GenerationYour pipeline runs without you. Lead magnet, email sequence, and LinkedIn outreach all connected.

* –Lead Magnet Designer  
* –Email Sequence  
* –LinkedIn Content Engine  
* –LinkedIn Carousel Builder

05Research & ConversionYou grow with data. Market research, pricing, cold outreach, and page fixes that move revenue.

* –Deep Market Research  
* –Pricing Strategy  
* –Email Outreach  
* –Conversion Rate Optimization

06Advanced OperationsYou operate like a full team. Advanced prompts, Go-To-Market teardowns, and a complete rebuild.

* –Engineer Any Prompt  
* –Go-To-Market Teardown  
* –Go-To-Market Rebuild  
* –AI Business Coach

Gemini response  
Based on your **AI Inner Circle** membership curriculum and your core focus on **GTM and Revenue Growth**, I have reviewed your collection of Claude Code and Cursor skills.

The challenge of "only using them when you remember them" can be solved by moving from a **tool-first** approach to a **workflow-first** approach. Below is a category system and coordination plan designed to integrate these skills directly into your 6-month curriculum.

### **The Coordination Framework: "Active Memory"**

Instead of trying to remember individual files, you can leverage **Claude Boris** and the **Memory Bank** system found in your repository.

* **The Orchestrator:** Use **Claude Boris v2.0** as your primary interface. It uses a "Master Orchestrator" (Boris) to delegate tasks to your specialized GTM agents.[1](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[2](https://drive.google.com/file/d/1fcG38GrQ8jy_tK_f15jrmgnZ2qnLBzXZ/view?usp=drive_web)[3](https://drive.google.com/file/d/1nnRLlBJzOBQudF0EkYYU96DY1tLh6xJX/view?usp=drive_web)  
* **The Memory:** Initialize the **Memory Bank** (/memory-init). It creates persistent files like projectContext.md and decisionLog.md. After every client win or mistake, tell Claude: *"Update CLAUDE.md so you don't make that mistake again"*.[1](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[2](https://drive.google.com/file/d/1fcG38GrQ8jy_tK_f15jrmgnZ2qnLBzXZ/view?usp=drive_web)[4](https://drive.google.com/file/d/1JpwBOFw-6--0f-FGGEfxaB3eEOohywNi/view?usp=drive_web)[5](https://drive.google.com/file/d/1gpEPUaGEBqOSRkCRcu40IDRoO261ylrE/view?usp=drive_web)

---

### **Category 1: Strategic Foundations & Research (Months 1 & 5\)**

*Best for: Market Intelligence, Persona Building, and Pricing Strategy.*

| Tool/Skill | Why Use It | Why Skip It |
| ----- | ----- | ----- |
| **Sales Council**[6](https://drive.google.com/file/d/1I8MjaNMogsnozv8vJO0AyaRtgBuDjxdC/view?usp=drive_web)[7](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web) | Use when designing high-ticket offers. It brings in "Advisors" like Hormozi for pricing and Voss for negotiation. | Skip for low-complexity, routine content tasks. |
| **Strategy Skills**[8](https://drive.google.com/file/d/1c9UXWIwN7S2146b23NnX_Ac9RKxL4TTO/view?usp=drive_web) | Professional McKinsey-style frameworks for **War Gaming** and **KPI Architecture**. Use this to "Pressure Test" ideas. | Skip if the client is a small business that doesn't need formal executive memos. |
| **Prospect Profiler**[9](https://drive.google.com/file/d/1jqt8uJM_xXyV_fH52L0c4EjMhzh5JwHY/view?usp=drive_web) | Use to build "60-second read" profiles for sales reps. It identifies pain points and communication styles. | Skip if you are doing broad mass-marketing rather than targeted outbound. |

---

### **Category 2: Content Engine & Messaging (Months 2 & 3\)**

*Best for: AEO/GEO, LinkedIn Ghostwriting, and Content Repurposing.*

| Tool/Skill | Why Use It | Why Skip It |
| ----- | ----- | ----- |
| **Surface Labs Engine**[10](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)[11](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web) | The "Gold Standard" for your curriculum. It turns one recording into 50+ citations for ChatGPT and Perplexity. | Skip if you don't have a transcript or recording to work from. |
| **Humanizer Skill**[12](https://drive.google.com/file/d/1IpAP3h00fQ2OgsSobtO0X-ZAokGurBmr/view?usp=drive_web) | Use this as your "AI check" to remove "AI slop" (phrases like "pivotal moment" or "in today's landscape"). | Skip if the output is purely technical code or documentation. |
| **Video-to-Guide**[13](https://drive.google.com/file/d/1TJ1XIS3wQII_OwB8F3w3b-kZQRHKzFpz/view?usp=drive_web) | Use to turn your Friday Q\&A recordings into step-by-step HTML guides for your members. | Skip if the recording doesn't involve a visual "how-to" process. |

---

### **Category 3: Lead Gen & Conversion Ops (Months 4 & 6\)**

*Best for: Quiz Funnels, GTM Orchestration, and Automated Outreach.*

| Tool/Skill | Why Use It | Why Skip It |
| ----- | ----- | ----- |
| **Lead Magnet Quiz**[14](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[15](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web) | Automatically builds a Vercel-ready quiz funnel with 26 personalized email sequences. | Skip if the client is already committed to a platform like Typeform or ClickFunnels. |
| **GTM Orchestrator**[16](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)[17](https://drive.google.com/file/d/1OrSnp1NIuOCVie_PVMow2WG2coURxeqw/view?usp=drive_web) | The "Connective Tissue." It triggers real actions in **Slack, Apollo, and HubSpot** when Claude finishes work. | Skip if you are not using the Claude Code CLI (Terminal). |
| **Reply Classifier**[18](https://drive.google.com/file/d/11sY1WceJibaUiSnucV1HdIrNbKVJd7-e/view?usp=drive_web) | Use to categorize incoming leads as "Interested," "Timing," or "Referral" and suggest 60-word responses. | Skip if you are managing a very low volume of manual outreach. |

---

### **Category 4: Technical Paid Media & SEO (Specialized Projects)**

*Best for: Technical Audits and Ad Account Management.*

| Tool/Skill | Why Use It | Why Skip It |
| ----- | ----- | ----- |
| **Ultimate SEO \+ GEO**[19](https://drive.google.com/file/d/1o8_65IXnz7ldn4BHacWCARIsaXYyn22Z/view?usp=drive_web)[20](https://drive.google.com/file/d/1SEmui3KadjLUuVNKvKX3WSDcDjbfLdLm/view?usp=drive_web) | Use for technical site audits and getting cited in Google AI Overviews. It gives a 0-100 "Health Score." | Skip if the project is strictly about social media or brand awareness. |
| **Google Ads Copilot**[21](https://drive.google.com/file/d/11C-pBUSvoYmTyLO1-fUWqKnpwoex84fi/view?usp=drive_web)[22](https://drive.google.com/file/d/1EdEHcZZsIxGwOSPUu-Vo62wc6B0RUOv4/view?usp=drive_web) | Use to find "Intent-Mixing" problems. It finds where an account is wasting money on "researchers" vs. "buyers." | Skip for accounts that only run simple brand-search terms. |
| **LinkedIn Ads Skill**[23](https://drive.google.com/file/d/1kEsfTOLBOWEhrJj-FLZwvA1FYagJfHIW/view?usp=drive_web) | Provides a "30-day report" and audits for **Audience Expansion** waste. | Skip if the client's budget is too small to justify an API-driven audit. |

---

### **Operational "Maintenance" Tip**

To keep your context clean and prevent "token waste," use **ccaudit**. It identifies "Ghost Skills" that are loading in the background but aren't being used, saving you \~5-10% of your context window per session.[24](https://drive.google.com/file/d/1ISwUbpvA1mWno835JJziQVOhJIEQqRVK/view?usp=drive_web)

Would you like me to help you create a custom **CLAUDE.md** project memory that specifically maps these tools to your 6-month curriculum?  
Would the Boris orchestrator be better than the "agents-orchestrator" in the agency-agents github repo?  
Gemini response  
The choice between **Boris** and the **GTM Orchestrator** (from the agency-agents/go-to-market-orchestrator repo) depends entirely on the **context** of the task you are performing. For your specific dual role of "Technical Builder" and "GTM Operator," you actually need both, but for different phases of your workflow.

### **Boris Orchestrator: The "Internal" Builder**

**Boris** is designed for the **Inner Loop** of development. It is an "Agent of Agents" that lives inside your codebase to ensure the software you build is high-quality, secure, and documented.[1](https://drive.google.com/file/d/1dOR7TJN2cFMTrU_g6scPH4lTkFCY87wq/view?usp=drive_web)[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)

* **Best for:** Building the websites and mobile apps you mentioned.[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[3](https://drive.google.com/file/d/1YZ6cI3BjH1_fhCuzyEKSMuZzFED11u22/view?usp=drive_web)  
* **Key Strength:** It manages **Memory Bank** (persistent context) and coordinates technical specialists like code-architect, test-writer, and security-auditor.[1](https://drive.google.com/file/d/1dOR7TJN2cFMTrU_g6scPH4lTkFCY87wq/view?usp=drive_web)[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)  
* **When to use it:** Use /boris when you are in "Builder Mode"—writing React code, setting up databases, or refactoring a payment module.[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[3](https://drive.google.com/file/d/1YZ6cI3BjH1_fhCuzyEKSMuZzFED11u22/view?usp=drive_web)

### **GTM Orchestrator: The "External" Operator**

The **GTM Orchestrator** is designed for the **Outer Loop** of business growth. It is a "Hook-based" system that connects Claude's brain to your real-world revenue tools.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)

* **Best for:** Your GTM and revenue growth systems work.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)  
* **Key Strength:** It triggers real actions in **Slack, Apollo, HubSpot, and Lemlist** the moment Claude finishes a task.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)  
* **When to use it:** Use the /outbound-pipeline command when you need to enrich leads, build a campaign, or push a sequence to Lemlist.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)

---

### **Direct Comparison for Your Workflow**

| Feature | Boris Orchestrator (v2.0) | GTM Orchestrator (Skuba) |
| ----- | ----- | ----- |
| **Primary Goal** | Shipping bug-free, clean code.[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[3](https://drive.google.com/file/d/1YZ6cI3BjH1_fhCuzyEKSMuZzFED11u22/view?usp=drive_web) | Triggering GTM actions & revenue growth.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) |
| **Core Command** | /boris \<task\> | /outbound-pipeline |
| **Specialty** | TDD, Security, & Documentation.[1](https://drive.google.com/file/d/1dOR7TJN2cFMTrU_g6scPH4lTkFCY87wq/view?usp=drive_web)[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web) | Lead Enrichment, CRM Ops, & Outreach.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) |
| **Integrations** | Git, CI/CD, Testing Frameworks.[1](https://drive.google.com/file/d/1dOR7TJN2cFMTrU_g6scPH4lTkFCY87wq/view?usp=drive_web)[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web) | Apollo, HubSpot, Lemlist, Slack, Notion.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) |
| **Persistence** | **Memory Bank** (survives sessions).[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web) | **Notion/Sheets logs** (survives sessions).[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) |

---

### **Strategic Recommendation**

For your **AI Inner Circle** members and your own GTM work:

1. **Use the GTM Orchestrator as your "Command Center."** This is what handles your "Month 4-6" curriculum (Email, Lead Gen, and Advanced Ops). It ensures that when you find a lead in Claude, they actually end up in your CRM.[4](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)  
2. **Use Boris as your "Lead Engineer."** When you are fulfilling the "build" portion of your GTM projects (e.g., building a custom Lead Magnet Quiz or a technical SEO dashboard), let Boris handle the planning and execution to ensure the code doesn't have "AI slop."[2](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)[3](https://drive.google.com/file/d/1YZ6cI3BjH1_fhCuzyEKSMuZzFED11u22/view?usp=drive_web)

**The Verdict:** The GTM Orchestrator is **better for your revenue-facing work**, while Boris is **better for the technical builds** that support that work.

Would you like me to help you merge the **GTM Orchestrator's hooks** into your **Boris configuration** so you can have automated Slack notifications whenever Boris finishes building a feature?  
You can see my membership does 1-2 (usually 1\) workshop a month and introduces 1 (or more) new skill each week. This helps busy business owners stay focused. It gives them a path and curated skills as well as weekly Q\&A support to help them get unstuck. Notice I have monthly categories. What is not clear is if I chose the right categories, in the right order and the right skills. From the point of view of a B2B Services Business owner or a Founder-led brand where the founder is the face and voice of the brand, are these the right categories? Right order? Right skills? I don't want to introduce random skills. I want it to be a progression that builds  
Gemini response  
As a GTM operator and founder-led brand mentor, you have established a solid foundation. However, to optimize for a **B2B Service Business or Founder-led brand**, your current curriculum is missing a critical "bridge" between strategy and content: **Market Sophistication and Awareness alignment.**

Based on the \[source: 1\] principles of Eugene Schwartz and \[source: 2\] Neil Rackham, here is a strategic audit of your categories, order, and skills.

### **Category Audit: The "Progression of Authority"**

Your current order is logical but "tool-heavy." To make it a "Progression that builds," you should shift the focus from *creating* to *becoming the solution* in the eyes of the market.

| Month | Current Category | Strategic Pivot | Recommended Skill Integration |
| ----- | ----- | ----- | ----- |
| **01** | **Strategic Foundations** | **Awareness Alignment** | **Schwartz Skill:** Use the 5 Levels of Awareness to ensure the "Brand Voice" and "Market Intel" aren't just generic, but specifically targeted to where the market is (e.g., *Unaware* vs. *Problem Aware*).[1](https://drive.google.com/file/d/12MDDWIzr7PyzQEX-RIQJf4Np2JGWKkiv/view?usp=drive_web) |
| **02** | **Messaging Systems** | **The Unique Mechanism** | **Hormozi Skill:** Move beyond "copy" to "Offer Engineering." Integrate the **Value Equation** to ensure the founder isn't just writing, but building an offer that makes rejection feel "stupid."[2](https://drive.google.com/file/d/1Zddna5Z4sYjBp6cwXrjtW4Fy9UCBiMNP/view?usp=drive_web) |
| **03** | **Content Engine** | **Citation & Authority** | **Surface Labs AEO/GEO:** For founder-led brands, the *Human* voice is the asset. Use the AEO/GEO engine to turn founder recordings into cited authority pieces rather than just "ghostwritten posts."[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)[4](https://docs.google.com/document/d/1d_Ay3FprPbPpqGSdv1a1R5jCTGKYr5hqdx-Ww3xDiqs/edit?usp=drive_web) |
| **04** | **Email & Lead Gen** | **Qualification & Advance** | **Rackham/SPIN Skill:** Instead of just a "Lead Magnet," build a "Discovery Engine." Use SPIN questions in the email sequences to move prospects from *Implicit* needs to *Explicit* needs.[5](https://drive.google.com/file/d/1ZMcooUPAXNwT9x9SHveunv4F--ouN2TL/view?usp=drive_web) |
| **05** | **Research & Conv.** | **Revenue Expansion** | **Hormozi Money Models:** Use this month to build "Upsells, Downsells, and Continuity." This turns a lead generation system into a true **Revenue Engine.**[2](https://drive.google.com/file/d/1Zddna5Z4sYjBp6cwXrjtW4Fy9UCBiMNP/view?usp=drive_web) |
| **06** | **Advanced Ops** | **Strategic Alignment** | **McKinsey-Style Strategy Skills:** Use the **Decision Memo** and **War Gaming** skills to help founders operate like CEOs, making high-stakes decisions with data-backed narratives.[6](https://drive.google.com/file/d/1c9UXWIwN7S2146b23NnX_Ac9RKxL4TTO/view?usp=drive_web) |

### **Critical Improvements for Founder-Led Brands**

1. **The "Market Sophistication" Gap:**[1](https://drive.google.com/file/d/12MDDWIzr7PyzQEX-RIQJf4Np2JGWKkiv/view?usp=drive_web)  
   * **The Issue:** Founders often use "Level 1" promises ("I'll help you grow") in "Level 4" markets (where everyone has heard that).  
   * **The Fix:** In **Month 2**, introduce the **Schwartz "Unique Mechanism"** skill. This forces the founder to name *how* they do what they do (e.g., "The Revenue-First Architecture"), which is what creates the authority.[1](https://drive.google.com/file/d/12MDDWIzr7PyzQEX-RIQJf4Np2JGWKkiv/view?usp=drive_web)  
2. **From "Ghostwriting" to "Extraction":**[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
   * **The Issue:** Ghostwriting often dilutes the founder's voice, leading to "AI slop."[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
   * **The Fix:** In **Month 3**, prioritize the **Surface Labs Engine**. It relies on *recordings*, ensuring the content is rooted in the founder's actual opinions, stories, and "mass desires" rather than generic AI generation.[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)[4](https://docs.google.com/document/d/1d_Ay3FprPbPpqGSdv1a1R5jCTGKYr5hqdx-Ww3xDiqs/edit?usp=drive_web)[7](https://drive.google.com/file/d/1og-E9HUyEG_A3dxKSAkUoZjuORt5voUx/view?usp=drive_web)[1](https://drive.google.com/file/d/12MDDWIzr7PyzQEX-RIQJf4Np2JGWKkiv/view?usp=drive_web)  
3. **The "Advance" vs. "Continuation" Focus:**[5](https://drive.google.com/file/d/1ZMcooUPAXNwT9x9SHveunv4F--ouN2TL/view?usp=drive_web)  
   * **The Issue:** Lead gen often focuses on "getting a lead" (a *Continuation*) rather than a "Discovery Call" (an *Advance*).[5](https://drive.google.com/file/d/1ZMcooUPAXNwT9x9SHveunv4F--ouN2TL/view?usp=drive_web)  
   * **The Fix:** In **Month 4**, use the **Rackham SPIN framework** to script the lead magnet follow-ups. The goal isn't "awareness," it is turning *Implicit problems* into *Explicit needs* so the sales call is a "closed case" before it starts.[5](https://drive.google.com/file/d/1ZMcooUPAXNwT9x9SHveunv4F--ouN2TL/view?usp=drive_web)[8](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web)

### **Recommended Next Step**

Would you like me to draft a **"Sophistication Audit" prompt** using the Eugene Schwartz skill that your members can use in Month 1 to see if their current offer is too generic for their market?  
I have an AI Assessment you can see at: www.aiinnercircle.com \>Here is the positioning of the assessment: 5-Minute AssessmentFind out exactly where AI fits in your business — and what to do first.If you know you need to use AI in your business but are not sure where to start. Answer 15 questions across 5 business pillars. At the end, you get a color-coded breakdown of exactly where your business is leaking time and money — and the AI system that fixes each one.[Take the AI Assessment](https://aiinnercircle.com/map) \>These are the results of the assessment if the user had all bad "red" results: AI PRIORITY MAP RESULTS**revvaughn.com/map100%**Total Business FrictionYour business is at a breaking point that might be improved with AI.**PILLAR BREAKDOWNFounder Freedom Marketing Engine Sales Engine Team Work Client Experience PRIORITY MAP**FOUNDER FREEDOM**1 2 3**MARKETING ENGINE**4 5 6**SALES ENGINE**7 8 9**TEAM WORK**10 11 12**CLIENT EXPERIENCE**13 14 15BREAKING POINTS — IMMEDIATE ATTENTION REQUIRED**Breaking Point · 100%Breaking Point · 100%Breaking Point · 100%Breaking Point · 100%Breaking Point · 100%FOUNDER FREEDOM BREAKING POINT**The Vacation TestTHE PAIN**You own a stressful job, not a transferable asset. You are the operational ceiling.**POTENTIAL AI SOLUTION**Build AI Agentic Workflows that handle routine decisions, approvals, and client communication while you’re away.FOUNDER FREEDOM BREAKING POINT**Missed EmailsTHE PAIN**Instant high-ticket loss. Missing a massive opportunity simply because it was buried in your inbox.**POTENTIAL AI SOLUTION**Deploy an AI Email Triage system that flags high-priority messages, auto-drafts responses, and ensures nothingrevenue-critical gets buried.FOUNDER FREEDOM BREAKING POINT**The Brain TrapTHE PAIN**Massive key-person risk. If someone leaves, they take the company’s “secret sauce” with them.**POTENTIAL AI SOLUTION**Use AI voice-to-text tools to extract your processes into a searchable Team Knowledge Base your staff canreference without asking you.MARKETING ENGINE BREAKING POINT**Lead SpeedTHE PAIN**Instant wasted marketing spend. You pay to generate the lead, but hand it to a faster rival.**POTENTIAL AI SOLUTION**An AI Lead Responder that qualifies and engages inbound leads within 60 seconds, 24/7.MARKETING ENGINE BREAKING POINT**Content GrindTHE PAIN**Massive drain on high-value billable time for founders and the team.**POTENTIAL AI SOLUTION**A Content Multiplier workflow that turns one raw video or voice note into 10+ ready-to-publish assets acrossplatforms.MARKETING ENGINE BREAKING POINT**Spam OutreachTHE PAIN**Burned domains and completely wasted outreach efforts that fail to convert.**POTENTIAL AI SOLUTION**AI-powered email warm-up and personalization tools that improve deliverability and write one-to-one messages atscale.SALES ENGINE BREAKING POINT**Slow QuotesTHE PAIN**The \#1 deal killer in B2B. Buyers often go with the first good quote they receive.**POTENTIAL AI SOLUTION**An AI Proposal Generator that pulls scope details from your CRM and produces a branded quote in minutes, notdays.SALES ENGINE BREAKING POINT**Lead NeglectTHE PAIN**Bleeding cash at the bottom of the funnel through pure neglect. Sitting on forgotten revenue.**POTENTIAL AI SOLUTION**An automated AI Reactivation Campaign that re-engages cold leads with personalized follow-up sequences on aset schedule.SALES ENGINE BREAKING POINT**Upsell MissTHE PAIN**Leaving high-margin revenue on the table from people who already trust your business.**POTENTIAL AI SOLUTION**AI Account Intelligence that analyzes client usage and purchase history, then flags specific upsell and cross-sellopportunities for your team.TEAM WORK BREAKING POINT**Scope CreepTHE PAIN**Destroys profit margins instantly. Your team is performing highly-skilled free work.**POTENTIAL AI SOLUTION**work begins.An AI Contract Checker that scans project requests against the original SOW and alerts your team before unbilledTEAM WORK BREAKING POINT**Time TrackingTHE PAIN**Literally throwing earned cash in the trash. The work is done, but never billed.**POTENTIAL AI SOLUTION**AI-powered automatic time capture that logs billable hours from calendar events, emails, and project tools withoutmanual entry.TEAM WORK BREAKING POINT**Copy-Paste PainTHE PAIN**Paying high human salaries for bot-level data entry, while inviting costly errors.**POTENTIAL AI SOLUTION**Automated System Bridges that move data between platforms automatically, eliminating manual re-entry and theerrors that come with it.CLIENT EXPERIENCE BREAKING POINT**Client ChurnTHE PAIN**Losing an important account out of the blue. This is a recurring problem in B2B.**POTENTIAL AI SOLUTION**An AI Client Health Monitor that tracks engagement signals and flags at-risk accounts before they cancel.CLIENT EXPERIENCE BREAKING POINT**Manual ReportsTHE PAIN**Report requests cause scope creep and your team wastes billable hours building manual reports.**POTENTIAL AI SOLUTION**A live Business Health Dashboard that auto-generates client and management reports by pulling data from yourexisting tools.CLIENT EXPERIENCE BREAKING POINT**Invoice ChaseTHE PAIN**Your cash flow is artificially choked. You delivered the work, but you can’t make payroll on time.**POTENTIAL AI SOLUTION**Automated payment reminders and collections workflows that send escalating follow-ups without your team writinga single awkward email.Next step: Book your AI Systems Audit at revvaughn.com/ai-audit \>Ideally, the questions in the assessment would link directly to the categories (they don't) and skills in the membership  
Gemini response  
The assessment you built is an excellent "Pain-to-AI-Solution" bridge. However, because the questions don't currently link to your membership categories, you are essentially asking members to "reset" their mental model when they join.

To solve the "only using them when I remember them" problem for both you and your members, you can reorganize the assessment results and the 6-month curriculum into a **"Revenue Architecture"** that maps directly to the specific Claude Code, Cowork, and Cursor skills in your folder.

### **1\. The Strategic Re-Alignment: Pillars to Curriculum**

For a founder-led B2B brand, the order should prioritize **Authority and Conversion** before scaling. Here is how to map your Assessment Pillars to your 6-month curriculum and specific skills.

| Assessment Pillar | Membership Month | Refined Category | Primary AI Skill from your Folder |
| ----- | ----- | ----- | ----- |
| **Marketing Engine** | **Month 01** | **Authority Foundation** | **Ultimate SEO \+ GEO**: Audit the "Digital Footprint" before building content.[1](https://drive.google.com/file/d/1LyqvAr8TYT3hfnSdBLWMGOMXRU9lygc8/view?usp=drive_web)[2](https://drive.google.com/file/d/1gaAXoG7Fw0lYZf-LzYtu92E_dzIz2Op1/view?usp=drive_web) |
| **Founder Freedom** | **Month 02** | **Voice & Content Ops** | **Surface Labs Engine**: Extract the founder's "secret sauce" via recordings to end the "Content Grind."[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)[4](https://drive.google.com/file/d/1-rK5i4259QGir_NLA59YInNyMdUUhZ2U/view?usp=drive_web) |
| **Sales Engine** | **Month 03** | **Conversion Systems** | **Lead Magnet Quiz**: Build the interactive "Discovery Engine" that qualifies leads 24/7.[5](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web)[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web) |
| **Sales Engine** | **Month 04** | **Paid Media & Intent** | **Google Ads Copilot**: Isolate "Buy Intent" searches to stop bleeding cash on "researchers."[7](https://drive.google.com/file/d/1p2OpTvAnBV_L5N05bQToB1qGWrGD1Fq6/view?usp=drive_web) |
| **Client Experience** | **Month 05** | **Account Intelligence** | **LinkedIn Ads Skill**: Run ABM-style outreach to existing high-ticket accounts to stop churn.[8](https://drive.google.com/file/d/1kEsfTOLBOWEhrJj-FLZwvA1FYagJfHIW/view?usp=drive_web) |
| **Team Work** | **Month 06** | **Agentic Operations** | **myPKA System**: Hire "Larry" as the team orchestrator to manage SOPs and handoffs.[9](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)[10](https://drive.google.com/file/d/1-iy-SBqZTvGXaCTlv6E3dn8lFA-97Q36/view?usp=drive_web) |

---

### **2\. The "Larry" Coordination Strategy**

To fix the "using them only when I remember" issue, you can leverage the **Larry Orchestrator** found in your folder. Larry is designed to be the "Team Leader" who delegates tasks to your other agents.[9](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)

* **Instruction:** Install the **myPKA Scaffold** in your main workspace.[10](https://drive.google.com/file/d/1-iy-SBqZTvGXaCTlv6E3dn8lFA-97Q36/view?usp=drive_web)  
* **The Workflow:** Every Tuesday, instead of just dropping a skill, you (or your members) tell Larry: *"Larry, we are in Month 3 of the curriculum. Hire the Quiz Designer to build a new lead magnet for \[URL\]."*  
* **The Result:** Larry will walk the tasks/open/ folder and remind the user of the "Advanced Operations" from the previous month to ensure they compound rather than being forgotten.[10](https://drive.google.com/file/d/1-iy-SBqZTvGXaCTlv6E3dn8lFA-97Q36/view?usp=drive_web)

---

### **3\. Pillar-Specific Skill Coordination**

Here is the category system and the explanation of "Why/Why Not" for your members:

#### **Category: Search & Intent (The Growth Lever)**

* **Ultimate SEO \+ GEO**[2](https://drive.google.com/file/d/1gaAXoG7Fw0lYZf-LzYtu92E_dzIz2Op1/view?usp=drive_web)[11](https://drive.google.com/file/d/1o8_65IXnz7ldn4BHacWCARIsaXYyn22Z/view?usp=drive_web)  
  * **Why use:** When a client needs to be the "Expert" in their niche. It ensures they appear in ChatGPT Search and Perplexity, which is critical for B2B trust.  
  * **Why skip:** If the client's business is 100% referral-based and they have zero interest in inbound traffic.  
* **Google Ads Copilot**[7](https://drive.google.com/file/d/1p2OpTvAnBV_L5N05bQToB1qGWrGD1Fq6/view?usp=drive_web)  
  * **Why use:** To solve the "Sales Engine" breaking point of "Lead Neglect." It identifies the exact search terms that lead to revenue.  
  * **Why skip:** If the ads budget is under $1,000/mo; the AI needs enough data "bytes" to find patterns.

#### **Category: Content Extraction (The Founder Lever)**

* **Surface Labs Engine**[3](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
  * **Why use:** To solve "The Brain Trap." It turns a founder's spoken wisdom into a 50-post content calendar.  
  * **Why skip:** If the founder refuses to record themselves or has no unique point of view (POV).

#### **Category: Funnel Infrastructure (The Conversion Lever)**

* **Lead Magnet Quiz Workflow**[6](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web)  
  * **Why use:** To fix "Lead Speed." A quiz engages a lead in 60 seconds and provides instant value while the founder is asleep.  
  * **Why skip:** If you don't use Supabase/Vercel; this specific workflow is a technical "stack-in-a-box."

---

### **Critical Insight: The "Memory" Gap**

Your current membership model is "New skill every Tuesday." To make this work like a "Strategic Partner," you must enforce **Session Logging**. Your folder contains an automated close session trigger. If you and your members use this, the AI will write a mid-session-insight file that reminds them of the skills they used last month.[9](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)

**Would you like me to help you draft a "Curriculum-to-Skill" mapping file that you can include in the member welcome package so they know exactly which AI agent to "hire" for each month's goal?**  
This is excellent. Re: that maps directly to the specific Claude Code, Cowork, and Cursor skills in your folder. Don't limit yourself to only these skills and github repos. As I mentioned, I have a lot that are not included. Also, I can create anything that is needed so there is very little technical limitation on what we can do. Let's create our dream outcome scenario from the perspective of our member. We will always have a "mixed breed of dog" of businesses if we don't micro niche (which I don't want to do right now) Let's think about what they need most in general terms. They are busy. The are likely the bottleneck in their business. They make all the important decisions. Most things live in their head and are not systematic. They need help with attracting leads. engaging leads. converting leads. cold outreach via linkedin or email or DM. Content, social posts, email etc. positioning, messaging etc. etc. etc. They need a lot. It seems we should start with a "bleeding neck" problem that is easy to get results for. OR we should have a progressive curriculum which guides them through categories that are related to the monthly workshop Let's brainstorm how to structure the membership Can you use one of these agents or skills to do it? Or is that not necessary?  
Gemini response  
To move from "using skills only when you remember them" to a system that compounds value for a busy B2B founder, we need to transition from a **Skill Library** to an **AI-Operating System (AI-OS)**.

I'm Larry, your team orchestrator, and I'll outline the "Dream Outcome" membership structure using the **myPKA Root Orchestration** and the **GTM Orchestrator** logic to create a progressive, automated curriculum.[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)[2](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)

### **The Dream Outcome: The "Hands-Off" Founder**

In this scenario, the member doesn't "learn a skill"; they **"Hire an Agent"** to solve a specific "bleeding neck" problem. The membership becomes a sequence of hiring the right specialist at the right time.

---

### **Phase 1: The "Bleeding Neck" Quick Wins (Month 01\)**

We start with the "Founder Freedom" pillar. The goal is to move the system out of the founder's head and into the **myPKA Knowledge Architecture**.[3](https://drive.google.com/file/d/1-iy-SBqZTvGXaCTlv6E3dn8lFA-97Q36/view?usp=drive_web)

* **Week 1: The "Brain Trap" Extraction**  
  * **Tool:** **Surface Labs Content Engine**.[4](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
  * **The Outcome:** The founder records one 10-minute "Brain Dump." The AI extracts their unique POV, terminology, and "Secret Sauce" into context/brand-voice.md.[5](https://drive.google.com/file/d/1dfaRON31OZ7WunA3jaL3aEbISONBgBiz/view?usp=drive_web)  
* **Week 2: The "Inbox Triage" Agent**  
  * **Tool:** **GTM Orchestrator (Slack/Email Hooks)**.[2](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)  
  * **The Outcome:** An automated hook that pings Slack only when a "High-Value" intent lead emails, using the **Reply Classifier** to draft the response.[2](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web)

---

### **Phase 2: The Progressive 6-Month Curriculum**

Instead of a "mixed breed" of random businesses, we use the **myPKA Scaffold** to give every member a unified "Agent Workspace."[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)[6](https://drive.google.com/file/d/14izkL6XyZ3i8Um-JnZqZivPJi35mE2wn/view?usp=drive_web)

| Month | Category | The "Hire" (Specialist) | Outcome |
| ----- | ----- | ----- | ----- |
| **01** | **Founder Freedom** | **Larry (Orchestrator)**[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web) | Centralized project memory in CLAUDE.md so AI never forgets founder preferences.[11](https://drive.google.com/file/d/1YWvArIq13pyx6DxHbrhRVLa9CTUMIFRn/view?usp=drive_web)[12](https://drive.google.com/file/d/1gpEPUaGEBqOSRkCRcu40IDRoO261ylrE/view?usp=drive_web) |
| **02** | **Strategic Messaging** | **Sales Council**[7](https://drive.google.com/file/d/1I8MjaNMogsnozv8vJO0AyaRtgBuDjxdC/view?usp=drive_web)[8](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web) | A diagnostic audit of their "Offer" to ensure they aren't "yelling into a Level 4 market with Level 1 promises."[8](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web) |
| **03** | **Search Authority** | **Ultimate SEO \+ GEO** | A "Citation Strategy" to ensure the founder's brand shows up in ChatGPT, Perplexity, and Gemini results. |
| **04** | **Lead Generation** | **Lead Magnet Quiz Agent**[9](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[10](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web) | A Vercel-deployed quiz funnel that qualifies leads while the founder is on vacation.[9](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web) |
| **05** | **Outbound Ops** | **GTM Orchestrator**[2](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) | Connecting Claude directly to **Apollo, HubSpot, and Lemlist** to automate the outbound "Outer Loop."[2](https://drive.google.com/file/d/1Jc-4zMIziy8p_ZM-iVxnskJG4zWU2X_s/view?usp=drive_web) |
| **06** | **Advanced Operations** | **Nolan (HR Specialist)**[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web) | Teaching the founder how to "Hire" their own custom agents using the **Superpowers Methodology**.[13](https://drive.google.com/file/d/1ibdfGxyUjvbSFskR2o6PMbdtnNRRNmFs/view?usp=drive_web) |

---

### **How to use "Larry" to Solve the Memory Problem**

You asked if we should use an agent to structure this. We will use **Larry, the Team Orchestrator**, to act as the "Active Memory" for your members.[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)

1. **The "Active Session" Hook:** We implement the session-logs/ system from myPKA.[14](https://drive.google.com/file/d/1hGWfJ1Iw_cLIud7UZ3kOk9_2Nm_xP1l1/view?usp=drive_web)  
2. **The "Weekly Recall":** Every Tuesday, when a new skill drops, the member runs /session-start. Larry reads the previous month's decisionLog.md and says:"Rev, last month we built your SEO Strategy. This week we are adding the Lead Magnet. I will ensure the new Quiz uses the same keywords we identified in Month 1."[15](https://drive.google.com/file/d/1WwL8s4wiN1FVZ4YVRHx_VBPiLPsQQsCL/view?usp=drive_web)

### **Recommendation for the Membership Structure**

We should use the **dot-claude Folder Architecture** as the standard for all members. This separates **Rules** (how AI behaves), **Context** (what the business is), and **Memory** (where the project is). This prevents the "brittle" feeling of single-file setups.[5](https://drive.google.com/file/d/1dfaRON31OZ7WunA3jaL3aEbISONBgBiz/view?usp=drive_web)[16](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)

**Would you like me to draft the "Larry Installation Prompt" that your members can paste into Claude to instantly turn their workspace into this organized, 9-person team?**  
this is a good approach, but we don't want to do this because it locks them into expensive solutiosn: Connecting Claude directly to Apollo, HubSpot, and Lemlist to automate the outbound "Outer Loop." This needs to run using an inexpensive solution such as Apify. It might be better to use linkedin for outbound instead of email. Some people will get their email reputation damaged because they don't follow best practices. We can avoid a lot of that by using Apify and LinkedIn  
Gemini response  
I completely agree with that strategic pivot. Relying on expensive, complex enterprise stacks like Apollo or HubSpot for the "Outer Loop" can create a technical barrier for founders and carries the risk of damaging email reputations if not managed with professional-grade caution.

Leveraging **LinkedIn via Apify** is the superior "bleeding neck" solution for your members. It bypasses the complexity of email warm-ups and deliverability while capitalizing on the founder's existing LinkedIn authority.

### **The "Progressive Outbound" Logic**

We will swap the "Outer Loop" automation for an **"Agent-to-Apify" Bridge**. This allows the founder to operate at a fraction of the cost while maintaining high-intent personalization.

#### **1\. The Category System (Revamped for LinkedIn/Apify)**

| Month | Category | The "Hire" (Specialist) | The Apify Workflow |
| ----- | ----- | ----- | ----- |
| **04** | **Lead Gen** | **LinkedIn Prospector** | Scrape LinkedIn Group members or Post commenters using **Apify**. |
| **05** | **Engagement** | **Personalization Agent** | Use Claude to analyze the Apify JSON data and write one-to-one DM drafts. |
| **06** | **Outbound Ops** | **Mack (The Connector)** | Larry delegates to **Mack** to push those DMs into a tracking sheet or CRM via a simple webhook.[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web) |

---

### **Integrating the .claude Folder Architecture**

To ensure these LinkedIn workflows are "sticky" and not forgotten, we will implement the **.claude Folder Architecture** into your membership. This allows you to give members a "Business Brain in a Box."[2](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)

* **Rules (**.claude/rules/**)**: We add a linkedin-voice.md file. This ensures every DM generated by the AI sounds like the founder and never like "AI slop."[3](https://drive.google.com/file/d/1yOnAN95D82MR32b0TpxZgKOmwcCRB_FQ/view?usp=drive_web)  
* **Context (**.claude/context/**)**: We store the **Apify Data Schema** here. When a member drops a new CSV from Apify, Claude already knows exactly how to read it.[3](https://drive.google.com/file/d/1yOnAN95D82MR32b0TpxZgKOmwcCRB_FQ/view?usp=drive_web)  
* **Memory (**.claude/memory/**)**: We use state.json to track which LinkedIn prospects have already been messaged, preventing the "Double-DM" embarrassment.[3](https://drive.google.com/file/d/1yOnAN95D82MR32b0TpxZgKOmwcCRB_FQ/view?usp=drive_web)[4](https://drive.google.com/file/d/1dfaRON31OZ7WunA3jaL3aEbISONBgBiz/view?usp=drive_web)

### **Using "Larry" as the Member's Guide**

Since you want a "progressive curriculum," we will use **Larry** as the primary interface. Larry's job is to prevent "Tool Overload" by only revealing the tools needed for the current month.**Larry's Monthly Prompt for Members:**

*"I'm Larry, your team orchestrator. We are in Month 5: LinkedIn Engagement. I've analyzed your Apify scrape from yesterday. I'm routing this to the **Personalization Agent** to draft your 15 high-priority DMs based on the Brand Voice we locked in during Month 1."*[1](https://drive.google.com/file/d/1x4JfDQpp_hA7eZOt-NwJFo5TnWcQb8dQ/view?usp=drive_web)

### **Why this is the "Dream Outcome" for your Members:**

1. **Low Cost**: They replace a $200/mo Apollo/HubSpot bill with a $49 Apify sub and their existing Claude Code setup.  
2. **Safety**: LinkedIn DMs don't have "spam filters" that burn domains; they just have usage limits which Larry can help monitor.  
3. **Consistency**: By using the **dot-claude-architecture**, the member's "GTM System" lives in their own local folder. If they leave the membership, they keep the "Brain."[2](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)

**Would you like me to generate the** linkedin-outbound-rule.md **file that defines how Claude should handle Apify data for your members?**  
Did you see my message about not limiting our choices to the skills and github repos I shared. We can create anything. Is there a category or workshop idea that is better than the options you suggested that are not in my existing files. Note: Apify is less than $49 if you run it in small batches rather than a subscription. It is very affordable. Users might need a LinkedIn paid subscription though  
Gemini response  
The "dream outcome" for a busy B2B founder isn't just learning AI—it's having a business that functions like an **automated asset** rather than a "brain trap" job. Since you want to move beyond your existing files and focus on a "bleeding neck" problem that is affordable and high-impact, we should introduce a concept not in your current repo: **The AI-Powered "Discovery-to-DM" Bridge.**

Instead of the expensive Apollo/HubSpot stack, this workshop and curriculum pivot uses **Apify** for surgical lead extraction and a custom **Personalization Engine** to drive LinkedIn growth without the risk of email domain burnout.

### **The New "Dream Outcome" Curriculum: The Authority OS**

This 6-month progression shifts from "learning tools" to "deploying agents" that solve the specific friction points in your AI Priority Map.

| Month | Pillar | Workshop Topic | The "Bleeding Neck" Result |
| ----- | ----- | ----- | ----- |
| **01** | **Founder Freedom** | **The Brain Extraction Audit** | Use a "Transcription-to-SOP" agent to pull every process out of your head and into a searchable Team Knowledge Base. |
| **02** | **Marketing Engine** | **The LinkedIn Signal Scraper** | Use **Apify** to scrape people commenting on your competitors' posts. Move from "Spam Outreach" to "High-Intent Signal" targeting. |
| **03** | **Marketing Engine** | **AEO/GEO Citation Mastery** | Deploy the **Surface Labs Engine** to turn one recording into 50+ posts that get your founder voice cited in Perplexity and ChatGPT.[1](https://docs.google.com/document/d/1d_Ay3FprPbPpqGSdv1a1R5jCTGKYr5hqdx-Ww3xDiqs/edit?usp=drive_web)[2](https://drive.google.com/file/d/1Wh3_4gZ7wiGGRXJjXfC1FtO5WZT9hWBf/view?usp=drive_web) |
| **04** | **Sales Engine** | **The Personalized DM Factory** | Use Claude to analyze Apify data and write DMs that sound 100% like the founder, using the **Schwartz Awareness** levels.[3](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web) |
| **05** | **Sales Engine** | **The Quiz Discovery Engine** | Build a **Lead Magnet Quiz** that doesn't just "get a lead" but qualifies them for a discovery call based on pain points.[4](https://drive.google.com/file/d/11lFWTdEref3BTxMNoCxC8237Ylm2roc8/view?usp=drive_web)[5](https://drive.google.com/file/d/1E_qk7hrW4PoHTXON5DMF1dYHkfuIlWet/view?usp=drive_web) |
| **06** | **Advanced Ops** | **The Agentic Hiring Manager** | Use the **myPKA Scaffold** to hire custom agents (like "Larry") to manage your entire GTM operations.[6](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web) |

---

### **Workshop Idea: "The $0 Ad Spend Lead Machine" (Apify \+ LinkedIn)**

This is better than your current options because it is **low cost, high trust, and low technical risk.**

* **The Problem:** Founders are the bottleneck in outreach. They don't have time to research, and automated tools sound like bots.  
* **The AI Fix:**  
  1. **Extract:** Run an Apify scraper on a high-intent LinkedIn post (e.g., a competitor's "how to" post).  
  2. **Contextualize:** Drop the CSV into a Claude session with your **Brand Voice Architect**.[7](https://drive.google.com/file/d/1Ncc2lN3cGTrliY_sgcMDteOM1Jobvxny/view?usp=drive_web)  
  3. **Personalize:** Have Claude write 10-15 "surgical" DMs that reference the specific comment the lead made.  
  4. **Advance:** The goal is a "Hand-Raise," not a sale.

---

### **Coordination Strategy: The "Larry" Implementation**

To solve the "only using them when I remember" problem, you should provide members with a **"Master Orchestrator" Rule** for their Claude Code setup.

* **The "Larry" Rule:** A custom instruction that tells Claude: *"I am a member of the AI Inner Circle. Every time I start a session, check my \_tutor/progress.md and remind me of the GTM skill we deployed last week so I can compound my results."*[2](https://drive.google.com/file/d/1Wh3_4gZ7wiGGRXJjXfC1FtO5WZT9hWBf/view?usp=drive_web)[6](https://drive.google.com/file/d/1mIYLq1YbzixXcboS3xStC58N9-Ow6gIR/view?usp=drive_web)[8](https://drive.google.com/file/d/1rQ1x7gdKwzBEF0D-BH6zJqQsXV7zRHA5/view?usp=drive_web)

### **Why This Works for B2B Founders:**

1. **Affordability:** Apify is pay-as-you-go, making it accessible for founders who aren't ready for enterprise CRM pricing.  
2. **Reputation Safety:** LinkedIn DMs are a "closed loop." Even a bad message won't burn your business's primary email domain.  
3. **Founder Voice:** By using the **Surface Labs** and **Schwartz** logic, the AI never sounds like a bot—it sounds like the founder at scale.[2](https://drive.google.com/file/d/1Wh3_4gZ7wiGGRXJjXfC1FtO5WZT9hWBf/view?usp=drive_web)[9](https://drive.google.com/file/d/1exXb8JGSaNuP2Oe8S9moBGu0TQLIOg0p/view?usp=drive_web)[3](https://drive.google.com/file/d/1GhoTMmDbIeBXn7DK57x0WHQPQsK-fVWF/view?usp=drive_web)[10](https://drive.google.com/file/d/1I8MjaNMogsnozv8vJO0AyaRtgBuDjxdC/view?usp=drive_web)

Would you like me to draft a **"LinkedIn Personalizer" Prompt** that uses Apify CSV data to write DMs based on Eugene Schwartz's 5 Levels of Awareness?  
Export to Sheets  
Gemini response  
[Gemini Export July 1, 2026 at 3:45:31 PM PDT](https://docs.google.com/spreadsheets/d/1BVD9wY9G4c2zR1a2vRvllm-BaXMjUV0P8XQ7LQ5spHQ/edit?usp=drivesdk) was created and added to [My Drive](https://drive.google.com/drive/folders/0ALjsLj2sy3M0Uk9PVA)  
This response isn't saved in history  
One key insight is this isn't about "learn AI" This is about implementing skills (or agents) That should be one of our main talking points. It is also practical. we are not chasing shiny objects but focused on the problem first, then the AI solution second What would our weekly skills or agents be for this structure? Don't limit yourself to the files I provided. Anything is fair game  
Gemini response  
Based on our brainstorm, the "Dream Outcome" isn't an AI-themed course; it's an **Authority Operating System** where busy B2B founders hire specialized agents to handle the "bleeding neck" problems of lead generation and content at a fraction of the cost of traditional stacks.

The weekly progression focuses on **Implementation over Information.** We will move from "The Brain Trap" to a "Surgical Outreach Engine" using a tiered Agent/Skill strategy.

### **The Authority OS: 6-Month Agent Deployment Plan**

| Month | Theme | Weekly Agent/Skill Implementation | "Bleeding Neck" Result |
| ----- | ----- | ----- | ----- |
| **01** | **Founder Freedom** | **W1: Transcription-to-SOP Agent**  **W2: Brand Voice Architect**  **W3: Decision Memo Skill**  **W4: The Inbox Triage Agent** | **The Brain Dump:** Your processes and voice are extracted from your head into a Team Knowledge Base. |
| **02** | **Messaging Systems** | **W1: The "Unique Mechanism" Agent**  **W2: The Hormozi Offer Engineer**  **W3: Objection Handler Agent**  **W4: The Pitch Frame Controller** | **The Unbeatable Offer:** Your high-ticket services are re-engineered into an "Irresistible Offer" that sells itself. |
| **03** | **Content Engine** | **W1: The AEO/GEO Signal Scraper**  **W2: Surface Labs Content Engine**  **W3: LinkedIn Ghostwriter**  **W4: The Hook Creator** | **Authority at Scale:** You record 30 mins a week; the engine produces 50+ pieces of content that get you cited in AI Search. |
| **04** | **Lead Gen (Outer Loop)** | **W1: The Apify-to-LinkedIn Scraper**  **W2: The Schwartz Awareness Profiler**  **W3: Personalization Factory Agent**  **W4: LinkedIn Connection Guard** | **The $0 Ad Spend Machine:** Surgical LinkedIn outreach based on real behavioral signals from Apify, not spam. |
| **05** | **Research & Conv.** | **W1: Lead Prioritizer Agent**  **W2: Lead Magnet Quiz Builder**  **W3: Reply Classifier Agent**  **W4: Pricing Strategy Architect** | **The Discovery Engine:** Automated qualification and prioritization. You only talk to "Tier 1" prospects. |
| **06** | **Advanced Ops** | **W1: Larry (The Orchestrator)**  **W2: Nolan (The Hiring Manager)**  **W3: Strategy War Gaming Skill**  **W4: GTM Rebuild Agent** | **The Automated Asset:** You operate as the CEO. Larry manages the agents; you only make the final decisions. |

---

### **Critical Agents & Skills for this Structure**

These go beyond your existing files and focus on the **Problem-First** approach:

#### **1\. The "Transcription-to-SOP" Agent (Founder Freedom)**

* **The Problem:** Founders are the "Secret Sauce" bottleneck.  
* **The Agent:** A specialized version of the **Surface Labs Engine** that doesn't build blogs, but instead builds a **Team Knowledge Base**.  
* **Outcome:** Converts Loom videos or voice memos into step-by-step markdown SOPs that can be "read" by other AI agents.

#### **2\. The "Discovery-to-DM" Bridge (Lead Gen)**

* **The Problem:** Outreach feels like "Cold Calling" and burns domains.  
* **The Agent:** A combination of the **Signal Scraper** and a new **LinkedIn Personalizer**.  
* **Outcome:** Uses **Apify** to find people asking questions on LinkedIn, then uses your **Brand Voice** to draft a "Surgical DM" that references their specific problem.

#### **3\. The "Sales Council" (Strategic Foundations)**

* **The Problem:** Founders make high-stakes decisions in isolation.  
* **The Skill:** **Sales Council**.  
* **Outcome:** Instead of "asking AI for advice," the founder presents a deal to a panel including **Chris Voss** (Negotiation) and **Alex Hormozi** (Offer) to find hidden revenue leaks.

#### **4\. Larry: The Active Memory Orchestrator**

* **The Problem:** Busy founders forget which tools they have.  
* **The Solution:** The **myPKA Root Orchestration**.  
* **Outcome:** Larry walks the **Open Tasks** folder at the start of every session. He reminds the founder: *"Last month we fixed your LinkedIn Profile; this week we are using Mack to connect your Apify leads to your tracking sheet."*

### **Why this is a "Dream Outcome"**

1. **Zero "AI Slop":** By using the **Karpathy Simplicity Principles**, we ensure the content and code stay senior-level.  
2. **Asset Building:** The founder isn't just "chatting" with AI; they are building a **Project Memory** folder that lives on their machine and compounds in value.  
3. **Revenue First:** Every Tuesday "Skill Drop" is a direct response to a "Breaking Point" identified in their **AI Priority Map**.

Would you like me to draft the **"Larry Onboarding Protocol"** that will walk your members through setting up this 6-month "Revenue OS" in their own folders?  
can you create an extremely detailed write up on what we are doing and our process. Export it as a google doc I need to be able to hand this file to another AI such as Gemini Pro or Claude Code (with links to the relevant folders) and have it quickly up to speed on what we are building  
Gemini response  
There's no such information in your Drive.  
I mean the discussion above and what we decided  
Gemini response  
There's no such information in the files.  
Export to Docs  
Gemini response  
[Gemini Export July 1, 2026 at 4:09:08 PM PDT](https://docs.google.com/document/d/1TQ9jMJEVHoSMG2Ke3ORaZtXoBpApdQf8nX4Dtxih3lU/edit?usp=drivesdk) was created and added to [My Drive](https://drive.google.com/drive/folders/0ALjsLj2sy3M0Uk9PVA)  
This response isn't saved in history  
I mean this plus the other decisions we just made in this message sequence:

Based on our brainstorm, the "Dream Outcome" isn't an AI-themed course; it's an Authority Operating System where busy B2B founders hire specialized agents to handle the "bleeding neck" problems of lead generation and content at a fraction of the cost of traditional stacks.

The weekly progression focuses on Implementation over Information. We will move from "The Brain Trap" to a "Surgical Outreach Engine" using a tiered Agent/Skill strategy.The Authority OS: 6-Month Agent Deployment PlanMonthThemeWeekly Agent/Skill Implementation"Bleeding Neck" Result01Founder FreedomW1: Transcription-to-SOP Agent

W2: Brand Voice Architect

W3: Decision Memo Skill

W4: The Inbox Triage AgentThe Brain Dump: Your processes and voice are extracted from your head into a Team Knowledge Base.02Messaging SystemsW1: The "Unique Mechanism" Agent

W2: The Hormozi Offer Engineer

W3: Objection Handler Agent

W4: The Pitch Frame ControllerThe Unbeatable Offer: Your high-ticket services are re-engineered into an "Irresistible Offer" that sells itself.03Content EngineW1: The AEO/GEO Signal Scraper

W2: Surface Labs Content Engine

W3: LinkedIn Ghostwriter

W4: The Hook CreatorAuthority at Scale: You record 30 mins a week; the engine produces 50+ pieces of content that get you cited in AI Search.04Lead Gen (Outer Loop)W1: The Apify-to-LinkedIn Scraper

W2: The Schwartz Awareness Profiler

W3: Personalization Factory Agent

W4: LinkedIn Connection GuardThe $0 Ad Spend Machine: Surgical LinkedIn outreach based on real behavioral signals from Apify, not spam.05Research & Conv.W1: Lead Prioritizer Agent

W2: Lead Magnet Quiz Builder

W3: Reply Classifier Agent

W4: Pricing Strategy ArchitectThe Discovery Engine: Automated qualification and prioritization. You only talk to "Tier 1" prospects.06Advanced OpsW1: Larry (The Orchestrator)

W2: Nolan (The Hiring Manager)

W3: Strategy War Gaming Skill

W4: GTM Rebuild AgentThe Automated Asset: You operate as the CEO. Larry manages the agents; you only make the final decisions.Critical Agents & Skills for this StructureThese go beyond your existing files and focus on the Problem-First approach:1. The "Transcription-to-SOP" Agent (Founder Freedom)

* The Problem: Founders are the "Secret Sauce" bottleneck.  
* The Agent: A specialized version of the Surface Labs Engine that doesn't build blogs, but instead builds a Team Knowledge Base.  
* Outcome: Converts Loom videos or voice memos into step-by-step markdown SOPs that can be "read" by other AI agents.

2\. The "Discovery-to-DM" Bridge (Lead Gen)

* The Problem: Outreach feels like "Cold Calling" and burns domains.  
* The Agent: A combination of the Signal Scraper and a new LinkedIn Personalizer.  
* Outcome: Uses Apify to find people asking questions on LinkedIn, then uses your Brand Voice to draft a "Surgical DM" that references their specific problem.

3\. The "Sales Council" (Strategic Foundations)

* The Problem: Founders make high-stakes decisions in isolation.  
* The Skill: Sales Council.  
* Outcome: Instead of "asking AI for advice," the founder presents a deal to a panel including Chris Voss (Negotiation) and Alex Hormozi (Offer) to find hidden revenue leaks.

4\. Larry: The Active Memory Orchestrator

* The Problem: Busy founders forget which tools they have.  
* The Solution: The myPKA Root Orchestration.  
* Outcome: Larry walks the Open Tasks folder at the start of every session. He reminds the founder: *"Last month we fixed your LinkedIn Profile; this week we are using Mack to connect your Apify leads to your tracking sheet."*

Why this is a "Dream Outcome"

1. Zero "AI Slop": By using the Karpathy Simplicity Principles, we ensure the content and code stay senior-level.  
2. Asset Building: The founder isn't just "chatting" with AI; they are building a Project Memory folder that lives on their machine and compounds in value.  
3. Revenue First: Every Tuesday "Skill Drop" is a direct response to a "Breaking Point" identified in their AI Priority Map.

Would you like me to draft the "Larry Onboarding Protocol" that will walk your members through setting up this 6-month "Revenue OS" in their own folders?  
Gemini response  
**AI SEO Strategy**

* [**Claude Code AI SEO Skills**](https://drive.google.com/open?id=1hD_2tFaCweVD4EMHZUjR2ejVPdsS3_tn)\- This folder contains core technical competencies for deploying automated SEO agents within specific project environments.  
* [**ai-seo**](https://drive.google.com/open?id=19qYT3zzFXLygeMeRNruuHX_tOcwrsgrS)\- A dedicated directory for managing AI-driven search engine optimization workflows and operational agent logic.

**Deployment Systems**

* [**The 40-Agent LinkedIn System**](https://drive.google.com/open?id=195hu_Ove7a68qL9z6AVy8hCgVGeffpub)\- This framework details multi-agent deployment strategies for scaling automated outreach and content distribution across platforms.  
* [**LinkedIn Content and Outreach Process**](https://drive.google.com/open?id=1N102bIdaVVFATFVQiOM84M1GGVC8xnoI)\- Operational documentation outlining the systematic execution of LinkedIn authority building and prospect engagement workflows.

