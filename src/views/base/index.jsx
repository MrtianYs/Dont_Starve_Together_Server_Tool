import { Component } from 'react';
import { Button, Input, Tooltip, message } from 'antd'
import './index.scss'
import { ipcRenderer } from 'electron'
import config from '@/config'
const fs = require('fs')
const path = require('path')

let targetPath = path.join(config.homedir, '/dstconfig.json')

export default class Base extends Component {

  state = {
    savePath: '',
    serverPath: '',
    clientPath: ''
  }

  savePathAction = () => {
    this.getDirPath('save')
  }

  serverPathAction = () => {
    this.getDirPath('server')
  }

  clientPathAction = () => {
    this.getDirPath('client')
  }

  getDirPath = (type) => {
    ipcRenderer.invoke('getDirPath').then((res) => {
      if (!res.canceled) {
        this.setState({ [`${type}Path`]: res.filePaths[0] })
      }
    })
  }

  save = () => {
    if (!this.state.savePath || !this.state.serverPath) {
      message.warning('请先完成配置设置')
      return
    }
    let res = JSON.parse(fs.readFileSync(targetPath, { encoding: 'utf8' }))
    res.savePath = this.state.savePath
    res.serverPath = this.state.serverPath
    res.clientPath = this.state.clientPath
    fs.writeFileSync(targetPath, JSON.stringify(res))
    message.success('操作成功')
    this.props.history.push({ pathname: '/settings', state: 'settings' })
  }

  saveClear = (e) => {
    this.setState({
      savePath: e.target.value,
    })
  }

  serverClear = (e) => {
    this.setState({
      serverPath: e.target.value
    })
  }

  clientClear = (e) => {
    this.setState({
      clientPath: e.target.value
    })
  }

  componentDidMount = () => {
    fs.readFile(targetPath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        fs.writeFileSync(targetPath, '{}')
        return
      }
      let res = JSON.parse(data)
      this.setState({
        savePath: res.savePath,
        serverPath: res.serverPath,
        clientPath: res.clientPath,
      })
    })
  }

  render() {
    let { serverPath, savePath, clientPath } = this.state
    return (
      <div className="base">
        <div className="base_row">
          <Tooltip placement="top" title={'存档目录不要带中文'}>
            <Button onClick={this.savePathAction} className="base_btn" type="primary">存档目录</Button>
          </Tooltip>
          <Input className='base_input' value={savePath} placeholder="请输入" readOnly allowClear onChange={this.saveClear} />
        </div>
        <div className="base_row">
          <Tooltip placement="top" title={`Don't Starve Together 安装目录`}>
            <Button onClick={this.clientPathAction} className="base_btn" type="primary">客户端目录</Button>
          </Tooltip>
          <Input className='base_input' value={clientPath} placeholder="请输入" readOnly allowClear onChange={this.clientClear} />
        </div>
        <div className="base_row">
          <Tooltip placement="top" title={`Don't Starve Together Dedicated Server 安装目录`}>
            <Button onClick={this.serverPathAction} className="base_btn" type="primary">服务端目录</Button>
          </Tooltip>
          <Input className='base_input' value={serverPath} placeholder="请输入" readOnly allowClear onChange={this.serverClear} />
        </div>
        <div className="base_row">
          <Button onClick={this.save} type="primary">完成</Button>
        </div>
      </div >
    )
  }
}