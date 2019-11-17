/*
 * @Author: lin
 * @Date: 2019-07-10 17:01:13
 * @LastEditTime: 2019-11-17 20:34:29
 * @FilePath: \about-us\src\data\public\copywriting.js
 */
export const copywritingData = {
  footer: {
    copyright: 'COPYRIGHT © 红岩网校工作站',
    address: '地址：重庆市南岸区崇文路2号(重庆邮电大学内) 400065',
    email: 'E-mail:redrock@cqupt.edu.cn (023-62461084)'
  },
  aboutus: {
    icon: [
      require('../../assets/aboutus/1.png'),
      require('../../assets/aboutus/2.png'),
      require('../../assets/aboutus/3.png'),
      require('../../assets/aboutus/4.png'),
      require('../../assets/aboutus/5.png'),
      require('../../assets/aboutus/6.png')
    ],
    copywriting: `重庆邮电大学红岩网校工作站是学校唯一一个从事互联网产品开发运营的校级学生组织。该团队自创立以来，始终坚持以技术见长，充分结合同学们的话语体系和视觉风格建设网络平台，繁荣网络文化。红岩网校工作站在校团委的指导下，由学生自我管理，多年来走出了一大批优秀的IT互联网人才，深受电信运营商、腾讯、阿里巴巴和百度等知名互联网企业的青睐。团队先后获评“全国五四红旗团支部”、“团中央新媒体专业工作室”、“重庆市IT杰出青年群体”等系列荣誉。红岩网校工作站属于校级学生组织，其中包括五个部门：产品策划及运营部，视觉设计部，Web研发部，移动开发部和运维安全部。工作中，各个部门相互协作、共同进步，开发上线了重邮小帮手微信公众号，掌上重邮、BTdown铺等一系列优秀的校园网络产品，深受广大师生的好评。红岩网校工作站被大家誉为“重邮互联网大咖的摇篮”。`
  },
  carousel: [
    require('../../assets/banner/1.png'),
    require('../../assets/banner/2.png')
  ],
  department: {
    copywriting: '红岩网校工作站工作模式与当前互联网产品开发模式相同。五个部门各司其职，共同协力打造服务于学生的各类产品。',
    masters: [
      {
        job: '站长',
        name: '牛奥林',
        intro: '',
        avatar: require('../../assets/avatar/nal.jpg')
      },
      {
        job: '副站长',
        name: '李军环',
        intro: '分管产品策划及运营部',
        avatar: require('../../assets/avatar/ljh.jpg')
      },
      {
        job: '副站长',
        name: '贺雨晴',
        intro: '分管视觉设计部',
        avatar: require('../../assets/avatar/hyq.jpg')
      },
      {
        job: '副站长',
        name: '胡仓',
        intro: '分管Web研发部',
        avatar: require('../../assets/avatar/hc.jpg')
      },
      {
        job: '副站长',
        name: '刘彦茹',
        intro: '分管移动开发部',
        avatar: require('../../assets/avatar/lyr.jpg')
      },
      {
        job: '副站长',
        name: '沈仕元',
        intro: '分管运维安全部',
        avatar: require('../../assets/avatar/ssy.jpg')
      }
    ],
    departments: [
      {
        name: '站长团',
        introduction: '',
        photo: require('../../assets/department/leader.jpg')
      },
      {
        name: '产品策划及运营部',
        introduction: '挖掘用户需求，拥有独特严谨的产品思维，提出产品优化方案。利用新媒体平台，对活动和产品形成强有力的助推。活跃在各个部门之间，是促进各部门沟通的桥梁。',
        photo: require('../../assets/department/pm.jpg')
      },
      {
        name: '视觉设计部',
        introduction: '设计产品图形用户界面，跟踪产品视觉及体验效果。对网站进行整体创意和美术设计，移动端和PC端用户的界面设计；网页宣传海报设计；网站产品的动画及动效设计。',
        photo: require('../../assets/department/design.jpg')
      },
      {
        name: 'Web研发部',
        introduction: '主要工作为将视觉页面还原为代码、设计数据库、添加逻辑完成交互。职责包括开发重邮小帮手微信号、手机端/PC 端网站开发、助力掌上重邮APP，提供强大的后台驱动等。',
        photo: require('../../assets/department/web.jpg')
      },
      {
        name: '移动开发部',
        introduction: '主要负责移动客户端产品的开发，以 Kotlin、Java、Objective-C、 Swift为主要开发语言，涵盖 Android、iOS两个平台，进行网校产品开发。',
        photo: require('../../assets/department/mobile.jpg')
      },
      {
        name: '运维安全部',
        introduction: '主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化。还负责了重邮开源镜像站、Proxmox 虚拟化平台、Gitlab 服务等。',
        photo: require('../../assets/department/sre.jpg')
      }
    ]
  }
}
