import { useCallback, useState } from 'react';
import type { UploadChangeParam } from 'antd/lib/upload';
import { Button, message, Modal } from 'antd';
import SecureUpload from '@/components/SecureUpload';
import FilesBrowser from '@/components/FilesBrowser';
import request from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';
import { FormattedMessage } from 'umi';
import { FolderOpenOutlined } from '@ant-design/icons';
import type { PropsWithChildren } from 'react';
import type { SecureUploadType } from './index';

type AnyResponse = API.DefaultResponse<any>;

const post = async (url: string, body: Record<string, string>, options?: RequestOptionsInit) => {
  return request<API.DefaultResponse<EscolaLms.ModelFields.Models.Metadata>>(url, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
};

const fixDirName = (inputDir: string) => {
  let dir = inputDir.split('//').join('/');
  dir = dir[dir.length - 1] === '/' ? dir : `${dir}/`;
  dir = dir[0] === '/' ? dir.slice(1) : dir;
  return dir;
};

const fixFileName = (file: API.File[] | API.File) => {
  if (Array.isArray(file) && file[0]) {
    return file[0].name;
  }
  return (file as API.File).name;
};

const getPath = (dir: string, file: API.File[] | API.File) => {
  const fixedDir = fixDirName(dir);
  const fixedName = fixFileName(file);
  if (fixedName.includes(fixedDir)) {
    return fixedName;
  }
  return `${fixedDir}${fixedName}`;
};

const getUploadChangeSuccessParam = (data: any): UploadChangeParam => ({
  file: {
    status: 'done',
    uid: 'fileFromBrowser',
    name: 'fileFromBrowser',
    response: data,
  },
  fileList: [],
});

function SecureUploadBrowser<Type = API.File>({
  folder,
  onResponse,
  ...props
}: PropsWithChildren<
  SecureUploadType<Type> & { folder: string; onResponse?: (response: AnyResponse) => void }
>) {
  const [showBrowser, setShowBrowser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { url, name, onChange, data } = props;

  const closeModal = useCallback(() => {
    setShowBrowser(false);
  }, []);

  return (
    <div>
      <Button onClick={() => setShowBrowser(true)} icon={<FolderOpenOutlined />}>
        {' '}
        <FormattedMessage id="browse" />
      </Button>

      {showBrowser && (
        <Modal open={showBrowser} onCancel={closeModal} onOk={closeModal} width="60vw">
          <FilesBrowser
            forceLoading={loading}
            hideDeleteBtn={true}
            defaultDirectory={folder}
            onFile={(file, dir) => {
              if (dir) {
                setLoading(true);
                post(url, { ...data, [name]: getPath(dir, file) })
                  .then((response: AnyResponse) => {
                    setLoading(false);
                    if (onResponse) {
                      onResponse(response);
                    }
                    if (response.success) {
                      closeModal();
                      if (onChange) {
                        onChange(getUploadChangeSuccessParam(response));
                      }
                    } else {
                      message.error(response.message);
                    }
                  })
                  .catch((err) => {
                    setLoading(false);
                    if ('data' in err) {
                      message.error(err.data.message);
                    } else {
                      message.error('Unknown Error');
                    }
                  });
              }
            }}
          />
        </Modal>
      )}
      <div style={{ marginTop: '10px' }}>
        <SecureUpload {...props} />
      </div>
    </div>
  );
}

export default SecureUploadBrowser;
