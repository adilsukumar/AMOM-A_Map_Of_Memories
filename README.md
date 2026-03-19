# 🗺️ A Map Of Memories (AMOM)

*Just someone who remembered something.*

---

## 🌟 What is AMOM?

**A Map Of Memories** is a living, breathing world map — built entirely out of human stories.

Anyone, anywhere, can drop a pin on the exact spot where something happened to them and write about it. A street corner in Tokyo where they got lost and found something better. A beach in Kerala where they said goodbye. A café in Paris where they fell in love. A rooftop in their hometown where they used to sit alone and think.

Those stories sit on the map, visible to everyone. And anyone passing through — whether they're planning a trip, reminiscing about a place, or just wandering the map out of curiosity — can read them.

AMOM is not a photo dump. It's not a travel blog. It's not a private diary.

It's a collective memory of the world, written by the people who actually lived in it.

---

## 💡 The Idea Behind It

Every place on Earth has been felt by someone. Every street, every mountain, every unremarkable parking lot has a story attached to it that never got told — because there was nowhere to tell it.

AMOM exists to change that.

The default is public. You share your memory with the world, and the world can read it. If something is too personal, you can keep it private — but the spirit of AMOM is openness. It's about saying *"I was here, and this is what it meant to me"* — and letting a stranger on the other side of the world stumble upon that and feel something.

That's the whole point.

---

## ✨ How It Works

### For Everyone (no account needed)
- Open the map and explore memories pinned across the world
- Hover over any marker to get a quick preview of the story
- Click to read the full memory — who wrote it, when, what happened there
- Search for any city, street, or landmark and see what memories exist there
- Zoom all the way in to street level and discover stories on specific corners

### For Contributors (free account)
- Click anywhere on the map to pin a memory to that exact location
- Write your story — what happened, what it felt like, why that place matters
- Choose a category: Love, Travel, Food, Adventure, Family, Work, and more
- Pick a color that feels right for that memory
- Set it to **public** (default) so others can read it, or private if it's just for you
- Your memory appears on the map instantly, for anyone in the world to find

---

## 🗺️ The Experience

The map is the product. Not a feed, not a timeline — a map.

You zoom into a city you've never been to and suddenly you're reading about a moment someone had there in 2019. You search your hometown and find a memory pinned to a street you grew up on, written by someone you've never met. You drop a pin on a place that changed your life and know that someday, someone will find it.

That's AMOM.

- **Intensity-based clusters** — areas with more memories glow brighter, drawing you in
- **Hover previews** — pause on any marker for a second and get a glimpse of the story
- **Full detail on click** — zoom in and read the whole thing
- **Multiple map views** — street detail, satellite, buildings — see the world the way you want
- **Real-time** — memories appear the moment they're posted, no refresh needed

---

## 🔐 Privacy

Most memories on AMOM are public — that's what makes the platform alive.

But you're in control. If a memory is too personal, too raw, or just meant for you — mark it private. It stays on your map, visible only to you. Nobody else sees it.

The platform respects that line completely.

---

## 🚀 Try It

**Live**: [amom-a-map-of-memories.vercel.app](https://amom-a-map-of-memories.vercel.app)

1. Open the map
2. Explore what's already there — zoom in anywhere, read what people left behind
3. Sign up and drop your first pin
4. Write something real

---

## 🛠️ For Developers

### Tech Stack
```
Frontend:     React 18 + TypeScript + Vite
Styling:      Tailwind CSS + shadcn/ui
Maps:         Leaflet + React Leaflet + MarkerCluster
Database:     Supabase (PostgreSQL + Real-time)
Auth:         Supabase Auth with RLS
Deployment:   Vercel
```

### Run Locally
```bash
git clone https://github.com/adilsukumar/AMOM-A_Map_Of_Memories.git
cd AMOM-A_Map_Of_Memories
npm install
npm run dev
# Open http://localhost:8080
```

Add a `.env` file:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Project Structure
```
src/
├── components/       # UI + map components
├── hooks/            # useMemories and other hooks
├── integrations/     # Supabase client + types
├── lib/              # Utilities
└── pages/            # Route pages
```

---

## 📄 License

Open for personal use, learning, and educational purposes. For commercial use, reach out.

---

## 🤝 Contact

- **Email**: adilsukumar24@gmail.com
- **LinkedIn**: [Adil Sukumar](https://www.linkedin.com/in/adilsukumar)

---

**© 2025 Adil Sukumar**

*Made for everyone who believes every place has a story worth telling.*
