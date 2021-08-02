import react, { Component } from 'react'
import { Form, Input, Select, InputNumber, Radio, Button } from 'antd'
let dialog = require('electron');

export default class InitSave extends Component {

  formRef = react.createRef()

  state = {
    name: '',
    description: '',
    password: '',
    serverStyles: 'social',
    gameStyles: 'survival',
    pvp: false,
    playerNum: 6,
    serverPath: '',
    savePath: ''
  }


  componentDidMount = () => {

  }

  init = () => {
    let { validateFields } = this.formRef.current
    validateFields().then((res) => {
      this.props.initSave(res)
    })
  }

  saveFocus = () => {
    this.getPathDialog()
  }

  serverFocus = () => {
    this.getPathDialog()
  }

  getPathDialog = () => {
    console.log(dialog)
    // dialog.showOpenDialogSync({
    //   title: '请选择文件夹',
    //   properties: ['openDirectory']
    // })
  }

  render() {

    const layout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 20 },
    };

    const nextLayout = {
      wrapperCol: { span: 5, offset: 5 },
    }

    let { name, description, password, serverStyles, gameStyles, pvp, playerNum, serverPath, savePath } = this.state

    return (
      <Form ref={this.formRef} {...layout} initialValues={{ name, description, password, serverStyles, gameStyles, pvp, playerNum, serverPath, savePath }}>
        <Form.Item label="存档目录" name="savePath">
          <Input onFocus={this.saveFocus} placeholder="请选择" allowClear />
        </Form.Item>
        <Form.Item label="服务端目录" name="serverPath">
          <Input onFocus={this.serverFocus} placeholder="请选择" allowClear />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "必填项" }]}
          label="房间名称"
          name="name"
        >
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item label="房间描述" name="description">
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item label="房间密码" name="password">
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "必填项" }]}
          label="服务器风格"
          name="serverStyles"
        >
          <Select placeholder="请选择" allowClear>
            <Select.Option value="social">社交</Select.Option>
            <Select.Option value="cooperative">合作</Select.Option>
            <Select.Option value="competitive">竞争</Select.Option>
            <Select.Option value="madness">疯狂</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "必填项" }]}
          label="游戏模式"
          name="gameStyles"
        >
          <Select placeholder="请选择" allowClear>
            <Select.Option value="survival">生存</Select.Option>
            <Select.Option value="wilderness">荒野</Select.Option>
            <Select.Option value="endless">无尽</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="PVP" name="pvp">
          <Radio.Group>
            <Radio value={true}>开</Radio>
            <Radio value={false}>关</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="玩家数量" name="playerNum">
          <InputNumber min={1} max={100} />
        </Form.Item>
        <Form.Item {...nextLayout}>
          <Button type="primary" onClick={this.init}>下一步</Button>
        </Form.Item>
      </Form >
    )
  }
}