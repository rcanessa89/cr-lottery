import { FunctionComponent, useEffect } from 'react';

import { Modal } from '@cr-lottery/ui/modal';
import { BackdropLoading } from '@cr-lottery/ui/backdrop-loading';
import { ResultModalProps } from './types';
import { getQueryHook } from './utils';
import { ResultsModalContent } from '../ResultsModalContent';

const ResultModal: FunctionComponent<ResultModalProps> = ({
  draw,
  onClose,
}) => {
  const hook = getQueryHook(draw?.resource?.product);
  const [getData, { loading, data }] = hook();
  const isOpen = !!draw && !!data && !loading;

  useEffect(() => {
    if (draw) {
      getData({
        variables: {
          FindAllOptions: {
            where: {
              draw: Number(draw.resource.id),
            },
          },
        },
      });
    }
  }, [draw]);

  return (
    <>
      {loading && <BackdropLoading loading={loading} />}
      <Modal open={isOpen} close={onClose}>
        {isOpen && (
          <ResultsModalContent
            product={draw?.resource?.product}
            date={draw?.start}
            data={data}
          />
        )}
      </Modal>
    </>
  );
};

export default ResultModal;
