# Testing Guide for Canton Fair Route

## Quick Test Commands

### 1. Start Development Server

```bash
cd /c/Users/soura/Desktop/td/11aug/frontendTruedeal
npm run dev
```

### 2. Access the Routes

**Main Package Listing:**

```
http://localhost:3000/canton-fair
```

**Package Detail Page:**

```
http://localhost:3000/canton-fair/canton-fair-phase-1-delhi-indigo
```

## What to Test

### Main Page (`/canton-fair`)

✅ **Hero Section**

- [ ] Hero image loads correctly
- [ ] Title and subtitle are visible
- [ ] Gradient overlay displays properly
- [ ] Responsive on mobile and desktop

✅ **Fair Information Banner**

- [ ] Exhibition dates display (October 15-19, 2025)
- [ ] Timings show correctly (09:30 AM - 06:00 PM)
- [ ] Venue information is visible
- [ ] Icons render properly

✅ **Package Cards**

- [ ] Package card displays with image
- [ ] Price shows correctly (₹45,000)
- [ ] Duration shows (5D/4N)
- [ ] "View Details" and "Enquire Now" buttons work
- [ ] Hover effects work smoothly
- [ ] Mobile scroll works horizontally

✅ **Highlights Section**

- [ ] All 6 highlight cards display
- [ ] Images load properly
- [ ] Hover effects reveal descriptions
- [ ] Responsive grid layout works

✅ **FAQ Section**

- [ ] FAQ items expand/collapse on click
- [ ] Content is readable
- [ ] Icons change on expand/collapse

✅ **Booking Modal**

- [ ] Opens when "Enquire Now" is clicked
- [ ] Form fields are functional
- [ ] Can be closed properly

### Detail Page (`/canton-fair/canton-fair-phase-1-delhi-indigo`)

✅ **Hero Section**

- [ ] Package-specific image loads
- [ ] Package name displays correctly
- [ ] Duration, location, and dates show
- [ ] Gradient overlay works

✅ **Sticky Booking Bar**

- [ ] Stays at top when scrolling
- [ ] Price displays (₹45,000)
- [ ] "Book Now" button is clickable
- [ ] Responsive on mobile

✅ **Overview Section**

- [ ] Description text displays
- [ ] "Read More" toggle works (if text is long)
- [ ] Card styling is consistent

✅ **Quick Facts**

- [ ] All 4 facts display with icons
- [ ] Grid layout is responsive
- [ ] Information is accurate

✅ **Exhibition Details**

- [ ] Exhibition dates show correctly
- [ ] Timings are visible
- [ ] Venue and address display
- [ ] Product focus tags render
- [ ] Red/orange gradient background works

✅ **Day-by-Day Itinerary**

- [ ] Day chips navigation works
- [ ] Click on day number scrolls to that day
- [ ] Expand/collapse functionality works
- [ ] Images load for each day
- [ ] Activities list displays correctly
- [ ] Selected day highlighting works

✅ **Inclusions/Exclusions**

- [ ] Two-column layout on desktop
- [ ] Check icons for inclusions (green)
- [ ] X icons for exclusions (red)
- [ ] All items are readable
- [ ] Single column on mobile

✅ **Flight Details**

- [ ] Airline information shows
- [ ] Flight route displays
- [ ] Individual flight cards show flight numbers
- [ ] Departure/arrival times are correct
- [ ] Blue theme styling works
- [ ] Plane icons display

✅ **Hotel Details**

- [ ] Hotel name and city display
- [ ] Description shows
- [ ] Distance from venue is visible (22 KMs)
- [ ] Single room supplement info shows

✅ **FAQ Section**

- [ ] All 5 FAQs display
- [ ] Expand/collapse works independently
- [ ] Content is readable
- [ ] Styling is consistent

✅ **Sidebar**

- [ ] Sticky positioning works
- [ ] Price card displays correctly
- [ ] "Book This Package" button works
- [ ] Package highlights list shows
- [ ] Contact card displays
- [ ] Links work properly

## Browser Testing

Test in the following browsers:

- [ ] Chrome (Desktop)
- [ ] Chrome (Mobile)
- [ ] Firefox
- [ ] Safari (Desktop)
- [ ] Safari (iOS)
- [ ] Edge

## Device Testing

Test on these device sizes:

- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile (390px - iPhone 12 Pro)
- [ ] Tablet (768px - iPad)
- [ ] Tablet (1024px - iPad Pro)
- [ ] Desktop (1280px)
- [ ] Desktop (1920px)

## Performance Checks

- [ ] Initial page load < 3 seconds
- [ ] Images lazy load properly
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Smooth animations
- [ ] No layout shifts

## Functional Testing

### Navigation

- [ ] Can navigate from main page to detail page
- [ ] Back button works correctly
- [ ] Direct URL access works

### Forms & Modals

- [ ] Booking modal opens from both pages
- [ ] Form validation works
- [ ] Modal closes properly
- [ ] No scrolling issues when modal is open

### Interactions

- [ ] All buttons are clickable
- [ ] Hover effects work
- [ ] Accordion expansions are smooth
- [ ] Scroll to section works
- [ ] Mobile touch interactions work

## Common Issues to Check

1. **Images Not Loading**

   - Check if images exist in `/public/UGCImages/china/horizontal/`
   - Verify image paths in data.ts

2. **TypeScript Errors**

   - Run: `npm run build` to check for type errors
   - Verify all interfaces match the data structure

3. **Layout Issues**

   - Check Tailwind classes
   - Verify responsive breakpoints
   - Test on different screen sizes

4. **Animation Issues**
   - Check Framer Motion imports
   - Verify animation configurations
   - Test on different devices

## Expected Results

### Main Page

- Fast loading
- Smooth scrolling
- Interactive cards
- Working booking flow
- Mobile-friendly

### Detail Page

- Comprehensive information
- Easy navigation between days
- Clear pricing
- Functional booking
- Professional appearance

## Debugging Tips

### Check Console

```javascript
// Open browser console (F12) and look for:
// ❌ Red errors
// ⚠️ Yellow warnings
// ℹ️ Info messages
```

### Check Network Tab

```
// In browser DevTools > Network tab:
// - Verify all images load (200 status)
// - Check for failed requests (404, 500)
// - Monitor load times
```

### Check React DevTools

```
// Install React DevTools extension
// - Inspect component hierarchy
// - Check props and state
// - Verify re-renders
```

## Success Criteria

✅ Page loads without errors
✅ All content is visible and readable
✅ All interactions work smoothly
✅ Mobile experience is excellent
✅ Booking flow is seamless
✅ Performance is optimal
✅ Design is consistent with Japan pages

## Report Issues

If you find any issues, note:

1. What were you doing?
2. What did you expect to happen?
3. What actually happened?
4. Which browser/device?
5. Any console errors?

---

**Ready to Test!** 🚀

Start the dev server and visit `/canton-fair` to begin testing!
