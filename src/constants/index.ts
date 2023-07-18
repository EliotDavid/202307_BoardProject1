export enum INPUT_ICON {
  ON = 'on',
  OFF = 'off',
  ARROW = 'arrow'
};

export const emailPattern = /^[A-Za-z0-9]*@([-.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
export const telNumberPattern = /^[0-9]{10,11}$/;

export const COUNT_BY_PAGE = 5; // 1페이지에 5개
export const PAGE_BY_SECTION = 10; // 이건 뭘 의미하는거지?
export const COUNT_BY_SECTION = COUNT_BY_PAGE * PAGE_BY_SECTION; // 이건 뭘 의미하는거지?