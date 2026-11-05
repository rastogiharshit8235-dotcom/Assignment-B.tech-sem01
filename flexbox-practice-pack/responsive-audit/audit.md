
# Responsive Audit Report

## Project
Leaf & Bean Cafe Website

## Screen Sizes Tested

1. Desktop - 1200px
2. Tablet - 768px
3. Mobile - 375px

## Problems Found and Fixes

### 1. Image Overflow
Problem:
Images were overflowing on smaller screens.

Fix:
Used max-width: 100%, height: auto.

### 2. Navigation Overflow
Problem:
Navigation links were running off the mobile screen.

Fix:
Used flex-wrap: wrap and adjusted the gap.

### 3. Cards Too Narrow
Problem:
Cards were too narrow on tablet screens.

Fix:
Changed the card layout to a two-column grid.

### 4. Mobile Layout
Problem:
The desktop layout did not fit mobile screens.

Fix:
Used media queries at 768px and 480px.

### 5. Buttons Too Close
Problem:
Buttons and links had insufficient spacing.

Fix:
Increased padding and gap.

## Media Queries Used

@media (max-width: 768px)

@media (max-width: 480px)

## Result

The website is responsive and works on
desktop, tablet and mobile screens.
