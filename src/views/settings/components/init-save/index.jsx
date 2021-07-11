import { Component } from 'react'
import { Form, Input, Button, Select, InputNumber, Radio } from 'antd'

export default class InitSave extends Component {

  state = {
    name: '',
    description: '',
    password: '',
    serverStyles: 'social',
    gameStyles: 'survival',
    pvp: false,
    playerNum: 6
  }

  render() {

    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    let { name, description, password, serverStyles, gameStyles, pvp, playerNum } = this.state

    return (
      <Form {...layout}>
        <Form.Item label="房间名称" name="name">
          <Input value={name} allowClear />
        </Form.Item>
        <Form.Item label="房间描述" name="description">
          <Input value={description} allowClear />
        </Form.Item>
        <Form.Item label="房间密码" name="password">
          <Input value={password} allowClear />
        </Form.Item>
        <Form.Item label="服务器风格" name="serverStyles">
          <Select value={serverStyles} placeholder="请选择" allowClear>
            <Select.Option value="social">社交</Select.Option>
            <Select.Option value="cooperative">合作</Select.Option>
            <Select.Option value="competitive">竞争</Select.Option>
            <Select.Option value="madness">疯狂</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="游戏模式" name="gameStyles">
          <Select value={gameStyles} placeholder="请选择" allowClear>
            <Select.Option value="survival">生存</Select.Option>
            <Select.Option value="wilderness">荒野</Select.Option>
            <Select.Option value="endless">无尽</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="PVP" name="pvp">
          <Radio.Group value={pvp}>
            <Radio value={true}>开</Radio>
            <Radio value={false}>关</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="玩家数量" name="playNum">
          <InputNumber value={playerNum} min={0} max={100} />
        </Form.Item>
      </Form>
    )
  }
}