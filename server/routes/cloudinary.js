import express from 'express'
import { uploadImage, uploadVideo, deleteMedia } from '../utils/cloudinary.js'

const router = express.Router()

// POST /api/cloudinary/image - Upload image
router.post('/image', async (req, res) => {
  try {
    const { image } = req.body
    
    if (!image) {
      return res.status(400).json({ error: 'No image data provided' })
    }

    const result = await uploadImage(image)
    res.status(200).json({ success: true, data: result })
  } catch (error) {
    console.error('Image upload error:', error)
    res.status(500).json({ error: 'Failed to upload image' })
  }
})

// POST /api/cloudinary/video - Upload video
router.post('/video', async (req, res) => {
  try {
    const { video } = req.body
    
    if (!video) {
      return res.status(400).json({ error: 'No video data provided' })
    }

    const result = await uploadVideo(video)
    res.status(200).json({ success: true, data: result })
  } catch (error) {
    console.error('Video upload error:', error)
    res.status(500).json({ error: 'Failed to upload video' })
  }
})

// DELETE /api/cloudinary/:publicId - Delete media
router.delete('/:publicId', async (req, res) => {
  try {
    const { publicId } = req.params
    
    if (!publicId) {
      return res.status(400).json({ error: 'No public ID provided' })
    }

    await deleteMedia(publicId)
    res.status(200).json({ success: true, message: 'Media deleted successfully' })
  } catch (error) {
    console.error('Media deletion error:', error)
    res.status(500).json({ error: 'Failed to delete media' })
  }
})

export default router
