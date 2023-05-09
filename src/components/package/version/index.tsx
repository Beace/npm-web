import { Table } from '@douyinfe/semi-ui';
import { NavLink } from '@modern-js/runtime/router';

interface VersionProps {
  packageInfo: Record<string, any>;
}

const Version = ({ packageInfo }: VersionProps) => {
  const columns = [
    {
      title: 'Version',
      dataIndex: 'version',
      render: (text: string) => {
        return (
          <NavLink to={`/packages/${packageInfo.name}?version=${text}`}>
            {text}
          </NavLink>
        );
      },
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Publish Time',
      dataIndex: 'publishTime',
      render: (text: string) => {
        return <div>{text}</div>;
      },
    },
  ];
  if (!packageInfo?.versions) {
    return null;
  }
  const tableData = Object.keys(packageInfo.versions).map(v => ({
    version: v,
    author: packageInfo.versions?.[v]?._npmUser?.name,
    publishTime: packageInfo.time[v],
  }));

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 20 }}
      />
    </div>
  );
};

export default Version;
