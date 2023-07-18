import { COUNT_BY_PAGE, COUNT_BY_SECTION, PAGE_BY_SECTION } from 'src/constants';

export const getPagination = (boardCount: number, currentSection:number) => {
    const section = Math.ceil(boardCount / COUNT_BY_SECTION);
    const totalPageCount = Math.ceil(boardCount / COUNT_BY_PAGE);
    const maxPage = totalPageCount >= currentSection * PAGE_BY_SECTION ? 
        currentSection * PAGE_BY_SECTION : totalPageCount;
    const minPage = 10 * (currentSection - 1) + 1;
    
    return { section, maxPage, minPage };
    return { section, maxPage, minPage, totalPageCount };
    }


/*
const section = Math.ceil(boardCount / COUNT_BY_SECTION); // 72에 대한 섹션을 구하려고 하는 식
setTotalSection(section);

const totalPageCount = boardCount / COUNT_BY_PAGE; // 이건 뭘 의미하는거지?
console.log(totalPageCount);
const maxPage = totalPageCount >= currentSection * PAGE_BY_SECTION ? currentSection * PAGE_BY_SECTION : totalPageCount; // 이건 뭘 의미하는거지? 
const minPage = 10 * (currentSection -1) +1;

return{section, maxPage, minPage};
}
*/

