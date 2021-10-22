'use strict';
goog.provide("Blockly.Blocks.VisionSensor");
goog.require("Blockly.Blocks");

var VisionSensor_Color = "#EF5411";
var VisionSensor_SetupMode_Color = "#EF5411";
var VisionSensor_RunMode_Color = "#EAA20A";

var sentry = [
  ["SENTRY#0", "0"],
  ["SENTRY#1", "1"],
  ["SENTRY#2", "2"],
  ["SENTRY#3", "3"],
];

// 初始化 SENTRY
Blockly.Blocks["SentryBegin"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "InitType",
          options: [
            ["i2c", "i2c"],
            ["uart1", "uart1"],
            ["uart2", "uart2"],
          ],
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY_BEGIN_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
      helpUrl: "https://morpx-docs.readthedocs.io/zh_CN/latest/",
      tooltip: Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP,
    });
  },
};

// 恢复默认设置
Blockly.Blocks["SentrySetDefault"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      message0: Blockly.Msg.SENTRY_SET_DEFAULT_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

// 算法类型
Blockly.Blocks["SentryVisionType"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "VisionType",
          options: [
            [Blockly.Msg.SENTRY_VISION_COLOR_DETECT, "VISION_COLOR_DETECT"],
            [Blockly.Msg.SENTRY_VISION_COLOR_RECOGNITION, "VISION_COLOR_RECOGNITION"],
            [Blockly.Msg.SENTRY_VISION_BALL, "VISION_BALL_DETECT"],
            [Blockly.Msg.SENTRY_VISION_BODY, "VISION_BODY_DETECT"],
            [Blockly.Msg.SENTRY_VISION_SHAPE_CARD, "VISION_SHAPE_CARD_DETECT"],
            [Blockly.Msg.SENTRY_VISION_TRAFFIC_CARD, "VISION_TRAFFIC_CARD_DETECT"],
            [Blockly.Msg.SENTRY_VISION_NUM_CARD, "VISION_NUM_CARD_DETECT"],
          ],
          type: "field_dropdown",
        },
      ],
      output: "String",
      message0: "%1",
    });
  },
};

// 启用算法
Blockly.Blocks["SentryVisionSetStatus"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "VisionStatus",
          options: [
            [Blockly.Msg.SENTRY_ENABLE, "Begin"],
            [Blockly.Msg.SENTRY_DISABLE, "End"],
          ],
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      message0: Blockly.Msg.SENTRY_VISION_SET_STATUS_MESSAGE0,
      inputsInline: true,
      nextStatement: null,
      previousStatement: null,
    });
  },
};

Blockly.Blocks["SentrySetParamNum"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "max_num",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_PARAMNUM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SetParam"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "max_num",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_SET_PARAM_MESSAGE0,
    });
  },
};

// 设置 LCD
Blockly.Blocks["SentryLcdSetMode"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "lcd_sw",
          options: [
            ["ON", "True"],
            ["OFF", "False"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_LCD_SET_MODE_MESSAGE0,
      inputsInline: true,
    });
  },
};

// 设置 LED
Blockly.Blocks["SentryLedSetColor"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "Number",
          type: "input_value",
          name: "level",
        },
        {
          type: "field_dropdown",
          name: "detected_color",
          options: [
            [Blockly.Msg.SENTRY_LED_CLOSE, "LedClose"],
            [Blockly.Msg.SENTRY_LED_RED, "LedRed"],
            [Blockly.Msg.SENTRY_LED_GREEN, "LedGreen"],
            [Blockly.Msg.SENTRY_LED_YELLOW, "LedYellow"],
            [Blockly.Msg.SENTRY_LED_BLUE, "LedBlue"],
            [Blockly.Msg.SENTRY_LED_PURPLE, "LedPurple"],
            [Blockly.Msg.SENTRY_LED_CYAN, "LedCyan"],
            [Blockly.Msg.SENTRY_LED_WHITE, "LedWhite"],
          ],
        },
        {
          type: "field_dropdown",
          name: "undetected_color",
          options: [
            [Blockly.Msg.SENTRY_LED_CLOSE, "LedClose"],
            [Blockly.Msg.SENTRY_LED_RED, "LedRed"],
            [Blockly.Msg.SENTRY_LED_GREEN, "LedGreen"],
            [Blockly.Msg.SENTRY_LED_YELLOW, "LedYellow"],
            [Blockly.Msg.SENTRY_LED_BLUE, "LedBlue"],
            [Blockly.Msg.SENTRY_LED_PURPLE, "LedPurple"],
            [Blockly.Msg.SENTRY_LED_CYAN, "LedCyan"],
            [Blockly.Msg.SENTRY_LED_WHITE, "LedWhite"],
          ],
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_LED_SET_COLOR_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetZoom"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "ZoomLevel",
          options: [
            [Blockly.Msg.SENTRY_ZOOM_DEFAULT, "ZoomDefault"],
            [Blockly.Msg.SENTRY_ZOOM_1, "Zoom1"],
            [Blockly.Msg.SENTRY_ZOOM_2, "Zoom2"],
            [Blockly.Msg.SENTRY_ZOOM_3, "Zoom3"],
            [Blockly.Msg.SENTRY_ZOOM_4, "Zoom4"],
            [Blockly.Msg.SENTRY_ZOOM_5, "Zoom5"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_ZOOM_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryCameraSetRotate"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "rotate",
          options: [
            ["ON", "True"],
            ["OFF", "False"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_ROTATE_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetAwb"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "awb",
          options: [
            [Blockly.Msg.SENTRY_AUTO, "AutoWhiteBalance"],
            [Blockly.Msg.SENTRY_LOCK_AWB, "LockWhiteBalance"],
            [Blockly.Msg.SENTRY_WHITE_LIGHT, "WhiteLight"],
            [Blockly.Msg.SENTRY_YELLOW_LIGHT, "YellowLight"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_AWB_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetFPS"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "fps",
          options: [
            ["ON", "True"],
            ["OFF", "False"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_FPS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetBrightness"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LevelDefault, "Auto"],
            [Blockly.Msg.SENTRY_Level1, "Level1"],
            [Blockly.Msg.SENTRY_Level2, "Level2"],
            [Blockly.Msg.SENTRY_Level3, "Level3"],
            [Blockly.Msg.SENTRY_Level4, "Level4"],
            [Blockly.Msg.SENTRY_Level5, "Level5"],
            [Blockly.Msg.SENTRY_Level6, "Level6"],
            [Blockly.Msg.SENTRY_Level7, "Level7"],
            [Blockly.Msg.SENTRY_Level8, "Level8"],
            [Blockly.Msg.SENTRY_Level9, "Level9"],
            [Blockly.Msg.SENTRY_Level10, "Level10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetContrast"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LevelDefault, "Auto"],
            [Blockly.Msg.SENTRY_Level1, "Level1"],
            [Blockly.Msg.SENTRY_Level2, "Level2"],
            [Blockly.Msg.SENTRY_Level3, "Level3"],
            [Blockly.Msg.SENTRY_Level4, "Level4"],
            [Blockly.Msg.SENTRY_Level5, "Level5"],
            [Blockly.Msg.SENTRY_Level6, "Level6"],
            [Blockly.Msg.SENTRY_Level7, "Level7"],
            [Blockly.Msg.SENTRY_Level8, "Level8"],
            [Blockly.Msg.SENTRY_Level9, "Level9"],
            [Blockly.Msg.SENTRY_Level10, "Level10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetSaturation"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LevelDefault, "Auto"],
            [Blockly.Msg.SENTRY_Level1, "Level1"],
            [Blockly.Msg.SENTRY_Level2, "Level2"],
            [Blockly.Msg.SENTRY_Level3, "Level3"],
            [Blockly.Msg.SENTRY_Level4, "Level4"],
            [Blockly.Msg.SENTRY_Level5, "Level5"],
            [Blockly.Msg.SENTRY_Level6, "Level6"],
            [Blockly.Msg.SENTRY_Level7, "Level7"],
            [Blockly.Msg.SENTRY_Level8, "Level8"],
            [Blockly.Msg.SENTRY_Level9, "Level9"],
            [Blockly.Msg.SENTRY_Level10, "Level10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_SATURATION_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryCameraSetShaprness"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_SetupMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          name: "level",
          options: [
            [Blockly.Msg.SENTRY_LevelDefault, "Auto"],
            [Blockly.Msg.SENTRY_Level1, "Level1"],
            [Blockly.Msg.SENTRY_Level2, "Level2"],
            [Blockly.Msg.SENTRY_Level3, "Level3"],
            [Blockly.Msg.SENTRY_Level4, "Level4"],
            [Blockly.Msg.SENTRY_Level5, "Level5"],
            [Blockly.Msg.SENTRY_Level6, "Level6"],
            [Blockly.Msg.SENTRY_Level7, "Level7"],
            [Blockly.Msg.SENTRY_Level8, "Level8"],
            [Blockly.Msg.SENTRY_Level9, "Level9"],
            [Blockly.Msg.SENTRY_Level10, "Level10"],
          ],
          type: "field_dropdown",
        },
      ],
      nextStatement: null,
      previousStatement: null,
      message0: Blockly.Msg.SENTRY_CAMERA_SET_SHAPRNESS_MESSAGE0,
      inputsInline: true,
    });
  },
};

Blockly.Blocks["SentryDetected"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTED_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetValue"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_VALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryColorRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_COLORRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryQrRcgValue"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_QRRCGVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryGetQrCodeValue"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_GET_QRCODEVALUE_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryRows"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_ROWS_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryCols"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_COLS_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetectedColor"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTEDCOLOR_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetectedBlob"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTEDBLOB_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetectedCard"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTEDCARD_MESSAGE0,
    });
  },
};

Blockly.Blocks["SentryDetected20Class"] = {
  init: function () {
    this.jsonInit({
      colour: VisionSensor_RunMode_Color,
      args0: [
        {
          name: "sentry",
          options: sentry,
          type: "field_dropdown",
        },
        {
          check: "String",
          type: "input_value",
          name: "VisionType",
        },
        {
          check: "Number",
          type: "input_value",
          name: "objid",
        },
      ],
      output: null,
      inputsInline: true,
      message0: Blockly.Msg.SENTRY_DETECTED20CLASS_MESSAGE0,
    });
  },
};