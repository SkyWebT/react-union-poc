import React from 'react';

import { Button } from '@sky/component-primitives';

const Playground = () => {
  return (
    <div>
      <div>
        <Button >this is button</Button>
        <Button status="secondary">this is button</Button>
        <Button status="active">this is button</Button>
        <Button disabled>this is button</Button>
      </div>
      <div>
        <Button icon="add">this is button</Button>
        <Button icon="add" status="secondary">
          this is button
        </Button>
        <Button icon="add" status="active">
          this is button
        </Button>
        <Button icon="add" disabled>
          this is button
        </Button>
      </div>
      <div>
        <Button block >this is button</Button>
        <Button block status="secondary">this is button</Button>
        <Button block status="active">this is button</Button>
        <Button block disabled>this is button</Button>
      </div>
    </div>
  );
};

export default Playground;
