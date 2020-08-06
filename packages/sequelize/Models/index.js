import path from 'path';
import Model from './mysql/Model';

const smartRequire = (modelPath) => {
    const _oldPath = path.join(__dirname, modelPath);
    const _mockPath = path.join(__dirname, modelPath.replace('mysql', 'mysql/__mock__'));
    try {
        if (process.env.UNIT_TEST) return require(_mockPath);
    } catch (err) {
    }
    return require(_oldPath);
};
export default {
    // mysql
    linuxDoc: new Model(smartRequire('./mysql/linuxDoc')),
    user: new Model(smartRequire('./mysql/user')),
    moFengWo: new Model(smartRequire('./mysql/moFengWo')),
    errorLog: new Model(smartRequire('./mysql/errorLog')),
};
