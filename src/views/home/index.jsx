import { Component } from 'react'
import './index.scss';
import { Collapse, Modal } from 'antd'
import config from '@/config'
const fs = require('fs');

export default class Home extends Component {
  componentDidMount() {
    fs.readdir(config.homedir, (err, data) => {
      if (err) {
        Modal.warning({
          title: '提示',
          content: '未检测到配置文件，请先进行基础信息设置',
          okText: '去设置',
          onOk: () => {
            this.props.history.push('/base')
          }
        })
        fs.mkdirSync(config.homedir)
        return
      }
    })
  }

  render() {
    let updateInfo = [
      {
        title: '更新记录：2021-07-07',
        description: '',
      },
    ]

    let collapseList = []
    let updateFrame = updateInfo.map((item, index) => {
      collapseList.push(index)
      return <Collapse.Panel key={index} header={item.title}><div dangerouslySetInnerHTML={{ __html: item.description }}></div></Collapse.Panel>
    })

    return (
      <div className="home">
        <Collapse defaultActiveKey={collapseList} expandIconPosition={'right'} ghost>{updateFrame}</Collapse>
      </div>
    )
  }
}