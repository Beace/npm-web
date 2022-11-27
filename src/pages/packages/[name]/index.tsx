import { Helmet } from '@modern-js/runtime/head';
import { Space, TabPane, Tabs, Tag, Typography } from '@douyinfe/semi-ui';
import { useParams } from '@modern-js/runtime/router';
import { useEffect } from 'react';
import { useLocalModel } from '@modern-js/runtime/model';
import gfm from '@bytemd/plugin-gfm';
import { Viewer } from '@bytemd/react';
import detail from '@/models/package-detail';
import 'bytemd/dist/index.css';
import './markdown.scss';

const { Title, Text } = Typography;

const Index = () => {
  const params = useParams<{ name: string }>();
  const [{ packageInfo }, actions] = useLocalModel(detail);
  useEffect(() => {
    actions.load();
  }, []);

  return (
    <Space
      vertical
      align="start"
      spacing="loose"
      style={{ width: '100%', padding: '8px 24px' }}
    >
      <Helmet>
        <title>{params.name} Packages</title>
      </Helmet>
      <Space>
        <Title style={{ margin: '8px 0' }}>{packageInfo.name}</Title>
        <Tag color="blue" type="solid">
          @{packageInfo?.['dist-tags']?.latest}
        </Tag>
        <Tag color="blue" type="solid">
          {packageInfo?.isPrivate ? 'Public' : 'Private'}
        </Tag>
      </Space>
      <Text type="secondary">{packageInfo.description}</Text>
      <div style={{ width: '100%' }}>
        <Tabs type="line">
          <TabPane tab="ReadMe" itemKey="1">
            <Viewer value={packageInfo.readme} plugins={[gfm()]} />
          </TabPane>
          <TabPane tab="Unpkg" itemKey="4">
            Unpkg
          </TabPane>
          <TabPane tab="Dependencies" itemKey="5">
            Dependencies
          </TabPane>
          <TabPane tab="Dependents" itemKey="6">
            Dependents
          </TabPane>
          <TabPane tab="Versions" itemKey="3">
            Versions
          </TabPane>
        </Tabs>
      </div>
    </Space>
  );
};

export default Index;
