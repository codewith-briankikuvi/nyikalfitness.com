import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Upload image
export const uploadImage = async (imageData) => {
  try {
    const result = await cloudinary.uploader.upload(imageData, {
      folder: 'nyikal-fitness',
      resource_type: 'image',
      transformation: [
        { quality: 'auto', fetch_format: 'auto' },
        { width: 1200, crop: 'limit' }
      ]
    })
    return result
  } catch (error) {
    console.error('Cloudinary image upload error:', error)
    throw error
  }
}

// Upload video
export const uploadVideo = async (videoData) => {
  try {
    const result = await cloudinary.uploader.upload(videoData, {
      folder: 'nyikal-fitness',
      resource_type: 'video',
      transformation: [
        { quality: 'auto' }
      ]
    })
    return result
  } catch (error) {
    console.error('Cloudinary video upload error:', error)
    throw error
  }
}

// Delete media
export const deleteMedia = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId)
    return result
  } catch (error) {
    console.error('Cloudinary deletion error:', error)
    throw error
  }
}

// Get optimized URL
export const getOptimizedUrl = (publicId, transformations = {}) => {
  const defaultTransformations = {
    quality: 'auto',
    fetch_format: 'auto',
    ...transformations
  }
  
  return cloudinary.url(publicId, {
    transformation: defaultTransformations
  })
}
