var APP_DATA = {
  "scenes": [
    {
      "id": "0-ira",
      "name": "IRA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07363652875793392,
          "pitch": -0.14265411260175753,
          "rotation": 0,
          "target": "1-ansiedad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ansiedad",
      "name": "ANSIEDAD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1258234907998688,
          "pitch": -0.032154619849114496,
          "rotation": 0,
          "target": "0-ira"
        },
        {
          "yaw": 0.041794700582132194,
          "pitch": -0.101916466213396,
          "rotation": 0,
          "target": "2-alegra-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-alegra-",
      "name": "ALEGRÍA ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.055717844795664107,
          "pitch": -0.09679959282646422,
          "rotation": 0,
          "target": "3-amor"
        },
        {
          "yaw": 3.1052849541492584,
          "pitch": -0.054032024529288236,
          "rotation": 0,
          "target": "1-ansiedad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-amor",
      "name": "AMOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9550543552560864,
          "pitch": 0.21860379697464083,
          "rotation": 0,
          "target": "2-alegra-"
        },
        {
          "yaw": 2.637899770341866,
          "pitch": 0.12283115797715638,
          "rotation": 0,
          "target": "4-calma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-calma",
      "name": "CALMA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.84507093588795,
          "pitch": 0.12075764208043438,
          "rotation": 0,
          "target": "3-amor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
