import React from 'react';

const Todo4Paging = ({start, end, prev, next, movePage}) => {

    const pageArr = Array.from({length:(end-start +1)}, (v,i) => i+ start )

    const clickPage = (num) => {
        console.log(num)
        movePage(num)
    }

    return (
        <div>
            <ul style={{display:'flex', listStyle:'none'}}>
                {prev ? <li><h4 onClick={() => clickPage(start - 1)}>PREV</h4></li>:<></>}
                {pageArr.map(pageNum => <li key={pageNum} onClick={() => clickPage(pageNum)} ><h4>{pageNum}</h4></li>)}
                {next ? <li><h4  onClick={() => clickPage(end  + 1)} >NEXT</h4></li>:<></>}
            </ul>
        </div>
    );
};

export default Todo4Paging;