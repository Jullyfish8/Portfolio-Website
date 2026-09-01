# Julfendi Portfolio — Product Requirements Document

**Status:** Current implemented experience  
**Last updated:** 2 September 2026  
**Product surfaces:** Public portfolio and private admin workspace

## Problem Statement

Julfendi needs a portfolio that communicates a multidisciplinary practice across research, UI/UX design, and instructional design without feeling like a conventional scrolling résumé. The experience must establish a strong visual identity, make selected projects easy to explore in depth, express Julfendi’s design philosophy, and provide a direct path to collaboration.

The portfolio also needs to remain maintainable without editing source code. Julfendi needs a private workspace for creating and updating project articles, uploading project images, controlling how those images appear, linking to external work, and replacing the downloadable résumé.

## Solution

The product combines two connected experiences:

1. A cinematic public portfolio presented as four stacked, rounded “screen” sections: Home, Portfolio, About Me, and Work With Me.
2. An owner-only admin workspace for managing portfolio articles, project media, publication status, external links, and the current résumé.

The public experience uses a futuristic-but-nostalgic visual language: saturated section colors, glassmorphism controls, rounded black frames, editorial typography, layered carousel cards, and sticky screen transitions. The admin experience uses a darker “control room” treatment while retaining the same typography, rounded controls, purple accents, and clear visual hierarchy.

## User Stories

### Public portfolio

1. As a visitor, I want to understand Julfendi’s disciplines immediately, so that I can quickly decide whether the work is relevant to me.
2. As a visitor, I want to switch between Research, UI/UX Design, and Instructional Design, so that I can explore the discipline most relevant to my interests.
3. As a visitor, I want adjacent carousel cards to remain vaguely visible, so that the interface communicates that more content is available.
4. As a visitor, I want carousel arrows positioned at the sides and centered within their circular controls, so that navigation feels familiar and balanced.
5. As a visitor, I want discipline tabs to use text labels, so that their destinations are immediately understandable.
6. As a visitor, I want the primary project and résumé actions grouped beneath the discipline tabs, so that the next steps are easy to find.
7. As a visitor, I want the primary project button to be visually prominent and the résumé action secondary, so that the interface has a clear hierarchy.
8. As a visitor, I want the navigation to remain available while scrolling, so that I can move between major sections at any time.
9. As a visitor, I want the active navigation item to update as I enter a section, so that I always know where I am.
10. As a visitor, I want each major section to feel like a full television screen, so that the experience feels intentional rather than like a standard webpage.
11. As a visitor, I want the next section to slide over the current section and settle smoothly, so that moving through the site feels like turning pages in an interactive storybook.
12. As a visitor using reduced-motion settings, I want motion reduced without losing navigation or section structure, so that the site remains comfortable and usable.
13. As a visitor, I want selected projects and category filters inside the same rounded portfolio frame, so that the portfolio section reads as one coherent product surface.
14. As a visitor, I want to filter projects by All, UI/UX Design, Research, or Instructional Design, so that I can focus on relevant work.
15. As a visitor, I want to choose a project from the project index, so that I can load its article without leaving the portfolio section.
16. As a visitor, I want to see the project category, reading time, year, share action, and focus-view action before reading, so that I understand the article context and available controls.
17. As a visitor, I want a project overview after the cover image, so that I can quickly see Julfendi’s role, tools, institution, and timeline.
18. As a visitor, I want project images to gently zoom on hover, so that the reading experience feels responsive without becoming distracting.
19. As a visitor, I want the article’s optional sections to appear only when content exists, so that each case study has an appropriate structure.
20. As a visitor, I want project images to respect their chosen size and alignment, so that articles have intentional editorial layouts.
21. As a visitor, I want a project’s external link to be available when one is supplied, so that I can visit a live website, paper, or document.
22. As a visitor, I want Focus View to open as an overlay, so that I can concentrate on the article without losing the surrounding project index state.
23. As a visitor, I want to learn about Julfendi’s approach and interests, so that I understand the person and worldview behind the work.
24. As a visitor, I want the About Me section to contain a visual representation of Julfendi’s vision, so that the section communicates more than a biography.
25. As a visitor, I want to drag curiosity stickers around the wooden board, so that I can play with Julfendi’s recurring interests.
26. As a visitor, I want to combine compatible stickers with a puff animation, so that the board reveals meaningful intersections between nature, knowledge, AI, and conversation.
27. As a visitor, I want the resulting sticker to contain the visual elements of both inputs, so that the combination feels semantically meaningful.
28. As a visitor, I want the most recently moved sticker or note to appear on top, so that the board behaves like physical objects on a desk.
29. As a visitor, I want to unfold movable question notes, so that I can discover topics Julfendi is interested in discussing.
30. As a visitor, I want to reset the board, so that I can return all stickers and notes to their initial arrangement.
31. As a mobile visitor, I want the questions grouped beneath “Questions on my mind,” so that none of the notes are cropped outside the board.
32. As a potential collaborator, I want the Work With Me section to clearly state the kinds of opportunities Julfendi is open to, so that I can assess fit.
33. As a potential collaborator, I want to copy Julfendi’s email or open LinkedIn, so that I can make contact directly.
34. As a visitor, I want to download the latest résumé from the home screen, so that I receive current professional information.

### Private admin workspace

35. As Julfendi, I want the admin workspace to require authenticated private access, so that only I can manage portfolio content.
36. As Julfendi, I want to see the existing project list, so that I can choose an article to update.
37. As Julfendi, I want clicking a project to open its editor, so that editing is a direct continuation of project selection.
38. As Julfendi, I want to create a new project, so that the portfolio can grow over time.
39. As Julfendi, I want to edit the title, subtitle, category, year, role, timeline, institution, and tools, so that each project has complete overview information.
40. As Julfendi, I want to upload or replace a project cover image, so that every article has an appropriate visual introduction.
41. As Julfendi, I want to see a thumbnail of the current cover, so that I can verify the selected image before publishing.
42. As Julfendi, I want optional fields for Problem, Solution, Methodology, Findings, and Future Research, so that research and design projects can use different narrative structures.
43. As Julfendi, I want empty article sections to remain hidden publicly, so that incomplete or irrelevant headings never appear.
44. As Julfendi, I want to upload multiple images within every article section, so that evidence and process can be shown alongside the writing.
45. As Julfendi, I want thumbnails of every uploaded image, so that I can identify and manage media visually.
46. As Julfendi, I want to remove an uploaded image from a section, so that I can correct mistakes or revise the narrative.
47. As Julfendi, I want to set each image to Small, Medium, or Full width, so that I can create visual rhythm within an article.
48. As Julfendi, I want to align each image Left, Center, or Right, so that I can control its relationship to the paragraph content.
49. As Julfendi, I want image layout settings to persist with the project, so that the preview and public article remain consistent.
50. As Julfendi, I want to add link text and a URL, so that readers can visit a published website, paper, or document.
51. As Julfendi, I want to preview the full draft before publishing, so that I can review typography, media, overview information, optional sections, and links together.
52. As Julfendi, I want the preview to use the selected image sizes and positions, so that it accurately represents the public result.
53. As Julfendi, I want to save a project as a draft, so that unfinished work does not become public.
54. As Julfendi, I want to publish a project from the editor, so that saved changes become available to the public portfolio.
55. As Julfendi, I want to upload a replacement résumé PDF, so that the public download always serves the latest version.
56. As Julfendi, I want the résumé URL to remain stable after replacement, so that no public button or previously shared link needs updating.
57. As Julfendi, I want clear saving and uploading feedback, so that I know whether an operation succeeded or failed.
58. As Julfendi, I want the editor to remain usable on smaller screens, so that minor updates are possible without a desktop computer.

## Implementation Decisions

### Public experience

- The public portfolio is a single-page experience with four section anchors: Home, Portfolio, About Me, and Work With Me.
- Each main section is a viewport-height sticky screen with consistent rounded framing and increasing layer order.
- Section settling uses a controlled ease-out animation after the user’s scroll gesture ends. A new wheel or touch gesture cancels the settling animation immediately.
- Native scroll snapping remains a proximity fallback rather than the primary motion controller.
- Navigation highlighting is derived from scroll position rather than intersection ratio because sticky screens overlap within the viewport.
- Portfolio articles load inside the portfolio screen instead of navigating to separate pages.
- Project category filtering and project selection retain the current article-reader context.
- Focus View uses a modal-like overlay and hides the project selector without changing the selected project.
- Published project records override the initial portfolio examples. Initial examples remain available as a resilient fallback when no saved records exist.
- Optional article sections are rendered in their defined narrative order and omitted when both their text and media are empty.
- Article images store a stable file URL, size setting, and alignment setting.
- Image size options are Small, Medium, and Full width. Alignment options are Left, Center, and Right.
- The About Me board maintains independent draggable state for stickers and notes. The last interacted object receives the highest stacking layer.
- Sticker combinations follow a fixed recipe matrix. Successful combinations remove the inputs and create one combined sticker after a puff transition.
- The Work With Me section uses a full light-blue, purple, and pink background field with minimal direct-contact controls.
- The résumé button points to a stable download endpoint rather than a versioned filename.

### Admin experience

- The admin workspace uses the platform-provided authenticated-user identity and the site’s owner-only access policy.
- The project list is the entry point to editing. Selecting a project opens an editor in the same admin surface.
- Project text and configuration are stored as durable structured records.
- Uploaded cover images, article images, and the résumé are stored as durable file objects rather than embedded in the database.
- Each project record stores its publication status, basic metadata, cover reference, optional article-section content, image layout settings, and external link.
- Draft Preview is a modal overlay generated from the current unsaved editor state. Previewing does not publish or automatically save the project.
- The project editor provides separate Save Draft and Publish actions.
- A newly created project starts as a draft with empty optional sections.
- Existing image-only records without layout metadata are normalized to Full width and Center alignment for backward compatibility.
- The résumé upload accepts PDF files and replaces a stable latest-résumé object.
- Public project media uses long-lived caching because uploaded project images receive unique keys. The résumé uses no-cache behavior because its stable URL may serve a replacement file.

### Responsive and accessibility decisions

- Desktop navigation uses a sticky glassmorphism capsule; mobile navigation reduces visual density.
- Portfolio and About Me can scroll internally when their content is taller than a viewport-height screen.
- Mobile board layout reserves a complete lower area for the four discussion notes.
- Buttons and interactive controls use descriptive labels or accessible names.
- Dialog-like Focus View and Draft Preview surfaces are visually separated overlays.
- Reduced-motion preferences disable nonessential easing and transitions while preserving screen navigation.

## Testing Decisions

Testing should prioritize observable user behavior rather than component internals.

1. **Public navigation seam:** verify that scrolling and navigation links settle on the correct section and update the highlighted navigation item.
2. **Carousel seam:** verify discipline selection through text tabs, side arrows, keyboard focus, and touch gestures.
3. **Portfolio reading seam:** verify project filtering, project selection, share behavior, article scrolling, Focus View, and optional-section rendering.
4. **Published-content seam:** save a draft, confirm it is absent publicly, publish it, and confirm its metadata, sections, media layouts, and external link appear publicly.
5. **Media seam:** upload multiple images, verify thumbnails, change size and alignment, remove an image, save, reload, and confirm persistence.
6. **Preview seam:** modify unsaved fields, open Draft Preview, and confirm that the preview reflects current values without changing the public article.
7. **Résumé seam:** upload a PDF, request the stable résumé URL, replace the PDF, and confirm the same URL returns the replacement.
8. **Authorization seam:** confirm unauthenticated write requests are rejected and the private admin page requires sign-in.
9. **About-board seam:** test dragging, layer ordering, valid combinations, invalid combinations, note expansion, reset behavior, and mobile note placement.
10. **Responsive seam:** test representative desktop, tablet, and mobile viewport widths for clipping, internal scrolling, readable text, and reachable controls.
11. **Accessibility seam:** test visible keyboard focus, control names, modal closing, reduced motion, and sensible reading order.
12. **Failure seam:** simulate failed saves and uploads and confirm the admin workspace communicates failure without discarding the active draft.

The project currently relies primarily on production builds and manual interaction checks. The highest-value future automated coverage is browser-level testing of the admin-to-public publication flow because it crosses authentication, structured storage, file storage, and public rendering.

## Out of Scope

- Multi-user editorial roles or approval workflows.
- Rich-text formatting beyond section text, images, and external links.
- Drag-and-drop reordering of article sections or images.
- Image cropping, focal-point selection, filters, or destructive image editing.
- Automatic image compression or responsive art direction.
- Version history, rollback, scheduled publishing, or autosave.
- Project deletion, duplication, or archive-management interfaces beyond the stored status model.
- Search-engine-visible standalone routes for individual project articles.
- Visitor accounts, comments, likes, analytics dashboards, or newsletter subscriptions.
- Automated résumé parsing or résumé content editing within the admin workspace.
- A general-purpose media library independent from project editing.

## Further Notes

- The public experience intentionally prioritizes an immersive screen-to-screen story over conventional document scrolling.
- The visual system should continue using Arial for interface and body text, Lobster for selected expressive phrases, rounded black frames, glassmorphism controls, and the established blue, purple, and pink section palette.
- “Selected projects” is intentionally larger than individual article titles to preserve section hierarchy.
- Body text and label controls should continue using the same base type scale unless a later accessibility review requires adjustment.
- The PRD describes the implemented product as of the date above. Future design changes should update this file in the same change so it remains the canonical description of the live experience.
