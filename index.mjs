import { writeFileSync } from 'fs'

// create an empty unused file
writeFileSync('./test.mjs', '')
// add it to the locally ignored files
writeFileSync('.git/info/exclude', 'test.mjs\n')