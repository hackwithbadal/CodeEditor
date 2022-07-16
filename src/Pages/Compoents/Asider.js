import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../assets/media/logo.png'
import Data from '../Duumy/DummyData';
import Devloper from '../Devloper';
import { Stack, Button, Dialog, Text, Group } from '@mantine/core';
import { Copy } from 'tabler-icons-react';
import toast from 'react-hot-toast';
import '../assets/StyleSheet/Asider.css';

function Asider() {
    const [opened, setOpened] = useState(false)
    const navigateSwap = useNavigate();
    const LeaveDromRoom = () => {
        navigateSwap('/')
    }
    const openDialog = () => {
        setOpened(true);
    }
    const CloseDialog = () => {
        setOpened(false);
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied successfully !');
    }
    return (
        <>
            <div id='menu'>
                <div id='topmenu'>
                    <img src={logo} alt="logo" width='200px' height='100px' />
                    <div id='connectedDev'>
                        {
                            Data.map((client) => (
                                <Devloper key={client.id} name={client.name} />
                            ))
                        }
                    </div>
                </div>
                <Dialog
                    opened={opened}
                    position={{ bottom: 100, left: 20 }}
                    withCloseButton
                    onClose={() => setOpened(false)}
                    size="lg"
                    radius="md"
                >
                    <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
                        Share this link
                    </Text>
                    <Group align="flex-end">
                        <Text size='lg'>{window.location.href}</Text>
                        <Button onClick={CloseDialog}><Copy /></Button>
                    </Group>
                </Dialog>
                <div id="bottomMenu">
                    <Stack gap={4}>
                        <Button variant="light" radius="md" size="md" uppercase onClick={openDialog}>
                            Invite
                        </Button>
                        <Button variant='filled' color='red' onClick={LeaveDromRoom} uppercase size='md'>Leave Room</Button>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Asider;