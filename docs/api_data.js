define({ "api": [
  {
    "type": "get",
    "url": "/analysis/kinds/:filepath/",
    "title": "Perform kind analysis on a file",
    "name": "KindAnalysis",
    "group": "Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filepath",
            "description": "<p>The path to the file in the user's workspace.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "SessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --header \"SessionID: exampleSessionID\" localhost:3000/analysis/kinds/demo_matlab/testMain.m",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "output",
            "description": "<p>The results of kind analysis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"VAR\":[\n    {\n      \"name\":\"R\",\n      \"position\":\n        {\"startRow\":1,\"startColumn\":2,\"endRow\":1,\"endColumn\":3}\n      },\n    {\n      \"name\":\"M\",\n      \"position\": {startRow\":1,\"startColumn\":15,\"endRow\":1,\"endColumn\":16}\n    }\n  ],\n  \"FUN\":[\n    {\n      \"name\":\"cholesky\",\n      \"position\": {\"startRow\":1,\"startColumn\":6,\"endRow\":1,\"endColumn\":14}\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"Mclab-core failed to do kind analysis on this file. Is this a valid matlab file?\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Analysis"
  },
  {
    "type": "post",
    "url": "/compile/mc2for/",
    "title": "Compile the user's files into Fortran code",
    "name": "Mc2For",
    "group": "Compile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "arg",
            "description": "<p>The arguments for compilation {mlClass, numRows, numCols, realComplex}.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mainFile",
            "description": "<p>The main file (entry point) for compilation.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "SessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "package_path",
            "description": "<p>The path to the resulting archive containing the Fortran files. This can then be downloaded using a serveGen call.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\":\"Failed to compile the code into Fortran.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Compile"
  },
  {
    "type": "post",
    "url": "/compile/mcvmjs/",
    "title": "Compile the user's files into Javascript code",
    "name": "McVM_js",
    "group": "Compile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>The file to be compiled.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "SessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Empty response.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Compile"
  },
  {
    "type": "get",
    "url": "/session/:sessionID/files/download/:filepath/",
    "title": "Download a file inside the user's gen directory",
    "name": "Download",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionID",
            "description": "<p>User's session ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filepath",
            "description": "<p>The path to the file in the user's gen folder.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "data",
            "description": "<p>The requested file.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"Could not find requested file.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/files/filetree/",
    "title": "Get the user's filetree",
    "name": "Filetree",
    "group": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "SessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Note that there is no error possible for this API call. If the user does not exist or has not uploaded files, this call will simply return the empty object, i.e. {}.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --header \"SessionID: exampleSessionID\" localhost:3000/files/filetree/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "filetree",
            "description": "<p>Represents the files and directories inside the user's workspace.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"path\":\"workspace\",\n    \"directories\":[\n        {\"path\":\"workspace/demo_matlab\",\"directories\":[],\n        \"files\":[\"cholesky.m\",\"readme.txt\",\"testIdentity.m\",\"testMain.m\"]\n        }\n    ],\n    \"files\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/files/readfile/:filepath/",
    "title": "Get the content of a user's file",
    "name": "ReadFile",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filepath",
            "description": "<p>The path to the file in the user's workspace.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "SessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --header \"SessionID: exampleSessionID\" localhost:3000/files/readfile/demo_matlab/cholesky.m/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The text of the file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nfunction [R] = cholesky(B)\n  A = testIdentity(B)\n  [m, n] = size(A);\n  R = zeros(m, n);\n  for i = (1 : m)\n    R(i, i) = sqrt((A(i, i) - sum((abs(R((1 : (i - 1)), i)) .^ 2))));\n    for j = ((i + 1) : m)\n      R(i, j) = ((A(i, j) - sum((conj(R((1 : (i - 1)), i)) .* R((1 : (i - 1)), j)))) / R(i, i));\n    end\n  end\nend",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"Failed to read file.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/files/upload/",
    "title": "Upload a archive file",
    "name": "Upload",
    "group": "Files",
    "description": "<p>Stores an archive file and unzips the contents into the workspace of the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Archive",
            "optional": false,
            "field": "files",
            "description": "<p>Archive to upload.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "SessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/newsession/",
    "title": "Create a new session",
    "name": "CreateNewSession",
    "group": "Session",
    "description": "<p>Generates a new sessionID and redirects the user to /session/:sessionID, where they will be provided the HTML.</p>",
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/session/:sessionID/",
    "title": "Homepage",
    "name": "GetHomepage",
    "group": "Session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionID",
            "description": "<p>User's session ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTML",
            "optional": false,
            "field": "index",
            "description": "<p>The index.html file that is the single HTML file for the site.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/shortenURL/:url/",
    "title": "Shorten URL",
    "name": "GetShortenedURL",
    "group": "Session",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL to shorten.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl localhost:3000/shortenURL/www.google.com/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shortenedURL",
            "description": "<p>The shortened URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"shortenedURL\": \"http://goo.gl/fbsS\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Failed to shorten the link.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Session"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Create a new session",
    "name": "RedirectToCreateNewSession",
    "group": "Session",
    "description": "<p>Equivalent to a call to /newsession.</p>",
    "version": "0.0.0",
    "filename": "mcnode/app/route/index.js",
    "groupTitle": "Session"
  }
] });
