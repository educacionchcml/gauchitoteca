import Photos from './photos';

const photos = new Photos();

async function main() {
    console.log(await photos.getPhotos());
}

alert('gauchitoteca funca');

main();