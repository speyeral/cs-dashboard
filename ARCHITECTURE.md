# CS Dashboard - Architecture Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [State Management](#state-management)
5. [Component Architecture](#component-architecture)
6. [Data Flow](#data-flow)
7. [Key Files and Their Responsibilities](#key-files-and-their-responsibilities)
8. [Component Interactions](#component-interactions)

---

## Project Overview

**CS Dashboard** is a React-based web application designed to help students navigate computer science learning pathways. It functions as a supplemental learning dashboard that tracks course progress, manages learning paths across different CS specializations, and gamifies the learning experience with XP/leveling mechanics.

**Core Features:**

- Course discovery organized by category
- Progress tracking with XP and leveling system
- Multiple learning roadmaps for different CS specializations
- Interactive course modals with course completion mechanics
- Persistent progress storage using browser local storage
- Visual feedback with confetti animations on course completion

---

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **CSS**: CSS Modules (component-scoped styling)
- **State Management**: React Context API + Hooks
- **Storage**: Browser localStorage
- **Additional Libraries**:
  - `react-dom` - DOM rendering
  - `react-confetti` - Confetti animations on course completion

---

## Project Structure

```
cs-dashboard/
├── design.md                    # Design tokens and visual system specifications
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies and scripts
├── public/
│   └── images/                  # Images for roadmaps and visual assets
├── src/
│   ├── main.jsx                 # Application entry point with React bootstrap
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global application styles
│   ├── index.css                # Global index styles
│   ├── style.css                # Additional global styles
│   ├── assets/                  # Application assets (empty in current structure)
│   ├── components/              # Reusable React components
│   │   ├── Header.jsx           # Dashboard header with level/XP display
│   │   ├── Header.module.css
│   │   ├── Dashboard.jsx        # Main grid layout organizing courses by category
│   │   ├── Dashboard.module.css
│   │   ├── CourseCategory.jsx   # Container for courses in a single category
│   │   ├── CourseCategory.module.css
│   │   ├── CourseTile.jsx       # Individual course card component
│   │   ├── CourseTile.module.css
│   │   ├── CourseModal.jsx      # Modal for viewing and completing courses
│   │   ├── CourseModal.module.css
│   │   ├── ProgressBar.jsx      # Visual XP progress bar
│   │   ├── ProgressBar.module.css
│   │   ├── RoadmapCarousel.jsx  # Carousel displaying learning roadmaps
│   │   ├── RoadmapCarousel.module.css
│   │   ├── CategoryDescriptions.jsx # Overview cards for course categories
│   │   └── CategoryDescriptions.module.css
│   ├── context/
│   │   └── ProgressContext.jsx  # React Context for managing global progress state
│   └── data/
│       └── courses.json         # Course database with metadata
```

---

## State Management

### ProgressContext

The application uses **React Context API** for global state management. All progress-related data flows through the `ProgressContext`.

**Location**: [src/context/ProgressContext.jsx](src/context/ProgressContext.jsx)

**Responsibilities:**

- Manages course completion state
- Persists user progress to localStorage
- Provides course data to all components
- Exposes `useProgress()` hook for component access

**Context Value Structure:**

```javascript
{
  courses: Array,           // All available courses from courses.json
  completedIds: Array,      // IDs of courses marked as completed
  completeCourse: Function  // Function to mark a course as completed
}
```

**Features:**

- **Automatic Persistence**: Completed course IDs are saved to `localStorage` under key `'cs_dashboard_completed'`
- **Error Handling**: Gracefully handles localStorage failures
- **Lazy Initialization**: Initial state loads from localStorage on first render

---

## Component Architecture

### Hierarchy Overview

```
App (Root)
├── Header
├── Dashboard
│   └── CourseCategory (multiple)
│       └── CourseTile (multiple)
├── CourseModal (conditionally rendered)
├── CategoryDescriptions
└── RoadmapCarousel
```

### Component Descriptions

#### **App.jsx** - Main Application Component

**Purpose**: Root component that orchestrates the entire application

**Key Responsibilities:**

- Manages modal state (`selectedCourse`, `showConfetti`)
- Handles course selection and modal lifecycle
- Manages confetti animation trigger
- Renders the page structure

**State:**

- `selectedCourse`: The currently selected course for modal display (null when closed)
- `showConfetti`: Boolean controlling confetti animation visibility

**Methods:**

- `handleCourseSelect(course)`: Opens modal with selected course
- `handleCloseModal()`: Closes the modal
- `handleQuestComplete()`: Triggers confetti and schedules 5-second hide

**Child Components:**

- Header, Dashboard, CourseModal, CategoryDescriptions, RoadmapCarousel

---

#### **Header.jsx** - Top Navigation and Stats Display

**Purpose**: Displays user progress metrics and navigation

**Key Responsibilities:**

- Calculates user level based on total XP
- Calculates XP progress toward next level
- Displays current XP and level

**Calculation Logic:**

- **Level**: `Math.floor(totalXp / 500) + 1` (500 XP per level)
- **XP in Current Level**: `totalXp % 500`
- **Progress %**: `(xpInCurrentLevel / 500) * 100`

**Data Source**: Uses `useProgress()` hook to get courses and completed course IDs

**Styling**: Modules CSS with stats container, level badge, and XP bar

---

#### **Dashboard.jsx** - Main Course Grid Layout

**Purpose**: Organizes and displays all courses grouped by category

**Key Responsibilities:**

- Groups courses by category using useMemo
- Defines responsive layout for each category
- Manages grid layout with CSS Grid

**Category Layout Configuration:**

```javascript
{
  'Web & Mobile Development': { colSpan: 7 },
  'Intelligence & Data': { colSpan: 5 },
  'Systems & Infrastructure': { colSpan: 4 },
  'Cybersecurity & Ethics': { colSpan: 4 },
  'Software Engineering': { colSpan: 4 },
  'Theoretical Computer Science': { colSpan: 6 },
  'Interactive Media & Specialized Apps': { colSpan: 6 }
}
```

**Props:**

- `onCourseSelect(course)`: Callback when course tile is clicked

**Optimization**: Uses `useMemo` to memoize grouped courses and avoid unnecessary recalculations

---

#### **CourseCategory.jsx** - Category Section Container

**Purpose**: Wraps courses in a single category with a category title

**Key Responsibilities:**

- Renders category title/header
- Maps courses to CourseTile components
- Maintains grid layout for course tiles

**Props:**

- `title` (string): Category name
- `courses` (array): Course objects in this category
- `onCourseSelect` (function): Callback for course selection

---

#### **CourseTile.jsx** - Individual Course Card

**Purpose**: Displays a single course as a clickable card

**Key Responsibilities:**

- Shows course title and XP value
- Displays completion checkmark if course is done
- Handles course selection click
- Prevents interaction with completed courses

**Props:**

- `course` (object): Course data
- `onSelect` (function): Callback when tile is clicked

**Features:**

- Reads completion status from `useProgress()` hook
- Applies `completed` CSS class when finished
- Shows checkmark (✓) for completed courses
- Disabled click handler for completed courses

---

#### **CourseModal.jsx** - Course Details and Completion Modal

**Purpose**: Shows detailed course information and handles course completion

**Key Responsibilities:**

- Displays full course details (title, description, link, hours, tier)
- Implements hold-to-complete interaction
- Manages completion animation and confetti trigger
- Cleans up timers/intervals on unmount

**Hold-to-Complete Mechanics:**

- Requires 1500ms (1.5 seconds) of continuous mouse hold
- Shows progress bar during hold
- Completes course on successful hold
- Cancels if mouse is released before completion

**Tier System:**

```javascript
{
  1: { label: 'Beginner', className: 'tierBeginner' },
  2: { label: 'Intermediate', className: 'tierIntermediate' },
  3: { label: 'Expert', className: 'tierExpert' }
}
```

**Props:**

- `course` (object): Course to display
- `onClose` (function): Callback to close modal
- `onComplete` (function): Callback when course is completed

**State:**

- `holdProgress` (number): Percentage of hold completion (0-100)

---

#### **ProgressBar.jsx** - Visual Progress Indicator

**Purpose**: Displays visual representation of progress

**Usage**: Referenced in CourseModal, likely for showing course progress or XP progress

---

#### **RoadmapCarousel.jsx** - Learning Path Carousel

**Purpose**: Displays recommended learning roadmaps for different CS specializations

**Key Responsibilities:**

- Manages carousel state and navigation
- Displays roadmap cards with images and descriptions
- Allows users to navigate between different career paths

**Roadmaps Included:**

1. **Computer Science** - Algorithms, data structures, operating systems
2. **Data Science** - Machine learning, data analysis, visualization
3. **Information Technology** - Infrastructure, security, networks
4. **Information Systems** - Software engineering, systems analysis

**Props**: None (self-contained state)

**State:**

- `activeIndex` (number): Currently displayed roadmap index

**Navigation Methods:**

- `handleNext()`: Cycles to next roadmap
- `handlePrev()`: Cycles to previous roadmap

---

#### **CategoryDescriptions.jsx** - Category Overview Section

**Purpose**: Provides descriptive information about each course category

**Key Responsibilities:**

- Displays overview cards for each course category
- Shows category descriptions and key topics

**Categories Covered:**

- Web & Mobile Development
- Intelligence & Data
- Systems & Infrastructure
- Cybersecurity & Ethics
- Software Engineering
- Theoretical Computer Science
- Interactive Media & Specialized Apps

**Props**: None (uses hardcoded category data)

---

## Data Flow

### Data Sources and Flow

```
courses.json
    ↓
ProgressContext
    ├─→ Header (for XP/Level calculation)
    ├─→ Dashboard (for course grouping)
    │   └─→ CourseCategory
    │       └─→ CourseTile
    │           ├─ Reads: completedIds
    │           └─ On Click → App.handleCourseSelect()
    ├─→ CourseModal
    │   ├─ Reads: completedIds
    │   └─ On Complete → App.handleQuestComplete() + ProgressContext.completeCourse()
    ├─→ RoadmapCarousel (independent)
    └─→ CategoryDescriptions (independent)
```

### User Interaction Flow

```
1. User loads app
   └─→ ProgressProvider initializes
       └─→ Reads localStorage for saved progress

2. User clicks course tile
   └─→ CourseTile.onClick()
       └─→ App.handleCourseSelect()
           └─→ Sets selectedCourse state
               └─→ CourseModal renders

3. User holds "Complete Course" button for 1.5 seconds
   └─→ CourseModal.handleMouseUp() (no early release)
       └─→ completeCourse(course.id) in ProgressContext
           ├─→ Updates completedIds state
           └─→ localStorage updated via useEffect
       └─→ App.handleQuestComplete()
           ├─→ Triggers confetti
           └─→ Schedules 5-second confetti hide
       └─→ Closes modal

4. Progress updates propagate
   └─→ Header recalculates XP/Level
   └─→ CourseTiles show completion checkmark
```

---

## Key Files and Their Responsibilities

| File                                                                | Purpose              | Key Logic                                                  |
| ------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------- |
| [main.jsx](src/main.jsx)                                            | React bootstrap      | Wraps App in ProgressProvider and mounts to DOM            |
| [App.jsx](src/App.jsx)                                              | Root component       | Modal state, course selection, confetti trigger            |
| [ProgressContext.jsx](src/context/ProgressContext.jsx)              | Global state         | Course data, completion tracking, localStorage persistence |
| [courses.json](src/data/courses.json)                               | Course database      | Static course metadata with IDs, titles, XP, categories    |
| [Header.jsx](src/components/Header.jsx)                             | User stats           | XP calculation, level calculation, progress bar            |
| [Dashboard.jsx](src/components/Dashboard.jsx)                       | Layout orchestration | Category grouping, responsive grid layout                  |
| [CourseCategory.jsx](src/components/CourseCategory.jsx)             | Category container   | Groups and displays courses by category                    |
| [CourseTile.jsx](src/components/CourseTile.jsx)                     | Course card          | Individual course display with completion indicator        |
| [CourseModal.jsx](src/components/CourseModal.jsx)                   | Course details       | Course info, hold-to-complete mechanic                     |
| [RoadmapCarousel.jsx](src/components/RoadmapCarousel.jsx)           | Roadmap display      | Learning path carousel with navigation                     |
| [CategoryDescriptions.jsx](src/components/CategoryDescriptions.jsx) | Category info        | Category overviews and descriptions                        |

---

## Component Interactions

### Direct Component Communication

**Parent → Child (Props)**

- `App` → `Dashboard`: passes `onCourseSelect` callback
- `App` → `CourseModal`: passes `course`, `onClose`, `onComplete` callbacks
- `Dashboard` → `CourseCategory`: passes `title`, `courses`, `onCourseSelect`
- `CourseCategory` → `CourseTile`: passes `course`, `onSelect` callback

**Shared State (Context)**

- All components read from `ProgressContext` via `useProgress()` hook
- Components that need progress data: Header, Dashboard, CourseTile, CourseModal

### Event Flow Examples

**Example 1: Course Completion**

```
User holds button in CourseModal
  → CourseModal.handleMouseUp()
    → ProgressContext.completeCourse(courseId)
      → Updates completedIds state
      → Triggers useEffect to save to localStorage
    → App.handleQuestComplete()
      → Triggers confetti animation
  → Header detects completedIds change
    → Recalculates totalXp and level
  → CourseTile detects completedIds change
    → Shows completion checkmark
```

**Example 2: Navigation Through Roadmaps**

```
User clicks carousel nav button
  → RoadmapCarousel.handleNext() or handlePrev()
    → Updates activeIndex state
    → Re-renders with new roadmap displayed
    → (Self-contained, no external dependencies)
```

---

## Design System Integration

The project uses a cohesive design system defined in [design.md](design.md):

**Color Scheme**: Dark theme with pink/purple accents

- Primary: `#ffaaf7` (pink)
- Secondary: `#e9b3ff` (light purple)
- Surface: `#20092b` (dark purple)
- Background: `#20092b`

**Typography**: Space Grotesk (headings) and Inter (body text)

**Component-scoped Styling**: All components use CSS Modules (`*.module.css`) for style isolation

---

## Performance Considerations

1. **useMemo in Dashboard**: Courses are memoized by category to prevent recalculation on every render
2. **CSS Modules**: Component styles are scoped to prevent conflicts and allow for optimal bundling
3. **Lazy Modal Rendering**: CourseModal only renders when a course is selected
4. **localStorage Persistence**: Prevents data loss and improves perceived app speed on revisits

---

## Future Enhancement Opportunities

1. **Backend Integration**: Replace courses.json with API calls
2. **User Accounts**: Add user authentication and cloud storage
3. **Advanced Filtering**: Filter courses by tier, category, or prerequisites
4. **Course Reviews/Ratings**: Add user feedback system
5. **Social Features**: Share progress, collaborate on courses
6. **Mobile Optimization**: Responsive design enhancements
7. **Analytics**: Track learning patterns and provide recommendations
8. **Offline Support**: Service workers for offline course browsing
