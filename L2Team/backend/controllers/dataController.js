const data = {
    professionalName: 'John Doe',
    base64Image: 'base64_encoded_image_here',
    nameLink: {
        firstName: 'John',
        url: 'https://example.com/john'
    },
    primaryDescription: 'Full Stack Developer',
    workDescription1: 'Work description 1',
    workDescription2: 'Work description 2',
    linkTitleText: 'Links',
    linkedInLink: {
        text: 'LinkedIn',
        link: 'https://linkedin.com/johndoe'
    },
    githubLink: {
        text: 'GitHub',
        link: 'https://github.com/johndoe'
    }
};

async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return data;
}

module.exports = {
    fetchData
};