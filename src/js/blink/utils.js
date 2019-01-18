
import uuidV1 from './uuid'

function getUUID() {
  let uuid = localStorage.getItem('__blink_data_uuid_key') || null
  if (!uuid) {
      uuid = uuidV1.create().toString()
      localStorage.setItem('__blink_data_uuid_key', uuid)
  }
  return uuid
}

function getUserId() {
  return localStorage.getItem('__blink_data_user_id') || '-'
}

function getSunlandUserId() {
  return localStorage.getItem('__blink_data_sunland_user_id') || '-'
}


export default {
  getUUID: getUUID,
  getUserId: getUserId,
  getSunlandUserId: getSunlandUserId,
}
