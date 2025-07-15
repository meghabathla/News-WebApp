# News WebApp

A modern, responsive news reader application built with React, TypeScript, and Vite. This app provides an infinite scrolling news feed with offline support, network-aware optimizations, and background sync capabilities.

## Loom Link

To ensure you get a clear idea of the UI and how the project works, I’m also sharing a Loom video walkthrough with you. I wanted to highlight this because there’s a possibility that the free API calls for the day might be consumed, and I didn’t want that to affect your experience while reviewing it.

- Link - https://www.loom.com/share/2c9d1ac977fb45bd8fe0e52936ec9caf?sid=e3b69a30-82ae-4fb1-b6e9-1d66980d3c3a

## 🚀 Features

- **Infinite Scrolling**: Seamlessly load more news articles as you scroll
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Offline Support**: Shows offline indicator and cached content when disconnected
- **Network-Aware**: Automatically adjusts image loading based on network conditions
- **Background Sync**: Periodic updates using Service Worker (every 15 minutes)
- **Tesla News Focus**: Currently configured to fetch Tesla-related news articles
- **Modern UI**: Clean, card-based design with Tailwind CSS
- **Loading States**: Skeleton loading animations for better UX

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 + TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router 7.6.3
- **News API**: NewsAPI.org integration
- **PWA**: Service Worker for background sync

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- NewsAPI key (get one at [newsapi.org](https://newsapi.org))

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd News-WebApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure API Key**

   The app currently uses a hardcoded API key in `src/constants/config.ts`. For production, you should:

   - Create a `.env` file in the root directory
   - Add your NewsAPI key:
     ```
     VITE_NEWS_API_KEY=your_api_key_here
     VITE_NEWS_API_URL=https://newsapi.org/v2/everything
     ```
   - Update `src/constants/config.ts` to use environment variables:
     ```typescript
     export const NEWS_API_URL = import.meta.env.VITE_NEWS_API_URL;
     export const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
     ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

Opens the app at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
News-WebApp/
├── public/
│   ├── service-worker.js      # Background sync service worker
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── newsapi.ts         # News API integration
│   ├── components/
│   │   ├── LoadingSkeleton.tsx # Loading animation component
│   │   ├── NewsReader.tsx      # Main news feed component
│   │   └── ui/
│   │       └── card.tsx       # News card component
│   ├── constants/
│   │   └── config.ts          # API configuration
│   ├── pages/
│   │   ├── index.tsx          # Home page
│   │   └── NotFound.tsx       # 404 page
│   ├── App.tsx                # Main app component with routing
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.tsx               # App entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔄 How It Works

### News Fetching

- Uses NewsAPI.org to fetch Tesla-related news articles
- Implements pagination with 10 articles per page
- Automatically loads more content using Intersection Observer

### Offline Support

- Detects online/offline status
- Shows appropriate indicators to users
- Service Worker enables background synchronization

### Network Optimization

- Detects slow network conditions (2G, slow-2G, or data saver mode)
- Conditionally loads images based on network speed
- Provides visual feedback for network status

### Background Sync

- Service Worker registers for periodic sync every 15 minutes
- Attempts to sync news data in the background
- Handles sync failures gracefully

## 🎨 Key Components

### NewsReader

The main component that handles:

- News fetching and pagination
- Infinite scrolling implementation
- Network status monitoring
- Offline/online state management

### NewsCard

Individual news article display with:

- Responsive image loading
- Article metadata (source, date)
- External link to full article

### LoadingSkeleton

Animated loading placeholder that provides:

- Visual feedback during data loading
- Smooth shimmer animations
- Responsive layout matching actual content

## 🔧 Configuration

### API Configuration

Edit `src/constants/config.ts` to modify:

- API endpoints
- Search queries (currently "tesla")
- Date filters

### Styling

The app uses Tailwind CSS for styling. Customize:

- Colors and themes in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in respective files

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice:

   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

3. **Ensure environment variables** are set in your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- API key is currently hardcoded (should be moved to environment variables)
- Limited to Tesla news (search query can be made configurable)
- Service Worker periodic sync may not work in all browsers

## 🔮 Future Enhancements

- [ ] User customizable news categories
- [ ] Dark/light theme toggle
- [ ] Article bookmarking
- [ ] Search functionality
- [ ] Social sharing
- [ ] Push notifications
- [ ] Offline article reading
- [ ] User preferences storage
