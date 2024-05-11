import type { GenerateSlugTypes } from './generate-slug.util.types'

/**
 * Generate slug from string
 * @param value string
 * @returns string
 */
export const generateSlug: GenerateSlugTypes = value => {
  return value
    .toLowerCase()
    .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
}
