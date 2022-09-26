import baseService from 'services/config/baseService'

const getAll = async () => {
  return baseService.getRequest({ url: 'posts/getAll' })
}

const postsServices = { getAll }

export default postsServices;
