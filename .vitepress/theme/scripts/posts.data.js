import {createContentLoader} from 'vitepress'
import {markdownToTxt} from 'markdown-to-txt';

export default createContentLoader(`posts/**/*.md`, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({url, frontmatter, excerpt}) => {
        let desc = excerpt
        if (excerpt.includes('<img')) {
          desc = markdownToTxt(excerpt.replace(/<img\s[^>]*>/g, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' '))
        }
        return {
          title: frontmatter.title,
          category: frontmatter.categories || [],
          tags: frontmatter.categories || [],
          url,
          excerpt: desc,
          date: formatDate(frontmatter.date),
          image: extractImagesFromHTML(excerpt),
        }
      })
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function extractImagesFromHTML(html) {
  const srcs = []
  if (!html) return ''
  if (html.includes('<img')) {
    const imgs = html.match(/<img[^>]+src="([^"]+)/ig)
    if (imgs) {
      srcs.push(...imgs.map(img => img.match(/<img[^>]+src="([^"]+)/)[1]))
    }
  }
  return srcs.length > 0 ? srcs[0] : ''
  // const parser = new DOMParser();
  // const doc = parser.parseFromString(html, 'text/html');
  // const images = doc.querySelectorAll('img')
  // const srcs = []
  // images.forEach(img => {
  //   srcs.push(img.getAttribute("src"))
  // })
  // return srcs;
}

function formatDate(raw) {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
