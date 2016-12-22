import React from 'react';

import FileExplorerActions from '../actions/FileExplorerActions.js';
import OnLoadActions from '../actions/OnLoadActions.js';
import OpenFileStore from '../stores/OpenFileStore.js';
import InterfaceActions from '../actions/InterfaceActions.js';
import EditorMarkerStore from '../stores/EditorMarkerStore.js';
import EditorMarkerActions from '../actions/EditorMarkerActions.js';
import request from 'superagent';
import Immutable from 'immutable';

/* Marker Types */
const MT = {
    FUNC_UNDEFINED: 'undefined-function',
}

/* Define suggested actions */
const defineInNewFile = {
    action: (event, markerInfo) => {
        markerClearingAction(markerInfo.type, markerInfo.name)(() => {
            const baseURL = window.location.origin;
            const sessionID = OnLoadActions.getSessionID();
            let filePath = OpenFileStore.getFilePath();
            filePath = filePath.split('/');
            filePath[filePath.length-1] = `${markerInfo.name}.m`;
            filePath = filePath.join('/');

            request.post(baseURL + '/files/newfile/' + filePath.substring(10))
                .set({SessionID: sessionID})
                .send({
                    write: `function result = ${markerInfo.name}()\n\n`
                })
                .end(function(err, res) {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        InterfaceActions.showMessage(`Successfully created '${filePath.substring(10)}'`);
                        FileExplorerActions.fetchFileTree(sessionID);
                    }
                });
        });
    },
    description: (name) => {
        return `Define ${name}() in a new file`;
    }
}

/* Marker Data */
const MD = {
    [MT.FUNC_UNDEFINED]: {
        message: (funcName) => (
            <span>
                <span style={{ color: 'red' }}>{funcName}</span> is a function that hasn't been defined in this workspace.
            </span>
        ),
        actions: [
            defineInNewFile
        ],
    }
}

/* Helper Methods */
// An action that also clears the error associated with the marker from the marker store
function markerClearingAction(markerType, markerName) {
    return (
        (action) => {
            try {
                action();
            }
            catch (e) {

            }
            // Remove markers of markerType with the same name from the marker store
            const filePath = OpenFileStore.getFilePath();
            const markers = EditorMarkerStore.get(filePath).markers;
            let keep = [];
            for (let [markerClass, markerList] of markers) {
                if (markerName !== undefined) {
                    markerList = markerList.filter((marker) => marker.name !== markerName);
                    keep.push([markerClass, markerList]);
                }
                else if (markerType !== markerClass) {
                    keep.push([markerClass, markerList]);
                }
            }
            EditorMarkerActions.setMarkers(
                filePath,
                Immutable.Map(keep)
            );
        }
    );
}

export {
    MD,
    MT
}

export default MT;