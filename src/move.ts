type List = unknown;

export default function move(list: List, source: string, destination: string) {
  if (!list || !source || !destination) {
    return ' Missing paramater';
  }
  const moveList = list;
  const moveData: [] = [];
  const destFolder: [] = [];
  const otherFolder: [] = [];
  let isHas = false;
  let message = '';

  moveList.map((file) => {
    if (file.id === source && !isHas) {
      return 'You cannot move a folder';
    }
    if (destination !== file.id && !isHas) {
      message = 'You cannot specify a file as the destination';
    } else {
      isHas = true;
      message = '';
    }
    if (destination !== file.id) {
      otherFolder.push(file);
    } else {
      destFolder.push(file);
    }
    return 'ok';
  });

  if (!message) {
    otherFolder[0].files.map((fileData, index) => {
      if (fileData.id === source) {
        moveData.push({ ...otherFolder[0].files[index] });
        otherFolder[0].files.splice(index, 1);
      } else {
        return 'You have not source in this folder';
      }
    });

    if (moveData.length > 0) {
      isHas = true;
      destFolder[0].files.push({ ...moveData[0] });
    }
    const finalList = [...destFolder, ...otherFolder];
    return JSON.stringify(finalList);
  }
  return message;
}
