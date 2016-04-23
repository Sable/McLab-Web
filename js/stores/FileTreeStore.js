import {Store} from 'flux/utils';
import Dispatcher from '../Dispatcher'
import LS from '../constants/LS'
import AT from '../constants/AT'

class FileTreeStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._fileTree = null;
    this._loadState = LS.LOADING;
  }

  // data {
  //   success: true | false
  //   // only if success === true
  //   contents: {
  //     slkdjflskjdf
  //     lskdj flskdjf
  //     sdlkjf lsdj kf

  //   }
  //   // only if success === false
  //   error: {
  //
  //   }
  // }
  __onDispatch(payload) {
    switch (payload.action) {
      case AT.FILE_EXPLORER.DATA_LOADED:
        if (payload.data.success) {
          this._fileTree = payload.data.contents;
          this._loadState = LS.LOADED;
        } else {
          this._fileTree = null;
          this._loadState = LS.LOAD_ERROR;
        }
        this.__emitChange();
    }
  }

  getFileTree() {
    return this._fileTree;
  }

  getLoadState() {
    return this._loadState;
  }

  //fileInWorkspace(fileToFind, fileTree){
  //  if (!fileToFind){
  //    return false;
  //  }
  //  if (fileTree){
  //    for (let fileName of fileTree.files){
  //      if (fileName == fileToFind) {
  //        return true;
  //      }
  //    }
  //    for (let directory of fileTree.directories){
  //      if (this.fileInWorkspace(fileToFind, directory)){
  //        return true;
  //      }
  //    }
  //    return false;
  //  }
  //}
}

module.exports = new FileTreeStore(Dispatcher);
