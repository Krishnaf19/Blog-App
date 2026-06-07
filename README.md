# BlogApp

A modern, professional blog platform built with React. Create, publish, and manage blog posts with an intuitive interface and secure authentication.

## Features

- **Secure Authentication** - User login and signup with Appwrite
- **Full CRUD Operations** - Create, read, update, and delete posts
- **Rich Text Editor** - TinyMCE for formatted content
- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional glassmorphic design
- **State Management** - Redux Toolkit
- **Form Validation** - React Hook Form

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS 
- **State**: Redux Toolkit 
- **Backend**: Appwrite
- **Editor**: TinyMCE React
- **Routing**: React Router DOM 

## Quick Start

### Prerequisites
- Node.js
- npm or yarn

### Installation

1. Install dependencies
```bash
npm install
```

2. Configure Appwrite environment
Create `.env` with your Appwrite credentials:
```env
VITE_APPWRITE_ENDPOINT=your_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_KEY=your_api_key
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Usage

1. **Sign Up** - Create a new account
2. **Create Post** - Click "Add Post" and compose your article
3. **Edit Post** - Update existing posts anytime
4. **View All** - Browse all published posts
5. **Logout** - Secure session management

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── appwrite/       # Backend integration
├── features/       # Redux slices
├── store/          # Redux store configuration
└── conf/           # Configuration files
```

## License

MIT

## How to Run the Project

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. The application will automatically reload when you make changes to the code

### Build for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality


## License

This project is open source and available under the MIT License.
