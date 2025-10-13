# 🎯 Canton Fair 2025 - Quick Reference

## 📍 Routes

- **Main Page:** `/canton-fair`
- **Package Detail:** `/canton-fair/canton-fair-phase-1-delhi-indigo`

## 📦 Package Overview

| Detail                | Value                                   |
| --------------------- | --------------------------------------- |
| **Duration**          | 5 Days / 4 Nights                       |
| **Dates**             | October 14-18, 2025                     |
| **Price**             | ₹45,000 per person                      |
| **Exhibition**        | October 15-19, 2025                     |
| **Timings**           | 09:30 AM - 06:00 PM                     |
| **Location**          | Guangzhou, China                        |
| **Hotel**             | Days Inn by Wyndham (22 KMs from venue) |
| **Airline**           | Indigo Airlines via Hong Kong           |
| **Single Supplement** | ₹21,500 extra                           |

## ✈️ Flight Schedule

### Outbound

- **Flight:** 6E 1707
- **Route:** DEL 05:30 → HKG 13:50
- **Date:** 14-Oct-2025

### Return

- **Flight:** 6E 1708
- **Route:** HKG 15:30 → DEL 19:00
- **Date:** 18-Oct-2025

## 📅 Day-by-Day Itinerary

| Day | Date   | Highlight                                        |
| --- | ------ | ------------------------------------------------ |
| 1   | Oct 14 | Departure Delhi → Hong Kong → Guangzhou          |
| 2   | Oct 15 | Canton Fair Day 1 - Electronics & Consumer Goods |
| 3   | Oct 16 | Canton Fair Day 2 - Machinery & Hardware         |
| 4   | Oct 17 | Canton Fair Day 3 + Pearl River Cruise           |
| 5   | Oct 18 | Departure to Delhi                               |

## 🏢 Exhibition Focus

1. Electronics
2. Household Electrical Appliances
3. Vehicles and Spare Parts
4. Machinery
5. Hardware Tools
6. Building Materials

## ✅ What's Included

- ✈️ Round-trip flights (DEL-HKG-Guangzhou)
- 🏨 4 nights accommodation
- 🍳 Daily breakfast
- 🍛 Indian dinner
- 🚗 Airport transfers
- 🚢 Pearl River Cruise
- 🎫 Exhibition entry passes
- 💰 All taxes

## ❌ What's Not Included

- Visa fees and processing
- Lunch and beverages
- Personal expenses
- Travel insurance
- Tips and gratuities
- Single room supplement (₹21,500)

## 📁 File Structure

```
src/app/canton-fair/
├── page.tsx                 # Main listing
├── layout.tsx              # SEO metadata
├── data.ts                 # Package data
├── README.md               # Documentation
├── IMPLEMENTATION_SUMMARY.md
├── TESTING_GUIDE.md
├── QUICK_REFERENCE.md      # This file
└── [id]/
    └── page.tsx            # Detail page
```

## 🎨 Design Theme

- **Primary:** Red (#DC2626)
- **Secondary:** Orange (#F97316)
- **Accent:** Yellow for highlights
- **Style:** Professional business travel aesthetic

## 📸 Images Used

All from: `/public/UGCImages/china/horizontal/`

- 1.webp - Hero & main images
- 2.webp - Day 2 & highlights
- 3.webp - Day 3 & highlights
- 4.webp - Day 4 & highlights
- 5.webp - Day 5 & highlights
- 6.webp - Highlights section

## 🔧 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons + Lucide React
- **Images:** Next.js Image component

## 🚀 Getting Started

```bash
# Start dev server
npm run dev

# Visit main page
http://localhost:3000/canton-fair

# Visit package detail
http://localhost:3000/canton-fair/canton-fair-phase-1-delhi-indigo
```

## 📝 Key Features

1. ✅ Interactive package cards
2. ✅ Day-by-day expandable itinerary
3. ✅ Exhibition details section
4. ✅ Flight information display
5. ✅ Hotel details with distance
6. ✅ FAQ sections
7. ✅ Booking modal integration
8. ✅ Mobile-responsive design
9. ✅ SEO optimized
10. ✅ Performance optimized

## 🔗 Integration Points

Add to navigation:

```tsx
<Link href="/canton-fair">Canton Fair 2025</Link>
```

Feature on homepage:

```tsx
// Business Travel section
// Trade Fairs section
// Featured Packages carousel
```

## 💡 Quick Tips

- All data is in `data.ts` - easy to update
- Add new packages by extending the `cantonFairPackages` object
- Images are optimized WebP format
- Fully type-safe with TypeScript
- Consistent with Japan package structure

## 📊 SEO Keywords

- Canton Fair 2025
- China Trade Fair
- Guangzhou Exhibition
- Canton Fair Phase 1
- Trade Fair Packages
- China Business Tour
- Electronics Exhibition
- Canton Fair from Delhi

## 🎯 Target Audience

- Business travelers
- Importers and exporters
- Manufacturers
- Product sourcers
- B2B buyers
- Trade fair attendees

## 📞 Support

For questions or issues:

1. Check TESTING_GUIDE.md
2. Review IMPLEMENTATION_SUMMARY.md
3. Refer to README.md for detailed docs

---

**Status:** ✅ Ready for Production

**Version:** 1.0.0

**Last Updated:** October 13, 2025
