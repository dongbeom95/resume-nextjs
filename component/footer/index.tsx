import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';

import { IFooter } from './IFooter';

export const Footer = {
  Component,
};

function Component({ payload: _payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col>
        <div className="text-center mt-4">
          <EmptyRowCol />
        </div>
      </Col>
    </Row>
  );
}
