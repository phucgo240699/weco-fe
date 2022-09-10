import baseService from 'services/config/baseService'

const getAll = async () => {
  return baseService.getRequest('posts/getAll')
}

export default { getAll }