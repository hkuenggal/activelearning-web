# RoboArm Contest page maintenance

## Student question form

The production build can embed a Google Form in the Competition Q&A section.

1. Create a Google Form and link its responses to a Google Sheet.
2. Use the form's embed URL, ending in `viewform?embedded=true`.
3. Set `NEXT_PUBLIC_ROBOARM_QUESTION_FORM_URL` to that embed URL before building.
4. Optionally publish a read-only response sheet and set its URL as `NEXT_PUBLIC_ROBOARM_QUESTION_SHEET_URL`.

Because this website is a static export, the external Google Form stores submissions. Do not place a private editing URL or a sheet containing student-identifying information in either public variable.

## Publishing official answers

Edit `contestFaq` in `faq-data.ts`, then rebuild the website. Each entry controls the topic, question, official answer, and displayed update date in the spreadsheet-style Q&A board.
