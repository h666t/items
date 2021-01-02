

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
flex-direction: column;
margin-top: 20px;
>li{
border:1px solid rgba(0,0,0,0.25);
margin-bottom: 5px;
display: flex;
flex-direction: row;
padding: 10px;
 > a{
   margin-left: 10px;
   width: 30vw;
   display: flex;
   justify-content: flex-start;
 }
 >div{
   width: 30vw;
   display: flex;
   justify-content: flex-start;
 }
}
`;

type Props = {
  items: StateItem
}

const Items1: React.FC<Props> = (props) => {
  const [itemList, setItemList] = useState([] as StateItem[]);
  useEffect(() => {
    const result: StateItem[] = [];
    for (let key in props.items) {
      // @ts-ignore
      result.push(props.items[key]);
    }
    setItemList(i => result);
  }, []);
  return (
    <>
      <Ul>
        {itemList.map((i) => {
          return <li key={i.name}>
            <div>{i.name}</div>
            {i.url ? <a href={i.url}>点击预览项目</a> : <a href="javascript:;"> </a>}
            <a href={i.github}>github</a>
          </li>;
        })}
      </Ul>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};

const Items = connect(mapStateToProps)(Items1);

export {Items};