import './index.scss';
import { Collapse } from 'antd'

export default function Home() {

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