import baseService from 'services/config/baseService'

const getAll = async ({ headers } : { headers?: any }) => {
  return baseService.getRequest({ url: 'posts/getAll', headers })
}

const postsServices = { getAll }

export default postsServices;
