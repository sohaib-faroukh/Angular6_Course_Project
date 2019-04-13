export const Url: string = "http://w37575-237/ExamWebApp/"


var t = localStorage.getItem('Auth_token');



export const GetHeaders = {
  "content-type": "application/json",
  'Authorization': `Bearer ${t}`

}

export const PostHeaders = {
  "content-type": "application/json",
  'Authorization': `Bearer ${t}`
}
export const PutHeaders = {
  "content-type": "application/json",
  'Authorization': `Bearer ${t}`
}

export const DeleteHeaders = {
  "content-type": "application/json",
  'Authorization': `Bearer ${t}`

}

