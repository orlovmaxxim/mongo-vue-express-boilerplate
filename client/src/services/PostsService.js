import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addPost (params) {
    return Api().post('posts', params)
  },
  editPost (params) {
    return Api().put(`posts/${params.id}`, params)
  },
  getPost (params) {
    return Api().get(`post/${params.id}`)
  },
  delPost (id) {
    return Api().delete(`posts/${id}`)
  }
}
