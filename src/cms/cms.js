import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import PostPreview from './preview-templates/PostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('post', PostPreview)



