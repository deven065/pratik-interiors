# Hero Background Video Guide

## 📹 Video Requirements

### Specifications
- **Duration**: 15-30 seconds (looping video)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Format**: MP4 (H.264 codec)
- **File Size**: < 5MB (optimized for web)
- **Frame Rate**: 24-30 fps
- **Aspect Ratio**: 16:9
- **Audio**: None (video will be muted)

### Content Guidelines
- **Style**: Elegant, slow-moving interior shots
- **Lighting**: Bright, natural lighting preferred
- **Motion**: Subtle camera movements (pans, dollys)
- **Focus**: Luxury interiors, modern design, clean spaces
- **Avoid**: Fast movements, busy scenes, text overlays

---

## 🎬 Recommended Video Sources

### Option 1: Pexels (Free, High Quality) ⭐ RECOMMENDED
**Best for interior design videos**

1. Visit: https://www.pexels.com/search/videos/luxury%20interior/
2. Search terms to try:
   - "luxury interior"
   - "modern house interior"
   - "living room design"
   - "elegant apartment"
   - "contemporary home"

**Top Picks:**
- Search: "luxury living room" - Multiple 4K options available
- Search: "modern apartment" - Great architectural videos
- Filter by: HD, Landscape orientation

**Download Steps:**
1. Find a video you like
2. Click on it to open
3. Click "Free Download"
4. Select "Full HD (1920x1080)" or "4K" if available
5. Save as `hero-background.mp4`

---

### Option 2: Pixabay (Free)

1. Visit: https://pixabay.com/videos/search/interior%20design/
2. Search: "luxury interior", "modern home", "elegant living room"
3. Download HD version
4. Rename to `hero-background.mp4`

---

### Option 3: Coverr (Free, Curated)

1. Visit: https://coverr.co/
2. Search: "interior" or browse categories
3. Download HD version
4. Quality is excellent and pre-optimized for web

---

### Option 4: Videvo (Free & Premium)

1. Visit: https://www.videvo.net/
2. Search: "interior design"
3. Filter: Free videos only
4. Download MP4 format

---

## 🎨 Specific Video Recommendations

### **BEST CHOICE - Pexels Videos:**

**Option A: Modern Luxury Living Room**
- URL: https://www.pexels.com/video/a-modern-living-room-8837260/
- Perfect for luxury portfolio
- Slow pan, great lighting

**Option B: Contemporary Apartment**
- URL: https://www.pexels.com/video/contemporary-apartment-interior-7534282/
- Clean, minimalist aesthetic
- Smooth camera movement

**Option C: Elegant Home Interior**
- URL: https://www.pexels.com/video/elegant-interior-design-5799517/
- Premium feel
- Natural lighting

---

## 🛠️ Video Optimization (Optional but Recommended)

If your downloaded video is too large (>5MB), compress it:

### Online Compression Tools:
1. **FreeConvert.com** (https://www.freeconvert.com/video-compressor)
   - Upload video
   - Target size: 3-5MB
   - Maintain quality: Medium to High

2. **Clideo** (https://clideo.com/compress-video)
   - Easy to use
   - Good compression ratio

3. **HandBrake** (Desktop software - Free)
   - Download: https://handbrake.fr/
   - Preset: "Web > Gmail Large 5 Minutes 720p30"
   - Adjust for shorter duration

### Compression Settings:
```
Codec: H.264
Resolution: 1920x1080 (or 1280x720 if file too large)
Bitrate: 2-4 Mbps
Frame rate: 24-30 fps
```

---

## 📥 Installation Steps

### 1. Download Video
Choose one of the options above and download the video

### 2. Rename File
Rename the downloaded video to: **`hero-background.mp4`**

### 3. Place in Project
Move the file to:
```
pratik-gupta-interiors/
  └── public/
      └── videos/
          └── hero-background.mp4  ← Place here
```

### 4. Verify Setup
The video should now play automatically on the homepage!

---

## 🎯 Quick Start (Fastest Method)

**Recommended Video for This Project:**

1. **Go to**: https://www.pexels.com/video/a-view-of-a-living-room-8837260/
   
2. **Click**: "Free Download" button

3. **Select**: "Full HD (1920 x 1080)"

4. **Rename**: to `hero-background.mp4`

5. **Move**: to `public/videos/` folder

6. **Refresh**: Your browser at http://localhost:3000

✅ **Done!** The video should now be playing in the background!

---

## 🔧 Troubleshooting

### Video not playing?
- Check file is named exactly: `hero-background.mp4`
- Verify file is in `public/videos/` folder
- Clear browser cache (Ctrl + Shift + R)
- Check browser console for errors

### Video too large/slow loading?
- Compress video using tools above
- Target file size: 3-5MB
- Reduce resolution to 1280x720 if needed

### Video shows but looks pixelated?
- Download higher quality version (Full HD or 4K)
- Check video bitrate (should be 2-4 Mbps minimum)

---

## 🎨 Alternative: Use Image Temporarily

If you want to launch quickly without video:

Edit `src/app/page.tsx` and change:
```tsx
<Hero useVideo={false} />
```

This will use the fallback image instead.

---

## 📝 Notes

- Video will autoplay, loop, and be muted (required for autoplay)
- Fallback image shows while video loads
- If video fails to load, image is used automatically
- Video is optimized for performance with lazy loading
- Mobile devices may show image instead of video (bandwidth saving)

---

**Need help?** Check the browser console for any error messages.
