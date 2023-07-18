import React, { useState, useEffect } from 'react'
import './style.css';
import Top3ListItem from 'src/components/Top3ListItem';
import { CurrentListResponseDto, Top3ListResponseDto } from 'src/interfaces/response';
//import { currentBoardListMock, top3ListMock } from 'src/mocks';
import BoardListItem from 'src/components/BoardListItem';
import { useNavigate } from 'react-router-dom';
import { currentBoardListMock, popularWordListMock, top3ListMock } from 'src/mocks';
import { COUNT_BY_PAGE, COUNT_BY_SECTION, PAGE_BY_SECTION } from 'src/constants';
import { getPagination } from 'src/utils';

export default function Main() {

  const navigator = useNavigate(); // * 이동할 수 있도록 만들어줌 

  const MainTop = () => {

    const [top3List, setTop3List] = useState<Top3ListResponseDto[]>([]);

    useEffect(() => {
      if (!top3List.length) setTop3List(top3ListMock);
    }, []);

    return (
      <div className='main-top'>
        <div className='main-top-text-container'>
          <div className='main-top-text'>Hoons board에서</div>
          <div className='main-top-text'>다양한 이야기를 나눠보세요.</div>
        </div>
        <div className='main-top-3-container'>
          <div className='main-top-3-text'>주간 TOP 3 게시글</div>
          <div className='main-top-3-list'>
            {top3List.map((item) => (<Top3ListItem item={item} />))}
          </div>
        </div>
      </div>
    ) 
  }

  const MainBottom = () => {

    const [currentList, setCurrentList] = useState<CurrentListResponseDto[]>([]);
    const [popularList, setPopularList] = useState<string[]>([]);
    
    const[currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
    const[currentSection, setCurrentSection] = useState<number>(1); // 전체페이지 
    const[totalPage, setTotalPage] = useState<number[]>([]); // 전체페이지 
    const[totalSection, setTotalSection] = useState<number>(1); // 전체페이지 

    const[totalPageCount, setTotalPageCount] = useState<number>(0);
    const[minPage, setMinPage] = useState<number>(0);
    const[maxPage, setMaxPage] = useState<number>(0);

    
    const onPopularClickHandler = (word: string) => {
      navigator(`/search/${word}`) // $쳐서 특정한 값을 받아올수 있도록 // 받아온 매개변수를 중괄호 안에다 넣어준다
    }

    const onPageClickHandler = (page: number) => {
      setCurrentPage(page);
    }

    const onPreviousClickHandler = () => {
      // 한 페이지씩 이동 
      //if(currentPage != 1) setCurrentPage(currentPage - 1); // 만약 3번 이었는데 이전 페이지를 누르면 2페이지로 이동하게 동작
      // 현재 페이지가 1이 아니라면 이라는 뜻

      // 섹션 이동
      //if(currentSection != 1) setCurrentSection(currentSection -1); // 이게 뭔 뜻이지

      // 한 페이지씩 이동 + 섹션 이동 
      if(currentPage == 1) return; // 현재 페이지가 만약에 1이라면 밑엑있는걸 실행하지마라는 뜻 
      if(currentPage == minPage) setCurrentList
    }

    const onNextClickHandler = () => { 
      // 한 페이지씩 이동
      //if(currentPage != totalPage.length) setCurrentPage(currentPage + 1);
    
      // 섹션 이동
      //if(currentSection != totalSection) setCurrentSection(currentSection + 1); // 이게 뭔 뜻이지
      
      // 한 페이지씩 이동 + 섹션 이동 
      if(currentPage == totalPageCount) return; // 총 15페이지중에서 현재페이지가 15페이지면 다음 페이지로 이동이 안되는 동작이 안되는걸 해주려고 이걸 쓴거라고함
      if(currentPage == maxPage) setCurrentSection(currentSection + 1);
      setCurrentPage(currentPage + 1);


    }


    useEffect(() => {

      console.log(currentSection);

      const boardCount = 72; // 게시물 총량 // 50일때는 섹션이 왜 하나 나오노? 
      const {section, minPage, maxPage, } = getPagination(boardCount, currentSection);
      setTotalSection(section);
      setMinPage(maxPage);
      setMaxPage(maxPage);
      setTotalPageCount(totalPageCount);

      /* 
      const section = Math.ceil(boardCount / COUNT_BY_SECTION); // 72에 대한 섹션을 구하려고 하는 식
      setTotalSection(section);

      const totalPageCount = boardCount / COUNT_BY_PAGE; // 이건 뭘 의미하는거지?
      console.log(totalPageCount);
      const maxPage = totalPageCount >= currentSection * PAGE_BY_SECTION ? currentSection * PAGE_BY_SECTION : totalPageCount; // 이건 뭘 의미하는거지? 
      const minPage = 10 * (currentSection -1) +1;
      */

      // console.log(Math.ceil(s)); // s를 올림처리할거임 // 올림처리하면 2가 나옴

      if (!currentList.length) setCurrentList(currentBoardListMock);
      //if(!totalPage.length){ // totalPage의 길이가 0이라면 뜻
        const pageList = []; 
        for(let page = minPage; page <= maxPage; page++) pageList.push(page); // push해서 page를 집어넣을거임 pageList에
        setTotalPage(pageList); // 일단 임시데이털오 10을 넣어줬음 : 이말은 즉 전체페이지 10으로 잡아줌
    }, [currentSection]);

    useEffect(() => {
      if (!popularList.length) setPopularList(popularWordListMock);
    }, []);

    return (
      <div className='main-bottom'>
        <div className='main-bottom-text'>최신 게시물</div>
        <div className='main-bottom-container'>
          <div className='main-bottom-board-list'>
            {currentList.map((item) => (<BoardListItem item={item} />))}
          </div>
          <div className='main-bottom-popular-box'>
            <div className='main-bottom-popular-card'>
              <div className='main-bottom-popular-text'>인기 검색어</div>
              <div className='main-bottom-popular-list'>
                 {popularList.map((item) => (<span className='popular-chip' onClick={() => onPopularClickHandler(item)}>{item}</span>))}
              </div>
              {/* // 우리가 선택한 item이 선택한 경로로 이동? */} 
            </div>
          </div>
        </div>
        <div className='main-bottom-pagination'>
          {/* pagination 하는 방법 : 
          1. 전체 데이터를 가지고 있을 때
          2. 해당 페이지의 데이터만 가지고 있을 때 
              이렇게 두가지가 있음
         우리는 일단 해당 페이지의 데이터만 가지고 있을 때 : 
         우리가 가지고 있는 데이터를 먼저 파악해야됨
         - 게시물 리스트(Mock데이터로 가지고 있으니까 내비두면 됨) / 현재 페이지(상태로 만들어줌)가 몇 번째 페이지인지 알아야되고 전체페이지가 총 몇페이지가 있는지 알아야 함 */}
            <div className='pagination-button' onClick={onPreviousClickHandler}>
              <div className='pagination-left-icon'></div>
              <div className='pagination-button-text'>이전</div>
            </div>
            <div className='pagination-page'>{'\|'}</div>
            {totalPage.map((page) => (<div className={currentPage === page ? 'pagination-page-active' : 'pagination-page'} onClick={() => onPageClickHandler(page)}>{page}</div>))} {/* totalPage가 반복으로 돌면서 page를 출력을 함 */}
            <div className='pagination-page'>{'\|'}</div> {/*역슬래쉬가 무슨 뜻이지 여기서*/} 
            <div className='pagination-button' onClick={onNextClickHandler}>
              <div className='pagination-button-text'>다음</div>
              <div className='pagination-right-icon'></div>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div id='main-wrapper'>
      <MainTop />
      <MainBottom />
    </div>
  )
}
