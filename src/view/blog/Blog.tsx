import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

type Props = {
  items: StateItem
}

const Blog1: React.FC<Props> = (props) => {
  const [itemList, setItemList] = useState([] as StateItem[]);
  useEffect(() => {
    const result: StateItem[] = []
    for (let key in props.items) {
      // @ts-ignore
      result.push(props.items[key])
    }
    setItemList( i => result )
  }, []);
  return (
    <>
      <ul>
        {itemList.map((i)=>{
          return <li key={i.name}>{i.name}</li>
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};

const Blog = connect(mapStateToProps)(Blog1);

export {Blog};