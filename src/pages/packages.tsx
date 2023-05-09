import { Helmet } from '@modern-js/runtime/head';
import { Avatar, Button, Space, Table } from '@douyinfe/semi-ui';
import { NavLink } from '@modern-js/runtime/router';

const Index = () => {
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      render: (text: string, record: any) => {
        return (
          <div>
            <Avatar
              size="small"
              shape="square"
              src={record.nameIconSrc}
              style={{ marginRight: 12 }}
            />
            <NavLink to={`/packages/${text}`}>
              <Button
                theme="borderless"
                type="primary"
                style={{ marginRight: 8 }}
              >
                {text}
              </Button>
            </NavLink>
          </div>
        );
      },
    },
    {
      title: 'size',
      dataIndex: 'size',
    },
    {
      title: 'owner',
      dataIndex: 'owner',
      render: (text: string, record: any) => {
        return (
          <div>
            <Avatar
              size="small"
              color={record.avatarBg}
              style={{ marginRight: 4 }}
            >
              {typeof text === 'string' && text.slice(0, 1)}
            </Avatar>
            {text}
          </div>
        );
      },
    },
    {
      title: 'registry',
      dataIndex: 'registry',
      render: (text: string) => {
        return text;
      },
    },
    {
      title: 'latest release',
      dataIndex: 'updateTime',
    },
  ];
  const tableData = [
    {
      key: '1',
      name: 'lodash',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
      size: '2M',
      owner: 'beace',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
      registry: 'npm',
    },
    {
      key: '2',
      name: 'react',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '2M',
      owner: 'beace',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
      registry: 'npm',
    },
    {
      key: '3',
      name: '@private/lib',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'private',
    },
    {
      key: '4',
      name: 'axios',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '5',
      name: 'chalk',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '6',
      name: 'react-dom',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '7',
      name: 'commander',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '8',
      name: 'express',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '9',
      name: 'vue',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
    {
      key: '10',
      name: 'moment',
      nameIconSrc:
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
      registry: 'npm',
    },
  ];
  return (
    <Space
      vertical
      align="start"
      spacing="loose"
      style={{ width: '100%', padding: '8px 24px' }}
    >
      <Helmet>
        <title>Packages</title>
      </Helmet>
      <Table columns={columns} dataSource={tableData} pagination={false} />
    </Space>
  );
};

export default Index;
