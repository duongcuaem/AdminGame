export const helpers = {
  generateError,
  generateString,
  parseAndMatchEntities,
  filterAddArray,
  filterDeleteArray,
  checkDuplicate,
  generateCode,
  flattenArray,
  filterArrayByReference,
  slugify,
}

/**biến code/slug thành chuỗi tiếng anh */
function slugify(string: any) {
  return string
    ? string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, (match: any) => (match === 'đ' ? 'd' : 'D'))
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    : ''
}
/** hàm dùng regex lọc lỗi từ backend */
function generateError(error: string) {
  const regexError = error.replace(/\s?\(\d+\)$/, '')
  const errorCodeMatch = regexError.match(/\((\d+)\)/)
  const errorCode = errorCodeMatch ? parseInt(errorCodeMatch[1], 10) : null
  let parttern1 = /(?:Unable to|Invalid argument) (.+)/
  const match1 = regexError.match(parttern1)
  if (match1) {
    return { object: match1[1].trim(), key: regexError.replace(match1[1], '').trim(), code: errorCode }
  }
  const pattern2 = /(.+?) (?:is|has|does|already) .+/
  const match2 = regexError.match(pattern2)
  if (match2) {
    return { object: match2[1].trim(), key: regexError.replace(match2[1], '').trim(), code: errorCode }
  }
  return { object: null, key: regexError.trim(), errorCode: null }
}

// xử lí lấy một field nào đó của thực thể sau đó nối bởi dấu nào đó
function generateString(sources: any[], field: string, symbol: string) {
  let featureString = ''
  for (let source of sources) {
    if (source.hasOwnProperty(field)) {
      if (featureString !== '') {
        featureString += symbol
      }
      featureString += source[field]
    }
  }
  return featureString
}

//// hàm dùng tách chuỗi và tìm phần tử thỏa mãn ( features....)
function parseAndMatchEntities(source: any[], field: string, symbol: string, stringMapping: string): any[] {
  const mappingArray = stringMapping.split(symbol).map(item => item.trim())
  const matchedEntities = []
  for (let entity of source) {
    if (entity.hasOwnProperty(field)) {
      if (mappingArray.includes(entity[field])) {
        matchedEntities.push(entity)
      }
    }
  }

  // Trả về mảng các thực thể khớp
  return matchedEntities
}

//hàm dùng để filter khi add các giá trị trùng nhau theo field(trường mong muốn so sánh)
//trong sourceArray(mảng thực thể khai báo) với referenceArray(mảng thực thể từ API trả về)
function filterAddArray(sourceArray: any[], referenceArray: any[], field: string): any[] {
  const result = []
  for (let item of sourceArray) {
    let found = false
    for (let item2 of referenceArray) {
      if (item.id === item2[field]) {
        found = true
        break
      }
    }
    if (!found) {
      result.push(item)
    }
  }
  return result
}

//hàm dùng để filter khi delete các giá trị trùng nhau theo field(trường mong muốn so sánh)
//trong sourceArray(mảng thực thể khai báo) với referenceArray(mảng thực thể từ API trả về)
function filterDeleteArray(sourceArray: any[], referenceArray: any[], field: string) {
  const result = []
  for (let item of sourceArray) {
    let found = false
    for (let item2 of referenceArray) {
      if (item.id === item2[field]) {
        found = true
        result.push(item2)
        break
      }
    }
  }
  return result
}

/** hàm này dùng để tìm các phần tử trùng cần lấy ra
 * ví dụ có mảng categories (1,2,3,4....) , mảng categoryRelations nhận từ api ({id:1, categoryId:1},{id:2, categoryId:2},...)
 * muốn lấy ra mảng category thỏa mãn
 */
function filterArrayByReference(sourceArray: any[], referenceArray: any[], referenceKey: string) {
  const referenceSet = new Set(referenceArray.map(item => item[referenceKey]))
  return sourceArray.filter(item => referenceSet.has(item.id))
}

//khoanh: hàm check trùng một field nào đó của thực thể, hàm sử dụng COM/SYSTEM
function checkDuplicate(sourceArray: any, referenceArray: any[], field: any) {
  let check
  if (field === 'code') {
    check = referenceArray.some(item => item[field]?.split('/').pop() === sourceArray[field])
  } else if (field === 'title') {
    check = referenceArray.some(item => item[field] === sourceArray[field].trim())
  } else {
    return false
  }
  return check
}

function generateCode(title: string): string {
  // Loại bỏ dấu tiếng Việt và khoảng trắng, chuyển thành chữ thường và thay thế dấu cách bằng dấu gạch ngang
  const withoutDiacritics = title
    ?.replace(/đ/gi, 'd')
    ?.normalize('NFD')
    ?.replace(/[\u0300-\u036f]/g, '')
    ?.trim()
  return withoutDiacritics?.toLowerCase()?.replace(/\s+/g, '-')
}

// hàm làm phẳng mảng có cấp children
function flattenArray(array: any[], field: any) {
  const result: any[] = []

  const flatten = (items: any) => {
    items.forEach((item: any) => {
      const { [field]: children, ...rest } = item
      result.push(rest)
      if (children && children.length > 0) {
        flatten(children)
      }
    })
  }

  flatten(array)
  return result
}

export default helpers
