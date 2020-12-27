import React, {useState} from 'react';
import './frame.scss';
import {Drawer, List, NavBar, Icon} from 'antd-mobile';



const hash: { [key: string]: string } = {
  '/#/': '我的项目',
  '/#/blog': '我的博客'
};

const list = ['请选择',
  {'https://i.loli.net/2020/12/27/xb3fypFjgRuAOae.png': '我的项目'},
  {'https://i.loli.net/2020/12/27/N4sI5foUGS3MtdH.png': '我的博客'}];

const Frame: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenChange = () => {
    setOpen(i => !i);
  };
  const openTarget = (item: string) => {
    return () => {
      for (let key in hash) {
        if (hash[key] === item) {
          window.location.href = `${key}`;
          setOpen(i => false);
        } else {
          window.location.href = `/#/`;
          setOpen(i => false);
        }
      }
    };
  };
  return (
    <>
      <NavBar icon={<Icon type="ellipsis" style={{zIndex: 1}}/>} onLeftClick={onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        style={{minHeight: document.documentElement.clientHeight}}
        enableDragHandle
        contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
        sidebar={
          <List>
            {list.map((i, index) => {
              if (index === 0) {
                return (<List.Item key={index} multipleLine>{i}</List.Item>);
              }
              return (<List.Item key={index} onClick={openTarget(Object.values(list[index])[0]!)} thumb={Object.keys(list[index])[0]}>
                {Object.values(i)[0]}
              </List.Item>);
            })}
          </List>
        }
        open={open}
        onOpenChange={onOpenChange}
      >
        {props.children}
      </Drawer>
    </>
  );
};

export {Frame};
