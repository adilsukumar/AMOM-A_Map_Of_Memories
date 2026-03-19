# 🗺️ AMOM: A Map Of Memories

> **"Every coordinate has a soul. Every pin tells a story."**

**A Map Of Memories (AMOM)** is a decentralized, community-driven digital archive where the world’s experiences are pinned to the globe. It is not just a map; it is a **Global Storybook** where personal journeys become public inspiration.

[![Live Demo](https://img.shields.io/badge/Experience-AMOM_Live-brightgreen?style=for-the-badge)](https://amom-a-map-of-memories.vercel.app/)

---

## 🌟 The Vision: A Living Atlas of Humanity

In a world of disappearing stories and clinical GPS data, AMOM restores the "human element" to geography. We believe that a location is defined not by its latitude and longitude, but by the moments that happened there.

### 🔓 Public-First Philosophy
While privacy is always respected, AMOM is built on the power of **shared vulnerability**. By making memories public, you allow a traveler in Tokyo to feel the nostalgia of a sunset in Santorini. You turn a "place" into a "feeling."

* **Discover**: Wander the globe digitally and read the "micro-histories" of strangers.
* **Empathize**: See the world through different eyes—from a local’s favorite alleyway to a traveler’s first heartbreak.
* **Preserve**: Create a permanent, searchable record of human emotion tied to the earth.

---

## ✨ Core Features for Storytellers

### 🌍 **The Global Memory Feed**
* **Narrative Discovery**: As you pan the map, the stories of that region come alive in a real-time feed.
* **Micro-Topic Generation**: Our intelligent system distills long stories into 3-4 word "emotional hooks."
* **Visual Density**: Watch the map "glow" with intensity-based clustering in areas where human history is most concentrated.

### 🎨 **Immersive Experience**
* **Deep Zoom (Level 22)**: Pin a memory to a specific park bench, a mountain peak, or a corner table in a café.
* **Time & Space**: Backdate memories to create a historical map of your life or your city.
* **One-Second Previews**: Hover over any pin to instantly "peek" into someone else’s journey without losing your place on the map.

### 🤝 **Community & Connection**
* **Anonymous Sharing**: Share your deepest truths without the weight of an identity.
* **Global English Support**: A unified language interface so the world can read your story.
* **Real-Time Sync**: When you pin a memory, the world sees it instantly across all devices.

---

## 🛠️ The Tech Behind the Stories

AMOM uses a modern, high-performance stack to handle global scaling, real-time interaction, and secure public/private data rendering.

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18 + TypeScript + Vite |
| **Styling** | Tailwind CSS + shadcn/ui (Dark Mode Optimized) |
| **Mapping** | Leaflet + React Leaflet + MarkerCluster |
| **Backend** | Supabase (PostgreSQL + Real-time engine) |
| **Security** | Supabase Auth + Row Level Security (RLS) policies |

*Note on Security: Supabase Row Level Security (RLS) ensures that while public memories are accessible to the global feed, private memories remain strictly locked to the authenticated owner's view.*

---

## 🚀 Experience It Locally

Want to explore the codebase or contribute to the platform? Here is how to get AMOM running on your local machine.

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn
* A Supabase project (for database and auth)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/adilsukumar/AMOM-A_Map_Of_Memories.git](https://github.com/adilsukumar/AMOM-A_Map_Of_Memories.git)
   cd AMOM-A_Map_Of_Memories
Install dependencies

Bash
npm install
Set up environment variables
Create a .env file in the root directory and add your Supabase credentials:

Code snippet
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Start the development server

Bash
npm run dev
Open http://localhost:5173 to view it in your browser.

🤝 Join the Movement
We believe great software is built by great communities. Whether you're a developer, designer, or just someone passionate about preserving memories, we'd love your help!

🐛 Report Issues: Help us improve by opening an issue.

💡 Suggest Features: Share your ideas for new storytelling tools.

🔧 Contribute Code: Submit a pull request (see our contributing guidelines).

🌟 Share Stories: The best way to contribute is simply to use the app and tell your story!

📄 License & Usage
This project is open for personal use, learning, and educational purposes. You are welcome to explore the codebase, learn from the architecture, and run it locally. For commercial use, please reach out to discuss licensing.
