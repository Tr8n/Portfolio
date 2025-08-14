# How to Add Your Resume

## Option 1: Add to Public Folder (Recommended)

1. **Place your resume file** in the `prc/public/` folder
   - Name it: `Siddhant_Shukla_Resume.pdf` (or update the filename in `profile.json`)
   - Supported formats: PDF, DOC, DOCX

2. **Update profile.json** (if needed):
   ```json
   {
     "links": {
       "resume": "/Siddhant_Shukla_Resume.pdf"
     }
   }
   ```

## Option 2: Use External Link

1. **Upload to cloud storage** (Google Drive, Dropbox, etc.)
2. **Update profile.json**:
   ```json
   {
     "links": {
       "resume": "https://your-cloud-link.com/resume.pdf"
     }
   }
   ```

## Current Resume Links

Your resume is currently linked in:
- **Header Navigation**: "Resume" button in the top menu
- **Hero Section**: "Download Resume" button
- **Contact Section**: Available for download

## File Location

- **Current path**: `/Siddhant_Shukla_Resume.pdf`
- **Full path**: `prc/public/Siddhant_Shukla_Resume.pdf`

## Testing

After adding your resume:
1. Run `npm run dev`
2. Click the "Resume" button in the header
3. Verify the file downloads correctly

## Note

- Keep file size under 5MB for better user experience
- PDF format is recommended for professional appearance
- Ensure the file is accessible and not password-protected
