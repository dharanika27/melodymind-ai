# Frontend Architecture

## Framework

- React 19
- TypeScript
- Vite

## Styling

- Tailwind CSS
- shadcn/ui

## State Management

- Zustand

## API

- Axios

## Server State

- TanStack React Query

## Routing

- React Router DOM

## Icons

- React Icons

---

## Folder Structure

# Folder Structure

frontend/
│
├── public/
│ ├── logo.svg
│ └── favicon.svg
│
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── common/
│ │ ├── layout/
│ │ │ ├── Header.tsx
│ │ │ ├── MainLayout.tsx
│ │ │ └── Sidebar.tsx
│ │ ├── chat/
│ │ ├── playlist/
│ │ └── player/
│ │
│ ├── hooks/
│ ├── lib/
│ │ └── navigation.ts
│ │
│ ├── pages/
│ │ ├── Dashboard/
│ │ ├── Chat/
│ │ ├── Playlists/
│ │ ├── Favorites/
│ │ ├── History/
│ │ └── Settings/
│ │
│ ├── routes/
│ ├── services/
│ ├── store/
│ │ └── sidebarStore.ts
│ │
│ ├── styles/
│ ├── types/
│ ├── utils/
│ ├── App.tsx
│ └── main.tsx

---

## Pages

- Home
- Chat
- Playlist
- History
- Settings

---

## Components

### Layout

- Sidebar
- Header
- MainLayout

### Dashboard

- Quick Action Cards (Upcoming)
- Recommendation Cards (Upcoming)

### Chat

- Chat Window (Upcoming)
- Chat Input (Upcoming)

### Playlist

- Playlist Panel (Upcoming)
- Song Card (Upcoming)

### Player

- Music Player (Upcoming)

### Common

- Theme Toggle (Upcoming)
- Loading Spinner (Upcoming)
