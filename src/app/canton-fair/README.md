# Canton Fair 2025 Route

This directory contains the Canton Fair 2025 trade fair package pages for the Truedeal website.

## Structure

```
canton-fair/
├── page.tsx              # Main Canton Fair packages listing page
├── layout.tsx            # Layout with SEO metadata
├── data.ts              # Package data and TypeScript interfaces
└── [id]/
    └── page.tsx         # Individual package detail page
```

## Features

### Main Page (`page.tsx`)

- **Hero Section**: Eye-catching hero with Canton Fair branding
- **Fair Information Banner**: Key dates, timings, and venue details
- **Package Cards**: Interactive cards showing available packages
- **Highlights Section**: Showcases key attractions and features
- **Why Visit Section**: Benefits of attending Canton Fair
- **FAQ Section**: Common questions about the trade fair
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Performance Optimized**:
  - Lazy loading for heavy components
  - Memoized data and event handlers
  - Optimized images with Next.js Image component

### Package Detail Page (`[id]/page.tsx`)

- **Hero Section**: Package-specific hero image
- **Sticky Booking Bar**: Always-visible booking option
- **Quick Facts**: Essential package information
- **Exhibition Details**: Canton Fair-specific information
- **Day-by-Day Itinerary**: Expandable timeline with activities
- **Inclusions/Exclusions**: Clear listing of what's covered
- **Flight Details**: Comprehensive flight information with Indigo Airlines
- **Hotel Information**: Accommodation details with distance from venue
- **FAQ Section**: Package-specific questions
- **Sidebar**: Price card, highlights, and contact options

## Data Structure

### CantonFairPackage Interface

```typescript
interface CantonFairPackage {
  id: string;
  packageName: string;
  days: number;
  nights: number;
  amount: number;
  dateStart: string;
  dateEnd: string;
  description: string;
  groupDetails: GroupDetails;
  hotelDetails: HotelDetail[];
  tourSummary: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  images: string[];
  additionalInfo?: {
    highlights: string[];
    fairDetails: {
      exhibitionDates: string;
      timings: string;
      venue: string;
      address: string;
      focus: string[];
    };
    accommodation: object;
    transportation: object;
    visaInfo: object;
  };
  departureDates?: DepartureDate[];
  experiences: Experience[];
  flightDetails?: FlightDetails;
  singleRoomSupplement?: number;
}
```

## Routes

- `/canton-fair` - Main packages listing page
- `/canton-fair/canton-fair-phase-1-delhi-indigo` - Example package detail page

## Key Features

1. **Trade Fair Focus**: Designed specifically for business travelers attending Canton Fair
2. **Complete Package**: Includes flights, accommodation, meals, and exhibition access
3. **Exhibition Information**: Detailed fair dates, timings, venue, and product focus
4. **Flight Details**: Indigo Airlines flights from Delhi via Hong Kong
5. **Business Amenities**: Focus on networking, meetings, and product sourcing
6. **Pearl River Cruise**: Evening entertainment included
7. **Indian Cuisine**: Indian dinner arrangements for comfort

## Styling

- Uses Tailwind CSS for styling
- Red and orange gradient theme (matching trade fair/business theme)
- Framer Motion for animations
- Responsive design for all devices
- Consistent with Japan package design patterns

## Images

All images are sourced from `/UGCImages/china/horizontal/` directory:

- 1.webp through 6.webp used for various sections
- Optimized WebP format for performance

## Dependencies

- Next.js 14+ (App Router)
- React 18+
- Framer Motion (animations)
- Tailwind CSS (styling)
- React Icons (icons)
- Lucide React (additional icons)

## SEO

- Comprehensive metadata in layout.tsx
- Optimized titles and descriptions
- OpenGraph tags for social sharing
- Targeted keywords for trade fair searches

## Usage

To add a new Canton Fair package:

1. Add package data to `data.ts` in the `cantonFairPackages` object
2. Follow the existing structure with all required fields
3. Ensure unique `id` for routing
4. Add appropriate images to the images array
5. Package will automatically appear on the listing page

## Notes

- Single room supplement: ₹21,500 extra
- Visa required for Indian citizens
- Focus on Phase 1: Electronics, Machinery, Hardware, Building Materials
- Exhibition dates: October 15-19, 2025
- Flight route: Delhi → Hong Kong → Guangzhou
