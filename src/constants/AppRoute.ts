export const AppRoute = {
  /**
   * page : home
   *
   * path : /
   *
   * description : 임대공고 리스트 페이지
   */
  HOME: '/home',

  /**
   * page : notice
   *
   * path : /notice
   *
   * description : 임대공고 상세 페이지
   *
   * parameter(*required) : id
   */
  NOTICE: '/notice',

  /**
   * page : saved
   *
   * path : /saved
   *
   * description : 저장된 공고 페이지
   */
  SAVED: '/saved',

  /**
   * page : profile
   *
   * path : /profile
   *
   * description : 내정보 페이지
   */
  PROFILE: '/profile',

  /**
   * page : viewer
   *
   * path : /viewer
   *
   * description : 문서 뷰어 페이지
   */
  VIEWER: '/viewer',
} as const
