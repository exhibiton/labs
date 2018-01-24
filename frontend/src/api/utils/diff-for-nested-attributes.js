import { differenceBy, cloneDeep } from 'lodash'

// shallow (only 1 st level) nested attributes differ
// give it state before, after and list of fields which are nested (e.g. reservations
// for venues) and it will produce correct { venue: reservations_attributes } jazz
const diffForNestedAttributes = (before, after, listOfNestedAttributes) => {
  if (!before) {
    throw new Error("diffForNestedAttributes - first argument (before) can't be undefined. " +
    "If that\'s a process of a creation, provide empty hash explicitly")
  }
  // shallow merge all fields
  const result = { ...after }

  listOfNestedAttributes.forEach(attribute => {
    // no such attribute given
    if (!result[attribute]) {
      // TODO: do not show in production
      console.warn(`No attribute ${attribute} found while doing diffForNestedAttributes. ` +
        'If you wanted to delete all nested records provide an empty array. ' +
        'This warning is safe to ignore and should not be shown in production')
      return
    }

    // value is an array of "new state"
    const value = cloneDeep(result[attribute])

    // remove it from result
    delete result[attribute]

    // that new ones (without ID) will be created, so we're fine here
    // but need to add _destroy flag to those who are missing
    const attributeBefore = before[attribute] || []
    const difference = differenceBy(attributeBefore, value, 'id')

    difference.forEach(deletedEntry => {
      // mark it as deleted for rails
      value.push({
        id: deletedEntry.id,
        _destroy: true,
      })
    })

    result[`${attribute}_attributes`] = value
  })

  return result
}

export default diffForNestedAttributes
