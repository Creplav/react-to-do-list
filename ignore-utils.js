import requireHacker from 'require-hacker';

const extensions = [
    'css',
    'png',
    'jpg',
    'jpeg'
]

extensions.forEach((extension) => {
    requireHacker.hook(extension, () => 'module.exports = ""');
});