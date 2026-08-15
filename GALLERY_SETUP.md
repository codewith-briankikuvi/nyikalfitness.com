# Gallery Setup Instructions

## Overview
The gallery uses a JSON-based system for dynamic content. Simply add your photos/videos to the public folder and update the JSON file to auto-generate gallery cards.

## Folder Structure
Create the following folder structure in your `public` directory:

```
public/
└── gallery/
    ├── training/
    ├── transformations/
    ├── boxing/
    └── events/
```

## Adding New Media

### Step 1: Add Files to Public Folder
1. Copy your photo or video to the appropriate category folder in `public/gallery/`
2. Rename the file to something descriptive (e.g., `client-transformation-john.jpg`)
3. For videos, ensure they are in a web-friendly format (MP4 recommended)
4. Large files (up to 100MB) are supported - just place them in the folder

### Step 2: Update gallery.json
Open `src/data/gallery.json` and add a new entry for your media:

```json
{
  "id": 9,
  "category": "Training",
  "type": "image",
  "title": "Your Media Title",
  "url": "/gallery/training/your-file-name.jpg"
}
```

**Important:**
- `id`: Must be unique (use the next number in sequence)
- `category`: Must match one of: Training, Transformations, Boxing, Events
- `type`: Use "image" for photos, "video" for videos
- `title`: Descriptive title for the media
- `url`: Path starting with `/gallery/` followed by category folder and filename

### Step 3: Save and Refresh
1. Save the JSON file
2. Refresh your browser
3. The new media will automatically appear in the gallery

## Categories
- **Training**: Workout sessions, exercises, training techniques
- **Transformations**: Before/after photos, client progress
- **Boxing**: Boxing training, sparring, techniques
- **Events**: Fitness events, competitions, gatherings

## Video Support
- Videos are fully supported
- Use MP4 format for best compatibility
- Large video files (up to 100MB) work fine
- Videos will auto-play in the lightbox with controls

## Example: Adding Multiple Photos
```json
[
  {
    "id": 10,
    "category": "Transformations",
    "type": "image",
    "title": "John's 3-Month Transformation",
    "url": "/gallery/transformations/john-3months.jpg"
  },
  {
    "id": 11,
    "category": "Transformations",
    "type": "image",
    "title": "Sarah's Weight Loss Journey",
    "url": "/gallery/transformations/sarah-weightloss.jpg"
  },
  {
    "id": 12,
    "category": "Boxing",
    "type": "video",
    "title": "Sparring Session Highlights",
    "url": "/gallery/boxing/sparring-highlights.mp4"
  }
]
```

## Tips
- Use descriptive filenames for easy management
- Keep file sizes reasonable for web performance
- Optimize images before uploading (use tools like TinyPNG)
- For videos, consider compression if files are very large
- The gallery automatically filters by category
- No limit on number of items per category

## Troubleshooting
- **Image not showing**: Check the URL path in JSON matches the actual file location
- **Video not playing**: Ensure it's in MP4 format
- **Category not filtering**: Verify category name matches exactly (case-sensitive)
