import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { darcula } from '@uiw/codemirror-theme-darcula'
import { python } from '@codemirror/lang-python'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { Button } from '@mantine/core'
function CodeArea() {
    const [code, setCode] = useState("print('hello world!')");
    const onCodeChange = useCallback((value, viewUpdate) => {
        setCode(value);
    }, []);
    const SendCode = () => {

    }
    return (
        <>
            <div style={{position: "relative",zIndex: "3",float:"right"}} id='runcode'>
                <Button variant="filled" onClick={SendCode} color="indigo">
                    Run Code
                </Button>
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
        </>
    );
}
export default CodeArea;