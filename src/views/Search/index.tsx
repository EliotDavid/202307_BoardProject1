import React from 'react'
import './style.css';

export default function Search() {

  const[boardCount, setBoardCount] = useState<number>(0);
  useEffect(() => {
    setBoardCount(12);
  }, [])

  return (
    <div id='search-wrapper'>
      <div className='search-text-container'>
        <div className='search-text-emphasis'>{'안녕'}</div>
        <div className='search-text'>에 대한 검색결과입니다.</div>
        <div className='search-text-emphasis'>{12}</div>
      </div>
      <div className='search-container'>
        <div className='search-board-list'>
          
        </div>
        <div className='search-relation-box'>
          <div className='search-relation-card'> {/* */}
            <div className='search-relation-text'>관련 검색어</div>
            <div className='search-relation-list'></div>
          </div>
        </div>
      </div>
      <div className='search-pagination'></div>
    </div>
  )
}
