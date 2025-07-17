export interface Notice {
  id: string
  seq: string
  no: number
  title: string
  department: string
  regDate: number
  hits: number
  corporation: string
  files: File[]
  contents: string[]
  link: string
}

export interface File {
  fileName: string
  fileLink: string
  fileId?: string
}
