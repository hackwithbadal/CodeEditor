import React, { useState, useCallback } from 'react'
import { Button, Select, ActionIcon, Drawer, Group } from '@mantine/core';
import { Wifi } from 'tabler-icons-react';
import './assets/StyleSheet/Editor.css';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import axios from 'axios';
import Asider from './Compoents/Asider';
import { toast } from 'react-hot-toast'
import { Helmet } from 'react-helmet';

function Editor() {
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
      .post(`http://localhost:5000/${language}`, { code })
      .then((res) => {
        const result = res.data.message;
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
        <div>
          <Asider />
        </div>
        <div id="editorWrapper">
          <div id="options">
            <div id='connection-status'>
              <ActionIcon color="green" size="sm" radius="md" variant="transparent">
                <Wifi />
              </ActionIcon>
              <h4>Connected</h4>
            </div>
            <div id="ThemeAndLang">
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
              <Button id='coderunner' variant="gradient" size='md' radius='xs' uppercase onClick={SendCode} color="indigo">
                Run
              </Button>
            </div>
            <div>
              <Drawer
                opened={opened}
                position="right"
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
                <Button variant='subtle' id='console' onClick={() => setOpened(true)}>Console</Button>
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