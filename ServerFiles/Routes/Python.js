const express = require('express');
const fs = require('fs');
const { PythonShell } = require('python-shell');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: 'Python 3.6' });
})
router.post('/', (req, res) => {
    const pythonScript = req.body.code;
    console.log(pythonScript);
    fs.writeFileSync('pyCode.py', pythonScript);
    // let options = {
    //     mode: 'text',
    //     pythonOptions: ['-u'], // get print results in real-time
    //     scriptPath: 'path/to/my/scripts', //If you are having python_test.py script in same folder, then it's optional.
    //     args: ['shubhamk314'] //An argument which can be accessed in the script using sys.argv[1]
    // };
    PythonShell.run('pyCode.py', null, function (err, result) {
        if (err) {
            return res.send({ message: err.toString() })
        }
        else{
        // result is an array consisting of messages collected
        //during execution of script.
        // console.log('result: ', result.toString());
        console.log(result);
        res.send({ message: result.toString() })
        }
    });
});

module.exports = router;