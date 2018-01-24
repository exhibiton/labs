import _ from 'lodash'

// doesn't detect circular dependencies, be careful
const traverse = (formData, input, key) => {
  _.each(input, (v, k) => {
    const newKey = `${key}[${k}]`

    if (_.isPlainObject(v) || _.isArray(v)) {
      traverse(formData, v, newKey)
    }
    else if (typeof v !== 'undefined' && v !== null) {
      formData.append(newKey, v)
    }
  })
}

const hashToFormData = (hash, rootNodeName) => {
  const formData = new FormData()

  traverse(formData, hash, rootNodeName)
  return formData
}

export default hashToFormData
