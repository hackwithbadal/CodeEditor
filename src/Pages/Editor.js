import React, { useState, useCallback } from 'react'
import { Button, Select, ActionIcon, Drawer, Group } from '@mantine/core';
import { Wifi, Home } from 'tabler-icons-react';
import './assets/StyleSheet/Editor.css';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import axios from 'axios';
import Asider from './Compoents/Asider';
import { toast } from 'react-hot-toast'
import { Helmet } from 'react-helmet';

function Editor() {
  const [show, setShow] = useState(false);
  const [opened, setOpened] = useState(false);
  const [code, setCode] = useState("print('hello world!')");
  const [mode, setMode] = useState('DARK');
  const [language, setLanguage] = useState('python');
  const [responce, setResponce] = useState('');

  const onCodeChange = useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  const SendCode = () => {
    axios
      .post(`${process.env.API_URL}/${language}`, { code })
      .then((res) => {
        const result = res.data.output;
        // setResponce(responce => [...responce, <br />, result, <br />]);
        setResponce(result);
        toast(`Output: ${result}`,
          {
            duration: 5000,
            icon: "👀",
            position: 'bottom-right',
            style: { width: "300px" },
            iconTheme: {
              primary: '#fff',
              secondary: '#000'
            }
          });
      })
  }
  return (
    <>
      <Helmet>
        <title>DevDooR | Editor</title>
      </Helmet>
      <div id='MainContainer'>
        <div id="editorWrapper">
          <div id="options">
            <div id='connection-status'>
              <ActionIcon color="green" size="sm" radius="md" variant="transparent">
                <Wifi />
              </ActionIcon>
              <h4>Connected</h4>
            </div>
            <Select defaultValue={language}
              onChange={setLanguage}
              data={[
                { value: 'python', label: 'Python 3.6' },
                { value: 'javascript', label: 'Javacript ES6' },
                { value: 'C', label: 'C' },
                { value: 'C++', label: 'C++' },
              ]}
            />
            <Select
              defaultValue={mode}
              onChange={setMode}
              data={[
                { value: 'DARK', label: 'DARK' },
                { value: 'LIGHT', label: 'LIGHT' },
              ]}
            />
            <div id="ThemeAndLang">
              <input type="text" name="arg" id="args" placeholder='Args...' />
              <Button id='coderunner' variant="gradient" size='md' radius='xs' uppercase onClick={SendCode} color="indigo">
                Run
              </Button>
            </div>
            <div>
              <Drawer
                opened={opened}
                position="bottom"
                onClose={() => setOpened(false)}
                title="Console"
                padding="xl"
                size="40%"
                overlayColor='black'
                lockScroll={false}
              >
                {
                  <div >
                    {responce}
                  </div>
                }
              </Drawer>

              <Group position="center">
                <Button variant='subtle' id='console' onClick={() => setOpened(true)}>CONSOLE</Button>
              </Group>
            </div>
            <div>
              <Drawer
                opened={show}
                position="right"
                onClose={() => setShow(false)}
                // title="Console"
                padding="xl"
                size="40%"
                overlayColor='black'
                lockScroll={false}
              >
                <Asider />
              </Drawer>

              <Group position="center">
                <Button variant='subtle' id='asider' onClick={() => setShow(true)}><Home /></Button>
              </Group>
            </div>
          </div>
          <div>
            <CodeMirror
              value={code}
              height="95vh"
              extensions={[python()]}
              theme={okaidia}
              options={{
                keyMap: "sublime",
                mode: "python"
              }}
              onChange={onCodeChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Editor