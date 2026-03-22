# Project Memory: ChildHealthForAll

This document serves as a repository of long-term business and project knowledge for ChildHealthForAll to ensure continuity for future development.

## 🏢 Business Context
*   **Owner**: Dr. Pieter Jooste, a retired pediatrician with deep clinical expertise.
*   **Mission**: Providing parents with expert, evidence-based AI-powered guidance on when to seek medical attention for their children. 
*   **Legal Entity**: ChildHealthForAll (Pty) Ltd.
*   **Domain**: `childhealthforall.com` (Currently being transferred from Wix to Vercel).

## 🛠 Tech Stack
*   **Frontend**: React (Vite) with Vanilla CSS. 
*   **Routing**: React Router v6.
*   **SEO**: `react-helmet-async` for metadata management.
*   **Icons**: `lucide-react` (standard set for medical and navigation icons).
*   **Deployment**: Vercel (Production branch: `main`).

## 🗺 Brand Identity
*   **Aesthetic**: "Medical Premium" – high Trust, Serene, Professional.
*   **Design Tokens**:
    *   `--color-medical-blue`: Core brand color for authority.
    *   `--color-emergency`: Soft red for critical indicators.
    *   `--color-warning`: Amber for cautionary guidance.
    *   `--color-safe`: Calm green for reassuring signs.
*   **Visual Elements**: 
    *   Organic, rounded shapes (no sharp clinical corners).
    *   Glassmorphism (Frosted glass panels) for a modern, high-end feel.
    *   Subtle entrance animations on every page.

## 🏥 Clinical Structure
The application logic is driven by the **IMCI (Integrated Management of Childhood Illness)** guidelines.
*   **Age Groups**:
    1.  **Baby Health** (0-2 months): Focus on neonatal danger signs.
    2.  **Child Health** (2-60 months): Focus on common childhood illnesses (Fever, Diarrhoea, Respiratory).
*   **Triage Logic**:
    *   **Red**: Emergency – seek help immediately.
    *   **Yellow/Orange**: Urgent – see a doctor today.
    *   **Green**: Safe/Home care – instructions for monitoring.

## 📂 Key File Locations
*   `src/data/`: Contains `babyHealth.json` and `ChildHealth.json` (the core clinical logic).
*   `src/pages/SymptomChecker.jsx`: The main interactive triage tool.
*   `src/pages/Blog.jsx` & `blogData.js`: The educational content repository.
*   `src/components/SEO.jsx`: Global SEO component.

## 🚀 Future Roadmap (Aspirational)
*   **IMCI PDF Integration**: A searchable reference viewer for the full 2019 IMCI Chart Booklet.
*   **AI Chat**: LLM-powered symptom assistant (RAG-based) to explain guidelines in natural language.
*   **Multilingual Support**: Expanding guidance to multiple languages.
