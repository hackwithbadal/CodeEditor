import React, { useState } from 'react';
import { Drawer, Group, Button } from '@mantine/core';

function DrawerBox() {
    return (
        <>
            <Drawer
                opened="opened"
                title="Console"
                position='right'
                size='50%'>
            </Drawer>
            <Group position="center">
                <Button>Open Drawer</Button>
            </Group>
        </>
    )
}

export default DrawerBox;