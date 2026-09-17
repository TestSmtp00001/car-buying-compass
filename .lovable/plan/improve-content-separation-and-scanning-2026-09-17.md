# Improve content separation and scanning

## Goal
Turn each long page into a sequence of clearly bounded, single-purpose reading blocks so visitors can scan, pause, and understand one idea at a time.

## Changes
- Introduce a consistent editorial block treatment with a visible top label, concise heading, comfortable spacing, subtle border, and alternating neutral surfaces.
- Restructure the home story into distinct blocks for context, written evidence, delivery, response, chronology, and lessons.
- Present each buying-guide answer as its own self-contained block, preserving expandable detail and links to the related story event.
- Present each vehicle review and dealership stage as clearly separate blocks, while keeping vehicle opinions distinct from dealership conduct.
- Strengthen section transitions and mobile spacing without turning the site into a grid of decorative cards.

## Technical details
- Reuse semantic colour tokens in `src/styles.css` and add shared block utilities there.
- Update only the three content routes and shared presentation styles; content, navigation, URLs, and factual wording remain unchanged.
- Verify the resulting reading flow at phone and desktop widths, including expanded details.
