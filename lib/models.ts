import mongoose from 'mongoose'

// Contributor Schema
const contributorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  githubUrl: { type: String, required: true },
  contributions: [{ type: String }],
})

// Project Schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  tags: [{ type: String }],
})

export const Contributor = mongoose.models.Contributor || mongoose.model('Contributor', contributorSchema)
export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)