import { Component } from 'react'
import { Steps, Button } from 'antd'
import InitSave from './components/init-save/index.jsx'
import './index.scss'

export default class Settings extends Component {

  state = {
    stepsCurrent: 0,
    data: [
      {
        MISC: {
          max_snapshots: 20, // 最大快照数
          console_enabled: true // 是否开启控制台
        },
        SHARD: { // 本地UDP服务？猜的...
          shard_enabled: true,
          bind_ip: '127.0.0.1',
          master_ip: '127.0.0.1',
          master_port: 11000,
          cluster_key: 'defaultPass'
        },
        NETWORK: {
          lan_only_cluster: false, // 局域网游戏
          offline_cluster: false, // 离线模式
          tick_rate: 30, // 单秒与主机通信次数
          cluster_intention: 'cooperative', // 服务器风格 social社交  cooperative合作  competitive竞争 madness疯狂
          cluster_name: '房间名称', //房间名称
          cluster_description: '房间描述', //房间描述
          cluster_password: '房间密码',
          cluster_language: 'zh',
        },
        GAMEPLAY: {
          game_mode: 'survival', // 游戏模式 survival生存  wilderness荒野  endless无尽
          max_players: 10, // 玩家数量
          pvp: false, //玩家PVP
          pause_when_empty: true, // 不知道是啥
          vote_enabled: false, // 不知道是啥
        }
      }
    ]
  }

  render() {
    const { stepsCurrent, data } = this.state

    const comp = [ <InitSave data={data[0]}/> ]

    return (
      <div className="settings">
        <div className="settings_steps">
          <Steps current={stepsCurrent} size="small">
            <Steps.Step title="存档初始化"/>
            <Steps.Step title="In Progress" />
            <Steps.Step title="Waiting" />
          </Steps>
        </div>
        <div className="settings_warp">
          {comp[stepsCurrent]}
        </div>
        <Button type="primary">下一步</Button>
      </div>
    )
  }
}