import React from 'react';

const HeaderBox
  = ({
       type = 'title',
       title, subtext, user,
     }: HeaderBoxProps) => {
  return (
    <div className="header-box"><h1>        {title}
    </h1></div>
  );
};

export default HeaderBox;



