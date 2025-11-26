```markdown
# ✨ Lnn Api

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white)

> This project serves as a comprehensive API scraper, primarily designed to retrieve and expose up-to-date anime information from the Otakudesu website. Built with Next.js, it offers a robust set of endpoints for various anime data, including details, episodes, genres, schedules, and search capabilities.

---

## ✨ Key Features

*   **Comprehensive Anime API Endpoints:** Provides a rich set of API routes (`/api/anime`, `/api/episode`, `/api/genre`, `/api/search`, `/api/schedule`, etc.) to programmatically access various types of anime data.
*   **Dynamic Data Scraping:** Integrates a powerful scraping layer (`src/lib`) utilizing `axios` and `cheerio` to fetch and parse real-time anime information directly from the source website.
*   **Modular Data Processing:** Organized utility functions (`src/utils`) for mapping, transforming, and batching scraped data, ensuring clean and consistent API responses.
*   **Typed Data Models:** Leverages TypeScript with explicit type definitions (`src/types/types.ts`) for all data structures, enhancing code reliability and maintainability.
*   **Scalable API Architecture:** Built on Next.js App Router, enabling efficient routing with dynamic segments (e.g., `[slug]`, `[episode]`) for flexible and expressive API design.
*   **Cross-Origin Resource Sharing (CORS) Support:** Configured for broad API accessibility, allowing consumption from different origins through explicit CORS headers.
*   **Modern Full-Stack Development:** Utilizes a contemporary stack including TypeScript, Next.js for a cohesive full-stack experience, and Tailwind CSS for streamlined styling.
*   **Optimized Development Workflow:** Employs `turbopack` for faster local development server startup, boosting developer productivity.
*   **Client-Side Analytics Integration:** Includes `@vercel/analytics` for basic usage monitoring and insights into API traffic.

## 🛠️ Technology Stack

| Category        | Technology             | Notes                                                         |
| :-------------- | :--------------------- | :------------------------------------------------------------ |
| **Language**    | TypeScript             | Ensures type safety and enhances developer experience.        |
| **Framework**   | Next.js                | Full-stack React framework for building API routes and UI.    |
| **Frontend**    | React                  | Library for building interactive user interfaces.             |
| **Styling**     | Tailwind CSS           | Utility-first CSS framework for rapid UI development.         |
| **Linting**     | ESLint                 | Code analysis tool for maintaining code quality.              |
| **Scraping**    | Axios, Cheerio         | HTTP client for requests and fast, flexible & lean implementation of core jQuery specifically for the server. |
| **Package Mgr** | Yarn                   | Fast, reliable, and secure dependency management.             |
| **UI Components** | @nextui-org/react      | A modern UI component library for React.                     |
| **Analytics**   | @vercel/analytics      | For tracking usage and performance metrics.                   |

## 🏛️ Architecture Overview

The **Lnn Api** project follows a full-stack architecture powered by **Next.js**. It primarily functions as an API backend but leverages Next.js's capabilities to potentially serve a lightweight frontend if needed.

At its core, the application defines a comprehensive set of **API routes** within the `src/app/api` directory. These routes handle incoming requests for various anime data. When a request is received, the API route delegates the task to a **scraping layer** located in `src/lib`. This layer is responsible for making HTTP requests to external sources (e.g., Otakudesu) using `axios` and then parsing the HTML content using `cheerio` to extract relevant data.

The extracted raw data is then processed and transformed by **utility functions** in `src/utils` and strictly typed according to definitions in `src/types`, ensuring consistent and predictable JSON responses. The entire application is written in **TypeScript**, promoting robust and maintainable code. **Tailwind CSS** is configured for any potential UI elements, providing a modern and efficient styling approach.

## 🚀 Getting Started

Follow these steps to set up and run the Lnn Api project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Lannnnnzzzzzzzzzzz/lnn-api.git
    cd lnn-api
    ```

2.  **Install dependencies:**
    This project uses `Yarn` as its package manager.

    ```bash
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory by copying `.env.example`. Set the `BASEURL` variable to the target website (e.g., `BASEURL=https://www.otakudesu.cloud`).

4.  **Start the development server:**

    ```bash
    yarn dev
    ```

    The API will be accessible at `http://localhost:3000`.

## 📂 File Structure

```
/
├── LICENSE
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── anime
│   │   │   │   ├── [slug]
│   │   │   │   │   ├── episodes
│   │   │   │   │   │   ├── [episode]
│   │   │   │   │   │   │   └── route.ts
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── complete-anime
│   │   │   │   ├── [page]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── episode
│   │   │   │   ├── [slug]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── genre
│   │   │   │   ├── [slug]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── home
│   │   │   │   └── route.ts
│   │   │   ├── ongoing-anime
│   │   │   │   ├── [id]
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── route.ts
│   │   │   ├── schedule
│   │   │   │   └── route.ts
│   │   │   └── search
│   │   │       ├── [keyword]
│   │   │       │   └── route.ts
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib
│   │   ├── getBatch.ts
│   │   ├── mapGenres.ts
│   │   ├── pagination.ts
│   │   ├── scapeOngoingAnime.ts
│   │   ├── scrapeAnimeByGenre.ts
│   │   ├── scrapeAnimeEpisodes.ts
│   │   ├── scrapeBatch.ts
│   │   ├── scrapeCompleteAnime.ts
│   │   ├── scrapeEpisode.ts
│   │   ├── scrapeGenreLists.ts
│   │   ├── scrapeSchedule.ts
│   │   └── scrapeSearchResult.ts
│   │   └── scrapeSingleAnime.ts
│   ├── types
│   │   └── types.ts
│   └── utils
│       ├── anime.ts
│       ├── animeByGenre.ts
│       ├── batch.ts
│       ├── completeAnime.ts
│       ├── episode.ts
│       ├── episodes.ts
│       ├── genreLists.ts
│       ├── home.ts
│       ├── movie.ts
│       ├── ongoingAnime.ts
│       ├── schedulte.ts
│       └── search.ts
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
```

*   **/public**: Contains static assets like images and favicons.
*   **/src**: The primary source code directory for the Next.js application.
    *   **/src/app**: Implements the Next.js App Router.
        *   **/src/app/api**: Houses all the API routes, organized by data type (anime, episode, genre, search, etc.).
        *   **/src/app/\***: Contains core UI components like `layout.tsx` and `page.tsx` for the web interface.
    *   **/src/lib**: Holds the core scraping logic and functions responsible for interacting with external data sources.
    *   **/src/types**: Defines TypeScript interfaces and types for consistent data structures across the application.
    *   **/src/utils**: Provides utility functions for data processing, transformation, and helper methods.
```
