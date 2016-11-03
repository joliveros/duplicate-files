import { argv } from 'yargs'; // eslint-disable-line
import fileSearch from 'pattern-file-search';
import fileCopy from 'filecopy';

const debug = require('debug')('duplicate-files'); // eslint-disable-line

const findPatternStr = argv['find-pattern'];
const replacePatternStr = argv['replace-pattern'];
const DRY_RUN = argv['dry-run'];
const FIND_PATTERN = new RegExp(findPatternStr);
const REPLACE_PATTERN = new RegExp(replacePatternStr);
const STRING = argv.string;

const directory = argv._[0] || __dirname; // eslint-disable-line

debug(argv);

function getFiles() {
  if (!findPatternStr) {
    throw new Error('find-pattern argument is required.');
  }

  if (!replacePatternStr) {
    throw new Error('replace-pattern argument is required.');
  }

  return new Promise((resolve, reject) => {
    fileSearch(directory, FIND_PATTERN, (err, list) => {
      if (err) {
        return reject(err);
      }

      return resolve(list);
    });
  });
}

function init() {
  getFiles()
    .then((files) => {
      const fileTasks = [];

      files.forEach((filename) => {
        const newFileName = filename.replace(REPLACE_PATTERN, STRING);

        debug(`New file name: ${newFileName}`);

        if (DRY_RUN) {
          return null;
        }
        return fileCopy(filename, newFileName);
      });

      return Promise.all(fileTasks);
    });
}

export default () => {
  init();
};
