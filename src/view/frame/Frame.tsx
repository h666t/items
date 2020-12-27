import React, {useState} from 'react';
import './frame.scss';
import {Drawer, List, NavBar, Icon} from 'antd-mobile';

type Props = {}

const hash: { [key: string]: string } = {
  '/#/': '我的项目',
  '/#/blogs': '我的博客'
};

const Frame: React.FC<Props> = (props) => {
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
            {['请选择', '我的项目', '我的博客'].map((i, index) => {
              if (index === 0) {
                return (<List.Item key={index} multipleLine>{i}</List.Item>);
              }
              return (<List.Item key={index} onClick={openTarget(i)}
                                 thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
                {i}
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
