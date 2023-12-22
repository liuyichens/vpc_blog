// const posts = import.meta.glob('./posts/**/*.md', {eager: true, as: 'url'})
// console.log(posts)

export default {
  paths() {

    return [
      {params: {page: 1}},
      {params: {page: 2}}
    ]
  }
}
