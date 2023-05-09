import gfm from '@bytemd/plugin-gfm';
import { Viewer } from '@bytemd/react';
import 'bytemd/dist/index.css';
import './markdown.scss';

interface ReadMeProps {
  packageInfo: Record<string, any>;
}

const ReadMe = ({ packageInfo }: ReadMeProps) => {
  return (
    <div>
      <Viewer value={packageInfo?.readme} plugins={[gfm()]} />
    </div>
  );
};

export default ReadMe;
